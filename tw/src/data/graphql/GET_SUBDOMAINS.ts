import { gql } from "graphql-request";
import { QueryClient } from "@/clients/QueryClient";

type t_GET_SUBDOMAINS_REQUEST = {
  subdomains: {
    nodes: Array<{
      name: string;
      slug: string;
      uri: string;
      categoryfields: {
        color: string;
      };
    }>;
  };
};

type t_GET_SUBDOMAINS_RESPONSE = {
  subdomains: Array<{
    name: string;
    slug: string;
    uri: string;
    color: string;
  }>;
};

const GET_SUBDOMAINS_QUERY = gql`
  query GET_SUBDOMAINS {
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

export default async function GET_SUBDOMAINS() {
  try {
    const data: t_GET_SUBDOMAINS_REQUEST = await QueryClient.request(
      GET_SUBDOMAINS_QUERY
    );
    const response: t_GET_SUBDOMAINS_RESPONSE = {
      subdomains: data.subdomains.nodes.map((item) => {
        return {
          color: item.categoryfields.color,
          name: item.name,
          slug: item.slug,
          uri: item.uri,
        };
      }),
    };
    return response;
  } catch (error) {
    console.log(`❌ Error fetch post: ${error}`);
    throw error;
  }
}
