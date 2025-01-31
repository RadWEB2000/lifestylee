// import { generateUri } from "@/func/index";
import "@/css/views/post_view.scss"
import { Breadcrumbs } from "@/utils/index";
import { Hero } from "@/v-article/index";
import GET_POST from "@/queries/GET_POST";
import {
  tTableOfContentsAttrs,
  tTableOfContentsElements,
} from "@/utils/TableOfContents/TableOfContents.models";
import { Heading, List, Paragraph, Picture } from "@/blocks/index";
import { tList } from "@/blocks/List";

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
  console.log(`slug:`, await props);

  const toc: tTableOfContentsElements = data.blocks
    .filter(
      (item) =>
        item.name === "core/group" || item.name === "rank-math/toc-block"
    )
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
      <main>
        {
          data.blocks.map((item) => {
            switch(item.name){
              case "core/heading":
                const heading:T_CORE_HEADING_BLOCK = JSON.parse(item.attributesJSON);
                return <Heading {...heading} />
                case "core/paragraph":
                  const paragraph:T_CORE_PARAGRAPH_BLOCK = JSON.parse(item.attributesJSON);
                  return <Paragraph {...paragraph} />
                case "core/image":
                  const image:T_CORE_IMAGE_BLOCK = JSON.parse(item.attributesJSON);
                  return <Picture {...image} />
                case "core/list":
                  const list:tList = {
                    wrapper:JSON.parse(item.attributesJSON),
                    items:item.innerBlocks ? item.innerBlocks.map((item) => {
                      return {
                        order:item.order,
                        anchor:JSON.parse(item.attributesJSON).anchor,
                        content:JSON.parse(item.attributesJSON).content
                      }
                    }) : []
                  }
                  return <List {...list} />;
                  case "core/columns":
                    console.log('block', item);
                    return <b>BLOK</b>
            }
          })
        }
        {/* <p dangerouslySetInnerHTML={{ __html: data.content }} /> */}
      </main>
    </>
  );
}
