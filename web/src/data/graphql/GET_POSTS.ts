import { QueryClient } from "@/clients/index";
import { gql } from "graphql-request";

const GET_POSTS_QUERY = gql`
  query GET_POSTS {
    posts(first: 15) {
      nodes {
        uri
        title(format: RENDERED)
        excerpt(format: RENDERED)
        featuredImage {
          node {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet(size: THUMBNAIL)
            title(format: RENDERED)
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
    }>;
  };
};

type GET_POSTS_RESPONSE = Array<{
  uri: string;
  title: string;
  excerpt: string;
  image: T_WP_FEATURED_IMAGE;
}>;

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
      };
    });
    return response;
  } catch (err) {
    throw new Error(`❌ Błąd przy pobieraniu danych GET_POSTS: ${err}`);
  }
}
