"use client";
import MenuContext from "@/context/MenuContext";
import { useState } from "react";

export default function MenuProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <MenuContext.Provider
      value={{
        close: () => setIsOpenMenu(false),
        open: isOpenMenu,
        toggle: () => setIsOpenMenu(!isOpenMenu)
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
