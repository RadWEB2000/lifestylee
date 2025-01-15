import css from "@/utils/PrimaryBlogCard/PrimaryBlogCard.module.scss";
import Image from "next/image";
import { tPrimaryBlogCard } from "@/utils/PrimaryBlogCard/PrimaryBlogCard.models";
import Link from "next/link";
import getReleaseDate from "@/func/getReleaseDate";
import getExcerpt from "../../../lib/functions/getExcerpt";

export default function PrimaryBlogCard(props: tPrimaryBlogCard) {
  console.log("Post", props.image);
  const published = getReleaseDate({
    date: props.release,
    format: "short",
  });
  return (
    <li className={css.wrapper}>
      <picture className={css.media}>
        <Image
          alt={props.image.altText}
          className={css.image}
          fill
          src={`https://cdn.pixabay.com/photo/2024/10/26/11/15/subway-9151034_1280.jpg`}
          title={props.image.title}
          sizes={props.image.srcSet}
          quality={45}
        />
      </picture>
      <Link className={css.title} href={props.uri}>
        <h3>{props.title}</h3>
      </Link>
      <p
        className={css.excerpt}
        dangerouslySetInnerHTML={{ __html: getExcerpt(props.excerpt, 105) }}
      />
      <section className={css.details}>
        <ul className={css.taxonomies}>
          <li className={css.subdomain}>{props.subdomain}</li>
          <li className={css.category}>{props.category}</li>
        </ul>
        <p className={css.release}>{published}</p>
      </section>
    </li>
  );
}
