import Link from "next/link";
import css from "@/ui/Cards/BlogCard/BlogCard.module.scss";
import { tBlogCard } from "@/components/UI/Cards/BlogCard/BlogCard.models";
import Image from "next/image";
import { LuMoveRight as Arrow } from "react-icons/lu";
import { blurredImage as blurringImage } from "@/lib/functions";

export default async function BlogCard(props: tBlogCard) {
  function wrapperClassName(
    value: "big" | "recommended" | "regular" | "side" | string | null
  ) {
    switch (value) {
      case "big":
        return css.wrapper__big;
      case "recommended":
        return css.wrapper__recommended;
      case "regular":
        return css.wrapper__regular;
      case "side":
        return css.wrapper__side;
      default:
        return css.wrapper__regular;
    }
  }

  const blurredImage = await blurringImage(props.image.sourceUrl);

  return (
    <article
      className={`${css.wrapper} ${
        props.variant && wrapperClassName(props.variant)
      }`}
      itemScope
      itemType={`https://schema.org/BlogPosting`}
      title={`📖 Przeczytaj wpis pt. "${props.title}"`}
    >
      <header className={css.header}>
        <figure
          className={css.media}
          itemProp="image"
          itemScope
          itemType="https://schema.org/ImageObject"
        >
          <Image
            alt={props.image.altText}
            blurDataURL={blurredImage}
            className={css.image}
            fill
            itemProp="url"
            loading="lazy"
            placeholder="blur"
            src={props.image.sourceUrl}
            quality={65}
          />
          <meta itemProp="height" content="630" />
          <meta itemProp="width" content="1200" />
        </figure>
        <h3 className={css.title} itemProp="headline">
            <Link href={props.uri} itemProp="url" >
          {props.title}
            </Link>
        </h3>
        <meta content={props.uri} itemProp="mainEntityOfPage" />
      </header>
      <section className={css.body}>
        <p
          className={css.excerpt}
          dangerouslySetInnerHTML={{
            __html: props.excerpt.substring(0, 125),
          }}
          itemProp="description"
        />
        <Link className={css.button} href={props.uri} itemProp="url">
          <span className={css.button__label}>Czytaj</span>
          <i className={css.button__icon}>
            <Arrow />
          </i>
        </Link>
      </section>
      <footer className={css.footer}>
        <time
          className={css.release}
          dateTime={props.date.time}
          itemProp="datePublished"
        >
          {props.date.release}
        </time>
        <meta itemProp="dateModified" content={props.date.time} />
        <ul className={css.taxonomies}>
          {props.category && (
            <li
              className={`${css.taxonomy} ${css.taxonomy__category}`}
              itemProp="articleSection"
            >
              <Link href={props.category.uri} hrefLang="pl_PL">
                {props.category.name}
              </Link>
            </li>
          )}
          {props.subcategory && (
            <li
              className={`${css.taxonomy} ${css.taxonomy__subcategory}`}
              itemProp="articleSection"
            >
              <Link href={props.subcategory.uri} hrefLang="pl_PL">
                {props.subcategory.name}
              </Link>
            </li>
          )}
        </ul>
      </footer>
    </article>
  );
}
