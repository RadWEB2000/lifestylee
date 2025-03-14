import css from "@/layout/Navigation/Brand/Brand.module.scss";
import Link from "next/link";
import Image from "next/image";
import { tBrand } from "@/layout/Navigation/Brand/Brand.models";

export default function Brand(props: tBrand) {
  return (
    <Link className={css.wrapper} href={props.uri}>
      {props.logo && (
        <figure className={css.media}>
          <Image
            alt={props.logo.alt}
            className={css.logo}
            fill
            loading="eager"
            src={props.logo.src}
            priority
            title={props.logo.title}
            quality={55}
          />
        </figure>
      )}
      <p className={css.brand}>{props.label}</p>
    </Link>
  );
}
