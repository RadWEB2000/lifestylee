"use client";
import { MenuContext } from "@/contexts";
import { useState } from "react";

export default function MenuProvider({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <MenuContext.Provider
      value={{
        close: () => setOpenMenu(false),
        isOpen: isOpenMenu,
        toggle: () => setOpenMenu(!isOpenMenu)
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
