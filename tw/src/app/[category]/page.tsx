import { GET_CATEGORY_PAGE } from "@/data/graphql";
// import type { Metadata } from "next";

// interface tPostPage {
//   params: Promise<{ slug: string }>;
// }

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

export default async function CategoryPage() {
  const { page } = await GET_CATEGORY_PAGE();

  return (
    <div>
      <h1>Strona kategorii</h1>
      <h2>{page.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
}
export const dynamicParams = false;
