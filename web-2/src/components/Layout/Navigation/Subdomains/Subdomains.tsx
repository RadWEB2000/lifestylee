import css from "@/nav/Subdomains/Subdomains.module.scss";
import { tSubdomains } from "@/nav/Subdomains/Subdomains.models";
import Link from "next/link";

export default function Subdomains(props: tSubdomains) {
  return (
    <menu
      aria-label="Główne kategorie"
      aria-level={0}
      className={css.wrapper}
      itemID={`${process.env.BASE_URL_WEB}`}
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      {props.subdomains?.map((item) => {
        // console.log(`Ilość subdomen:${props.subdomains.length}`);
        return (
          <Link
            className={css.item}
            itemProp="url"
            href={item.uri}
            hrefLang="pl_PL"
            key={item.name}
            title={`Kategoria główna: ${item.name}`}
            aria-label={`Kategoria główna: ${item.name}`}
          >
            <span className={css.label} itemProp="name">
              {item.name}
            </span>
          </Link>
        );
      })}
    </menu>
  );
}
