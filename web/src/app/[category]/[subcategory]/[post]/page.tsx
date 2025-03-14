// import { generateUri } from "@/func/index";
import "@/css/views/post_view.scss";
import { Breadcrumbs } from "@/utils/index";
// import { Hero } from "@/v-article/index";
import GET_POST from "@/queries/GET_POST";
// import {
//   tTableOfContentsAttrs,
//   tTableOfContentsElements
// } from "@/utils/TableOfContents/TableOfContents.models";
import { extractJsonLd, renderBlocks } from "@/func/index";
import { Metadata } from "next";

type tPostPage = {
  params: Promise<{
    category: string;
    subcategory: string;
    post: string;
    url: {
      pathname: string;
      search: string;
    };
  }>;
};

export async function generateMetadata(props: tPostPage): Promise<Metadata> {
  const { post } = await props.params;
  const { seo, tags } = await GET_POST(post);

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      siteName: seo.openGraph.siteName,
      description: seo.openGraph.description,
      firstName: "Radosław",
      gender: "male",
      releaseDate: seo.openGraph.articleMeta.publishedTime,
      lastName: "Adamczyk",

      title: seo.openGraph.title,
      modifiedTime: seo.openGraph.articleMeta.modifiedTime,
      publishedTime: seo.openGraph.articleMeta.publishedTime,
      url: seo.openGraph.url,
      tags: tags.map((item) => {
        return `${item.name}`;
      })
    }
  };
}

export default async function PostPage(props: tPostPage) {
  const { post } = await await props.params;
  const data = await GET_POST(post);

  // const toc: tTableOfContentsElements = data.blocks
  //   .filter((item) => item.name === "rank-math/toc-block")
  //   .map((item) => {
  //     const attrs: tTableOfContentsAttrs = JSON.parse(item.attributesJSON);
  //     return {
  //       title: attrs.title,
  //       elements: attrs.headings.map((item) => {
  //         return {
  //           ...item,
  //           level: item.level - 1
  //         };
  //       })
  //     };
  //   })[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(extractJsonLd(data.seo.jsonLd))
        }}
      />
      <Breadcrumbs
        breadcrumbs={[
          {
            name: "Start",
            uri: "/"
          },
          {
            ...data.category
          },
          {
            ...data.subcategory
          },
          {
            name: data.title,
            uri: data.uri
          }
        ]}
      />
      {/* <Hero
        excerpt={data.excerpt}
        image={data.image}
        title={data.title}
        publishedTime={{
          title: "Data publikacji",
          value: data.seo.openGraph.articleMeta.publishedTime,
        }}
        readingTime={{
          title: data.seo.openGraph.slackEnhancedData.label,
          value: data.seo.openGraph.slackEnhancedData.data,
        }}
        toc={toc}
      /> */}
      <main className="post-main">
        {data.blocks.map((item) => renderBlocks(item))}
      </main>
    </>
  );
}
