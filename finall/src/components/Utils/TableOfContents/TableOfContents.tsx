import Link from "next/link";
import css from "@/ui/TableOfContents/TableOfContents.module.scss";

type toc = Array<{ level: number; label: string; uri: string }>;

const toc: toc = [
  {
    level: 1,
    label: "Wprowadzenie do tematu i jego znaczenie w praktyce",
    uri: "#"
  },
  {
    level: 2,
    label: "Dlaczego optymalizacja kodu jest kluczowa dla wydajności",
    uri: "#"
  },
  {
    level: 2,
    label: "Krótki przegląd używanych technologii",
    uri: "#"
  },
  {
    level: 1,
    label: "Struktura projektu oraz podział na moduły",
    uri: "#"
  },
  {
    level: 3,
    label: "Szczegółowe omówienie konfiguracji środowiska",
    uri: "#"
  },
  {
    level: 2,
    label: "Jak wygląda integracja z zewnętrznymi API krok po kroku",
    uri: "#"
  },
  {
    level: 3,
    label: "Typowe błędy i jak ich unikać przy implementacji",
    uri: "#"
  },
  {
    level: 1,
    label: "Podsumowanie i dalsze kierunki rozwoju projektu",
    uri: "#"
  },
  {
    level: 2,
    label: "Źródła i dodatkowe materiały warte przeczytania",
    uri: "#"
  },
  {
    level: 1,
    label: "Najczęściej zadawane pytania i odpowiedzi",
    uri: "#"
  }
];

export default function TableOfContents() {
  return (
    <div className={css.wrapper}>
      <strong className={css.title}>Spis treści</strong>
      <ul className={css.list}>
        {toc.map((item, index) => {
          return (
            <li className={css.item} key={index}>
              <Link className={css.item__link} href={item.uri}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
