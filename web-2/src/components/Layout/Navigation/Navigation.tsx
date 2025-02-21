import css from "@/nav/Navigation.module.scss";
import { tNavigation } from "@/nav/Navigation.models";
import { Menu, Subdomains } from "@/nav/index";

export default function Navigation(props: tNavigation) {
  return (
    <>
      <Subdomains subdomains={props.subdomains} />
      <Menu {...props.menu} />
      <div className={css.exproler}>
        EXPROLER
        <br />
        DSFI0JSDIFJIOSDJIOFGJSIODJFOI
      </div>
    </>
  );
}
