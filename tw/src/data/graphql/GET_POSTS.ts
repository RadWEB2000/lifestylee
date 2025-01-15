import { gql } from "graphql-request";
import { QueryClient } from "@/clients/QueryClient";
import { getCategoryPath, getExcerpt, getReleaseDate } from "@/lib/functions";

type GET_POSTS_REQUEST = {
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
};

type GET_POST_RESPONSE = {
  posts: Array<{
    title: string;
    uri: string;
    slug: string;
    subdomain: T_WORDPRESS_TAXONOMY;
    image: T_WORDPRESS_FEATUREDIMAGE;
    excerpt: string;
    date: string;
    category: T_WORDPRESS_TAXONOMY;
    status: T_WORDPRESS_POST_STATUS;
  }>;
};

const GET_POSTS_QUERY = gql`
  query GET_POSTS {
    posts(first: 25) {
      nodes {
        title(format: RENDERED)
        uri
        slug
        postFields {
          mainCategory {
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
`;

export default async function GET_POSTS() {
  try {
    const request: GET_POSTS_REQUEST = await QueryClient.request(
      GET_POSTS_QUERY
    );

    const response: GET_POST_RESPONSE = {
      posts: request.posts.nodes.map((item) => {
        return {
          category: item.categories.nodes.map((item) => {
            return {
              name: item.name,
              slug: item.slug,
              uri: getCategoryPath(item.name),
            };
          })[0],
          date: getReleaseDate({
            date: item.date,
            format: "short",
          }),
          excerpt: getExcerpt(item.excerpt, 75),
          image: item.featuredImage.node,
          slug: item.slug,
          status: item.status,
          subdomain: item.postFields.mainCategory.nodes.map((item) => {
            return {
              name: item.name,
              slug: item.slug,
              uri: getCategoryPath(item.name),
            };
          })[0],
          title: item.title,
          uri: item.uri,
        };
      }),
    };

    return response.posts;
  } catch (error) {
    console.log(`❌ Error fetch post: ${error}`);
    throw error;
  }
}
