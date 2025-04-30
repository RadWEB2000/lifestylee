import Link from "next/link";
import { HiSlash } from "react-icons/hi2";

export default function BlogPage() {
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
        </>
    )
}