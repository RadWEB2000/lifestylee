import { graphqlClient } from "../configs/graphqlClient";
import { GET_POST } from "../queries/GET_POST";
import { GET_SUBDOMAINS } from "../queries/GET_SUBDOMAINS";
import { GET_POSTS } from "../queries/GET_POSTS";

export async function getPostData({ slug }: { slug: string }) {
  try {
    const data: tGetPostRequest = await graphqlClient.request(GET_POST, {
      id: slug,
    });

    const seo: tPostSEO = {
      canonicalUrl: data.post.seo.canonicalUrl,
      description: data.post.seo.description,
      jsonLd: data.post.seo.jsonLd.raw,
      openGraph: data.post.seo.openGraph,
      robots: data.post.seo.robots,
      title: data.post.seo.title,
    };

    const page: tPostPage = {
      toc: data.post.blocks.filter(
        (item) => item.name == "rank-math/toc-block"
      )[0]?.originalContent,
      title: data.post.title,
      slug: data.post.slug,
      blocks: data.post.blocks,
      category: data.post.categories.nodes.map((item) => {
        return {
          title: item.name,
          url: item.slug,
        };
      })[0],
      content: data.post.content,
      date: {
        modified: data.post.modified,
        publish: data.post.date,
      },
      excerpt: data.post.excerpt,
      featuredImage: data.post.featuredImage.node,
      subdomain: data.post.subdomains.nodes.map((item) => {
        return {
          title: item.name,
          url: item.slug,
        };
      })[0],
      tags: data.post.tags.nodes.map((item) => {
        return {
          title: item.name,
          url: item.slug,
        };
      }),
      uri: data.post.uri,
    };

    return {
      seo,
      page,
      data,
    };
  } catch (error) {
    console.log("Error fetching post: ", error);
    throw error;
  }
}

export async function getSubdomains() {
  try {
    const data: tGetSubdomainsRequest = await graphqlClient.request(
      GET_SUBDOMAINS
    );
    const subdomains: tSubdomains = data.subdomains.nodes.map((item) => {
      return {
        color: item.categoryfields.color,
        title: item.name,
        url: item.slug,
      };
    });

    return subdomains;
  } catch (error) {
    console.log("Error fetching post: ", error);
    throw error;
  }
}

export async function getPosts() {
  try {
    const data: tGetPostsRequest = await graphqlClient.request(GET_POSTS);
    const posts: tPosts = data.posts.nodes.map((item) => {
      return {
        title: item.title,
        url: item.uri,
      };
    });
    return posts;
  } catch (error) {
    console.log("Error fetching post: ", error);
    throw error;
  }
}
