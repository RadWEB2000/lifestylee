// import { generateUri } from "@/func/index";
import "@/css/views/post_view.scss";
import { Breadcrumbs } from "@/utils/index";
import { Hero } from "@/v-article/index";
import GET_POST from "@/queries/GET_POST";
import {
  tTableOfContentsAttrs,
  tTableOfContentsElements,
} from "@/utils/TableOfContents/TableOfContents.models";
import { renderBlocks } from "@/lib/functions";

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

export default async function PostPage(props: tPostPage) {
  const path = await (await props).params;
  const data = await GET_POST(path.post);
  // console.log(`slug:`, await props);

  const toc: tTableOfContentsElements = data.blocks
    .filter((item) => item.name === "rank-math/toc-block")
    .map((item) => {
      const attrs: tTableOfContentsAttrs = JSON.parse(item.attributesJSON);
      return {
        title: attrs.title,
        elements: attrs.headings.map((item) => {
          return {
            ...item,
            level: item.level - 1,
          };
        }),
      };
    })[0];

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          {
            name: "Start",
            uri: "/",
          },
          {
            ...data.category,
          },
          {
            ...data.subcategory,
          },
          {
            name: data.title,
            uri: data.uri,
          },
        ]}
      />
      <Hero
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
      />
      <main>{data.blocks.map((item) => renderBlocks(item))}</main>
    </>
  );
}
