import { RegularPostCard } from "@/components/Utils/Cards";
import GET_BLOG_PAGE from "@/data/queries/GET_BLOG_PAGE";
import Link from "next/link";
import { HiSlash } from "react-icons/hi2";

export default async function BlogPage() {
    const { posts } = await GET_BLOG_PAGE()
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
                    <Link className="uppercase duration-200 linear font-bold text-sm px-2 py-1 rounded-lg cursor-pointer hover:bg-stone-900 hover:text-white focus:bg-stone-900 focus:text-white" href='#'>
                        Zdrowie
                    </Link>
                    <i>
                        <HiSlash />
                    </i>
                    <Link className="uppercase duration-200 linear font-bold text-sm px-2 py-1 rounded-lg cursor-pointer hover:bg-stone-900 hover:text-white focus:bg-stone-900 focus:text-white" href='#'>
                        Profilaktyka
                    </Link>
                </ul>
                <h1 className="text-9xl font-bold leading-32" >Kategoria</h1>
                <p className="text-lg max-w-[85ch] text-pretty mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at quas, similique natus numquam neque earum velit iusto cum voluptatibus alias. Veritatis tempore consequatur modi, quidem maxime cupiditate repudiandae aliquam.</p>
            </header>
            <main className="w-[1075px] max-w-[95vw] mx-auto my-8">
                <ul className="grid grid-cols-3 gap-2">
                    {
                        posts.map((item) => {
                            return (
                                <RegularPostCard
                                    {...item}
                                    key={item.title}
                                />
                            )
                        })
                    }
                </ul>
            </main>
        </>
    )
}