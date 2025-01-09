import { gql } from "graphql-request";

export const GET_POST = gql`
  query getPost($id: ID!) {
    post(id: $id, idType: SLUG) {
      seo {
        breadcrumbTitle
        canonicalUrl
        description
        focusKeywords
        isPillarContent
        fullHead
        jsonLd {
          raw
        }
        openGraph {
          description
          locale
          siteName
          title
          type
          updatedTime
          url
        }
        robots
        seoScore {
          badgeHtml
          hasFrontendScore
          rating
          score
        }
        title
      }
      slug
      subdomains(first: 1) {
        nodes {
          name
          slug
          uri
        }
      }
      categories {
        nodes {
          name
          slug
          uri
        }
      }
      tags {
        nodes {
          name
          slug
          uri
        }
      }
      title(format: RENDERED)
      uri
      excerpt(format: RENDERED)
      featuredImage {
        node {
          altText
          sourceUrl(size: MEDIUM_LARGE)
          srcSet(size: MEDIUM)
          title(format: RENDERED)
        }
      }
      blocks {
        attributesJSON
        dynamicContent
        name
        order
        originalContent
        ... on RankMathTocBlock {
          attributesJSON
          dynamicContent
          originalContent
          saveContent
          name
          order
        }
      }
      blocksJSON
      content(format: RENDERED)
      date
      dateGmt
      modified
      postfields {
        faq {
          answer
          question
        }
      }
    }
  }
`;
