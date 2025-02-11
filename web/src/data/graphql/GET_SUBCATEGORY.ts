import { QueryClient } from "@/lib/clients";
import { getReleaseDate } from "@/lib/functions";
import { gql } from "graphql-request";

const GET_SUBCATEGORY_QUERY = gql`
  query GET_SUBCATEGORY($id: ID!) {
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
      description
      slug
      contentCategoryFields {
        entry
      }
      posts(first: 45) {
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
`;

type GET_SUBCATEGORY_REQUEST = {
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
    name: string;
    description: string;
    contentCategoryFields: {
      entry: string;
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
  };
};

type GET_SUBCATEGORY_RESPONSE = {
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
    content: string;
    entry: string;
    posts: Array<{
      uri: string;
      title: string;
      excerpt: string;
      image: T_WP_FEATURED_IMAGE;
      subcategory: T_WP_TAXONOMY;
      release: string;
      category: T_WP_TAXONOMY;
    }>;
  };
};

export default async function GET_SUBCATEGORY(pathname: string) {
  if (!pathname) {
    console.log(`Błędny pathname: ${pathname}`);
    throw new Error(`Błędny pathname: ${pathname}`);
  }
  try {
    const request: GET_SUBCATEGORY_REQUEST = await QueryClient.request(
      GET_SUBCATEGORY_QUERY,
      {
        id: pathname ? pathname : "/biznes/waluty",
      }
    );
    console.log(`content`, request.category.description);

    const response: GET_SUBCATEGORY_RESPONSE = {
      page: {
        content: request.category.description,
        entry: request.category.contentCategoryFields.entry,
        title: request.category.name,
        posts: request.category.posts.nodes.map((item) => {
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
