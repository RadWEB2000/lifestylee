import { tTableOfContents } from "@/utils/TableOfContents/TableOfContents.models";

export type tHero = {
  title: string;
  excerpt: string;
  image: T_WP_FEATURED_IMAGE;
  readingTime: {
    title: string;
    value: string;
  };
  publishedTime: {
    title: string;
    value: string;
  };
  toc: tTableOfContents;
};
