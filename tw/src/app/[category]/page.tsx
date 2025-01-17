import { GET_CATEGORY_PAGE } from "@/queries/index";
import { GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const uri = context.resolvedUrl; // Pobiera pełne URI, np. "/polityka/polska"
console.log('uri',uri);
  return {
    props: {
      uri, // Przekazuje URI do komponentu strony
    },
  };
};


export default async function CategoryPage(props:tPostPage) {
  const data = await GET_CATEGORY_PAGE(`/${(await props.params).category}`);
console.log(data)
  return (
    <div>
      <Link href="/">Start</Link>
      <h1>{data.page.title}</h1>
      <p>{(await props.params).category}</p>
      <p dangerouslySetInnerHTML={{ __html: data.page.content }} />
    </div>
  );
}
export const dynamicParams = false;
