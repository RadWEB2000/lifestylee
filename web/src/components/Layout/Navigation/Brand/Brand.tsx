import css from "@/nav/Brand/Brand.module.scss";
import Image from "next/image";
import Link from "next/link";
import { tBrand } from "@/nav/Brand/Brand.models";

export default function Brand(props: tBrand) {
  return (
    <Link className={css.wrapper} href={props.uri} hrefLang="pl_PL">
      {props.logo && (
        <picture className={css.media}>
          <Image
            alt={props.logo.altText}
            className={css.image}
            loading="eager"
            fill
            priority
            src={props.logo.sourceUrl}
            sizes={props.logo.srcSet}
            title={props.logo.title}
            quality={55}
          />
        </picture>
      )}
      <span
        className={css.brand}
        dangerouslySetInnerHTML={{ __html: props.name }}
      />
    </Link>
  );
}
