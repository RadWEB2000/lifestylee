"use client";
import css from "@/nav/Settings/MenuButton/MenuButton.module.scss";
import { tMenuButton } from "@/nav/Settings/MenuButton/MenuButton.models";
import { useState } from "react";

export default function MenuButton(props: tMenuButton) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span className={css.line} />
        <span className={css.line} />
        <span className={css.line} />
      </button>
    </div>
  );
}
