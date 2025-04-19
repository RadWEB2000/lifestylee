"use client";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { MenuButton } from "@/buttons/index";
// import { useContext } from "react";
// import { MenuContext } from "@/context";
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
  // const { open } = useContext(MenuContext);

  const styles = {
    wrapper: `w-screen bg-green-700 px-2 sticky top-0 z-99`,
    container: `bg-red-400 container grid grid-cols-5 grid-rows-[4rem_1fr] h-screen`,
    brand: `bg-amber-300 col-span-3 row-[1] flex font-black font-serif items-center justify-start px-1 text-lg`,
    search: `bg-yellow-500 cursor-pointer flex items-center justify-center h-10 rounded-sm w-10`,
    searchIcon: "bg-white h-7 w-7",
    settings: `bg-lime-300 col-span-2 flex flex-row items-center justify-end px-1 row-[1]`
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
