import Image from "next/image";

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
    <div className="container mx-auto my-2 grid grid-cols-12">
      <div className="bg-green-200 col-span-3">ads</div>
      <main className="bg-yellow-300 col-span-6">content</main>
      <div className="col-span-3 bg-red-300">ads</div>
    </div>
  </>;
}
