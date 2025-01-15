import type { Metadata } from "next";
import { GET_POST } from "@/data/graphql";
import Image from "next/image";
import Link from "next/link";

type tPostPage = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(params: tPostPage): Promise<Metadata> {
  const seo = (
    await GET_POST(
      params.params.slug
        ? params.params.slug
        : "kiedy-wybory-prezydenckie-2025-w-polsce"
    )
  ).seo;

  return {
    ...seo,
    other: {
      jsonLd: "TEST",
    },
  };
}

export default async function PostPage(params: tPostPage) {
  const path = params.params.slug;

  const page = await (
    await GET_POST(
      params.params.slug
        ? params.params.slug
        : "kiedy-wybory-prezydenckie-2025-w-polsce"
    )
  ).page;

  console.log("post", path);
  return (
    <div>
      <Link href="/">Start</Link>
      <h1>{`Post: ${page.title}`}</h1>
      <p>{page.date}</p>
      <Image
        alt={page.featuredImage.altText}
        height={450}
        src={page.featuredImage.sourceUrl}
        sizes={page.featuredImage.srcSet}
        title={page.featuredImage.title}
        width={1200}
        quality={50}
      />
      <main>
        <section dangerouslySetInnerHTML={{ __html: page.content }} />
      </main>
    </div>
  );
}
