import { QueryClient } from "@/lib/configs";
import { gql } from "graphql-request";

const query: string = gql`
  query GET_MAIN_NAVIGATION {
    menu(id: "primary", idType: LOCATION) {
      menuItems(first: 100) {
        nodes {
          label
          uri
          id
          parentId
          childItems(first: 100) {
            nodes {
              label
              uri
              id
              parentId
            }
          }
        }
      }
    }
  }
`;

type request = {
  menu: {
    menuItems: {
      nodes: Array<{
        label: string;
        uri: string;
        id: string;
        parentId: string | null;
        childrenItems: {
          nodes: Array<{
            label: string;
            uri: string;
            id: string;
            parentId: string;
          }> | null;
        };
      }>;
    };
  };
};

type response = Array<{
  label: string;
  uri: string;
  submenu: Array<{
    label: string;
    uri: string;
  }>;
}>;

export default async function GET_MAIN_NAVIGATION() {
  try {
    const request: request = await QueryClient.request(query);

    const response: response = request.menu.menuItems.nodes
      .filter((item) => item.parentId === null)
      .map((item) => {
        return {
          label: item.label,
          uri: item.uri,
          submenu:
            item.childrenItems.nodes !== null &&
            item.childrenItems.nodes.map((item) => {
              return {
                label: item.label,
                uri: item.uri
              };
            })
        };
      });

    return response;
  } catch {
    throw new Error("‼️Błąd przy pobieraniu danych");
  }
}
