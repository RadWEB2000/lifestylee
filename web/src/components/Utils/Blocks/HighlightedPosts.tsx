import css from "@/blocks/Blocks.module.scss";
import Link from "next/link";
import { Heading, Paragraph } from "@/blocks/index";

export default function HighlightedPosts(props: T_ACF_HIGHLIGHTED_POSTS_BLOCK) {
  return (
    <article className={css.highlightedPosts}>
      <Heading anchor="" content={props.title} level={3} />
      <Paragraph anchor="" content={props.content} />
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
