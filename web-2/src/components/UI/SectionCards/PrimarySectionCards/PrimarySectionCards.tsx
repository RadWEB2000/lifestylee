import css from "@/ui/SectionCards/PrimarySectionCards/PrimarySectionCards.module.scss";
import { tPrimarySectionCards } from "@/ui/SectionCards/PrimarySectionCards/PrimarySectionCards.models";
import { BigBlogCard as Big, SideBlogCard as Side } from "@/ui/Cards/index";

export default function PrimarySectionCards(props: tPrimarySectionCards) {
  return (
    <div className={css.wrapper}>
      <section className={css.main}>
        <h2 className={css.title}>{props.title}</h2>
        <p
          className={css.content}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </section>
      {props.cards && (
        <div className={css.cards}>
          <div className={css.big}>
            <Big {...props.cards[0]} />
          </div>
          <div className={css.side}>
            {props.cards.slice(1, 5).map((item) => {
              return <Side key={item.title} {...item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
