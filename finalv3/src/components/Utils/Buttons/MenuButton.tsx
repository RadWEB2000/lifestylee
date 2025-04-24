"use client";

import { MenuContext } from "@/context";
import clsx from "clsx";
import { useContext } from "react";

export default function MenuButton() {
  const { open, toggle } = useContext(MenuContext);

  const styles = {
    wrapper: 'cursor-pointer flex flex-col h-10 items-center justify-around p-1 relative w-10 focus:bg-stone-200 hover:bg-stone-200 lg:hidden',
    line: {
      base: "w-full block h-[2px] bg-slate-900 rounded-md duration-200 linear",
      rotated: "absolute origin-center"
    }
  }

  // flex lg:hidden flex-col justify-around items-center place-center p-1 border-1 border-slate-900 h-9 w-9 rounded-md cursor-pointer relative hover:bg-slate-100 focus:bg-slate-100 duration-150 linear
  console.log(open);
  const lines = {
    1: clsx(styles.line.base, open && `${styles.line.rotated} rotate-[45deg] `),
    2: clsx(styles.line.base, open && "scale-x-[0] origin-center"),
    3: clsx(styles.line.base, open && `${styles.line.rotated} rotate-[-45deg]`)
  };

  return (
    <button className={styles.wrapper} onClick={toggle}>
      <span className={lines[1]} />
      <span className={lines[2]} />
      <span className={lines[3]} />
    </button>
  );
}
