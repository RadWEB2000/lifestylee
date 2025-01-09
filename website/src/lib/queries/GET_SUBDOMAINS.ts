import { gql } from "graphql-request";

export const GET_SUBDOMAINS = gql`
  query getSubdomains {
    subdomains {
      nodes {
        name
        slug
        uri
        categoryfields {
          color
        }
      }
    }
  }
`;
