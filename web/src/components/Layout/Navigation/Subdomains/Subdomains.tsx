import css from "@/nav/Subdomains/Subdomains.module.scss";
import { tSubdomains } from "@/nav/Subdomains/Subdomains.models";
import Link from "next/link";

export default function Subdomains(props: tSubdomains) {
  return (
    <ul className={css.wrapper}>
      {props.subdomains.map((item) => {
        return (
          <Link
            className={css.item}
            href={item.uri}
            hrefLang="pl_PL"
            key={item.name}
          >
            {item.name}
          </Link>
        );
      })}
    </ul>
  );
}
