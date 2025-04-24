"use client";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { MenuButton } from "@/buttons/index";
import { useContext } from "react";
import { MenuContext } from "@/context";
import { Menu } from "@/nav/index";

type navigation = {
  menu: Array<{
    label: string;
    uri: string;
    submenu: Array<{
      label: string;
      uri: string;
    }> | null;
  }>;
};

export default function Navigation({ menu }: navigation) {
  const { open } = useContext(MenuContext);

  const styles = {
    wrapper: `bg-stone-50 duration-300 ease-in-out overflow-hidden px-2 sticky transition-[height] top-0 w-screen z-[99] 
    ${open ? 'h-screen lg:h-full' : 'h-[4rem]'}
    lg:overflow-visible`,
    container: `container grid grid-cols-5 grid-rows-[4rem_1fr] h-screen mx-auto
    lg:flex lg:h-full lg:container`,
    brand: `col-span-3 row-[1] flex font-black font-serif items-center justify-start px-1 text-center text-xl 
    md:col-span-2 
    lg:text-2xl lg:px-1`,
    search: `cursor-pointer duration-200 ease-in-out flex items-center justify-center h-10 rounded-md w-10 focus:bg-[#FFC017] hover:bg-[#FFC017] lg:mx-auto`,
    searchIcon: "h-6 w-6",
    settings: `col-span-2 flex flex-row items-center justify-end px-1 row-[1] space-x-2
    md:col-span-3 
    lg:px-1 lg:justify-center lg:items-center`
  };

  return (
    <header className={styles.wrapper}>
      <nav className={styles.container}>
        <Link className={styles.brand} href="/" hrefLang="pl_Pl">
          LifeeStylee
        </Link>
        <Menu menu={menu} />
        <div className={styles.settings}>
          <Link className={styles.search} href="/search" hrefLang="pl_PL">
            <BsSearch className={styles.searchIcon} />
          </Link>
          <MenuButton />
        </div>
      </nav>
    </header>
  );
}
