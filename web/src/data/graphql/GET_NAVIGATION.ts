import { QueryClient } from "@/lib/clients";
import { gql } from "graphql-request";

const GET_NAVIGATION_QUERIES = {
  explorer: gql`
    query GET_EXPLORER {
      menu(id: "Explorer", idType: NAME) {
        menuItems(first: 80) {
          nodes {
            childItems {
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
        menuItems {
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

export default async function GET_NAVIGATION() {
  try {
    const request = {
      explorer: await QueryClient.request(GET_NAVIGATION_QUERIES.explorer),
      mainCategories: await QueryClient.request(
        GET_NAVIGATION_QUERIES.mainCategories
      ),
      constants: await QueryClient.request(GET_NAVIGATION_QUERIES.constants),
    };
    return request;
  } catch (err) {
    throw new Error(`Błąd połączenia z nawigacją: ${err}`);
  }
}
