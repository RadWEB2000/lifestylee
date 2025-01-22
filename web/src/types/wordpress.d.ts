export {};
declare global {
  type T_WORDPRESS_POST_STATUS =
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "trash"
    | "auto-draft"
    | "inherit";

  type T_WORDPRESS_METAIMAGE = {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  type T_WORDPRESS_FEATUREDIMAGE = {
    altText: string;
    sourceUrl: string;
    srcSet: string;
    title: string;
  };

  type T_WORDPRESS_TAXONOMY = {
    name: string;
    slug: string;
    uri: string;
  };

  type T_ARTICLE_METADATA = {
    title: string;
    description: string;
    alternates: {
      canonical: string;
      languages?: Record<string, string>;
    };
    openGraph: {
      url: string;
      siteName: string;
      images: Array<T_WORDPRESS_METAIMAGE> | T_WORDPRESS_METAIMAGE;
      type: string;
      locale: string;
      publishedTime: string;
      modifiedTime: string;
      authors?: Array<string>;
      tags: Array<string>;
    };
    twiter: {
      card: string;
      title: string;
      description: string;
      images: Array<string>;
      site?: string | null;
      creator?: string | null;
    };
    robots: {
      index: boolean;
      follow: boolean;
      nocache: boolean;
      googleBot: {
        index: boolean;
        follow: boolean;
      };
    };
    other: {
      jsonLd: string;
    };
  };
}
