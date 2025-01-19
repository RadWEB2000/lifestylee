import { GET_CATEGORY } from "@/queries/index";
import Link from "next/link";

interface tPostPage {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage(props: tPostPage) {
  const api = await GET_CATEGORY();
  console.log("api", api);

  return (
    <div>
      <Link href="/">Start</Link>
      {/* <h1>{data.page.title}</h1> */}
      <p>{(await props.params).category}</p>
      {/* <p dangerouslySetInnerHTML={{ __html: data.page.content }} /> */}
    </div>
  );
}
export const dynamicParams = false;
