import css from "@/nav/Navigation.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className={css.wrapper}>
      <Link href="/">
        <Image alt="" height={256} src="/logo-512.png" width={256} />
        <h3>LifeeStylee</h3>
      </Link>
      <menu>
        <li>Start</li>
        <hr />
        <li>Zdrowie</li>
        <li>Wellbeing</li>
        <li>Moda</li>
        <li>Uroda</li>
        <li>Podróże</li>
        <li>Styl życia</li>
        <li>Dom</li>
        <li>Rodzina</li>
      </menu>
    </nav>
  );
}
