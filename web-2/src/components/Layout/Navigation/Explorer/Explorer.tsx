'use client'
import css from "@/nav/Explorer/Explorer.module.scss";
import { tExplorer } from "@/nav/Explorer/Explorer.models";
import {Search} from '@/nav/index';
import { MenuButton } from "@/ui/Buttons/index";
import Link from "next/link";
import { useContext } from "react";
import { MenuContext } from "@/context";
export default function Explorer(props: tExplorer) {
  const {close,isOpen} = useContext(MenuContext);
  return (
    <>
      <span className={css.layer} data-expand={isOpen} onClick={close} />
      <div className={css.wrapper} data-expand={isOpen}>
        <div
          className={css.head}
        >
          <MenuButton label='Menu' theme="dark" />
          <h3 className={css.title} >{props.title}</h3>
          <Search/>
        </div>
        {
          props.menus &&
          <menu
            className={css.menus}
          >
            {
              props.menus.map((item) => {
                return (
                  <li
                    className={css.menu}
                    key={item.title}
                  >
                    <p className={css.menu__title}>{item.title}</p>
                    {
                      item.menu &&
                      <ul
                      className={css.menu__list}
                      >
                        {
                          item.menu.map((item) => {
                            return (
                              <Link
                                className={css.menu__item}
                                href={item.uri}
                                hrefLang="pl_PL"
                                key={item.name}
                                onClick={close}
                                prefetch
                                title={`Kategoria ${item.name.toLowerCase()}`}
                              >
                                {item.name}
                              </Link>
                            )
                          })
                        }
                      </ul>
                    }
                  </li>
                )
              })
            }
          </menu>
        }
      </div>
    </>
  );
}
