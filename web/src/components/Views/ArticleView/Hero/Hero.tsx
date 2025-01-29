import css from "@/v-article/Hero/Hero.module.scss";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { tHero } from "@/v-article/Hero/Hero.models";
import { FaCalendarAlt as Calendar, FaClock as Clock } from "react-icons/fa";

export default function Hero(props: tHero) {
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
              <b className={css.detail__title}>{props.publishedTime.title}</b>
              <span className={css.detail__content}>
                {`${new Date(props.publishedTime.value).getDate()}/${
                  new Date(props.publishedTime.value).getMonth() + 1
                }/${new Date(props.publishedTime.value).getFullYear()}`}
              </span>
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
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
        </ul>
      </div>
    </div>
  );
}
