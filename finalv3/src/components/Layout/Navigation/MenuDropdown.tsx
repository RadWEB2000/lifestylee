"use client";
import { useState } from "react";
import { HiOutlineArrowDown as Arrow } from "react-icons/hi2";
import { MenuItem } from "@/layout/Navigation";

type menuDropdown = {
  label: string;
  uri: string;
  submenu: Array<{
    label: string;
    uri: string;
  }>;
};

export default function MenuDropdown({ label, submenu, uri }: menuDropdown) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const styles = {
    wrapper: `h-auto relative`,
    container: `flex flex-row h-9 items-center space-x-1 lg:h-auto`,
    button: `cursor-pointer flex h-7 items-center justify-center rounded-sm text-lg w-5 focus:bg-stone-200/75 hover:bg-stone-200/75 lh:h-6 lg:w-6`,
    dropdown: `border-1 border-stone-200 flex flex-col my-2 p-3 rounded-md space-y-2 lg:absolute lg:border-0 lg:bg-stone-200 lg:my-0 lg:px-3 lg:py-2 lg:space-y-1`
  };

  return (
    <li className={styles.wrapper}>
      <span className={styles.container}>
        <MenuItem label={label} uri={uri} variant="primary" />
        <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
          <Arrow />
        </button>
      </span>
      {isOpen && (
        <ul
          className={styles.dropdown}
          onMouseLeave={() => setIsOpen(false)}
        >
          {submenu.map(({ label, uri }) => {
            return (
              <MenuItem
                key={label}
                label={label}
                uri={uri}
                attributes={{
                  onClick: () => setIsOpen(false)
                }}
                variant="secondary"
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}
