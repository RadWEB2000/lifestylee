"use client";

import { MenuContext } from "@/context";
import clsx from "clsx";
import { useContext } from "react";

export default function MenuButton() {
  const { open, toggle } = useContext(MenuContext);
  const line = {
    base: "w-full block h-[2px] bg-slate-900 rounded-md duration-200 linear",
    rotated: "absolute origin-center"
  };
  // flex lg:hidden flex-col justify-around items-center place-center p-1 border-1 border-slate-900 h-9 w-9 rounded-md cursor-pointer relative hover:bg-slate-100 focus:bg-slate-100 duration-150 linear
  console.log(open);
  const lines = {
    1: clsx(line.base, open && `${line.rotated} rotate-[45deg] `),
    2: clsx(line.base, open && "scale-x-[0] origin-center"),
    3: clsx(line.base, open && `${line.rotated} rotate-[-45deg]`)
  };

  return (
    <button className=" " onClick={toggle}>
      <span className="" />
      <span className="" />
      <span className="" />
    </button>
  );
}
