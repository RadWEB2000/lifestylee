import { tMenuItem } from "@/layout/Navigation/Menu/MenuItem/MenuItem.models";
import css from "@/layout/Navigation/Menu/MenuItem/MenuItem.module.scss";
import Link from "next/link";

export default function MenuItem(props: tMenuItem) {
  return (
    <Link
      className={css.wrapper}
      href={props.uri}
      hrefLang="pl_PL"
      data-variant={props.variant}
      {...props.props}
    >
      {props.label}
    </Link>
  );
}
