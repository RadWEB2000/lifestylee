import { MetadataRoute } from "next";

export default async function generateSitemap():Promise<MetadataRoute.Sitemap>{
    const baseUrl = 'https://lifeestylee.pl';
    const apiUrl = 'https://cms.lifeestylee.pl/wp-json/wp/v2';
    
    const [posts, categories, tags] = await Promise.all([
        fetch(`${apiUrl}/posts?per_page=100`).then(res => res.json()),
        fetch(`${apiUrl}/categories?per_page=100`).then(res => res.json()),
        fetch(`${apiUrl}/tags?per_page=100`).then(res => res.json()),
      ]);

      const staticRoutes = [
        '/blog'
      ]

      const postRoutes = posts.map((post: any) => {
        const url = new URL(post.link);
        const path = url.pathname; // np. /zdrowie/post-title/
        return {
          url: `https://lifeestylee.pl${path.replace(/\/$/, '')}`, // bez końcowego slasha
          lastModified: post.modified ? new Date(post.modified) : new Date(),
        };
      });
    
      const categoryRoutes = categories.map((cat: any) => {
        const url = new URL(cat.link);
        const path = url.pathname; 
        return {
            url: `https://lifeestylee.pl${path.replace(/\/$/, '')}`, // bez końcowego slasha
            lastModified: cat.modified ? new Date(cat.modified) : new Date(),
        }
    })
    
    const tagRoutes = tags.map((tag: any) => {
        const url = new URL(tag.link);
        const path = url.pathname;
        return {
            url: `https://lifeestylee.pl${path.replace(/\/$/, '')}`, // bez końcowego slasha
            lastModified: tag.modified ? new Date(tag.modified) : new Date(),
        }
    })

    
      const staticRouteEntries = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
      }));

      return [
        ...staticRouteEntries,
        ...postRoutes,
        ...categoryRoutes,
        ...tagRoutes,
      ];
}