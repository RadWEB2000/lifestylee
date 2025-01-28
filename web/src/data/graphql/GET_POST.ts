import { QueryClient } from "@/lib/clients";
import { gql } from "graphql-request";

const GET_POST_QUERY = gql`
  query GET_POST($id: ID!) {
    post(id: $id, idType: SLUG) {
      seo {
        canonicalUrl
        description
        jsonLd {
          raw
        }
        openGraph {
          articleMeta {
            modifiedTime
            publishedTime
          }
          description
          image {
            height
            secureUrl
            type
            url
            width
          }
          locale
          siteName
          slackEnhancedData {
            data
            label
          }
          title
          twitterMeta {
            description
            image
            title
          }
          type
          updatedTime
          url
        }
        robots
        title
      }
      title(format: RENDERED)
      uri
      slug
      tags(first: 25) {
        nodes {
          name
          uri
        }
      }
      status
      postFields {
        premium_status
        mainCategory(first: 1) {
          nodes {
            name
            uri
          }
        }
        faq {
          answer
          question
        }
      }
      featuredImage {
        node {
          altText
          sourceUrl(size: MEDIUM_LARGE)
          srcSet(size: MEDIUM)
          title(format: RENDERED)
        }
      }
      excerpt(format: RENDERED)
      date
      blocks {
        attributesJSON
        name
        order
        saveContent
        dynamicContent
        innerBlocks {
          saveContent
          attributesJSON
          dynamicContent
          name
          order
        }
      }
      categories(first: 1) {
        nodes {
          name
          uri
        }
      }
    }
  }
`;

type GET_POST_REQUEST = {
  post: {
    seo: {
      canonicalUrl: string;
      description: string;
      jsonLd: {
        raw: string;
      };
      openGraph: {
        articleMeta: {
          modifiedTime: string;
          publishedTime: string;
        };
        description: string;
        image: {
          height: number;
          secureUrl: string;
          type: string;
          url: string;
          width: number;
        };
        locale: string;
        siteName: string;
        slackEnhancedData: Array<{
          data: string;
          label: string;
        }>;
        title: string;
        twitterMeta: {
          description: string;
          image: string;
          title: string;
        };
        type: string;
        updatedTime: string;
        url: string;
      };
      robots: Array<string>;
      title: string;
    };
    tags: {
      nodes: Array<T_WP_TAXONOMY>;
    };
    status: T_POST_STATUS;
    postFields: {
      premium_status: Array<T_POST_PREMIUM_STATUS>;
      mainCategory: {
        nodes: Array<T_WP_TAXONOMY>;
      };
      faq: Array<{
        answer: string;
        question: string;
      }>;
    };
    featuredImage: {
      node: T_WP_FEATURED_IMAGE;
    };
    excerpt: string;
    date: string;
    blocks: Array<
      T_GUTENBERG_BLOCK & {
        innerBlocks?: Array<T_GUTENBERG_BLOCK>;
      }
    >;
    categories: {
      nodes: Array<T_WP_TAXONOMY>;
    };
  };
};

type GET_POST_RESPONSE = {
  seo: {
    canonicalUrl: string;
    description: string;
    jsonLd: string;
    openGraph: {
      articleMeta: {
        modifiedTime: string;
        publishedTime: string;
      };
      description: string;
      image: {
        height: number;
        secureUrl: string;
        type: string;
        url: string;
        width: number;
      };
      locale: string;
      siteName: string;
      slackEnhancedData: { data: string; label: string };
      title: string;
      twitterMeta: {
        description: string;
        image: string;
        title: string;
      };
      type: string;
      updatedTime: string;
      url: string;
    };
    robots: Array<string>;
    title: string;
  };
  tags: Array<T_WP_TAXONOMY>;
  status: T_POST_STATUS;
  premiumStatus: T_POST_PREMIUM_STATUS;
  category: T_WP_TAXONOMY;
  faq: Array<{
    answer: string;
    question: string;
  }>;
  image: T_WP_FEATURED_IMAGE;
  excerpt: string;
  date: string;
  blocks: Array<
    T_GUTENBERG_BLOCK & {
      innerBlocks?: Array<T_GUTENBERG_BLOCK>;
    }
  >;
  subcategory: T_WP_TAXONOMY;
};

export default async function GET_POST(slug: string) {
  if (!slug) {
    console.log(`Błędny slug: ${slug}`);
    throw new Error(`Błędny slug: ${slug}`);
  }

  try {
    const request: GET_POST_REQUEST = await QueryClient.request(
      GET_POST_QUERY,
      {
        id: slug,
      }
    );
    const response: GET_POST_RESPONSE = {
      blocks: request.post.blocks,
      category: request.post.postFields.mainCategory.nodes[0],
      date: request.post.date,
      excerpt: request.post.excerpt,
      faq: request.post.postFields.faq,
      image: request.post.featuredImage.node,
      premiumStatus: request.post.postFields.premium_status[0],
      status: request.post.status,
      subcategory: request.post.categories.nodes[0],
      tags: request.post.tags.nodes,
      seo: {
        canonicalUrl: request.post.seo.canonicalUrl,
        description: request.post.seo.description,
        jsonLd: request.post.seo.jsonLd.raw,
        openGraph: {
          ...request.post.seo.openGraph,
          slackEnhancedData: request.post.seo.openGraph.slackEnhancedData.map(
            (item) => {
              return {
                data: item.data,
                label: item.label,
              };
            }
          )[0],
        },
        robots: request.post.seo.robots,
        title: request.post.seo.title,
      },
    };
    return response;
  } catch (err) {
    throw new Error(`❌ Błąd przy pobieraniu danych GET_POSTS: ${err}`);
  }
}
