import css from "@/nav/Navigation.module.css";
import { tNavigation } from "@/nav/Navigation.models";
import { Brand, Search } from "@/nav/index";

export default function Navigation(props: tNavigation) {
  return (
    <nav className={css.wrapper}>
      <Brand brand={props.brand} />
      <Search {...props.search} />
    </nav>
  );
}
