import css from "@/layout/Navigation/Menu/Menu.module.scss";
import { menu } from "@/data/static/menu";
import { MenuDropdown, MenuItem } from "@/layout/Navigation/index";

export default function Menu() {
  return (
    <menu className={css.wrapper}>
      {menu.map((item) => {
        if (item.submenu) {
          return (
            <MenuDropdown {...item} key={item.label} submenu={item.submenu} />
          );
        } else {
          return <MenuItem {...item} key={item.label} variant="regular" />;
        }
      })}
    </menu>
  );
}
