"use client";
import css from "@/ui/Buttons/MenuButton/MenuButton.module.scss";
import { tMenuButton } from "@/ui/Buttons/MenuButton/MenuButton.models";
import { useState } from "react";

export default function MenuButton(props: tMenuButton) {
  const [isOpenMenu, handleOpenMenu] = useState<boolean>(false);

  return (
    <button
      aria-controls="explorer"
      aria-expanded={isOpenMenu}
      aria-label={isOpenMenu ? "Eksplorer otwarty" : "Eksplorer zamknięty"}
      className={css.wrapper}
      itemScope
      itemType={`${process.env.SCHEMA_LINK}SiteNavigationElement`}
      onClick={() => handleOpenMenu(!isOpenMenu)}
      data-open={isOpenMenu}
      title={isOpenMenu ? "Zamykanie eksplorera" : "Otwieranie eksplorera"}
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
