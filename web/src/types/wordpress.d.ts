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
    | "core/audio"
    | "core/gallery"
    | "core/heading"
    | "core/image"
    | "core/list"
    | "core/paragraph"
    | "core/quote"
    | "core/video"
    | "core/file"
    | "core/code"
    | "core/html"
    | "core/preformatted"
    | "core/table"
    | "core/button"
    | "core/buttons"
    | "core/columns"
    | "core/column"
    | "core/cover"
    | "core/verse"
    | "core/spacer"
    | "core/separator"
    | "core/embed"
    | "core/embed-youtube"
    | "core/embed-twitter"
    | "core/embed-instagram"
    | "core/group"
    | "core/media-text"
    | "core/block"
    | "core/site-title"
    | "core/site-logo"
    | "core/site-tagline"
    | "core/navigation"
    | "core/query"
    | "core/post-title"
    | "core/post-content"
    | "core/post-date"
    | "core/post-excerpt"
    | "core/post-featured-image"
    | "core/post-terms"
    | "core/freeform"
    | "core/shortcode"
    | "core/embed-facebook"
    | "core/embed-soundcloud"
    | "core/embed-spotify"
    | "core/embed-flickr"
    | "core/embed-tumblr"
    | "core/embed-wordpress"
    | "core/embed-dailymotion"
    | "core/embed-kickstarter"
    | "core/navigation-link"
    | "core/read-more"
    | "core/latest-posts"
    | "core/latest-comments"
    | "core/search"
    | "core/tag-cloud"
    | "core/archives"
    | "core/categories"
    | "core/rss"
    | "core/calendar"
    | "core/page-list"
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
}
