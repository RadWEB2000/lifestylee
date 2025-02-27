import { PrimarySectionCards as PrimarySection } from "@/components/UI/SectionCards";
import GET_POSTS from "@/data/graphql/GET_POSTS";

export default async function HomePage() {
  const posts = await GET_POSTS();
  return (
    <div>
      {/* <ul>
        {posts?.map((item) => {
          return <li key={item.title}>{item.title}</li>;
        })}
      </ul> */}
      <PrimarySection
        title="Polecane wpisy"
        content="Breaking news, updates, trends, and the latest info you need to know about SEO, Google and other search engines, top PPC platforms, and popular social media networks. For breaking news and the latest updates, follow us on Google News or subscribe to our newsletter."
        cards={posts}
      />
    </div>
  );
}
