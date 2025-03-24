import { SidePostCard } from "@/components/Utils/Cards";
import { ToC } from "@/ui/TableOfContents";
import Hero from "@/views/Article/Hero/Hero";
import css from "@/css/views/ArticleView.module.scss";
import { Heading, List, Paragraph, Picture } from "@/ui/Blocks";

export default function PostPage() {
  return (
    <>
      <Hero />
      <ToC />
      <div>
        <main className={css.wrapper}>
          <article className={css.content}>
            <Heading level={2} />
            <List variant="ordered" />
            <Paragraph />
            <Heading level={4} />
            <Paragraph />
            <List variant="unordered" />
            <Picture />
            <Paragraph />
            <Heading level={3} />
            <Paragraph />
          </article>
          <aside className={css.side}>
            <SidePostCard />
            <SidePostCard />
            <SidePostCard />
            <SidePostCard />
            <SidePostCard />
            <SidePostCard />
          </aside>
        </main>
      </div>
    </>
  );
}
