import css from "@/ui/Breadcrumbs/Breadcrumbs.module.scss";
import { tBreadcrumbs } from "@/ui/Breadcrumbs/Breadcrumbs.models";
import Link from "next/link";
import { LuMoveRight as Arrow } from "react-icons/lu";

export default function Breadcrumbs(props: tBreadcrumbs) {
  return (
    <ul className={css.wrapper}>
      {props.items.map((item, index) => {
        if (index !== props.items.length - 1) {
          return (
            <>
              <Link className={css.item} href="" key={item.label}>
                {item.label}
              </Link>
              <i className={css.separator} key={item.label}>
                <Arrow />
              </i>
            </>
          );
        } else {
          return (
            <Link className={css.item} href="#" key={item.label}>
              {item.label}
            </Link>
          );
        }
      })}
    </ul>
  );
}
