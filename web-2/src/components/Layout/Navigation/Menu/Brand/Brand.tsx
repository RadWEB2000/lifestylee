import css from "@/nav/Menu/Brand/Brand.module.scss";
import Link from "next/link";
import { tBrand } from "@/nav/Menu/Brand/Brand.models";

export default function Brand(props: tBrand) {
  return (
    <Link
      className={css.wrapper}
      href={props.uri}
      hrefLang="pl_PL"
      itemProp="url"
    >
      <span className={css.label} itemProp="name">
        {props.name}
      </span>
    </Link>
  );
}
