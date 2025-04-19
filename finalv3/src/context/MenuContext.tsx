"use client";
import { createContext } from "react";

type menuContext = {
  close: () => void;
  open: boolean;
  toggle: () => void;
};

const MenuContext = createContext<menuContext>({
  open: false,
  toggle: () => true,
  close: () => false
});

export default MenuContext;
