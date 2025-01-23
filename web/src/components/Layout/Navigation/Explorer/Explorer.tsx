"use client";
import css from "@/nav/Explorer/Explorer.module.scss";
import { tExplorer } from "@/nav/Explorer/Explorer.models";
import { useContext } from "react";
import { MenuContext } from "@/context/index";
import { MenuButton, Search } from "@/nav/index";
import Link from "next/link";

export default function Explorer(props: tExplorer) {
  const { close, isOpen } = useContext(MenuContext);

  return (
    <>
      <div className={css.shadow} data-open={isOpen} onClick={close} />
      <div className={css.wrapper} data-open={isOpen}>
        <h2 className={css.title}>{props.title}</h2>
        <div className={css.settings}>
          <MenuButton label={props.button} />
          <Search />
        </div>
        <menu className={css.menus}>
          {props.menus.map((item) => {
            return (
              <li className={css.menu} key={item.title}>
                <h3 className={css.menu__title}>{item.title}</h3>
                <ul className={css.cards}>
                  {item.menu.map((item) => {
                    return (
                      <li className={css.card} key={item.name}>
                        <Link
                          className={css.card__link}
                          href={item.uri}
                          hrefLang="pl_PL"
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </menu>
      </div>
    </>
  );
}
