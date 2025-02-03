// import { generateUri } from "@/func/index";
import "@/css/views/post_view.scss";
import { Breadcrumbs } from "@/utils/index";
import { Hero } from "@/v-article/index";
import GET_POST from "@/queries/GET_POST";
import {
  tTableOfContentsAttrs,
  tTableOfContentsElements,
} from "@/utils/TableOfContents/TableOfContents.models";
import {
  Buttons,
  Heading,
  HighlightedPosts,
  List,
  MediaWithText,
  Paragraph,
  Picture,
} from "@/blocks/index";
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
      <main>
        {data.blocks.map((item) => {
          switch (item.name) {
            case "core/heading":
              const heading: T_CORE_HEADING_BLOCK = JSON.parse(
                item.attributesJSON
              );
              return <Heading {...heading} />;
            case "core/paragraph":
              const paragraph: T_CORE_PARAGRAPH_BLOCK = JSON.parse(
                item.attributesJSON
              );
              return <Paragraph {...paragraph} />;
            case "core/image":
              const image: T_CORE_IMAGE_BLOCK = JSON.parse(item.attributesJSON);
              return <Picture {...image} />;
            case "core/list":
              const list: tList = {
                wrapper: JSON.parse(item.attributesJSON),
                items: item.innerBlocks
                  ? item.innerBlocks.map((item) => {
                      return {
                        order: item.order,
                        anchor: JSON.parse(item.attributesJSON).anchor,
                        content: JSON.parse(item.attributesJSON).content,
                      };
                    })
                  : [],
              };
              return <List {...list} />;
            case "core/media-text":
              const imageData = JSON.parse(item.attributesJSON);

              const mediaWithText: T_CORE_MEDIA_WITH_TEXT_BLOCK = {
                image: {
                  alt: imageData.mediaAlt,
                  anchor: imageData.anchor,
                  url: imageData.mediaUrl,
                },
                content: item.innerBlocks
                  ? item.innerBlocks.map((item) => {
                      const contentData = JSON.parse(item.attributesJSON);
                      return {
                        ...contentData,
                        name: item.name,
                        ...(item.name === "core/heading"
                          ? { level: contentData.level }
                          : {}),
                      };
                    })
                  : [],
              };
              return <MediaWithText {...mediaWithText} />;
            case "core/buttons":
              const buttonsList = item;
              const buttons: T_CORE_BUTTONS_BLOCK = {
                buttons: buttonsList.innerBlocks
                  ? buttonsList.innerBlocks.map((item) => {
                      const buttonProperties: T_CORE_BUTTON_BLOCK = JSON.parse(
                        item.attributesJSON
                      );

                      return {
                        ...buttonProperties,
                      };
                    })
                  : [],
              };

              return <Buttons {...buttons} />;
            case "acf/highlighted-posts":
              const highlightedPosts: T_ACF_HIGHLIGHTED_POSTS_BLOCK = {
                title: JSON.parse(item.attributesJSON).data.title,
                content: JSON.parse(item.attributesJSON).data.content,
                posts: Object.keys(JSON.parse(item.attributesJSON).data)
                  .filter(
                    (key) =>
                      key.startsWith("recommendations_") &&
                      key.endsWith("_recommendation")
                  )
                  .map((key) => JSON.parse(item.attributesJSON).data[key]),
              };

              console.log("highlightedPosts", highlightedPosts);
              return <HighlightedPosts {...highlightedPosts} />;
          }
        })}
        {/* <p dangerouslySetInnerHTML={{ __html: data.content }} /> */}
      </main>
    </>
  );
}
