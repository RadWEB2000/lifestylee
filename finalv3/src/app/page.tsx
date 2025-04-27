import { RegularPostCard } from "@/components/Utils/Cards";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return <>
    <header className="bg-[#FFC017] flex items-center justify-center w-full min-h-[55vh] py-2">
      <div className="container flex flex-col mx-auto self-center">
        <h1 className="text-5xl font-serif font-black lg:text-[75px]">LifeeStylee</h1>
        <p className="text-xs text-balance leading-6 max-w-[75ch] mt-2 lg:text-xl">
          Lorem, ipsum dolor sit <b>jsdfmodsk</b>amet consectetur adipisicing elit. Natus rem aliquam temporibus itaque esse molestias impedit consequuntur tenetur, necessitatibus repellendus aliquid quam? Et rem quia molestias dicta nemo? Perferendis, expedita!
        </p>
      </div>
    </header >
    <div className="flex border-t-2 border-b-2 border-stone-600 justify-center py-8 w-full">
      <div className="container px-4 mx-auto">
        <h2 className="font-black text-2xl">LifeeStylee poleca</h2>
        <ul className="grid grid-cols-1 py-1 mt-5 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Link className="block w-full border-1 border-stone-200 duration-150 linear p-2 rounded-xl h-full w-full focus:border-stone-600 hover:border-stone-600" href='#'>
            <h3 className="font-bold line-clamp-3 text-pretty text-start text-base" >The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking</h3>
            <time className="uppercase text-xs" dateTime="Sat Mar 15 2025 17:48:53 GMT+0100 (Central European Standard Time)">15 mar 2025</time>
          </Link>
          <Link className="block w-full border-1 border-stone-200 duration-150 linear p-2 rounded-xl h-full w-full focus:border-stone-600 hover:border-stone-600" href='#'>
            <h3 className="font-bold line-clamp-3 text-pretty text-start text-base" >The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking</h3>
            <time className="uppercase text-xs" dateTime="Sat Mar 15 2025 17:48:53 GMT+0100 (Central European Standard Time)">15 mar 2025</time>
          </Link>
          <Link className="block w-full border-1 border-stone-200 duration-150 linear p-2 rounded-xl h-full w-full focus:border-stone-600 hover:border-stone-600" href='#'>
            <h3 className="font-bold line-clamp-3 text-pretty text-start text-base" >The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking</h3>
            <time className="uppercase text-xs" dateTime="Sat Mar 15 2025 17:48:53 GMT+0100 (Central European Standard Time)">15 mar 2025</time>
          </Link>
          <Link className="block w-full border-1 border-stone-200 duration-150 linear p-2 rounded-xl h-full w-full focus:border-stone-600 hover:border-stone-600" href='#'>
            <h3 className="font-bold line-clamp-3 text-pretty text-start text-base" >The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking</h3>
            <time className="uppercase text-xs" dateTime="Sat Mar 15 2025 17:48:53 GMT+0100 (Central European Standard Time)">15 mar 2025</time>
          </Link>
          <Link className="block w-full border-1 border-stone-200 duration-150 linear p-2 rounded-xl h-full w-full focus:border-stone-600 hover:border-stone-600" href='#'>
            <h3 className="font-bold line-clamp-3 text-pretty text-start text-base" >The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking</h3>
            <time className="uppercase text-xs" dateTime="Sat Mar 15 2025 17:48:53 GMT+0100 (Central European Standard Time)">15 mar 2025</time>
          </Link>
          <Link className="block w-full border-1 border-stone-200 duration-150 linear p-2 rounded-xl h-full w-full focus:border-stone-600 hover:border-stone-600" href='#'>
            <h3 className="font-bold line-clamp-3 text-pretty text-start text-base" >The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking</h3>
            <time className="uppercase text-xs" dateTime="Sat Mar 15 2025 17:48:53 GMT+0100 (Central European Standard Time)">15 mar 2025</time>
          </Link>
          <Link className="block w-full border-1 border-stone-200 duration-150 linear p-2 rounded-xl h-full w-full focus:border-stone-600 hover:border-stone-600" href='#'>
            <h3 className="font-bold line-clamp-3 text-pretty text-start text-base" >The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking</h3>
            <time className="uppercase text-xs" dateTime="Sat Mar 15 2025 17:48:53 GMT+0100 (Central European Standard Time)">15 mar 2025</time>
          </Link>
          <Link className="block w-full border-1 border-stone-200 duration-150 linear p-2 rounded-xl h-full w-full focus:border-stone-600 hover:border-stone-600" href='#'>
            <h3 className="font-bold line-clamp-3 text-pretty text-start text-base" >The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking</h3>
            <time className="uppercase text-xs" dateTime="Sat Mar 15 2025 17:48:53 GMT+0100 (Central European Standard Time)">15 mar 2025</time>
          </Link>
        </ul>
      </div>
    </div>
    <div className="container mx-auto my-2 md:grid grid-cols-10">
      <main className="bg-yellow-300/0 flex flex-col space-y-8 col-span-8 p-4 xl:col-span-7">
        <section>
          <h2 className="font-black text-2xl lg:text-5xl">Zdrowie</h2>
          <p className="text-pretty mt-1.5 leading-6 max-w-[85ch]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quia perferendis quos quas soluta magnam officiis ducimus voluptatem ratione consequatur neque aspernatur, ipsam molestias voluptas laudantium sint, distinctio eveniet! Quo?</p>
          <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-9" >
            <RegularPostCard/>
            <RegularPostCard/>
            <RegularPostCard/>
            <RegularPostCard/>
            <RegularPostCard/>
            <RegularPostCard/>
          </ul>
        </section>
        <section>
          <h2 className="font-black text-2xl lg:text-5xl">Zdrowie</h2>
          <p className="text-pretty mt-1.5 leading-6 max-w-[85ch]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quia perferendis quos quas soluta magnam officiis ducimus voluptatem ratione consequatur neque aspernatur, ipsam molestias voluptas laudantium sint, distinctio eveniet! Quo?</p>
          <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-9" >
            <RegularPostCard/>
            <RegularPostCard/>
            <RegularPostCard/>
            <RegularPostCard/>
            <RegularPostCard/>
            <RegularPostCard/>
          </ul>
        </section>
        <section>
          <h2 className="font-black text-2xl lg:text-5xl">Zdrowie</h2>
          <p className="text-pretty mt-1.5 leading-6 max-w-[85ch]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quia perferendis quos quas soluta magnam officiis ducimus voluptatem ratione consequatur neque aspernatur, ipsam molestias voluptas laudantium sint, distinctio eveniet! Quo?</p>
          <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-9" >
            <RegularPostCard/>
            <RegularPostCard/>
            <RegularPostCard/>
            <RegularPostCard/>
            <RegularPostCard/>
            <RegularPostCard/>
          </ul>
        </section>
      </main>
      <aside className="col-span-2 xl:col-span-3 bg-red-300/0">
        <section className="border-2 border-stone-700/15 p-4 rounded-xl">
          <h3 className="text-lg font-semibold text-stone-600 mb-1 5">Najpopularniejsze tematy</h3>
          <ul className="bg-lime-500/5 flex flex-row flex-wrap gap-1">
            <Link className="block py-1 px-2 duration-150 linear bg-stone-100 rounded-md text-md focus:bg-[#FFC017] hover:bg-[#FFC017]" href="" >
              kwas hialuronowy
            </Link>
            <Link className="block py-1 px-2 duration-150 linear bg-stone-100 rounded-md text-md focus:bg-[#FFC017] hover:bg-[#FFC017]" href="" >
              kwas hialuronowy
            </Link>
            <Link className="block py-1 px-2 duration-150 linear bg-stone-100 rounded-md text-md focus:bg-[#FFC017] hover:bg-[#FFC017]" href="" >
              kwas hialuronowy
            </Link>
            <Link className="block py-1 px-2 duration-150 linear bg-stone-100 rounded-md text-md focus:bg-[#FFC017] hover:bg-[#FFC017]" href="" >
              kwas hialuronowy
            </Link>
            <Link className="block py-1 px-2 duration-150 linear bg-stone-100 rounded-md text-md focus:bg-[#FFC017] hover:bg-[#FFC017]" href="" >
              kwas hialuronowy
            </Link>
          </ul>
        </section>
      </aside>
    </div>
  </>;
}
