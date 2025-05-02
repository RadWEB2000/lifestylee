import { RegularPostCard } from "@/components/Utils/Cards";
import GET_BLOG_PAGE from "@/data/queries/GET_BLOG_PAGE";
import Link from "next/link";
import { HiSlash } from "react-icons/hi2";
import Pagination from "@/components/Utils/Pagination/Pagination";

// type Props = {
//     searchParams: Record<string, string | string[] | undefined>;
// };

export default async function BlogPage({
    searchParams,
  }: {
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
    const pageParam = searchParams?.page;
    const currentPage = parseInt(
      Array.isArray(pageParam) ? pageParam[0] : pageParam ?? "1",
      10
    );
    const { posts, postsCount } = await GET_BLOG_PAGE(currentPage, 15);
    return (
        <>
            <header className="bg-[#FFC017] py-15 px-12" >
            <div className="container w-[875px] max-w-[95vw] bg-green-800/0 mx-auto py-8">

                <ul className="bg-aqua-200 flex flex-row items-center mb-5 justify-start gap-0.5">
                    <Link className="uppercase duration-200 linear font-bold text-sm px-2 py-1 rounded-lg cursor-pointer hover:bg-stone-900 hover:text-white focus:bg-stone-900 focus:text-white" href='#'>
                        Start
                    </Link>
                    <i>
                        <HiSlash />
                    </i>
                    <Link className="uppercase duration-200 linear font-bold text-sm px-2 py-1 rounded-lg cursor-pointer hover:bg-stone-900 hover:text-white focus:bg-stone-900 focus:text-white" href='/blog'>
                        Blog
                    </Link>
                </ul>
                <h1 className="text-9xl font-bold leading-32" >Blog</h1>
                <p className="text-lg max-w-[85ch] text-pretty mt-6"></p>
                </div>
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
            <Pagination
                currentPage={currentPage}
                totalPages={Math.max(1, Math.ceil(postsCount / 15))}
                basePath="/blog"
            />
        </>
    )
}