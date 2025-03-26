import { SidePostCard } from "@/components/Utils/Cards";
import { ToC } from "@/ui/TableOfContents";
import css from "@/css/views/ArticleView.module.scss";
import {
  Heading,
  List,
  Paragraph,
  Picture,
  RecommendedRead
} from "@/ui/Blocks";
import { Hero, Recommendation, Tags } from "@/components/Views/Article";

export default function PostPage() {
  return (
    <>
      <Hero />
      <div>
        <ToC />
        <main className={css.wrapper}>
          <div className={css.container}>
            <article className={css.content}>
              <Heading level={2} />
              <List variant="ordered" />
              <Paragraph />
              <RecommendedRead />
              <Heading level={4} />
              <Paragraph />
              <List variant="unordered" />
              <Picture />
              <Paragraph />
              <Heading level={3} />
              <Paragraph />
              <Tags />
            </article>
            <aside className={css.side}>
              <h3>Rekomendowane wpisy</h3>
              <SidePostCard />
              <SidePostCard />
              <SidePostCard />
              <SidePostCard />
              <SidePostCard />
              <SidePostCard />
            </aside>
          </div>
          <Recommendation />
          <Recommendation />
          <Recommendation />
        </main>
      </div>
    </>
  );
}
