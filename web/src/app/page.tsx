import { RegularBlogCard } from "@/components/Utils/BlogCards";
import GET_NAVIGATION from "@/queries/GET_NAVIGATION";
import GET_POSTS from "@/queries/GET_POSTS";

export default async function HomePage() {
  const posts = await GET_POSTS();
  const nav = await GET_NAVIGATION();
  console.log(nav);
  return (
    <div>
      <div>
        {posts &&
          posts.map((item) => {
            return <RegularBlogCard {...item} key={item.title} />;
          })}
      </div>
    </div>
  );
}
