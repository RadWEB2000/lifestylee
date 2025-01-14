import css from "@/subdomains/Subdomains.module.scss";
import Link from "next/link";
import { tSubdomains } from "@/subdomains/Subdomains.models";
import { CSSProperties } from "react";

export default function Subdomains(props: tSubdomains) {
  return (
    <ul
      className={css.wrapper}
      style={
        {
          "--itemsLength": props.subdomains.length,
        } as CSSProperties
      }
    >
      {props.subdomains.map((item) => {
        return (
          <Link
            className={css.item}
            href={item.slug}
            key={item.name}
            style={
              {
                "--color": item.color,
              } as CSSProperties
            }
          >
            {item.name}
          </Link>
        );
      })}
    </ul>
  );
}
