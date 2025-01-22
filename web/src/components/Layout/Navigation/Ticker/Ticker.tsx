import css from "@/nav/Ticker/Ticker.module.scss";

export default function Ticker() {
  return (
    <div className={css.wrapper}>
      <span className={css.article}>
        W te miejsca nie pojedziesz. Absolutny zakaz dla turystów
      </span>
      <span className={css.date}>21 kwi 2024</span>
    </div>
  );
}
