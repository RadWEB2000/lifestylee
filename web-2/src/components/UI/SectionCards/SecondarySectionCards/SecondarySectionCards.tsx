import css from "@/ui/SectionCards/SecondarySectionCards/SecondarySectionCards.module.scss";
import { RegularBlogCard } from "@/ui/Cards/index";
import { tSecondarySectionCards } from "@/ui/SectionCards/SecondarySectionCards/SecondarySectionCards.models";
import { PrimaryButton as Button } from "@/ui/Buttons/index";

export default function SecondarySectionCards(props: tSecondarySectionCards) {
  return (
    <div className={css.wrapper} itemScope itemType="https://schema.org/Blog">
      <div className={css.container}>
        <section className={css.box}>
          <h2 className={css.title} itemProp="name">
            {props.title}
          </h2>
          <p
            className={css.content}
            dangerouslySetInnerHTML={{ __html: props.content }}
            itemProp="description"
          />
        </section>
        {props.button && <Button {...props.button} />}
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
