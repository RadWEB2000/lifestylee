import Link from "next/link";
import css from "@/layout/Footer/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={css.wrapper}>
      <menu className={css.menu}>
        <Link className={css.menu__item} href="#">
          Start
        </Link>
        <Link className={css.menu__item} href="#">
          Zdrowie
        </Link>
        <Link className={css.menu__item} href="#">
          Moda
        </Link>
        <Link className={css.menu__item} href="#">
          Uroda
        </Link>
        <Link className={css.menu__item} href="#">
          Podróże
        </Link>
        <Link className={css.menu__item} href="#">
          Rozwój osobisty
        </Link>
        <Link className={css.menu__item} href="#">
          Dom
        </Link>
      </menu>
      <div className={css.details}>
        <p className={css.author}>
          LifeeStylee &copy; wszystkie prawa zastrzeżone{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
