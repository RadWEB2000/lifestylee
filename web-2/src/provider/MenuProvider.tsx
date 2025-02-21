"use client";
import { MenuContext } from "@/context/index";
import { ReactNode, useEffect, useState } from "react";

type tMenuProvider = {
  children: ReactNode;
};

export default function MenuProvider(props: tMenuProvider) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [isOpen]);

  return (
    <MenuContext.Provider
      value={{
        close: () => setIsOpen(false),
        isOpen: isOpen,
        toggle: () => setIsOpen(!isOpen),
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
}
