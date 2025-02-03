export {};
declare global {
  type T_POST_STATUS =
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "trash"
    | "auto-draft"
    | "inherit";

  type T_GUTENBERG_BLOCK_NAMES =
    | "core/heading"
    | "core/image"
    | "core/list"
    | "core/paragraph"
    | "core/quote"
    | "core/video"
    | "core/code"
    | "core/button"
    | "core/buttons"
    | "core/spacer"
    | "core/embed"
    | "core/media-text"
    | "rank-math/howto-block"
    | "rank-math/faq-block"
    | "rank-math/toc-block"
    | "acf/highlighted-posts";

  type T_POST_PREMIUM_STATUS =
    | "null"
    | "basic"
    | "standard"
    | "advanced"
    | "pro";

  type T_WP_FEATURED_IMAGE = {
    altText: string;
    sourceUrl: string;
    srcSet?: string;
    title: string;
  };
  type T_WP_TAXONOMY = {
    name: string;
    uri: string;
  };
  type T_GUTENBERG_BLOCK = {
    attributesJSON: string;
    dynamicContent: string | null;
    name: T_GUTENBERG_BLOCK_NAMES;
    order: number;
    saveContent: string;
  };

  type T_CORE_HEADING_BLOCK = {
    content: string;
    anchor: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };

  type T_CORE_PARAGRAPH_BLOCK = {
    content: string;
    anchor: string;
  };

  type T_CORE_IMAGE_BLOCK = {
    url: string;
    alt: string;
    caption: string;
    title: string;
    anchor: string;
  };

  type T_CORE_LIST_BLOCK = {
    ordered: boolean;
    values: string;
    anchor: string;
  };

  type T_CORE_LIST_ITEM_BLOCK = {
    order: number;
    content: string;
    anchor: string;
  };

  type T_CORE_MEDIA_WITH_TEXT_BLOCK = {
    image: {
      alt: string;
      url: string;
      anchor: string;
    };
    content: Array<
      | ({ name: "core/heading" } & T_CORE_HEADING_BLOCK)
      | ({ name: "core/paragraph" } & T_CORE_PARAGRAPH_BLOCK)
    >;
  };

  type T_CORE_BUTTON_BLOCK = {
    url: string;
    title: string;
    text: string;
    linkTarget: string;
    rel: string;
  };

  type T_CORE_BUTTONS_BLOCK = {
    buttons: Array<T_CORE_BUTTON_BLOCK>;
  };

  type T_ACF_HIGHLIGHTED_POSTS_BLOCK = {
    title: string;
    content: string;
    posts?: Array<{
      title: string;
      url: string;
      target: string;
    }>;
  };
}
