import css from "@/nav/Explorer/Explorer.module.scss";
import { tExplorer } from "@/nav/Explorer/Explorer.models";
export default function Explorer(props: tExplorer) {
  return (
    <>
      <span className={css.layer} />
      <div className={css.wrapper}>{props.test}</div>
    </>
  );
}
