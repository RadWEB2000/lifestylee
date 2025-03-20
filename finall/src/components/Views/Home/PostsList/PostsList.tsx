import { PrimaryButton } from "@/ui/Buttons";
import { RegularPostCard } from "@/ui/Cards";
import css from "@/views/Home/PostsList/PostsList.module.scss";

export default function PostsList() {
  return (
    <div className={css.wrapper}>
      <section className={css.container}>
        <h2 className={css.title}>Kuchnia</h2>
        <p className={css.content}>
          Do przygotowania pesto z kolendry będziesz potrzebować kilku
          kluczowych składników. Przede wszystkim, świeża kolendra to podstawa —
          jej aromatyczny smak nadaje sosowi wyjątkowego charakteru. Oprócz
          kolendry warto zaopatrzyć się w orzechy nerkowca lub piniowe, które
          dodadzą kremowości i głębi. Kolejnym niezbędnym składnikiem jest
          czosnek, którego intensywność świetnie uzupełni smak kolendry. Nie
          zapomnij o oliwie z oliwek, która sprawi, że pesto będzie gładkie i
          aromatyczne, a także parmezanie, który doda całości lekko słonego
          posmaku.
        </p>
        <div className={css.button}>
          <PrimaryButton />
        </div>
      </section>
      <ul className={css.cards}>
        <RegularPostCard />
        <RegularPostCard />
        <RegularPostCard />
        <RegularPostCard />
      </ul>
    </div>
  );
}
