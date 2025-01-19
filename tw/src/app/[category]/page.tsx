import { GET_CATEGORY } from "@/queries/index";
import Link from "next/link";

interface tPostPage {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage(props: tPostPage) {
  const slug = (await props.params).category;
  const api = await GET_CATEGORY(slug ? slug : "/polityka");
  console.log("api", api);

  return (
    <div>
      <Link href="/">Start</Link>
      <h1>{api.category.name}</h1>
      <strong>{api.category.description}</strong>
      <p>{(await props.params).category}</p>
      {/* <p dangerouslySetInnerHTML={{ __html: data.page.content }} /> */}
    </div>
  );
}
export const dynamicParams = false;
