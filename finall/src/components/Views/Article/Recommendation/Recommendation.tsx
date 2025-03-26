import { RegularPostCard } from "@/ui/Cards";
import css from "@/views/Article/Recommendation/Recommendation.module.scss";

export default function Recommendation() {
  return (
    <section className={css.wrapper}>
      <h2 className={css.title}>Podobne wpisy</h2>
      <ul className={css.list}>
        <RegularPostCard />
        <RegularPostCard />
        <RegularPostCard />
        <RegularPostCard />
      </ul>
    </section>
  );
}
