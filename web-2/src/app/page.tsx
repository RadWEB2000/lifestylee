import {
  PrimarySectionCards as PrimarySection,
  SecondarySectionCards as SecondarySection,
} from "@/components/UI/SectionCards";
import GET_POSTS from "@/data/graphql/GET_POSTS";

export default async function HomePage() {
  const posts = await GET_POSTS();
  return (
    <div>
      <PrimarySection
        title="Polecane wpisy"
        content="Breaking news, updates, trends, and the latest info you need to know about SEO, Google and other search engines, top PPC platforms, and popular social media networks. For breaking news and the latest updates, follow us on Google News or subscribe to our newsletter."
        cards={posts}
      />
      <SecondarySection
        content={`Using container queries, the card can be reused in multiple areas of a page without needing to know specifically where it will be placed each time. If the container with the card is narrower than 700px, the font of the card title will be small, and if the card is in a container that's wider than 700px, the font of the card title will be bigger.`}
        title="Gastronomia"
        button={{
          label: "Więcej o gastronomii",
          uri: "#",
        }}
        cards={posts}
      />
    </div>
  );
}
