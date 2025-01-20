import { GET_CATEGORY } from "@/queries/index";
import Link from "next/link";

interface tPostPage {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage(props: tPostPage) {
  const slug = (await props.params).category;
  const { page, posts } = await GET_CATEGORY(slug ? slug : "/polityka");

  return (
    <div>
      <Link href="/">Start</Link>
      <h1>{page.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: page.content }} />
      {posts && (
        <ul>
          {posts
            .filter((item) => item.status === "publish")
            .map((item) => {
              return (
                <Link href={item.uri} key={item.title}>
                  <h3>{item.title}</h3>
                </Link>
              );
            })}
        </ul>
      )}
    </div>
  );
}
export const dynamicParams = false;
