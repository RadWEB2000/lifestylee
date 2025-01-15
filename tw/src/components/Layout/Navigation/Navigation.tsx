import css from "@/nav/Navigation.module.scss";
import { Brand, Search } from "@/nav/index";
import { tNavigation } from "@/nav/Navigation.models";

export default function Navigation(props: tNavigation) {
  return (
    <nav className={css.wrapper}>
      <Brand {...props.brand} />
      <Search {...props.search} />
    </nav>
  );
}
