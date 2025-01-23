"use client";
import { createContext } from "react";

export type tMenuContext = {
  isOpen: boolean;
  close: () => void;
  toggle: () => void;
};

const MenuContext = createContext<tMenuContext>({
  close: () => {},
  isOpen: false,
  toggle: () => {},
});

export default MenuContext;
