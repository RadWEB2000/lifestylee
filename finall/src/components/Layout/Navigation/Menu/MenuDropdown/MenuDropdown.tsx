"use client";
import { tMenuDropdown } from "@/layout/Navigation/Menu/MenuDropdown/MenuDropdown.models";
import { MenuItem as Item } from "@/layout/Navigation/index";
import { useState } from "react";
import css from "@/layout/Navigation/Menu/MenuDropdown/MenuDropdown.module.scss";
import { FaArrowDown as Arrow } from "react-icons/fa6";

export default function MenuDropdown(props: tMenuDropdown) {
  const [isOpenDropdown, toggleOpenDropdown] = useState<boolean>(false);
  return (
    <li className={css.wrapper}>
      <div className={css.box}>
        <Item label={props.label} uri={props.uri} variant="regular" />
        <button
          className={css.button}
          onClick={() => toggleOpenDropdown(!isOpenDropdown)}
        >
          <Arrow />
        </button>
      </div>
      <ul className={css.list} data-expand={isOpenDropdown}>
        {props.submenu.map((item) => {
          return (
            <Item
              {...item}
              variant="dropdown"
              key={item.label}
              props={{
                onClick: () => toggleOpenDropdown(false)
              }}
            />
          );
        })}
      </ul>
    </li>
  );
}
