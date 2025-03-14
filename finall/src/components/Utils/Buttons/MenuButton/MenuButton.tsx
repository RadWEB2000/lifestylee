"use client";
import css from "@/ui/Buttons/MenuButton/MenuButton.module.scss";
import { useState } from "react";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <button
      className={css.wrapper}
      data-open={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      |||
      <span className={css.line} />
      <span className={css.line} />
      <span className={css.line} />
    </button>
  );
}
