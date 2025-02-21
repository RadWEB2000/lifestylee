import { QueryClient } from "@/lib/clients";
import { getReleaseDate } from "@/lib/functions";
import { gql } from "graphql-request";

const GET_CATEGORY_QUERY = gql`
  query GET_CATEGORY_PAGE($id: ID!) {
    category(id: $id, idType: URI) {
      seo {
        canonicalUrl
        description
        title
        openGraph {
          description
          title
          siteName
        }
      }
      name
      uri
      description
      contentCategoryFields {
        entry
      }
      children(first: 10) {
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
  }
`;

type GET_CATEGORY_REQUEST = {
  category: {
    seo: {
      canonicalUrl: string;
      description: string;
      title: string;
      openGraph: {
        description: string;
        title: string;
        siteName: string;
      };
    };
    uri:string;
    name: string;
    description: string;
    contentCategoryFields: {
      entry: string;
    };
    children: {
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
};

type GET_CATEGORY_RESPONSE = {
  seo: {
    canonicalUrl: string;
    description: string;
    title: string;
    openGraph: {
      description: string;
      title: string;
      siteName: string;
    };
  };
  page: {
    title: string;
    uri:string;
    content: string;
    entry: string;
    subcategories: Array<{
      title: string;
      uri: string;
      excerpt: string;
      posts: Array<{
        uri: string;
        title: string;
        excerpt: string;
        image: T_WP_FEATURED_IMAGE;
        release: string;
        category: T_WP_TAXONOMY;
        subcategory: T_WP_TAXONOMY;
      }>;
    }>;
  };
};

export default async function GET_CATEGORY(pathname: string) {
  if (!pathname) {
    console.log(`Błędny pathname: ${pathname}`);
    throw new Error(`Błędny pathname: ${pathname}`);
  }

  try {
    const request: GET_CATEGORY_REQUEST = await QueryClient.request(
      GET_CATEGORY_QUERY,
      {
        id: pathname ? pathname : "/biznes",
      }
    );

    const response: GET_CATEGORY_RESPONSE = {
      page: {
        content: request.category.description,
        entry: request.category.contentCategoryFields.entry,
        title: request.category.name,
        uri:request.category.uri,
        subcategories: request.category.children.nodes.map((item) => {
          return {
            excerpt: item.contentCategoryFields.excerpt,
            title: item.name,
            uri: item.uri,
            posts: item.posts.nodes.map((item) => {
              return {
                uri: item.uri,
                title: item.title,
                excerpt: item.excerpt,
                image: item.featuredImage.node,
                release: getReleaseDate({
                  date: item.date,
                  format: "short",
                }),
                category: item.postFields.mainCategory.nodes[0],
                subcategory: item.categories.nodes[0],
              };
            }),
          };
        }),
      },
      seo: {
        ...request.category.seo,
      },
    };

    return response;
  } catch (err) {
    throw new Error(`❌ Błąd przy pobieraniu danych GET_POSTS: ${err}`);
  }
}
