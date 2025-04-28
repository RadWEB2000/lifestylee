import Image from "next/image";
import Link from "next/link";

type regularPostCard = {
    categories: Array<{
        name: string;
        uri: string;
    }>;
    title: string;
    excerpt: string;
    date: string;
    uri: string;
    image: {
        alt: string;
        src: string;
        title: string;
    };
}

export default function RegularPostCard({ categories, date, excerpt, image, title, uri }: regularPostCard) {



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

    getSubcategory();
    getCategory()

    console.log('category', getCategory())
    console.log('subcategory', getSubcategory())


    return (
        <li className="flex flex-col">
            <Image alt={image.alt} className="block relative w-full aspect-[16/10] rounded-lg" src={image.src} loading="lazy" height={500} title={image.title} width={750} quality={45} />
            <h3 className="text-lg  duration-150 linear font-bold mt-1 focus:text-amber-300 hover:text-amber-300 " ><Link href={uri}>{title}</Link></h3>
            <p className="text-sm line-clamp-3 my-1" >{excerpt}</p>
            <footer className="md:grid grid-cols-3 text-xs border-t-1 border-stone-800/40 p-1 items-center mt-auto mb-0" >
                <time className=" block col-span-1 text-center w-full md:text-start" dateTime="">25 lip 2025</time>
                <div className="col-span-2 flex flex-wrap text-center items-center justify-center md:justify-end space-x-2">
                    <Link className="px-3 py-1 duration-75 linear bg-stone-200/50 font-semibold rounded-lg foucs:bg-stone-300 hover:bg-stone-300" href={getSubcategory().uri} hrefLang="pl_PL">
                        {getSubcategory().name}
                    </Link>
                    <Link className="px-3 duration-75 linear py-1 border-1 border-stone-400/50 font-semibold rounded-lg foucs:border-stone-600 hover:border-stone-600" href={getCategory().uri} hrefLang="pl_PL">
                        {getCategory().name}
                    </Link>
                </div>
            </footer>
        </li>
    )
}