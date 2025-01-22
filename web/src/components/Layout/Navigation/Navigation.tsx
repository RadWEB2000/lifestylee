import css from "@/nav/Navigation.module.scss";
import { tNavigation } from "@/nav/Navigation.models";
import {
  Brand,
  MenuButton,
  Search,
  Subdomains,
  ToggleTheme,
} from "@/nav/index";

export default function Navigation(props: tNavigation) {
  return (
    <>
      {props.subdomains && <Subdomains subdomains={props.subdomains} />}
      <nav className={css.navigation}>
        <Brand {...props.brand} />
        <div className={css.settings}>
          <Search />
          <ToggleTheme />
          <MenuButton {...props.menuButton} />
        </div>
      </nav>
    </>
  );
}
