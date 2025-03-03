import { gql } from "graphql-request";
import { QueryClient } from "@/lib/clients";
import { getReleaseDate } from "@/lib/functions";

const GET_HOME_PAGE_QUERY = gql`
  query GET_HomePage {
    page(id: "strona-glowna", idType: URI) {
      title(format: RENDERED)
      blocks {
        attributesJSON
        name
        order
      }
      content
      seo {
        title
        description
        canonicalUrl
        openGraph {
          title
          description
        }
      }
    }
    categories(first: 20, where: { parent: null }) {
      nodes {
        name
        uri
        contentCategoryFields {
          excerpt
        }
        posts(first: 5) {
          nodes {
            uri
            title(format: RENDERED)
            excerpt(format: RENDERED)
            featuredImage {
              node {
                sourceUrl(size: MEDIUM_LARGE)
                srcSet(size: THUMBNAIL)
                title(format: RENDERED)
                altText
              }
            }
            date
            categories(first: 1) {
              nodes {
                name
                uri
              }
            }
            postFields {
              mainCategory(first: 1) {
                nodes {
                  name
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`;

type GET_HOME_PAGE_REQUEST = {
  page: {
    title: string;
    content: string;
    blocks: Array<T_GUTENBERG_BLOCK>;
    seo: {
      title: string;
      description: string;
      canonicalUrl: string;
      openGraph: {
        title: string;
        description: string;
      };
    };
  };
  categories: {
    nodes: Array<{
      name: string;
      uri: string;
      contentCategoryFields: {
        excerpt: string;
      };
      posts: {
        nodes: Array<{
          uri: string;
          title: string;
          excerpt: string;
          featuredImage: {
            node: T_WP_FEATURED_IMAGE;
          };
          date: string;
          categories: {
            nodes: Array<T_WP_TAXONOMY>;
          };
          postFields: {
            mainCategory: {
              nodes: Array<T_WP_TAXONOMY>;
            };
          };
        }>;
      };
    }>;
  };
};

type GET_HOME_PAGE_RESPONSE = {
  page: {
    title: string;
    content: string;
    blocks: Array<T_GUTENBERG_BLOCK>;
  };
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
    openGraph: {
      title: string;
      description: string;
    };
  };
  categories: Array<{
    title: string;
    uri: string;
    content: string;
    posts: Array<tCommonBlogCard>;
  }>;
};

export default async function GET_HOME_PAGE() {
  try {
    const request: GET_HOME_PAGE_REQUEST = await QueryClient.request(
      GET_HOME_PAGE_QUERY
    );
    const response: GET_HOME_PAGE_RESPONSE = {
      categories: request.categories.nodes.map((item) => {
        return {
          content: item.contentCategoryFields.excerpt,
          title: item.name,
          uri: item.uri,
          posts: item.posts.nodes.map((item) => {
            return {
              uri: item.uri,
              title: item.title,
              excerpt: item.excerpt,
              image: item.featuredImage.node,
              category: item.postFields.mainCategory.nodes[0],
              subcategory: item.categories.nodes[0],
              date: {
                release: getReleaseDate({
                  date: item.date,
                  format: "short",
                }),
                time: item.date,
              },
            };
          }),
        };
      }),
      page: {
        content: request.page.content,
        blocks: request.page.blocks,
        title: request.page.title,
      },
      seo: { ...request.page.seo },
    };
    return { ...response };
  } catch (err) {
    throw new Error(`❌ Błąd przy pobieraniu danych GET_POSTS: ${err}`);
  }
}
