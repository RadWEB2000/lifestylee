import css from "@/blocks/Blocks.module.scss";
import Link from "next/link";
import { FaArrowRight as Arrow } from "react-icons/fa6";

export default function Buttons(props: T_CORE_BUTTONS_BLOCK) {
  return (
    <div className={css.buttons}>
      {props.buttons.map((item) => {
        return (
          <Link
            className={css.button}
            href={item.url}
            key={item.text}
            target={item.linkTarget}
            title={item.title}
            rel={item.rel}
          >
            <span className={css.button__label}>{item.text}</span>
            <i className={css.button__icon}>
              <Arrow />
            </i>
          </Link>
        );
      })}
    </div>
  );
}
