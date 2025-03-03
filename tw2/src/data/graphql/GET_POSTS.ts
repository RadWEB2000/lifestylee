import { QueryClient } from "@/clients/index";
import { getReleaseDate } from "@/lib/functions";
import { gql } from "graphql-request";

const GET_POSTS_QUERY = gql`
  query GET_POSTS {
    posts(first: 55) {
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
`;

type GET_POSTS_REQUEST = {
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

type GET_POSTS_RESPONSE = Array<tCommonBlogCard>;

export default async function GET_POSTS() {
  try {
    const request: GET_POSTS_REQUEST = await QueryClient.request(
      GET_POSTS_QUERY
    );
    const response: GET_POSTS_RESPONSE = request.posts.nodes.map((item) => {
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
    });
    return response;
  } catch (err) {
    throw new Error(`❌ Błąd przy pobieraniu danych GET_POSTS: ${err}`);
  }
}
