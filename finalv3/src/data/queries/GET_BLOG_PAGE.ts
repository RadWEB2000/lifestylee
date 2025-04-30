import { QueryClient } from "@/lib/configs";
import { gql } from "graphql-request";

const query = gql`
  query BLOG_PAGE_QUERY($first: Int!, $after: String) {
    posts(first: $first, after: $after, where: {orderby: {field: DATE, order: DESC}}) {
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
`;

type request = {
    posts: {
        edges: Array<{
            cursor: string;
            node: {
                articlePage: { introduction: string };
                date: string;
                featuredImage: { node: { altText: string; sourceUrl: string; title: string } } | null;
                title: string;
                uri: string;
                categories: {
                    nodes: Array<{ name: string; uri: string }>;
                };
            };
        }>;
        pageInfo: {
            endCursor: string;
            hasNextPage: boolean;
        };
    };
};

type response = {
    posts: Array<{
        excerpt: string;
        date: string;
        image: {
            alt: string;
            src: string;
            title: string;
        };
        title: string;
        uri: string;
        categories: Array<{
            name: string;
            uri: string;
        }>;
    }>;
    info: {
        endCursor: string;
        hasNextPage: boolean;
    };
};

export default async function GET_BLOG_PAGE(page = 1, postsPerPage = 10): Promise<response> {
    let cursor: string | null = null;

    try {
        for (let i = 1; i < page; i++) {
            const intermediate: request = await QueryClient.request(query, {
                first: postsPerPage,
                after: cursor,
            });

            if (!intermediate.posts.pageInfo.hasNextPage) break;
            cursor = intermediate.posts.pageInfo.endCursor;
        }

        const req: request = await QueryClient.request(query, {
            first: postsPerPage,
            after: cursor,
        });

        const data: response = {
            posts: req.posts.edges.map((item) => {
                const imageNode = item.node.featuredImage?.node;
                return {
                    categories: item.node.categories.nodes,
                    date: item.node.date,
                    excerpt: item.node.articlePage.introduction,
                    image: {
                        alt: imageNode?.altText ?? "",
                        src: imageNode?.sourceUrl ?? "",
                        title: imageNode?.title ?? "",
                    },
                    title: item.node.title,
                    uri: item.node.uri,
                };
            }),
            info: req.posts.pageInfo,
        };

        return data;
    } catch (error) {
        console.error("GraphQL fetch error:", error);
        throw new Error("‼️Błąd przy pobieraniu danych");
    }
}