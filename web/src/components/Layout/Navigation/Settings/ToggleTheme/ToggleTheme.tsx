import css from "@/nav/Settings/ToggleTheme/ToggleTheme.module.scss";
import { SwitchThemeIcons } from "@/anims/index";

export default function ToggleTheme() {
  const time: "day" | "night" = "day";

  console.log(`time: ${time}`);

  return (
    <button className={css.wrapper}>
      <i className={css.icon}>
        <SwitchThemeIcons />
      </i>
      {/* <i className={css.icon}>
        <MoonIcon />
      </i>
      <i className={css.icon}>
        <SunIcon />
      </i> */}
    </button>
  );
}
