import { gql } from "graphql-request";
import { QueryClient } from "@/clients/QueryClient";

const GET_CATEGORY_PAGE_QUERY = gql`
  query GET_CATEGORY_PAGE {
    category(id: "/category/polityka/polska", idType: URI) {
      name
      slug
      uri
      categoryFields {
        colors {
          foreground
          background
        }
      }
      description
      seo {
        canonicalUrl
        description
        jsonLd {
          raw
        }
        openGraph {
          alternateLocales
          description
          facebookMeta {
            admins
            appId
          }
          image {
            height
            secureUrl
            type
            url
            width
          }
          locale
          siteName
          slackEnhancedData {
            data
            label
          }
          title
          twitterMeta {
            appCountry
            card
            creator
            description
            googleplayApp {
              id
              name
              url
            }
            image
            ipadApp {
              id
              name
              url
            }
            iphoneApp {
              id
              name
              url
            }
            playerStream
            playerStreamContentType
            playerUrl
            site
            title
          }
          type
          updatedTime
          url
          videoMeta {
            duration
            url
          }
        }
        robots
        title
      }
    }
  }
`;

type GET_CATEGORY_PAGE_REQUEST = {
  category: {
    name: string;
    slug: string;
    uri: string;
    categoryFields: {
      colors: {
        foreground: string;
        background: string;
      };
    };
    description: string;
  };
};
