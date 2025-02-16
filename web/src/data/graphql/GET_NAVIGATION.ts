import { QueryClient } from "@/lib/clients";
import { gql } from "graphql-request";

const GET_NAVIGATION_QUERIES = {
  explorer: gql`
    query GET_EXPLORER {
      menu(id: "Explorer", idType: NAME) {
        menuItems(first: 80) {
          nodes {
            childItems(first: 80) {
              nodes {
                uri
                label
              }
            }
            label
          }
        }
      }
    }
  `,
  mainCategories: gql`
    query GET_MAIN_CATEGORIES {
      menu(id: "MainCategories", idType: NAME) {
        menuItems(first: 80) {
          nodes {
            label
            uri
          }
        }
      }
    }
  `,
  constants: gql`
    query GET_CONSTANTS {
      servisConfiguration {
        settingBox {
          global {
            explorer_title
            menu_opening_button
            placeholder
          }
        }
      }
    }
  `,
};

type GET_NAVIGATION_REQUEST = {
  explorer: {
    menu: {
      menuItems: {
        nodes: Array<{
          label: string;
          childItems: {
            nodes:
              | Array<{
                  label: string;
                  uri: string;
                }>
              | [];
          };
        }>;
      };
    };
  };
  constants: {
    servisConfiguration: {
      settingBox: {
        global: {
          explorer_title: string;
          menu_opening_button: string;
          placeholder: string;
        };
      };
    };
  };
  mainCategories: {
    menu: {
      menuItems: {
        nodes: Array<{
          label: string;
          uri: string;
        }>;
      };
    };
  };
};

type GET_NAVIGATION_RESPONSE = {
  explorer: Array<{
    label: string;
    items: Array<{
      label: string;
      uri: string;
    }>;
  }>;
  constants: {
    explorer_title: string;
    menu_button: string;
    search_placeholder: string;
  };
  main_categories: Array<{
    label: string;
    uri: string;
  }>;
};

export default async function GET_NAVIGATION() {
  try {
    const request: GET_NAVIGATION_REQUEST = {
      explorer: await QueryClient.request(GET_NAVIGATION_QUERIES.explorer),
      mainCategories: await QueryClient.request(
        GET_NAVIGATION_QUERIES.mainCategories
      ),
      constants: await QueryClient.request(GET_NAVIGATION_QUERIES.constants),
    };

    const response: GET_NAVIGATION_RESPONSE = {
      constants: {
        explorer_title:
          request.constants.servisConfiguration.settingBox.global
            .explorer_title,
        menu_button:
          request.constants.servisConfiguration.settingBox.global
            .menu_opening_button,
        search_placeholder:
          request.constants.servisConfiguration.settingBox.global.placeholder,
      },
      main_categories: request.mainCategories.menu.menuItems.nodes.map(
        (item) => {
          return {
            ...item,
          };
        }
      ),
      explorer: request.explorer.menu.menuItems.nodes
        .filter((item) => item.childItems.nodes.length > 0)
        .map((item) => {
          return {
            label: item.label,
            items: item.childItems.nodes.map((item) => {
              return {
                ...item,
              };
            }),
          };
        }),
    };

    return response;
  } catch (err) {
    throw new Error(`Błąd połączenia z nawigacją: ${err}`);
  }
}
