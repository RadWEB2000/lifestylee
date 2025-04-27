import Image from "next/image";
import Link from "next/link";

export default function RegularPostCard(){
    return (
        <li>
            <Image alt="" className="block relative w-full aspect-[16/10] rounded-lg" src="https://images.pexels.com/photos/31786561/pexels-photo-31786561.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" loading="lazy" height={500} title="" width={750} quality={45} />
            <h3 className="text-md  duration-150 linear font-bold mt-1 focus:text-amber-300 hover:text-amber-300 " ><Link href='#'>Winning The Link Game: How To Create & Pitch Content That Attracts Incredible Links [Webinar]</Link></h3>
            <p className="text-sm line-clamp-3 text-sm my-1" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nesciunt ipsa, fuga, quas mollitia, iste sint quisquam necessitatibus vel quasi repellat laboriosam in reiciendis debitis? Perspiciatis sint odit quibusdam error.</p>
            <footer className="grid grid-cols-3 text-xs border-t-1 border-stone-800/40 p-1 items-center" >
                <time className="col-span-1" dateTime="">25 lip 2025</time>
                <div className="col-span-2 flex items-center justify-end space-x-2 bg-lime-400/0">
                    <Link className="px-3 py-1 duration-75 linear bg-stone-200/50 font-semibold rounded-lg foucs:bg-stone-300 hover:bg-stone-300" href=''>
                        Zdrowie
                    </Link> 
                    <Link className="px-3 duration-75 linear py-1 border-1 border-stone-400/50 font-semibold rounded-lg foucs:border-stone-600 hover:border-stone-600" href=''>
                        Profilaktyka
                    </Link> 
                </div>
            </footer>
        </li>
    )
}