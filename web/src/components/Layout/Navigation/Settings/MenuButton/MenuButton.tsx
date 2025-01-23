"use client";
import css from "@/nav/Settings/MenuButton/MenuButton.module.scss";
import { tMenuButton } from "@/nav/Settings/MenuButton/MenuButton.models";
import { useContext } from "react";
import { MenuContext } from "@/context/index";

export default function MenuButton(props: tMenuButton) {
  const { isOpen, toggle } = useContext(MenuContext);

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="menu-button">
        {props.label}
      </label>
      <button
        className={css.button}
        data-open={isOpen}
        id="menu-button"
        name="menu-button"
        onClick={toggle}
        type="button"
      >
        <span className={css.line} />
        <span className={css.line} />
        <span className={css.line} />
      </button>
    </div>
  );
}
