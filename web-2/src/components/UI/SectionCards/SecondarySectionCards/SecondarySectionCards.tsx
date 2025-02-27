import css from "@/ui/SectionCards/SecondarySectionCards/SecondarySectionCards.module.scss";
import Link from "next/link";
import { RegularBlogCard } from "@/ui/Cards/index";
import { tSecondarySectionCards } from "@/ui/SectionCards/SecondarySectionCards/SecondarySectionCards.models";

export default function SecondarySectionCards(props: tSecondarySectionCards) {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <section className={css.box}>
          <h2 className={css.title}>{props.title}</h2>
          <p
            className={css.content}
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </section>
        {props.button && (
          <Link className={css.button} href={props.button.uri} hrefLang="pl_PL">
            {props.button.label}
          </Link>
        )}
      </div>
      {props.cards && (
        <ul className={css.cards}>
          {props.cards.slice(0, 4).map((item) => {
            return <RegularBlogCard {...item} key={item.title} />;
          })}
        </ul>
      )}
    </div>
  );
}
