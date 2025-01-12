import { QueryClient } from "@/clients/QueryClient";
import { gql } from "graphql-request";

type t_POST_QUERY = {
  slug: string;
};
type t_GET_POST_REQUEST = {
  post: {
    title: string;
    subdomains: {
      nodes: Array<{
        name: string;
        uri: string;
      }>;
    };
    seo: {
      canonicalUrl: string;
      description: string;
      jsonLd: {
        raw: string;
      };
      openGraph: {
        description: string;
        locale: string;
        sitename: string;
        title: string;
        type: string;
        updatedTime: string;
        url: string;
      };
      robots: Array<string>;
      title: string;
    };
    postfields: {
      faq: Array<{
        answer: string;
        question: string;
      }>;
    };
    featuredImage: {
      node: {
        altText: string;
        caption: string;
        description: string;
        sourceUrl: string;
        srcSet: string;
        title: string;
      };
    };
    excerpt: string;
    date: string;
    categories: {
      nodes: Array<{
        name: string;
        uri: string;
      }>;
    };
    tags: {
      nodes: Array<{
        name: string;
        uri: string;
      }>;
    };
    blocks: Array<{
      attributesJSON: string;
      dynamicContent: string;
      originalContent: string;
      name: string;
      order: number;
    }>;
  };
};
type t_GET_POST_RESPONSE = {
  page: {
    structuredData: string;
    title: string;
    subdomain: {
      name: string;
      url: string;
    };
    faq: Array<{
      answer: string;
      question: string;
    }>;
    featuredImage: {
      altText: string;
      caption: string;
      description: string;
      sourceUrl: string;
      srcSet: string;
      title: string;
    };
    excerpt: string;
    release: string;
    category: {
      name: string;
      url: string;
    };
    tags: Array<{
      name: string;
      url: string;
    }>;
    blocks: Array<{
      attributes: string;
      content: {
        original: string;
        dynamic: string;
      };
      name: string;
      order: number;
    }>;
  };
  seo: {
    meta: {
      title: string;
      description: string;
      canonical: string;
      structuredData: string;
      robots: string;
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
  };
};
const GET_POST_QUERY = gql`
  query GET_POST($id: ID!) {
    post(id: $id, idType: SLUG) {
      title(format: RENDERED)
      subdomains(first: 1) {
        nodes {
          name
          uri
        }
      }
      seo {
        canonicalUrl
        description
        jsonLd {
          raw
        }
        openGraph {
          description
          locale
          siteName
          title
          type
          updatedTime
          url
        }
        robots
        title
      }
      postfields {
        faq {
          answer
          question
        }
      }
      featuredImage {
        node {
          altText
          caption(format: RENDERED)
          description(format: RENDERED)
          sourceUrl(size: THUMBNAIL)
          srcSet(size: MEDIUM)
          title
        }
      }
      excerpt(format: RENDERED)
      date
      categories(first: 1) {
        nodes {
          name
          uri
        }
      }
      tags {
        nodes {
          name
          uri
        }
      }
      blocks {
        attributesJSON
        saveContent
        name
        order
      }
    }
  }
`;
export default async function GET_POST(props: t_POST_QUERY) {
  try {
    const data: t_GET_POST_REQUEST = await QueryClient.request(GET_POST_QUERY, {
      id: props.slug,
    });
    const response: t_GET_POST_RESPONSE = {
      page: {
        blocks: data.post.blocks.map((item) => {
          return {
            attributes: item.attributesJSON,
            content: {
              dynamic: item.dynamicContent,
              original: item.originalContent,
            },
            name: item.name,
            order: item.order,
          };
        }),
        category: data.post.categories.nodes.map((item) => {
          return {
            name: item.name,
            url: item.uri,
          };
        })[0],
        excerpt: data.post.excerpt,
        faq: data.post.postfields.faq,
        featuredImage: {
          altText: data.post.featuredImage.node.altText,
          caption: data.post.featuredImage.node.caption,
          description: data.post.featuredImage.node.description,
          sourceUrl: data.post.featuredImage.node.sourceUrl,
          srcSet: data.post.featuredImage.node.srcSet,
          title: data.post.featuredImage.node.title,
        },
        release: data.post.date,
        structuredData: data.post.seo.jsonLd.raw,
        subdomain: data.post.subdomains.nodes.map((item) => {
          return {
            name: item.name,
            url: item.uri,
          };
        })[0],
        tags: data.post.tags.nodes.map((item) => {
          return {
            name: item.name,
            url: item.uri,
          };
        }),
        title: data.post.title,
      },
      seo: {
        meta: {
          canonical: data.post.seo.canonicalUrl,
          description: data.post.seo.description,
          robots: data.post.seo.robots.join(" "),
          structuredData: data.post.seo.jsonLd.raw,
          title: data.post.seo.title,
        },
        openGraph: {
          description: data.post.seo.openGraph.description,
          locale: data.post.seo.openGraph.locale,
          siteName: data.post.seo.openGraph.sitename,
          title: data.post.seo.openGraph.title,
          type: data.post.seo.openGraph.type,
          updatedTime: data.post.seo.openGraph.updatedTime,
          url: data.post.seo.openGraph.url,
        },
      },
    };
    return response;
  } catch (error) {
    console.log(`❌ Error fetch post: ${error}`);
    throw error;
  }
}
