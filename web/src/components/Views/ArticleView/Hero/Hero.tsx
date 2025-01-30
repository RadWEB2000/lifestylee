import css from "@/v-article/Hero/Hero.module.scss";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { tHero } from "@/v-article/Hero/Hero.models";
import { FaCalendarAlt as Calendar, FaClock as Clock } from "react-icons/fa";
import { getReleaseDate } from "@/lib/functions";
import { TableOfContents } from "@/utils/index";

export default function Hero(props: tHero) {
  const release = getReleaseDate({
    date: props.publishedTime.value,
    format: "long",
  });

  return (
    <div className={css.wrapper}>
      <header className={css.container}>
        <section className={css.main}>
          <h1
            className={css.title}
            dangerouslySetInnerHTML={{ __html: props.title }}
          />
          <strong
            className={css.excerpt}
            dangerouslySetInnerHTML={{ __html: props.excerpt }}
          />
        </section>
        <section className={css.details}>
          {props.publishedTime && (
            <p className={css.detail}>
              <i className={css.detail__icon}>
                <Calendar />
              </i>
              <b
                className={css.detail__title}
              >{`${props.publishedTime.title}:  `}</b>
              <span className={css.detail__content}>{release}</span>
            </p>
          )}
          {props.readingTime && (
            <p className={css.detail}>
              <i className={css.detail__icon}>
                <Clock />
              </i>
              <b className={css.detail__title}>{props.readingTime.title}</b>
              <span className={css.detail__content}>
                {props.readingTime.value}
              </span>
            </p>
          )}
        </section>
        <ul className={css.socials}>
          <FaFacebookF />
          <FaFacebookF />
          <FaFacebookF />
          <FaFacebookF />
          <FaFacebookF />
        </ul>
        <figure className={css.media}>
          <Image
            alt={props.image.altText}
            className={css.image}
            fill
            loading="eager"
            priority
            role="img"
            sizes={props.image.srcSet}
            src={props.image.sourceUrl}
            title={props.image.title}
            quality={85}
          />
        </figure>
      </header>
      <div className={css.toc}>
        {props.toc && <TableOfContents {...props.toc} />}
      </div>
    </div>
  );
}
