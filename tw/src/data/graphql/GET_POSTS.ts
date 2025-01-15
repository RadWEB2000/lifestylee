import { QueryClient } from "@/clients/QueryClient";
import { gql } from "graphql-request";

type t_GET_POSTS_REQUEST = {
  posts: {
    nodes: Array<{
      title: string;
      uri: string;
      excerpt: string;
      featuredImage: {
        node: {
          altText: string;
          sourceUrl: string;
          srcSet: string;
          title: string;
        };
      };
      slug: string;
      date: string;
      categories: {
        nodes: Array<{
          name: string;
        }>;
      };
      subdomains: {
        nodes: Array<{
          name: string;
        }>;
      };
    }>;
  };
};

type t_GET_POSTS_RESPONSE = {
  posts: Array<{
    title: string;
    uri: string;
    excerpt: string;
    image: {
      altText: string;
      sourceUrl: string;
      srcSet: string;
      title: string;
    };
    slug: string;
    category: string;
    release: string;
    subdomain: string;
  }>;
};

const GET_POSTS_QUERY = gql`
  query GET_POSTS {
    posts {
      nodes {
        title(format: RENDERED)
        uri
        excerpt(format: RENDERED)
        featuredImage {
          node {
            altText
            sourceUrl(size: THUMBNAIL)
            srcSet(size: MEDIUM)
            title(format: RENDERED)
          }
        }
        slug
        date
        categories(first: 1) {
          nodes {
            name
          }
        }
        subdomains(first: 1) {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export default async function GET_POSTS() {
  try {
    const data: t_GET_POSTS_REQUEST = await QueryClient.request(
      GET_POSTS_QUERY
    );
    const response: t_GET_POSTS_RESPONSE = {
      posts: data.posts.nodes.map((item) => {
        return {
          category: item.categories.nodes[0].name,
          release: item.date,
          excerpt: item.excerpt,
          image: {
            altText: item.featuredImage.node.altText,
            sourceUrl: item.featuredImage.node.sourceUrl,
            srcSet: item.featuredImage.node.srcSet,
            title: item.featuredImage.node.title,
          },
          slug: item.slug,
          subdomain: item.subdomains.nodes[0].name,
          title: item.title,
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
