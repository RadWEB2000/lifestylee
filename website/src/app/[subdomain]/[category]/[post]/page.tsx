import { getPostData } from "@/lib/functions/getData";
import { Metadata } from "next";

interface PostPageProps {
  params: {
    post: string;
  };
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
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

export default async function PostPage({ params }: PostPageProps) {
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
