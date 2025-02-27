import Image from "next/image";
import { blurredImage as blurringImage } from "@/lib/functions";
import css from "@/ui/Cards/BlogCard/RegularBlogCard/RegularBlogCard.module.scss";
import styles from "@/ui/Cards/BlogCard/BlogCard.module.scss";
import Link from "next/link";

export default async function RegularBlogCard(props: tCommonBlogCard) {
  const blurredImage = await blurringImage(props.image.sourceUrl);

  return (
    <article
      className={css.wrapper}
      itemScope
      itemType={`https://schema.org/BlogPosting`}
      title={`📖 Przeczytaj wpis pt. "${props.title}"`}
    >
      <figure
        className={`${css.media} ${styles.media}`}
        itemProp="image"
        itemScope
        itemType="https://schema.org/ImageObject"
      >
        <Image
          alt={props.image.altText}
          blurDataURL={blurredImage}
          className={`${css.image} ${styles.image}`}
          fill
          itemProp="url"
          loading="lazy"
          placeholder="blur"
          src={props.image.sourceUrl}
          quality={65}
        />
        <meta itemProp="height" content="250" />
        <meta itemProp="width" content="410" />
      </figure>
      <section className={css.main}>
        <h3 className={`${css.title} ${styles.title}`} itemProp="headline">
          <Link href={props.uri} itemProp="url">
            {props.title}
          </Link>
        </h3>
        <meta content={props.uri} itemProp="mainEntityOfPage" />
        <p
          className={` ${styles.excerpt} ${css.excerpt}`}
          dangerouslySetInnerHTML={{
            __html: props.excerpt.substring(0, 100).trim(),
          }}
          itemProp="description"
        />
      </section>
      <footer className={`${styles.details} ${css.details}`}>
        <time
          className={`${styles.release} ${css.release}`}
          dateTime={props.date.time}
          itemProp="datePublished"
        >
          {props.date.release}
        </time>
        <meta itemProp="dateModified" content={props.date.time} />
        <ul className={`${styles.taxonomies} ${css.taxonomies}`}>
          {props.category && (
            <li
              className={`${styles.taxonomy} ${styles.taxonomy__category} ${css.taxonomy}`}
              itemProp="articleSection"
            >
              <Link href={props.category.uri} hrefLang="pl_PL">
                {props.category.name}
              </Link>
            </li>
          )}
          {props.subcategory && (
            <li
              className={`${styles.taxonomy} ${styles.taxonomy__subcategory} ${css.taxonomy} `}
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
