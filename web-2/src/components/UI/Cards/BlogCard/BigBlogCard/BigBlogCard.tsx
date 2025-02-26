import Image from "next/image";
import { blurredImage as blurringImage } from "@/lib/functions";
import css from "@/ui/Cards/BlogCard/BigBlogCard/BigBlogCard.module.scss";
import Link from "next/link";

export default async function BigBlogCard(props: tCommonBlogCard) {
  const blurredImage = await blurringImage(props.image.sourceUrl);

  return (
    <article
      className={css.wrapper}
      itemScope
      itemType={`https://schema.org/BlogPosting`}
      title={`📖 Przeczytaj wpis pt. "${props.title}"`}
    >
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
      <section>
        <h3 className={css.title} itemProp="headline">
          <Link href={props.uri} itemProp="url">
            {props.title}
          </Link>
        </h3>
        <meta content={props.uri} itemProp="mainEntityOfPage" />
        <p
          className={css.excerpt}
          dangerouslySetInnerHTML={{
            __html: props.excerpt.substring(0, 125),
          }}
          itemProp="description"
        />
      </section>
      <footer>
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
