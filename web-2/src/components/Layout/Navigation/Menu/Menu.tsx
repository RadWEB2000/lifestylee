import css from "@/nav/Menu/Menu.module.scss";
import { Brand, Search } from "@/nav/index";
import { tMenu } from "@/nav/Menu/Menu.models";
import { MenuButton } from "@/ui/Buttons/index";

export default function Menu(props: tMenu) {
  return (
    <nav
      className={css.wrapper}
      itemScope
      itemType="https://schema.org/Organization"
      itemID={`${process.env.BASE_URL_WEB}`}
    >
      <Brand {...props.brand} />
      <Search />
      <MenuButton {...props.menuButton} />
    </nav>
  );
}
