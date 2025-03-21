import css from "@/layout/Navigation/Navigation.module.scss";
import logo from "@/img/logo.webp";
import { MenuButton } from "@/ui/Buttons";
import { Search } from "@/ui/Search";
import { Brand, Menu } from "@/layout/Navigation/index";

export default function Navigation() {
  return (
    <nav className={css.wrapper}>
      <Brand
        label="LifeeStylee"
        uri="/"
        logo={{
          alt: "Logo",
          src: logo.src,
          title: "Logo"
        }}
      />
      <div className={css.controlPanel}>
        <div className={css.controlPanel__box}>
          <Search />
          <Menu />
        </div>
      </div>
      <div className={css.settings}>
        <MenuButton />
      </div>
    </nav>
  );
}
