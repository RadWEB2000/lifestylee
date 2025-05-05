import { QueryClient } from "@/lib/configs";
import { gql } from "graphql-request";

const query = gql`
    query CATEGORY_PAGE_QUERY ($id: ID!){
  category(id: $id, idType: URI) {
    categoryPage {
      entry
      excerpt
      content
    }
    name
    uri
    count
    children(where: {orderby: COUNT, order: DESC}, first: 15) {
      nodes {
        name
        uri
      }
    }
    posts {
      nodes {
         categories(first: 2) {
            nodes {
              name
              uri
            }
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
          articlePage {
            introduction
          }
      }
    }
    seo {
      title
      description
      openGraph {
        description
        title
      }
    }
  }
}
`

type request = {
    category: {
        categoryPage: {
            entry: string;
            excerpt: string;
            content: string;
        };
        name: string;
        uri: string;
        count: number;
        children: {
            nodes: Array<{
                name: string;
                uri: string;
            }> | null;
        };
        seo: {
            title: string;
            description: string;
            openGraph: {
                title: string;
                description: string;
            }
        },
        posts: {
            nodes: Array<{
                categories: {
                    nodes: Array<{
                        name: string;
                        uri: string;
                    }>
                };
                date: string;
                featuredImage: {
                    node: {
                        altText: string;
                        sourceUrl: string;
                        title: string;
                    }
                } | null;
                title: string;
                uri: string;
                articlePage: {
                    introduction: string | null;
                }
            }> | null;
        }
    }
}

type response = {
    entry: string;
    excerpt: string;
    content: string;
    name: string;
    uri: string;
    count: number;
    subcategories: Array<{
        name: string;
        uri: string;
    }> | null;
    seo: {
        metaTitle: string;
        metaDescription: string;
        openGraphTitle: string;
        openGraphDescription: string;
    };
    posts: Array<{
        date: string;
        image: {
            alt: string;
            src: string;
            title: string;
        };
        excerpt: string;
        title: string;
        uri: string;
        categories: Array<{
            name: string;
            uri: string;
        }>
    }> | null;
}

export default async function GET_CATEGORY_PAGE(id: string) {
    try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

        const request: request = await QueryClient.request(query, {
            id: id
        })

        const response: response = {
            content: request.category.categoryPage.content,
            entry: request.category.categoryPage.entry,
            excerpt: request.category.categoryPage.excerpt,
            name: request.category.name,
            uri: request.category.uri,
            count: request.category.count,
            subcategories: request.category.children ? request.category.children.nodes : null,
            seo: {
                metaTitle: request.category.seo.title,
                metaDescription: request.category.seo.description,
                openGraphTitle: request.category.seo.openGraph.title,
                openGraphDescription: request.category.seo.openGraph.description,
            },
            posts: request.category.posts.nodes ? request.category.posts.nodes.map((item) => {
                return {
                    date: item.date,
                    image: item.featuredImage ? {
                        alt: item.featuredImage.node.altText,
                        src: item.featuredImage.node.sourceUrl,
                        title: item.featuredImage.node.title
                    } : {
                        alt: '',
                        src: '',
                        title: ''
                    },
                    excerpt: item.articlePage.introduction ? item.articlePage.introduction : '',
                    title: item.title,
                    uri: item.uri,
                    categories: item.categories.nodes
                }
            }
            ) : null
        }

        return response;

    } catch (error) {
        console.log(error);
        throw new Error("‼️Błąd przy pobieraniu danych");
    }
}