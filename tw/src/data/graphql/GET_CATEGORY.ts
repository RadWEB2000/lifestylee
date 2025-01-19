import { gql } from "graphql-request";
import { QueryClient } from "@/clients/QueryClient";

type GET_CATEGORY_REQUEST = {
  category: {
    seo: {
      canonicalUrl: string;
      description: string;
      jsonLd: {
        raw: string;
      };
      robots: Array<string>;
      title: string;
      openGraph: {
        description: string;
        locale: string;
        siteName: string;
        title: string;
        type: string;
        twitterMeta: {
          card: string;
          description: string;
          title: string;
        };
      };
    };
    name: string;
    slug: string;
    uri: string;
    description: string;
    posts: {
      nodes: Array<{
        title: string;
        uri: string;
        slug: string;
        postFields: {
          mainCategory: {
            nodes: Array<T_WORDPRESS_TAXONOMY>;
          };
        };
        featuredImage: {
          node: T_WORDPRESS_FEATUREDIMAGE;
        };
        excerpt: string;
        date: string;
        categories: {
          nodes: Array<T_WORDPRESS_TAXONOMY>;
        };
        status: T_WORDPRESS_POST_STATUS;
      }>;
    };
    categories: {
      nodes: Array<T_WORDPRESS_TAXONOMY>;
    };
  };
};

const GET_CATEGORY_QUERY = gql`
  query GET_CATEGORY($id: ID!) {
    category(id: $id, idType: URI) {
      seo {
        canonicalUrl
        description
        jsonLd {
          raw
        }
        robots
        title
        openGraph {
          description
          locale
          siteName
          title
          type
          twitterMeta {
            card
            description
            title
          }
        }
      }
      name
      slug
      uri
      description

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

export default async function GET_CATEGORY(slug: string) {
  try {
    console.log("test", GET_CATEGORY_QUERY);
    const request: GET_CATEGORY_REQUEST = await QueryClient.request(
      GET_CATEGORY_QUERY,
      {
        id: slug,
      }
    );
    return request;
  } catch (error) {
    console.log(`❌ Error fetch post:${error}`);
    throw error;
  }
}
