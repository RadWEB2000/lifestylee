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

export default function MenuDropdown(props: menuDropdown) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <li>
      <span className="flex flex-row items-center space-x-1">
        <MenuItem label={props.label} uri={props.uri} variant="primary" />
        <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <Arrow />
        </button>
      </span>
      {isOpen && (
        <ul
          className="absolute flex flex-col bg-slate-100 space-y-1 px-3 py-4 rounded-md rounded-t-[0]  duration-150 ease-linear"
          // onMouseLeave={() => setIsOpen(false)}
        >
          {props.submenu.map((item) => {
            return (
              <MenuItem
                key={item.label}
                label={item.label}
                uri={item.uri}
                variant="secondary"
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}
