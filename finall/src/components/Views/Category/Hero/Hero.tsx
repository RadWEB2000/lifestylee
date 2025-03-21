import css from "@/views/Category/Hero/Hero.module.scss";
import { Breadcrumbs } from "@/components/Utils/Breadcrumbs";
import Link from "next/link";

const breadcrumbs = [
  {
    label: "Start",
    uri: "/"
  },
  {
    label: "Gastronomia",
    uri: "/gastronomia"
  },
  {
    label: "Kuchnia śródziemnomorska",
    uri: "/gastronomia/kuchnia-srodziemnomorska"
  }
];

const similarCategories = [
  {
    label: "Motywacja",
    uri: "#"
  },
  {
    label: "Zarządzanie czasem",
    uri: "#"
  },
  {
    label: "Planowanie",
    uri: "#"
  },
  {
    label: "Rozwój kariery",
    uri: "#"
  },
  {
    label: "Pewność siebie",
    uri: "#"
  }
];

export default function Hero() {
  return (
    <>
      <header className={css.wrapper}>
        <Breadcrumbs items={breadcrumbs} />
        <h1 className={css.title}>Kuchnia</h1>
        <p className={css.content}>
          Wpisy poświęcone pielęgnacji twarzy, ciała i włosów, a także
          kosmetykom do makijażu przystępnym cenowo. Nie jestem specjalistką w
          tym temacie, jednak chętnie dzielę się informacjami o produktach,
          które spełniły moje oczekiwania. Nowe wpisy pojawiają się tu
          stosunkowo rzadko, bo raczej nieczęsto zmieniam kosmetyki, których
          używam, jednak zdarza się, że mam ochotę przetestować coś nowego, czym
          później dzielę się w postaci tekstu z recenzją.
        </p>
        <div className={css.similar}>
          <strong className={css.similar__title}>Podobne kategorie</strong>
          {similarCategories && (
            <ul className={css.categories}>
              {similarCategories.map((item) => {
                return (
                  <Link className={css.category} href="#" key={item.uri}>
                    {item.label}
                  </Link>
                );
              })}
            </ul>
          )}
        </div>
      </header>
    </>
  );
}
