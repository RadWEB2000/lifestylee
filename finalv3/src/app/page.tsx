import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return <>
    <header className="bg-[#FFC017] flex items-center justify-center w-full min-h-[55vh] py-2">
      <div className="container flex flex-col mx-auto self-center">
        <h1 className="text-8xl font-serif font-black">LifeeStylee</h1>
        <p className="text-base text-balance leading-6 max-w-[75ch] mt-2">
          Lorem, ipsum dolor sit <b>jsdfmodsk</b>amet consectetur adipisicing elit. Natus rem aliquam temporibus itaque esse molestias impedit consequuntur tenetur, necessitatibus repellendus aliquid quam? Et rem quia molestias dicta nemo? Perferendis, expedita!
        </p>
      </div>
    </header >
    <div className="flex justify-center py-8 w-full bg-blue-400 ">
      <div className="container px-4 mx-auto bg-red-300">
        <h2 className="font-black text-4xl">LifeeStylee poleca</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-4">
          <Link className="block w-full border-1 border-stone-200 duration-150 linear py-4 rounded-xl focus:border-stone-600 hover:border-stone-600" href='#'>
            <h3 className="font-bold line-clamp-2 text-balance text-xl" >The 8 Most Important PPC KPIs You Should Be Tracking PPC KPIs You Should Be Tracking</h3>
            <time className="uppercase text-xs" dateTime="Sat Mar 15 2025 17:48:53 GMT+0100 (Central European Standard Time)">15 mar 2025</time>
          </Link>
        </ul>
      </div>
    </div>
    <div className="container mx-auto my-2 grid grid-cols-12">
      <div className="bg-green-200 col-span-2">ads</div>
      <main className="bg-yellow-300 col-span-8">content</main>
      <div className="col-span-2 bg-red-300">ads</div>
    </div>
  </>;
}
