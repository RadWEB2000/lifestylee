import { QueryClient } from "@/clients/QueryClient";
import { gql } from "graphql-request";
import {
  generateLanguageAlternates,
  getCategoryPath,
  getReleaseDate,
} from "@/func/index";

type GET_POST_REQUEST = {
  post: {
    title: string;
    uri: string;
    slug: string;
    blocks: Array<{
      attributesJSON: string;
      name: string;
      order: number;
      saveContent: string;
    }>;
    categories: {
      nodes: Array<T_WORDPRESS_TAXONOMY>;
    };
    content: string;
    date: string;
    excerpt: string;
    featuredImage: {
      node: T_WORDPRESS_FEATUREDIMAGE;
    };
    postFields: {
      mainCategory: {
        nodes: Array<T_WORDPRESS_TAXONOMY>;
      };
      faq: Array<{
        answer: string;
        question: string;
      }>;
    };
    tags: {
      nodes: Array<T_WORDPRESS_TAXONOMY>;
    };
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
          admins: string | Array<string> | null;
          appId: string;
        };
        image: {
          height: number;
          secureUrl: string;
          type: string;
          url: string;
          width: number;
        };
        locale: string;
        siteName: string;
        slackEnhancedData: Array<{
          data: string;
          label: string;
        }>;
        title: string;
        twitterMeta: {
          appCountry: string | null;
          card: string;
          creator: string | null;
          description: string;
          image: string;
          site: string | null;
          title: string;
        };
        type: string;
        updatedTime: string;
        url: string;
      };
    };
  };
};

type GET_POST_RESPONSE = {
  page: {
    title: string;
    structuredData: string;
    readingTime: string;
    uri: string;
    slug: string;
    blocks: Array<{
      attributesJSON: string;
      name: string;
      order: number;
      saveContent: string;
    }>;
    category: T_WORDPRESS_TAXONOMY;
    content: string;
    date: string;
    excerpt: string;
    featuredImage: T_WORDPRESS_FEATUREDIMAGE;
    subdomain: T_WORDPRESS_TAXONOMY;
    faq: Array<{
      answer: string;
      question: string;
    }>;
    tags: Array<T_WORDPRESS_TAXONOMY>;
  };
  seo: T_ARTICLE_METADATA;
};

const GET_POST_QUERY = gql`
  query GET_POST($id: ID!) {
    post(id: $id, idType: SLUG) {
      title(format: RENDERED)
      uri
      slug
      blocks {
        attributesJSON
        name
        order
        saveContent
      }
      categories(first: 1) {
        nodes {
          name
          slug
          uri
        }
      }
      content(format: RENDERED)
      date
      excerpt(format: RENDERED)
      featuredImage {
        node {
          altText
          sourceUrl(size: THUMBNAIL)
          srcSet(size: MEDIUM)
          title(format: RENDERED)
        }
      }
      postFields {
        mainCategory {
          nodes {
            name
            slug
            uri
          }
        }
        faq {
          answer
          question
        }
      }
      tags(first: 20) {
        nodes {
          name
          slug
          uri
        }
      }
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
            image
            site
            title
          }
          type
          updatedTime
          url
        }
      }
    }
  }
`;

export default async function GET_POST(slug: string) {
  try {
    const request: GET_POST_REQUEST = await QueryClient.request(
      GET_POST_QUERY,
      {
        id: slug,
      }
    );

    const response: GET_POST_RESPONSE = {
      page: {
        blocks: request.post.blocks.map((item) => {
          return {
            attributesJSON: item.attributesJSON,
            name: item.name,
            order: item.order,
            saveContent: item.saveContent,
          };
        }),
        structuredData: request.post.seo.jsonLd.raw,
        category: request.post.categories.nodes.map((item) => {
          return {
            name: item.name,
            slug: item.slug,
            uri: getCategoryPath(item.uri),
          };
        })[0],
        content: request.post.content,
        date: getReleaseDate({
          date: request.post.date,
          format: "long",
        }),
        excerpt: request.post.excerpt,
        faq: request.post.postFields.faq,
        featuredImage: request.post.featuredImage.node,
        readingTime: request.post.seo.openGraph.slackEnhancedData[1].data,
        slug: request.post.slug,
        subdomain: request.post.postFields.mainCategory.nodes.map((item) => {
          return {
            name: item.name,
            slug: item.slug,
            uri: getCategoryPath(item.uri),
          };
        })[0],
        tags: request.post.tags.nodes.map((item) => {
          return {
            name: item.name,
            slug: item.slug,
            uri: item.uri,
          };
        }),
        title: request.post.title,
        uri: request.post.uri,
      },
      seo: {
        alternates: {
          canonical: request.post.seo.canonicalUrl,
          languages: generateLanguageAlternates(
            request.post.seo.openGraph.alternateLocales,
            request.post.seo.canonicalUrl
          ),
        },
        title: request.post.seo.title,
        description: request.post.seo.description,
        openGraph: {
          locale: request.post.seo.openGraph.locale,
          images: [
            {
              ...request.post.seo.openGraph.image,
              alt: request.post.title,
            },
          ],
          modifiedTime: request.post.seo.openGraph.articleMeta.modifiedTime,
          publishedTime: request.post.seo.openGraph.articleMeta.publishedTime,
          siteName: request.post.seo.openGraph.siteName,
          tags: request.post.seo.openGraph.articleMeta.tags,
          type: request.post.seo.openGraph.type,
          url: request.post.seo.openGraph.url,
          authors: request.post.seo.openGraph.articleMeta.author
            ? [request.post.seo.openGraph.articleMeta.author]
            : undefined,
        },
        twiter: {
          card: request.post.seo.openGraph.twitterMeta.card,
          description: request.post.seo.openGraph.twitterMeta.description,
          images: [request.post.seo.openGraph.twitterMeta.image],
          title: request.post.seo.openGraph.twitterMeta.title,
          creator: request.post.seo.openGraph.twitterMeta.creator,
          site: request.post.seo.openGraph.twitterMeta.site,
        },
        robots: {
          index: request.post.seo.robots.includes("index"),
          follow: request.post.seo.robots.includes("follow"),
          nocache: request.post.seo.robots.includes("nocache"),
          googleBot: {
            follow: request.post.seo.robots.includes("follow"),
            index: request.post.seo.robots.includes("index"),
          },
        },
        other: {
          jsonLd: request.post.seo.jsonLd.raw,
        },
      },
    };

    return {
      page: response.page,
      seo: response.seo,
    };
  } catch (error) {
    console.log(`❌ Error fetch post: ${error}`);
    throw error;
  }
}
