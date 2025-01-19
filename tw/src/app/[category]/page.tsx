// import { GET_CATEGORY_PAGE } from "@/queries/index";
import { headers } from "next/headers";
import Link from "next/link";
// import type { Metadata } from "next";

interface tPostPage {
  params: Promise<{ category: string }>;
}

// export async function generateMetadata(): Promise<Metadata> {
//   const slug: string = (await props.params).slug;
//   const seo = (await GET_CATEGORY_PAGE()).seo;
//   return {
//     ...seo,
//     other: {
//       jsonLd: "TEST",
//     },
//   };
// }

export default async function CategoryPage(props: tPostPage) {
  const api = (await headers()).get("");
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
