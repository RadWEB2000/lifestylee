import {
  Buttons,
  Heading,
  HighlightedPosts,
  List,
  MediaWithText,
  Paragraph,
  Picture,
} from "@/blocks/index";
import { ReactElement } from "react";

type renderBlocks = T_GUTENBERG_BLOCK & {
  innerBlocks?: Array<T_GUTENBERG_BLOCK>;
};

export default function renderBlocks(props: renderBlocks) {
  const attributes = JSON.parse(props.attributesJSON);
  const innerBlocks = props.innerBlocks || [];

  const repair = () => {
    if (props.name === "acf/highlighted-posts") {
      const list = Object.keys(attributes.data)
        .filter(
          (item) =>
            item.startsWith("recommendations_") &&
            item.endsWith("_recommendation")
        )
        .map((item) => attributes.data[item]);
      console.log(`repair`, props);
      console.log(`repair attrs`, attributes);
      console.log("list", list);
    }
  };

  repair();

  const blocks: Record<string, ReactElement | null> = {
    "core/heading": <Heading {...attributes} />,
    "core/paragraph": <Paragraph {...attributes} />,
    "core/image": <Picture {...attributes} />,
    "core/list": (
      <List
        wrapper={{ ...attributes }}
        items={innerBlocks.map((innerItem) => {
          return {
            ...JSON.parse(innerItem.attributesJSON),
          };
        })}
      />
    ),
    "core/media-text": (
      <MediaWithText
        image={{
          alt: attributes.mediaAlt,
          anchor: attributes.anchor,
          url: attributes.mediaUrl,
        }}
        content={innerBlocks.map((item) => {
          const mediaWithTextData = JSON.parse(item.attributesJSON);
          return {
            ...mediaWithTextData,
            name: item.name,
            ...(item.name === "core/heading"
              ? { level: mediaWithTextData.level }
              : {}),
          };
        })}
      />
    ),
    "core/buttons": (
      <Buttons
        buttons={
          innerBlocks
            ? innerBlocks.map((item) => {
                const buttonProperties: T_CORE_BUTTON_BLOCK = JSON.parse(
                  item.attributesJSON
                );
                return {
                  ...buttonProperties,
                };
              })
            : []
        }
      />
    ),
    // TODO DO POPRAWY
    "acf/highlighted-posts": (
      <HighlightedPosts
        {...attributes.data}
        posts={
          attributes.data &&
          Object.keys(attributes.data)
            .filter(
              (item) =>
                item.startsWith("recommendations_") &&
                item.endsWith("_recommendation")
            )
            .map((item) => attributes.data[item])
        }
      />
    ),
  };

  return blocks[props.name] || null;
}
