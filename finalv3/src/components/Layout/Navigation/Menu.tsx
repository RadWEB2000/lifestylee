"use client";
import { MenuDropdown, MenuItem } from "@/nav/index";
// import { useContext } from "react";
// import { MenuContext } from "@/context";

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
  // const { open } = useContext(MenuContext);

  const styles = {
    wrapper: `col-span-full overflow-hidden w-full`,
    container: `flex flex-col max-h-full mx-auto mt-2 overflow-scroll py-4 px-3 space-y-3 w-[95%]`
  };

  return (
    <div className={styles.wrapper}>
      <menu className={styles.container}>
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
      </menu>
    </div>
  );
}
