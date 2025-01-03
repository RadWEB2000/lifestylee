import { tSubdomains } from "@/subdomains/Subdomains.models";
import css from "@/subdomains/Subdomains.module.css";
import Link from "next/link";

export default function Subdomains(props: tSubdomains) {
  return (
    <menu className={css.wrapper}>
      {props.subdomains.map((item) => {
        return (
          <Link className={css.item} href={item.url} key={item.title}>
            {item.title}
          </Link>
        );
      })}
    </menu>
  );
}
