import type { Metadata } from "next";
import { GET_MAIN_CATEGORIES, GET_POST, GET_POSTS } from "@/queries/index";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const seo = (await GET_POST("kiedy-wybory-prezydenckie-2025-w-polsce")).seo;

  return {
    ...seo,
    other: {
      jsonLd: "TEST",
    },
  };
}

export default async function HomePage() {
  const categories = await GET_MAIN_CATEGORIES();
  const posts = await GET_POSTS();

  return (
    <div>
      <div>
        <h1>home page</h1>
      </div>
      <ul
        style={{
          display:'grid',
          alignItems:'center',
          justifyContent:'center',
          textAlign:'center',
          gridTemplateColumns:`repeat(${categories.length},1fr)`
        }}
      >
        {categories.map((item) => {
          return (
            <Link
              href={item.uri}
              key={item.name}
              style={{
                background: item.colors.background,
                color: item.colors.foreground,
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </ul>
      <ul
        style={{
          background: "#aaa",
          display:'grid',
          gridTemplateColumns:'repeat(3,1fr)',
          width:'85%',
          margin:'2rem auto'
        }}
      >
        {posts
          .filter((item) => item.status === "publish")
          .map((item) => {
            return (
              <Link href={item.uri} key={item.uri}>
                <Image
                  alt={item.image.altText}
                  height={350}
                  src={item.image.sourceUrl}
                  sizes={item.image.srcSet}
                  width={350}
                />
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.excerpt }} />
                <p>{item.date}</p>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}
