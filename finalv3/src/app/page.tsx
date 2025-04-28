import { RegularPostCard } from "@/components/Utils/Cards";
import GET_HOME_PAGE from "@/data/queries/GET_HOME_PAGE";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const { page, sponsors, topics } = await GET_HOME_PAGE()
  return <>
    <header className="bg-[#FFC017] flex items-center justify-center w-full min-h-[55vh] py-2">
      <div className="container flex flex-col mx-auto self-center">
        <h1 className="text-5xl font-serif font-black lg:text-[75px]">{page.title}</h1>
        <p className="text-xs text-balance leading-6 max-w-[75ch] mt-2 lg:text-xl" dangerouslySetInnerHTML={{ __html: page.excerpt }} />
      </div>
    </header >
    <div className="flex border-t-2 border-b-2 border-stone-600 justify-center py-8 w-full">
      <div className="container px-4 mx-auto">
        <h2 className="font-black text-2xl">{sponsors.title}</h2>
        <ul className="grid grid-cols-1 py-1 mt-5 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            sponsors.posts.map((item) => {
              return (
                <Link className="block w-full border-1 border-stone-200 duration-150 linear p-2 rounded-xl h-full focus:border-stone-600 hover:border-stone-600" href='#'>
                  <h3 className="font-bold line-clamp-3 text-pretty text-start text-base" >{item.title}</h3>
                  <time className="uppercase text-xs" dateTime={item.date}>15 mar 2025</time>
                </Link>
              )
            })
          }
        </ul>
      </div>
    </div>
    <div className="container mx-auto my-2 md:grid grid-cols-10">
      <main className="bg-yellow-300/0 flex flex-col space-y-8 col-span-8 p-4 xl:col-span-7">
        {
          page.categories.map((item) => {
            return (
              <section>
                <h2 className="font-black text-2xl lg:text-5xl">{item.title}</h2>
                {
                  item.excerpt &&
                  <p className="text-pretty mt-1.5 leading-6 max-w-[85ch]">{item.excerpt}</p>
                }
                <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-9" >
                  {
                    item.posts.map((item) => {
                      return (
                        <RegularPostCard
                          categories={item.categories}
                          date={item.date}
                          uri={item.uri}
                          excerpt={`${item.excerpt}`}
                          image={item.image}
                          title={item.title}
                          key={`${item.title}-${item.categories[1]}-${item.categories[0]}`}
                        />
                      )
                    })
                  }
                </ul>
              </section>
            )
          })
        }


      </main>
      <aside className="col-span-2 xl:col-span-3 bg-red-300/0">
        <section className="border-2 border-stone-700/15 p-4 rounded-xl mx-auto">
          <h3 className="text-lg font-semibold text-stone-600 mb-1 5">{topics.title}</h3>
          <ul className="bg-lime-500/0 flex flex-row flex-wrap mt-3 gap-1">
            {
              topics.list.map((item) => {
                return (
                  <Link className="block py-1 px-2 duration-150 linear bg-stone-100 rounded-md text-md focus:bg-[#FFC017] hover:bg-[#FFC017]" href="" >
                    {item.name}
                  </Link>
                )
              })
            }
          </ul>
        </section>
      </aside>
    </div>
  </>;
}
