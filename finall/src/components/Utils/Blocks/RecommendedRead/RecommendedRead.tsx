import css from "@/ui/Blocks/RecommendedRead/RecommendedRead.module.scss";

export default function RecommendedRead() {
  return (
    <aside className={css.wrapper}>
      <b>
        Sprawdź także:{" "}
        <a href="#">
          Jakie olejki eteryczne warto mieć w swojej pielęgnacji w 2025 roku?
        </a>
      </b>
    </aside>
  );
}
