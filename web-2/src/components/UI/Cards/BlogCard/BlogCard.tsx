import Link from "next/link";
import css from "@/ui/Cards/BlogCard/BlogCard.module.scss";
import { tBlogCard } from "@/components/UI/Cards/BlogCard/BlogCard.models";
import Image from "next/image";
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
    <li
      className={`${css.wrapper} ${
        props.variant && wrapperClassName(props.variant)
      }`}
      itemScope
      itemType={`https://schema.org/BlogPosting`}
      title={`📖 Przeczytaj wpis pt. "${props.title}"`}
    >
      <picture className={css.media}>
        <Image
          alt={props.image.altText}
          className={css.image}
          fill
          itemProp="image"
          loading="lazy"
          placeholder="blur"
          blurDataURL={`${blurredImage}`}
          src={props.image.sourceUrl}
          sizes={props.image.srcSet}
          title={`📖 Przeczytaj wpis pt. "${props.title}"`}
          quality={70}
        />
      </picture>
      <article>
        <h3 className={css.title} itemProp="headline">
          <Link href={props.uri} itemProp="url">
            {props.title}
          </Link>
        </h3>
        <p
          className={css.excerpt}
          dangerouslySetInnerHTML={{ __html: props.excerpt.substring(0, 115) }}
          itemProp="description"
        />
        <footer className={css.details}>
          <time
            className={css.release}
            dateTime={`${new Date().getUTCDate()}`}
            itemProp="datePublished"
          >
            {props.release}
          </time>
          <ul className={css.taxonomy}>
            <li>
              <Link
                className={css.category}
                href={props.category.uri}
                hrefLang="pl_PL"
                itemProp="articleSection"
              >
                {props.category.name}
              </Link>
            </li>
            <li>
              <Link
                className={css.subcategory}
                href={props.subcategory.uri}
                hrefLang="pl_PL"
                itemProp="articleSection"
              >
                {props.subcategory.name}
              </Link>
            </li>
          </ul>
        </footer>
      </article>
    </li>
  );
}
