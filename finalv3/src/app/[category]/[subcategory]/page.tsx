import { RegularPostCard } from "@/components/Utils/Cards";
import GET_CATEGORY_PAGE from "@/data/queries/GET_CATEGORY_PAGE";
import Link from "next/link";
import { HiSlash } from "react-icons/hi2";

type categoryPage = {
    params: Promise<{
        category: string;
        subcategory: string;
    }>
}

export default async function CategoryPage({params}:categoryPage) {

    const path = await params
    const {content,entry,excerpt,name,uri,count,subcategories, posts} = await GET_CATEGORY_PAGE(`${path.category}/${path.subcategory}`);

    return (
        <>
            <header className="bg-[#FFC017] py-15 px-12" >
                <ul className="bg-aqua-200 flex flex-row items-center mb-5 justify-start gap-0.5">
                    <Link className="uppercase duration-200 linear font-bold text-sm px-2 py-1 rounded-lg cursor-pointer hover:bg-stone-900 hover:text-white focus:bg-stone-900 focus:text-white" href='#'>
                        Start
                    </Link>
                    <i>
                        <HiSlash />
                    </i>
                    <Link className="uppercase duration-200 linear font-bold text-sm px-2 py-1 rounded-lg cursor-pointer hover:bg-stone-900 hover:text-white focus:bg-stone-900 focus:text-white" href={path.category}>
                        {path.category}
                    </Link>
                    <i>
                        <HiSlash />
                    </i>
                    <Link className="uppercase duration-200 linear font-bold text-sm px-2 py-1 rounded-lg cursor-pointer hover:bg-stone-900 hover:text-white focus:bg-stone-900 focus:text-white" href={uri}>
                        {name}
                    </Link>
                </ul>
                <h1 className="text-9xl font-bold leading-32" >{name}</h1>
                <p className="text-lg max-w-[85ch] text-pretty mt-6">L{excerpt}</p>
                {
                    subcategories &&
                    <ul className="flex flex-wrap items-center justify-start gap-2 mt-8">
                        {
                            subcategories.map((item) => {
                                return (
                                    <Link className="border-2 border-stone-700 font-bold uppercase font-md duration-200 linear hover:bg-stone-300/80 focus:bg-stone-300/80 px-3 py-0.5 rounded-xl" href={item.uri}>{item.name}</Link>
                                )
                            })
                        }
                    </ul>
                }
            </header>
            <main>
                {
                    posts &&
                <ul className="grid grid-cols-4 container gap-4 mx-auto my-4" >
                    {
                        posts.map((item) => {
                            return (
                                <RegularPostCard
                                    categories={item.categories}
                                    date={item.date}
                                    excerpt={item.excerpt}
                                    image={item.image }
                                    title={item.title}
                                    key={item.title}
                                    uri={item.uri}
                                />
                            )
                        })
                    }
                </ul>
                }
                <article className="prose mx-auto my-2 w-[775px] max-w-[95vw]" dangerouslySetInnerHTML={{__html:content}} />
            </main>
        </>
    )
}