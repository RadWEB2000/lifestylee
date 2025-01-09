import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query getPostsAlpha {
    posts(first: 15) {
      nodes {
        title(format: RENDERED)
        uri
      }
    }
  }
`;
