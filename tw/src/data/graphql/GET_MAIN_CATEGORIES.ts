// GET_MAIN_CATEGORIES

import { gql } from "graphql-request";
import { QueryClient } from "@/clients/QueryClient";
import getCategoryPath from "@/func/getCategoryPath";

type GET_MAIN_CATEGORIES_REQUEST = {
  categories: {
    nodes: Array<{
      name: string;
      slug: string;
      uri: string;
      categoryFields: {
        colors: {
          foreground: string;
          background: string;
        };
      };
    }>;
  };
};

type GET_MAIN_CATEGORIES_RESPONSE = {
  categories: Array<{
    name: string;
    slug: string;
    uri: string;
    colors: {
      foreground: string;
      background: string;
    };
  }>;
};

const GET_MAIN_CATEGORIES_QUERY = gql`
  query GET_MAIN_CATEGORIES {
    categories(where: { parent: null }, first: 70) {
      nodes {
        name
        slug
        id
        uri
        categoryFields {
          colors {
            foreground
            background
          }
        }
      }
    }
  }
`;

export default async function GET_MAIN_CATEGORIES() {
  try {
    const request: GET_MAIN_CATEGORIES_REQUEST = await QueryClient.request(
      GET_MAIN_CATEGORIES_QUERY
    );

    const response: GET_MAIN_CATEGORIES_RESPONSE = {
      categories: request.categories.nodes.map((item) => {
        return {
          colors: item.categoryFields.colors,
          name: item.name,
          slug: item.slug,
          uri: getCategoryPath(item.uri),
        };
      }),
    };

    return response.categories;
  } catch (error) {
    console.log(`❌ Error fetch post: ${error}`);
    throw error;
  }
}
