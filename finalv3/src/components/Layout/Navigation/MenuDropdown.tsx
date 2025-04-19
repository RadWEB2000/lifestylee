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
      <span className="">
        <MenuItem label={props.label} uri={props.uri} variant="primary" />
        <button className="" onClick={() => setIsOpen(!isOpen)}>
          <Arrow />
        </button>
      </span>
      {isOpen && (
        <ul
          className=""
          // onMouseLeave={() => setIsOpen(false)}
        >
          {props.submenu.map((item) => {
            return (
              <MenuItem
                key={item.label}
                label={item.label}
                uri={item.uri}
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
