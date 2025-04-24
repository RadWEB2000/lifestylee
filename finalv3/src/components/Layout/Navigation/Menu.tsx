"use client";
import { MenuDropdown, MenuItem } from "@/nav/index";
import { useContext } from "react";
import { MenuContext } from "@/context";

type menu = {
  menu: Array<{
    label: string;
    uri: string;
    submenu: Array<{
      label: string;
      uri: string;
    }> | null;
  }>;
};

export default function Menu({ menu }: menu) {
  const { open } = useContext(MenuContext);

  const styles = {
    wrapper: `
    col-span-full overflow-y-hidden text-white w-full 
    ${open ? 'block opacity-[1] visible lg:overflow-y-visible' : 'hidden opacity-[0] invisible lg:block lg:opacity-[1] lg:overflow-y-visible lg:visible'} 
    `,
    container: `
    flex flex-col max-h-full mx-auto mt-2 overflow-y-scroll py-4 px-3 space-y-3 text-black w-[95%] 
    ${open ? 'max-h-full lg:h-full' : 'h-[0] lg:h-full'} 
    md:space-y-5 md:overflow-y-visible
    lg:mt-0
    lg:flex-row lg:flex-nowrap lg:gap-1 lg:items-center lg:justify-center lg:overflow-y-visible lg:px-2 lg:space-y-0 lg:w-full lg:align-middle lg:self-center`
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        {menu.map((item) => {
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
        {/* <span className="hidden" /> */}
      </ul>
    </div>
  );
}
