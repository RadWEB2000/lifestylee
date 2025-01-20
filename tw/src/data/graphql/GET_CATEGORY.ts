import { gql } from "graphql-request";
import { QueryClient } from "@/clients/QueryClient";
import { getExcerpt } from "@/lib/functions";

type GET_CATEGORY_REQUEST = {
  category: {
    seo: {
      canonicalUrl: string;
      description: string;
      jsonLd: {
        raw: string;
      };
      robots: Array<string>;
      title: string;
      openGraph: {
        description: string;
        siteName: string;
        title: string;
        type: string;
        twitterMeta: {
          card: string;
          description: string;
          title: string;
        };
      };
    };
    name: string;
    description: string;
    posts: {
      nodes: Array<{
        title: string;
        uri: string;
        slug: string;
        postFields: {
          mainCategory: {
            nodes: Array<T_WORDPRESS_TAXONOMY>;
          };
        };
        featuredImage: {
          node: T_WORDPRESS_FEATUREDIMAGE;
        };
        excerpt: string;
        date: string;
        categories: {
          nodes: Array<T_WORDPRESS_TAXONOMY>;
        };
        status: T_WORDPRESS_POST_STATUS;
      }>;
    };
    categories: {
      nodes: Array<T_WORDPRESS_TAXONOMY>;
    };
  };
};

type GET_CATEGORY_RESPONSE = {
  seo: {
    canonicalUrl: string;
    description: string;
    other: {
      jsonLd: string;
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
    title: string;
    openGraph: {
      description: string;
      locale: string;
      siteName: string;
      title: string;
      type: string;
      twitterMeta: {
        card: string;
        description: string;
        title: string;
      };
    };
  };
  page: {
    title: string;
    content: string;
  };
  posts: Array<{
    title: string;
    uri: string;
    slug: string;
    subdomain: T_WORDPRESS_TAXONOMY;
    image: T_WORDPRESS_FEATUREDIMAGE;
    excerpt: string;
    date: string;
    category: T_WORDPRESS_TAXONOMY;
    status: T_WORDPRESS_POST_STATUS;
  }>;
  menu: Array<T_WORDPRESS_TAXONOMY>;
};

const GET_CATEGORY_QUERY = gql`
  query GET_CATEGORY($id: ID!) {
    category(id: $id, idType: URI) {
      seo {
        canonicalUrl
        description
        jsonLd {
          raw
        }
        robots
        title
        openGraph {
          description
          locale
          siteName
          title
          type
          twitterMeta {
            card
            description
            title
          }
        }
      }
      name
      description
      posts(first: 55) {
        nodes {
          title(format: RENDERED)
          uri
          slug
          postFields {
            mainCategory(first: 1) {
              nodes {
                name
                slug
                uri
              }
            }
          }
          featuredImage {
            node {
              altText
              sourceUrl(size: THUMBNAIL)
              srcSet(size: MEDIUM)
              title(format: RENDERED)
            }
          }
          excerpt(format: RENDERED)
          date
          categories(first: 1) {
            nodes {
              name
              slug
              uri
            }
          }
          status
        }
      }
    }
    categories {
      nodes {
        name
        uri
        slug
      }
    }
  }
`;

export default async function GET_CATEGORY(slug: string) {
  try {
    console.log("test", GET_CATEGORY_QUERY);
    const request: GET_CATEGORY_REQUEST = await QueryClient.request(
      GET_CATEGORY_QUERY,
      {
        id: slug,
      }
    );

    const response: GET_CATEGORY_RESPONSE = {
      menu: request.category.categories.nodes,
      page: {
        content: request.category.description,
        title: request.category.name,
      },
      posts: request.category.posts.nodes.map((item) => {
        return {
          category: item.categories.nodes[0],
          date: item.date,
          excerpt: getExcerpt(item.excerpt, 75),
          image: item.featuredImage.node,
          slug: item.slug,
          status: item.status,
          subdomain: item.postFields.mainCategory.nodes[0],
          title: item.title,
          uri: item.uri,
        };
      }),
      seo: {
        title: request.category.seo.title,
        description: request.category.seo.description,
        openGraph: {
          description: request.category.seo.openGraph.description,
          locale: "pl_PL",
          siteName: request.category.seo.openGraph.siteName,
          title: request.category.seo.openGraph.title,
          type: request.category.seo.openGraph.type,
          twitterMeta: request.category.seo.openGraph.twitterMeta,
        },
        canonicalUrl: request.category.seo.canonicalUrl,
        robots: {
          index: request.category.seo.robots.includes("index"),
          follow: request.category.seo.robots.includes("follow"),
          nocache: request.category.seo.robots.includes("nocache"),
          googleBot: {
            follow: request.category.seo.robots.includes("follow"),
            index: request.category.seo.robots.includes("index"),
          },
        },
        other: {
          jsonLd: request.category.seo.jsonLd.raw,
        },
      },
    };

    return response;
  } catch (error) {
    console.log(`❌ Error fetch post:${error}`);
    throw error;
  }
}
