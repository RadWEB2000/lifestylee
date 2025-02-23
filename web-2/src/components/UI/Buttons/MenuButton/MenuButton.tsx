"use client";
import css from "@/ui/Buttons/MenuButton/MenuButton.module.scss";
import { tMenuButton } from "@/ui/Buttons/MenuButton/MenuButton.models";
import { useContext } from "react";
import { MenuContext } from "@/context";

export default function MenuButton(props: tMenuButton) {
 const {isOpen, toggle} = useContext(MenuContext)

  return (
    <button
      aria-controls="explorer"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Eksplorer otwarty" : "Eksplorer zamknięty"}
      className={css.wrapper}
      itemScope
      itemType={`${process.env.SCHEMA_LINK}SiteNavigationElement`}
      onClick={toggle}
      data-theme={props.theme}
      data-open={isOpen}
      title={isOpen ? "Zamykanie eksplorera" : "Otwieranie eksplorera"}
    >
      <p className={css.label}>{props.label}</p>
      <i className={css.button} aria-hidden>
        <span className={css.line} />
        <span className={css.line} />
        <span className={css.line} />
      </i>
    </button>
  );
}
