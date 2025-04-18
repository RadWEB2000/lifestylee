import Link from "next/link";
import { MenuDropdown, MenuItem } from "@/layout/Navigation";
import { BsSearch } from "react-icons/bs";

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

export default function Navigation(props: navigation) {
  return (
    <header className="border-b border-black sticky top-0 bg-white z-10">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link
          href="/"
          hrefLang="pl_Pl"
          className="text-2xl font-serif font-bold"
        >
          LifeeStylee
        </Link>
        <menu className="hidden md:flex items-center space-x-6">
          {props.menu.map((item) => {
            if (item.submenu !== null && item.submenu.length > 1) {
              return (
                <MenuDropdown
                  {...item}
                  key={item.label}
                  submenu={item!.submenu}
                />
              );
            } else {
              return (
                <MenuItem
                  key={item.label}
                  label={item.label}
                  uri={item.uri}
                  variant="primary"
                />
              );
            }
          })}
        </menu>
        <div className="flex flex-row items-center space-x-2">
          <Link
            className=" border-2 border-slate-500 h-10 w-10 rounded-md flex items-center justify-center hover:bg-slate-100 focus:bg-slate-100 duration-150 ease-linear"
            href="/search"
            hrefLang="pl_PL"
          >
            <BsSearch className="h-5 w-5 text-slate-900 " />
          </Link>
          <button className="flex flex-col items-stretch place-center p-1 border-2 border-slate-500 h-10 w-10 rounded-md">
            <span className="w-full block h-[4px] bg-slate-950 rounded-md" />
            <span className="w-full block h-[4px] bg-slate-950 rounded-md" />
            <span className="w-full block h-[4px] bg-slate-950 rounded-md" />
          </button>
        </div>
      </nav>
    </header>
  );
}
