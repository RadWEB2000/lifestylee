import { QueryClient } from "@/lib/configs";
import { gql } from "graphql-request";

const query = gql`
query HOME_PAGE_QUERY {
  tags(first: 15, where: {orderby: COUNT, order: DESC, hideEmpty: true}) {
    nodes {
      name
      uri
    }
  }
  categories(where: {hideEmpty: true, parent: 0}, first: 45) {
    nodes {
      name
      categoryPage {
        entry
      }
      posts(first: 6, where: {orderby: {field: DATE, order: ASC}}) {
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
            entry
          }
        }
      }
    }
  }
  page(id: "/", idType: URI) {
    title(format: RENDERED)
    homePage {
      excerpt
      headings {
        recommendations
        topics
      }
    }
    seo {
      title
      description
      jsonLd {
        raw
      }
      openGraph {
        title
        description
      }
    }
  }
  posts(first: 8) {
    nodes {
      title(format: RENDERED)
      uri
      date
    }
  }
}
`

type request = {
  tags: {
    nodes: Array<{
      name: string;
      uri: string;
    }>
  };
  categories: {
    nodes: Array<{
      name: string;
      categoryPage: {
        entry: string | null;
      };
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
          };
          title: string;
          uri: string;
          articlePage: {
            entry: string | null;
          }
        }>
      }
    }>
  }
  page: {
    title: string;
    homePage: {
      excerpt: string;
      headings: {
        recommendations: string;
        topics: string;
      };
    };
    seo: {
      title: string;
      description: string;
      jsonLd: {
        raw: string;
      };
      openGraph: {
        title: string;
        description: string;
      }
    }
  };
  posts: {
    nodes: Array<{
      title: string;
      uri: string;
      date: string;
    }>
  }
}

type response = {
  topics: {
    title: string;
    list: Array<{
      name: string;
      uri: string;
    }>
  };
  sponsors: {
    title: string;
    posts: Array<{
      title: string;
      uri: string;
      date: string;
    }>
  };
  page: {
    seo: {
      metaTitle: string;
      metaDescription: string;
      openGraphTitle: string;
      openGraphDescription: string;
      jsonLd: string;
    };
    title: string;
    excerpt: string;
    categories: Array<{
      title: string;
      excerpt: string | null;
      posts: Array<{
        categories: Array<{
          name: string;
          uri: string;
        }>;
        date: string;
        image: {
          alt: string;
          src: string;
          title: string;
        };
        title: string;
        uri: string;
        excerpt: string | null;
      }>
    }>
  }
}

export default async function GET_HOME_PAGE() {
  try {
    const request: request = await QueryClient.request(query);
    const response: response = {
      page: {
        categories: request.categories.nodes.map((item) => {
          return {
            excerpt: item.categoryPage.entry ? item.categoryPage.entry : null,
            title: item.name,
            posts: item.posts.nodes.map((item) => {
              return {
                categories: item.categories.nodes.map((item) => {
                  return {
                    ...item

                  }
                }),
                date: item.date,
                image: {
                  alt: item.featuredImage.node.altText,
                  src: item.featuredImage.node.sourceUrl,
                  title: item.featuredImage.node.title
                },
                title: item.title,
                uri: item.uri,
                excerpt: item.articlePage.entry ? item.articlePage.entry : null,
              }
            })
          }
        }),
        excerpt: request.page.homePage.excerpt,
        seo: {
          metaTitle: request.page.seo.title,
          metaDescription: request.page.seo.description,
          jsonLd: request.page.seo.jsonLd.raw,
          openGraphDescription: request.page.seo.openGraph.description,
          openGraphTitle: request.page.seo.openGraph.title,
        },
        title: request.page.title
      },
      sponsors: {
        title: request.page.homePage.headings.recommendations,
        posts: request.posts.nodes.map((item) => {
          return {
            date: item.date,
            title: item.title,
            uri: item.uri
          }
        })
      },
      topics: {
        title: request.page.homePage.headings.topics,
        list: request.tags.nodes.map((item) => {
          return {
            ...item
          }
        })
      }
    }
    return response
  } catch {
    throw new Error("‼️Błąd przy pobieraniu danych");
  }
}