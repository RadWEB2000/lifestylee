import {
  PrimarySectionCards as PrimarySection,
  SecondarySectionCards as SecondarySection,
} from "@/components/UI/SectionCards";
import GET_HOME_PAGE from "@/data/graphql/GET_HOME_PAGE";
import GET_POSTS from "@/data/graphql/GET_POSTS";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await GET_HOME_PAGE();

  return {
    ...seo,
  };
}

export default async function HomePage() {
  const posts = await GET_POSTS();
  const homePage = await GET_HOME_PAGE();
  console.log(homePage.categories);
  return (
    <div>
      <h1>{homePage.page.title}</h1>
      <PrimarySection
        title="Polecane wpisy"
        content="Breaking news, updates, trends, and the latest info you need to know about SEO, Google and other search engines, top PPC platforms, and popular social media networks. For breaking news and the latest updates, follow us on Google News or subscribe to our newsletter."
        cards={posts}
      />
      {homePage.categories.map((item) => {
        return (
          <SecondarySection
            content={item.content}
            title={item.title}
            button={{
              label: "Więcej o gastronomii",
              uri: item.uri,
            }}
            key={item.title}
            cards={posts}
          />
        );
      })}
      <article>
        <section dangerouslySetInnerHTML={{ __html: homePage.page.content }} />
      </article>
    </div>
  );
}
