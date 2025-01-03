import { tBrand } from "@/nav/Brand/Brand.models";
import css from "@/nav/Brand/Brand.module.css";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

export default function Brand(props: tBrand) {
  return (
    <Link className={css.wrapper} href={props.brand.main.url}>
      <span className={css.brand}>
        <Image
          alt={props.brand.main.logo.altText}
          loading="eager"
          className={css.logo}
          priority
          height={55}
          src={props.brand.main.logo.sourceSrc}
          title={props.brand.main.logo.title}
          width={55}
          quality={85}
        />
        {props.brand.main.title}
      </span>
      {props.brand.subdomain && (
        <Link
          className={css.subdomain}
          href={props.brand.subdomain.url}
          style={
            {
              "--clr-subdomain": props.brand.subdomain.color,
            } as CSSProperties
          }
        >
          {props.brand.subdomain.title}
        </Link>
      )}
    </Link>
  );
}
