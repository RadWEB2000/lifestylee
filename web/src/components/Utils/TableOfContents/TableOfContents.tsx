import css from "@/utils/TableOfContents/TableOfContents.module.scss";
import { tTableOfContents } from "@/utils/TableOfContents/TableOfContents.models";
import Link from "next/link";

export default function TableOfContents(props: tTableOfContents) {
  return (
    <menu className={css.wrapper}>
      <strong className={css.title}>
        {props.title ? props.title : "Spis treści"}
      </strong>
      {props.elements && (
        <ul className={css.list}>
          {props.elements.map((item) => {
            return (
              <Link
                className={css.item}
                data-level={item.level}
                href={item.link}
                key={item.content}
              >
                {item.content}
              </Link>
            );
          })}
        </ul>
      )}
    </menu>
  );
}
