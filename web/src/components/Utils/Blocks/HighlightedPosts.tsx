import css from "@/blocks/Blocks.module.scss";
import Link from "next/link";

export default function HighlightedPosts(props: T_ACF_HIGHLIGHTED_POSTS_BLOCK) {
  return (
    <article className={css.highlightedPosts}>
      <h3
        className={css.highlightedPosts__title}
        dangerouslySetInnerHTML={{ __html: props.title }}
      />
      <p
        className={css.highlightedPosts__content}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
      {props.posts && (
        <ul className={css.highlightedPosts__list}>
          {props.posts.map((item) => {
            return (
              <li className={css.highlightedPosts__list__item} key={item.title}>
                <Link href={item.url} target={item.target}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
}
