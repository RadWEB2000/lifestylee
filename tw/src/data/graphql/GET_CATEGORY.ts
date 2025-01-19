import { gql } from "graphql-request";
// import { QueryClient } from "@/clients/QueryClient";

const GET_CATEGORY_QUERY = gql`
  query GET_CATEGORY_PAGE {
    category(id: "/polityka/polska", idType: URI) {
      seo {
        canonicalUrl
        description
        jsonLd {
          raw
        }
        robots
        title
        openGraph {
          articleMeta {
            author
            modifiedTime
            publishedTime
            publisher
            section
            tags
          }
          alternateLocales
          description
          facebookMeta {
            appId
            admins
          }
          image {
            width
            url
            type
            secureUrl
            height
          }
          locale
          siteName
          title
          updatedTime
          type
          url
          twitterMeta {
            appCountry
            card
            creator
            description
            image
            site
            title
          }
        }
      }
      name
      slug
      uri
      description
      categoryFields {
        colors {
          foreground
          background
        }
      }
      posts(first: 55) {
        nodes {
          title(format: RENDERED)
          uri
          slug
          postFields {
            mainCategory(first: 1) {
              nodes {
                name
                slug
                uri
              }
            }
          }
          featuredImage {
            node {
              altText
              sourceUrl(size: THUMBNAIL)
              srcSet(size: MEDIUM)
              title(format: RENDERED)
            }
          }
          excerpt(format: RENDERED)
          date
          categories(first: 1) {
            nodes {
              name
              slug
              uri
            }
          }
          status
        }
      }
    }
    categories {
      nodes {
        name
        uri
        slug
      }
    }
  }
`;

export default async function GET_CATEGORY() {
  console.log("test", GET_CATEGORY_QUERY);
}
