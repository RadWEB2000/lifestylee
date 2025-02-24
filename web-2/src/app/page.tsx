import { BlogCard } from "@/components/UI/Cards";
import GET_POSTS from "@/data/graphql/GET_POSTS";

export default async function HomePage() {
  const posts = await GET_POSTS();
  return (
    <div>
      <ul>
        {posts?.map((item) => {
          return <li key={item.title}>{item.title}</li>;
        })}
      </ul>
      <BlogCard variant="big" {...posts[1]} />
      <BlogCard variant="side" {...posts[3]} />
      {/* <BlogCard
        variant="regular"
        {...posts[2]}
      /> */}
    </div>
  );
}
