import { QueryClient } from "@/lib/clients";
import { gql } from "graphql-request";

const GET_CATEGORY_QUERY = gql`
  query GET_CATEGORY($id: ID!) {
    category(id: $id, idType: URI) {
      name
      uri
      description
      posts {
        nodes {
          uri
          title(format: RENDERED)
          excerpt(format: RENDERED)
          featuredImage {
            node {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet(size: MEDIUM)
              title
            }
          }
        }
      }
    }
  }
`;

type GET_CATEGORY_REQUEST = {
  category: {
    name: string;
    uri: string;
    description: string;
    posts: {
      nodes: Array<{
        uri: string;
        title: string;
        excerpt: string;
        featuredImage: {
          node: T_WP_FEATURED_IMAGE;
        };
      }>;
    };
  };
};

type GET_CATEGORY_RESPONSE = {
  title: string;
  uri: string;
  content: string;
  posts: Array<{
    uri: string;
    title: string;
    excerpt: string;
    image: T_WP_FEATURED_IMAGE;
  }>;
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
      content: request.category.description,
      title: request.category.name,
      uri: request.category.uri,
      posts: request.category.posts.nodes.map((item) => {
        return {
          uri: item.uri,
          title: item.title,
          excerpt: item.excerpt,
          image: item.featuredImage.node,
        };
      }),
    };

    return response;
  } catch (err) {
    throw new Error(`❌ Błąd przy pobieraniu danych GET_POSTS: ${err}`);
  }
}
