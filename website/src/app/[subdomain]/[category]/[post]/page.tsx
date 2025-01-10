import { getPostData } from "@/lib/functions/getData";
import { Metadata } from "next";

// @ts-ignore

type Params = {
  post: string;
};

// Ręcznie zdefiniowany typ
type StaticPageProps = {
  params: Params;
};
export async function generateMetadata({
  params,
}: StaticPageProps): Promise<Metadata> {
  const { seo } = await getPostData({
    slug: params.post
      ? params.post
      : "franczyza-vs-dzialalnosc-gospodarza-roznice",
  });

  return {
    title: seo.title,
    description: seo.description,
    other: {},
  };
}

export default async function PostPage({ params }: StaticPageProps) {
  // console.log(`Post slug: ${params.post}`);

  const {
    page,
    seo: { jsonLd },
  } = await getPostData({
    slug: params.post
      ? params.post
      : "franczyza-vs-dzialalnosc-gospodarza-roznice",
  });

  console.log(typeof jsonLd);
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              typeof jsonLd === "string" ? jsonLd : JSON.stringify(jsonLd),
          }}
        />
      </head>
      <div>
        <h1>{page.title}</h1>
        {page.toc && <aside dangerouslySetInnerHTML={{ __html: page.toc }} />}
        <main dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    </>
  );
}
