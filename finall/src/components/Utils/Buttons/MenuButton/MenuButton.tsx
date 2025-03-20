"use client";
import { MenuContext } from "@/contexts";
import css from "@/ui/Buttons/MenuButton/MenuButton.module.scss";
import { useContext } from "react";

export default function MenuButton() {

  const  {isOpen,toggle} = useContext(MenuContext);
  return (
    <button
      className={css.wrapper}
      data-open={isOpen}
      onClick={toggle}
    >
      <span className={css.line} />
      <span className={css.line} />
      <span className={css.line} />
    </button>
  );
}
