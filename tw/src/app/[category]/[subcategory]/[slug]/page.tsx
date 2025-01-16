// import type { Metadata } from "next";
import { GET_POST } from "@/data/graphql";
import Image from "next/image";
import Link from "next/link";

type tPostPage = {
  params: {
    slug: string;
  };
};

// export async function generateMetadata({
//   params,
// }: tPostPage): Promise<Metadata> {
//   const slug = (await params).slug;

//   const seo = (
//     await GET_POST(slug ? slug : "kiedy-wybory-prezydenckie-2025-w-polsce")
//   ).seo;

//   return {
//     ...seo,
//     other: {
//       jsonLd: "TEST",
//     },
//   };
// }

// export function generateStaticParams() {
//   return [];
// }

export default async function PostPage(props: tPostPage) {
  // const slug: string = await props.params.slug;
  const slug = props.params.slug;
  try {
    const page = await (
      await GET_POST(slug ? slug : "kiedy-wybory-prezydenckie-2025-w-polsce")
    ).page;

    return (
      <div>
        <Link href="/">Start</Link>
        <h1>{`Post: ${page.title}`}</h1>
        <p>{page.date}</p>
        <p dangerouslySetInnerHTML={{ __html: page.excerpt }} />
        <Image
          alt={page.featuredImage.altText}
          height={750}
          src={page.featuredImage.sourceUrl}
          sizes={page.featuredImage.srcSet}
          title={page.featuredImage.title}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          width={1200}
          quality={95}
        />
        <main>
          <section dangerouslySetInnerHTML={{ __html: page.content }} />
        </main>
      </div>
    );
  } catch (error) {
    console.log(`❌ Error fetch post: ${error}`);
    throw error;
  }
}

// export const dynamicParams = true;
