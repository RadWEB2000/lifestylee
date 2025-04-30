import FAQ from "@/components/Utils/FAQ/FAQ";
import GET_POST_PAGE from "@/data/queries/GET_POST_PAGE";
import moment from "moment-timezone";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiSlash } from "react-icons/hi2";
import "moment/locale/pl";
import { FaCalendarAlt } from "react-icons/fa";
import { RegularPostCard } from "@/components/Utils/Cards";
import "@/css/Post.css"
type postPage = {
    params: Promise<{
        category: string;
        subcategory: string;
        post: string;
    }>
}

export async function generateMetadata({ params }: postPage): Promise<Metadata> {
    const segments = await params;
    const { seo: { metaDescription, metaTitle, openGraphDescription, openGraphTitle }, date, tags, image, uri } = await GET_POST_PAGE(`/${segments.category}/${segments.subcategory}/${segments.post}`);
    return {
        title: metaTitle,
        description: metaDescription,
        openGraph: {
            title: openGraphTitle,
            description: openGraphDescription,
            type: 'article',
            alternateLocale: 'pl_PL',
            countryName: 'Poland',
            images: image.src,
            modifiedTime: date,
            publishedTime: date,
            tags: tags.map((item) => item.name),
            siteName: 'LifeeStylee',
            url: `https://lifeestylee.pl/${uri}`,
        },
        twitter: {
            site: 'LifeeStylee',
            title: openGraphTitle,
            description: openGraphDescription,
        },
        applicationName: 'LifeeStylee',
        robots: {
            index: true,
            follow: true,
            "max-image-preview": "standard",
        }
    }
}

export default async function PostPage({ params }: postPage) {
    const segments = await params;
    const { blocks, categories, content, date, entry, excerpt, familiarPosts, faq, image, tags, title, uri } = await GET_POST_PAGE(`/${segments.category}/${segments.subcategory}/${segments.post}`);
    function getSubcategory() {
        if (categories[0].uri.split('/').length > categories[1].uri.split('/').length) {
            return categories[0]
        } else {
            return categories[1]
        }
    }
    function getCategory() {
        if (categories[0].uri.split('/').length < categories[1].uri.split('/').length) {
            return categories[0]
        } else {
            return categories[1]
        }
    }
    return (
        <>
            <header className="" >
                <div className="bg-[#FFC017] min-h-[50vh] flex items-center justify-center">
                    <div className="container w-[875px] max-w-[95vw] bg-green-800/0 mx-auto py-8">
                        <ul className="bg-aqua-200 flex flex-row flex-wrap items-center mb-5 justify-start gap-0.5">
                            <Link className="uppercase duration-200 linear font-bold text-sm px-2 py-1 rounded-lg cursor-pointer hover:bg-stone-900 hover:text-white focus:bg-stone-900 focus:text-white" href='/'>
                                Start
                            </Link>
                            <i>
                                <HiSlash />
                            </i>
                            <Link className="uppercase duration-200 linear font-bold text-sm px-2 py-1 rounded-lg cursor-pointer hover:bg-stone-900 hover:text-white focus:bg-stone-900 focus:text-white" href={getCategory().uri}>
                                {getCategory().name}
                            </Link>
                            <i>
                                <HiSlash />
                            </i>
                            <Link className="uppercase duration-200 linear font-bold text-sm px-2 py-1 rounded-lg cursor-pointer hover:bg-stone-900 hover:text-white focus:bg-stone-900 focus:text-white" href={getSubcategory().uri}>
                                {getSubcategory().name}
                            </Link>
                            <i>
                                <HiSlash />
                            </i>
                            <Link className="uppercase duration-200 linear font-bold text-sm px-2 py-1 rounded-lg cursor-pointer hover:bg-stone-900 hover:text-white focus:bg-stone-900 focus:text-white" href={uri}>
                                {title}
                            </Link>
                        </ul>
                        <h1 className="text-7xl font-bold text-balance" >{title}</h1>
                        <p className="text-md max-w-[95ch] text-pretty leading-9 mt-6">{entry}</p>
                        <p className="text-sm mt-2 flex items-center flex-start gap-1 font-extrabold">
                            <i><FaCalendarAlt /></i>
                            <span>{moment(date).format('DD MMMM YYYY')}</span>
                        </p>
                    </div>
                </div>
                <figure className="after:content-[''] after:w-screen after:h-1/2 after:bg-[#FFC017] relative after:absolute after:top-0 after:z-[-1] pt-2">
                    <Image
                        alt={image.alt}
                        loading="eager"
                        className="mx-auto isolate bottom-[50px] container w-[875px] max-w-[95vw] rounded-2xl shadow-xl"
                        priority
                        height={450}
                        width={720}
                        src={image.src}
                        title={image.title}
                        quality={85}
                    />
                </figure>
            </header>
            <main className="w-[775px] max-w-[95vw] prose mx-auto my-8" >
                <article dangerouslySetInnerHTML={{ __html: content }} />
            </main>
            <aside className="flex flex-wrap flex-row gap-2 w-[775px] max-w-[95vw] mx-auto my-3 border-t-2 border-stone-900/10 pt-2 px-2">
                {
                    tags.map(({ name, uri }) => {
                        return (
                            <Link className="block py-1 px-2 duration-150 linear bg-stone-100 rounded-md text-md focus:bg-[#FFC017] hover:bg-[#FFC017]" href={uri} >
                                {name}
                            </Link>
                        )
                    })
                }
            </aside>
            <div className="w-[775px] max-w-[95vw] mx-auto my-8">
                <FAQ
                    title="Pytania i odpowiedzi"
                    questions={faq}
                />
            </div>
            {
                familiarPosts &&
                <ul className="mx-auto my-3 w-[1175px] max-w-[95vw] grid grid-cols-4 gap-5 items-start">
                    {
                        familiarPosts.map((item) => {
                            return (
                                <RegularPostCard
                                    {...item}
                                    key={item.title}
                                />
                            )
                        })
                    }
                </ul>
            }
        </>
    )
}