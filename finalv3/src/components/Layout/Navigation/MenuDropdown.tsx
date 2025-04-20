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
    wrapper: `h-auto`,
    container: `flex flex-row h-9 items-center space-x-1`,
    button: `flex h-7 items-center justify-center rounded-sm text-lg w-7`,
    dropdown: `flex flex-col my-2 px-2 py-1 space-y-2`
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
          // onMouseLeave={() => setIsOpen(false)}
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
