import { QueryClient } from "@/lib/configs";
import { gql } from "graphql-request";

const query = gql`
    query POST_PAGE_QUERY ($id: ID!){
  post(
    id: $id
    idType: URI
  ) {
    title(format: RENDERED)
    articlePage {
      introduction
      entry
      faq {
        answer
        question
      }
    }
    blocks {
      name
      attributesJSON
    }
    categories(first: 2) {
      nodes {
        name
        uri
      }
    }
    content(format: RENDERED)
    date
    featuredImage {
      node {
        altText
        sourceUrl(size: POST_THUMBNAIL)
        title(format: RENDERED)
      }
    }
    tags(first: 50) {
      nodes {
        name
        uri
      }
    }
    uri
    seo {
      title
      description
      openGraph {
        title
        description
      }
    }
  }
}
`

type request = {
    post: {
        title: string;
        articlePage: {
            introduction: string;
            entry: string;
            faq: Array<{
                answer: string;
                question: string;
            }>
        };
        blocks: Array<{
            name: string;
            attributesJSON: string;
        }>
        categories: {
            nodes: Array<{
                name: string;
                uri: string;
            }>
        };
        content: string;
        date: string;
        featuredImage: {
            node: {
                altText: string;
                sourceUrl: string;
                title: string;
            }
        };
        tags: {
            nodes: Array<{
                name: string;
                uri: string;
            }>
        };
        uri: string;
        seo: {
            title: string;
            description: string;
            openGraph: {
                title: string;
                description: string;
            }
        }
    }
}

type response = {
    title: string;
    excerpt: string;
    entry: string;
    blocks: Array<{
        name: string;
        attributesJSON: string;
    }>
    categories: Array<{
        name: string;
        uri: string;
    }>;
    content: string;
    date: string;
    image: {
        alt: string;
        src: string;
        title: string;
    };
    tags: Array<{
        name: string;
        uri: string;
    }>;
    uri: string;
    seo: {
        metaTitle: string;
        metaDescription: string;
        openGraphTitle: string;
        openGraphDescription: string;
    }
}

export default async function GET_POST_PAGE(uri: string) {
    try {
        const request: request = await QueryClient.request(query, {
            id: uri
        })

        const response: response = {
            blocks: request.post.blocks,
            categories: request.post.categories.nodes,
            content: request.post.content,
            date: request.post.date,
            entry: request.post.articlePage.entry,
            excerpt: request.post.articlePage.introduction,
            uri: request.post.uri,
            image: {
                alt: request.post.featuredImage.node.altText,
                src: request.post.featuredImage.node.sourceUrl,
                title: request.post.featuredImage.node.title
            },
            seo: {
                metaDescription: request.post.seo.description,
                metaTitle: request.post.seo.title,
                openGraphDescription: request.post.seo.openGraph.description,
                openGraphTitle: request.post.seo.openGraph.title
            },
            tags: request.post.tags.nodes,
            title: request.post.title
        }
        return response;
    }  catch {
      throw new Error("‼️Błąd przy pobieraniu danych");
    }
}