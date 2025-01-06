import css from "@/nav/Navigation.module.css";
import { tNavigation } from "@/nav/Navigation.models";
import { Brand, Search } from "@/nav/index";

export default function Navigation(props: tNavigation) {
  return (
    <nav className={css.wrapper}>
      <Brand brand={props.brand} />
      <menu>
        {props?.menu?.map((item) => {
          return (
            <li
              key={item.link.title}
            >  
              {item.link.title}
            </li>
          )
        })}
      </menu>
      <Search {...props.search} />
    </nav>
  );
}
