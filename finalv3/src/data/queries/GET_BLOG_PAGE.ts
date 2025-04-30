import { QueryClient } from "@/lib/configs";
import { gql } from "graphql-request";

const query = gql`
    query BLOG_PAGE_QUERY {
  posts(first: 30, where: {orderby: {field: DATE, order: DESC}}) {
    edges {
      cursor
      node {
        articlePage {
          introduction
        }
        date
        featuredImage {
          node {
            altText
            sourceUrl(size: POST_THUMBNAIL)
            title(format: RENDERED)
          }
        }
        title(format: RENDERED)
        uri
        categories(first: 2) {
          nodes {
            name
            uri
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`

type request = {
    posts: {
        edges: Array<{
            cursor: string;
            node: {
                articlePage: {
                    introduction: string;
                };
                date: string;
                featuredImage: {
                    node: {
                        altText: string;
                        sourceUrl: string;
                        title: string;
                    };
                };
                title: string;
                uri: string;
                categories: {
                    nodes: Array<{
                        name: string;
                        uri: string;
                    }>
                }
            }
        }>,
        pageInfo: {
            endCursor: string;
            hasNextPage: boolean;
        }
    }
}

type response = {
    posts: Array<{
        excerpt: string;
        date: string;
        image: {
            alt: string;
            src: string;
            title: string;
        }
        title: string;
        uri: string;
        categories: Array<{
            name: string;
            uri: string;
        }>
    }>;
    info: {
        endCursor: string;
        hasNextPage: boolean;
    }
}

export default async function GET_BLOG_PAGE() {
    try {
        const request: request = await QueryClient.request(query);
        const response: response = {
            posts: request.posts.edges.map((item) => {
                return {
                    categories: item.node.categories.nodes,
                    date: item.node.date,
                    excerpt: item.node.articlePage.introduction,
                    image: {
                        alt: item.node.featuredImage.node.altText,
                        src: item.node.featuredImage.node.sourceUrl,
                        title: item.node.featuredImage.node.title
                    },
                    title: item.node.title,
                    uri: item.node.uri,
                }
            }),
            info: request.posts.pageInfo
        }
        return response
    } catch (error) {
        console.log('error', error);
        throw new Error("‼️Błąd przy pobieraniu danych");
    }
}