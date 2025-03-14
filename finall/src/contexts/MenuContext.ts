import { createContext } from "react";

type props = {
  isOpen: boolean;
  close: () => void;
  toggle: () => void;
};

const MenuContext = createContext<props>({
  isOpen: false,
  close: () => {},
  toggle: () => {}
});

export default MenuContext;
