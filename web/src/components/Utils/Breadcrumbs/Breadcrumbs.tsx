import css from "@/utils/Breadcrumbs/Breadcrumbs.module.scss";
import Link from "next/link";
import {
  AiFillHome as Home,
  AiOutlineArrowRight as Arrow,
} from "react-icons/ai";

type Breadcrumbs = {
  breadcrumbs: Array<T_WP_TAXONOMY>;
};

export default function Breadcrumbs(props: Breadcrumbs) {
  return (
    <ul className={css.wrapper}>
      {props.breadcrumbs.map((item, index: number) => {
        if (index === 0) {
          return (
            <Link className={css.item} href={`/`} key={index}>
              <i className={css.icon}>
                <Home />
              </i>
            </Link>
          );
        } else {
          return (
            <>
              <i className={css.icon}>
                <Arrow />
              </i>
              <Link className={css.item} href={item.uri} key={index}>
                <span className={css.label}>{item.name}</span>
              </Link>
            </>
          );
        }
      })}
    </ul>
  );
}
