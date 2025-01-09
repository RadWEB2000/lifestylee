export {};

declare global {
  type tPostSEO = {
    canonicalUrl: string;
    description: string;
    jsonLd: string;
    openGraph: {
      description: string;
      locale: string;
      siteName: string;
      title: string;
      type: string;
      updatedTime: string;
      url: string;
    };
    robots: Array<string>;
    title: string;
  };
  type tPostPage = {
    slug: string;
    subdomain: tLink;
    category: tLink;
    tags: Array<tLink>;
    title: string;
    uri: string;
    excerpt: string;
    featuredImage: tImage;
    blocks: Array<{
      attributesJSON: string;
      dynamicContent: string;
      name: string;
      order: number;
      originalContent: string;
    }>;
    content: string;
    toc?: string;
    date: {
      publish: string;
      modified: string;
    };
  };

  type tGetPostRequest = {
    post: {
      seo: {
        breadcrumbTitle: string;
        canonicalUrl: string;
        description: string;
        focusKeywords: Array<string>;
        isPillarContent: boolean;
        fullHead: string;
        jsonLd: {
          raw: string;
        };
        openGraph: {
          description: string;
          locale: string;
          siteName: string;
          title: string;
          type: string;
          updatedTime: string;
          url: string;
        };
        robots: Array<string>;
        seoScore: {
          badgeHtml: string;
          hasFrontEndScore: boolean;
          rating: string;
          score: number;
        };
        title: string;
      };
      slug: string;
      subdomains: {
        nodes: Array<tTaxonomyLink>;
      };
      categories: {
        nodes: Array<tTaxonomyLink>;
      };
      tags: {
        nodes: Array<tTaxonomyLink>;
      };
      title: string;
      uri: string;
      excerpt: string;
      featuredImage: {
        node: tImage & {
          srcSet: string;
        };
      };
      blocks: Array<{
        attributesJSON: string;
        dynamicContent: string;
        name: string;
        order: number;
        originalContent: string;
      }>;
      blocksJSON: string;
      content: string;
      date: string;
      dateGTM: string;
      modified: string;
    };
  };

  type tGetSubdomainsRequest = {
    subdomains: {
      nodes: Array<
        tTaxonomyLink & {
          categoryfields: {
            color: string;
          };
        }
      >;
    };
  };

  type tSubdomains = Array<
    tLink & {
      color: string;
    }
  >;

  type tGetPostsRequest = {
    posts: {
      nodes: Array<{
        title: string;
        uri: string;
      }>;
    };
  };

  type tPosts = Array<tLink>;
}
