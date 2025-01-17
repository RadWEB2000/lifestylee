import { gql } from "graphql-request";
import { QueryClient } from "@/clients/QueryClient";
import getReleaseDate from "../../lib/functions/getReleaseDate";
import getExcerpt from "../../lib/functions/getExcerpt";
import generateLanguageAlternates from "../../lib/functions/generateLanguageAlternates";

const GET_CATEGORY_PAGE_QUERY = gql`
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
  }
`;

type GET_CATEGORY_PAGE_REQUEST = {
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
        articleMeta: {
          author: string | null;
          modifiedTime: string;
          publishedTime: string;
          publisher: string | null;
          section: string;
          tags: Array<string>;
        };
        alternateLocales: string | Array<string> | null;
        description: string;
        facebookMeta: {
          appId: string;
          admins: string | Array<string> | null;
        };
        image: {
          width: number;
          url: string;
          type: string;
          secureUrl: string;
          height: number;
        };
        locale: string;
        siteName: string;
        title: string;
        updatedTime: string;
        type: string;
        url: string;
        twitterMeta: {
          appCountry: string | null;
          card: string;
          creator: string | null;
          description: string;
          image: string;
          site: string | null;
          title: string;
        };
      };
    };
    name: string;
    slug: string;
    uri: string;
    description: string;
    categoryFields: {
      colors: {
        foreground: string;
        background: string;
      };
    };
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
};

type GET_CATEGORY_PAGE_RESPONSE = {
  seo: T_ARTICLE_METADATA;
  page: {
    title: string;
    slug: string;
    uri: string;
    content: string;
    colors: {
      foreground: string;
      background: string;
    };
  };
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

export default async function GET_CATEGORY_PAGE() {
  try {
    const request: GET_CATEGORY_PAGE_REQUEST = await QueryClient.request(
      GET_CATEGORY_PAGE_QUERY
    );

    const response: GET_CATEGORY_PAGE_RESPONSE = {
      page: {
        colors: request.category.categoryFields.colors,
        content: request.category.description,
        title: request.category.name,
        slug: request.category.slug,
        uri: request.category.uri,
      },
      posts: request.category.posts.nodes.map((item) => {
        return {
          category: item.categories.nodes[0],
          date: getReleaseDate({
            date: item.date,
            format: "short",
          }),
          excerpt: getExcerpt(item.excerpt, 75),
          image: item.featuredImage.node,
          slug: item.slug,
          status: item.status,
          subdomain: item.postFields.mainCategory.nodes[0],
          title: item.title,
          uri: item.uri,
        };
      }),
      seo: {
        alternates: {
          canonical: request.category.seo.canonicalUrl,
          languages: generateLanguageAlternates(
            request.category.seo.openGraph.alternateLocales,
            request.category.seo.canonicalUrl
          ),
        },
        title: request.category.seo.title,
        description: request.category.seo.description,
        openGraph: {
          locale: request.category.seo.openGraph.locale,
          images: [
            {
              ...request.category.seo.openGraph.image,
              alt: request.category.name,
            },
          ],
          modifiedTime: request.category.seo.openGraph.articleMeta.modifiedTime,
          publishedTime:
            request.category.seo.openGraph.articleMeta.publishedTime,
          siteName: request.category.seo.openGraph.siteName,
          tags: request.category.seo.openGraph.articleMeta.tags,
          type: request.category.seo.openGraph.type,
          url: request.category.seo.openGraph.url,
          authors: request.category.seo.openGraph.articleMeta.author
            ? [request.category.seo.openGraph.articleMeta.author]
            : undefined,
        },
        twiter: {
          card: request.category.seo.openGraph.twitterMeta.card,
          description: request.category.seo.openGraph.twitterMeta.description,
          images: [request.category.seo.openGraph.twitterMeta.image],
          title: request.category.seo.openGraph.twitterMeta.title,
          creator: request.category.seo.openGraph.twitterMeta.creator,
          site: request.category.seo.openGraph.twitterMeta.site,
        },
        robots: {
          index: request.category.seo.robots.includes("index"),
          follow: request.category.seo.robots.includes("follow"),
          nocache: request.category.seo.robots.includes("nocache"),
          googleBot: {
            follow: request.category.seo.robots.includes("follow"),
            index: request.category.seo.robots.includes("index"),
          },
        },
        other: {
          jsonLd: request.category.seo.jsonLd.raw,
        },
      },
    };

    return { ...response };
  } catch (error) {
    console.log(`❌ Error fetch post:${error}`);
    throw error;
  }
}
