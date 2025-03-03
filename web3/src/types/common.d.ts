import { SVGAttributes } from "react";

export {};
declare global {
  type tSVGFile = {
    attributes?: SVGAttributes<SVGElement>;
  };
  type tTheme = "dark" | "light";
  type tCommonBlogCard = {
    uri: string;
    title: string;
    excerpt: string;
    image: T_WP_FEATURED_IMAGE;
    category: T_WP_TAXONOMY;
    subcategory: T_WP_TAXONOMY;
    date: {
      time: string;
      release: string;
    };
  };
}
