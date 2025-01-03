import css from "@/nav/Navigation.module.css";
import { tNavigation } from "@/nav/Navigation.models";
import Link from "next/link";
import Image from "next/image";

export default function Navigation(props: tNavigation) {
  return (
    <nav className={css.wrapper}>
      <Link className={css.brand} href={props.brand.main.url}>
        <span className={css.brand__main}>
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
            className={css.brand__subdomain}
            href={props.brand.subdomain.url}
          >
            {props.brand.subdomain.title}
          </Link>
        )}
      </Link>
    </nav>
  );
}
