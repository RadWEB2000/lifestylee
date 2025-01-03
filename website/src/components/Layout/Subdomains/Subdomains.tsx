// "use client";

import { tSubdomains } from "@/subdomains/Subdomains.models";
import css from "@/subdomains/Subdomains.module.css";
import Link from "next/link";
import { CSSProperties } from "react";

export default function Subdomains(props: tSubdomains) {
  return (
    <menu className={css.wrapper}>
      {props.subdomains.map((item) => {
        return (
          <Link
            className={css.item}
            href={item.url}
            key={item.title}
            style={
              {
                "--clr-subdomain": item.color,
              } as CSSProperties
            }
          >
            {item.title}
          </Link>
        );
      })}
    </menu>
  );
}
