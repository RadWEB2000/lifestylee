import css from "@/nav/Settings/ToggleTheme/ToggleTheme.module.scss";
import { SwitchThemeIcons } from "@/anims/index";

export default function ToggleTheme() {
  return (
    <button className={css.wrapper}>
      <i className={css.icon}>
        <SwitchThemeIcons />
      </i>
    </button>
  );
}
