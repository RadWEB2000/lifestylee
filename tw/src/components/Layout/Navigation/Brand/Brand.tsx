import css from "@/nav/Brand/Brand.module.scss";
import { tBrand } from "@/nav/Brand/Brand.models";
import Link from "next/link";
import { CSSProperties } from "react";

export default function Brand(props: tBrand) {
  return (
    <div className={css.wrapper}>
      {props.brand && (
        <Link
          className={css.primary}
          href={props.brand.url}
          {...props.brand?.attributes}
        >
          {props.brand.title}
        </Link>
      )}
      {props.subbrand && (
        <Link
          className={css.secondary}
          href={props.subbrand.url}
          style={
            {
              "--subdomainColor": props.subbrand.color
                ? props.subbrand.color
                : "#000",
            } as CSSProperties
          }
          {...props.subbrand.attributes}
        >
          {props.subbrand.title}
        </Link>
      )}
    </div>
  );
}
