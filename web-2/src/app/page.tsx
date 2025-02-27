import {
  BigBlogCard,
  // RegularBlogCard,
  // SideBlogCard,
} from "@/components/UI/Cards";
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
      <BigBlogCard {...posts[1]} />
      {/* <RegularBlogCard {...posts[3]} /> */}
      {/* <SideBlogCard {...posts[3]} /> */}
      {/* <BlogCard
        variant="regular"
        {...posts[2]}
      /> */}
    </div>
  );
}
