import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.lifeestylee.pl'

  function replaceBase(url: string, additional_back?: string, additional_front?: string): string {
    return url.replace(`https://cms.lifeestylee.pl${additional_back}`, `${baseUrl}${additional_front}`)
  }

  const posts: Array<t_sitemapElement> = await fetch(`https://cms.lifeestylee.pl/wp-json/wp/v2/posts?per_page=75`).then(res => res.json()).then((res: Array<WP_REST_API_POSTS>) => res.map((item: WP_REST_API_POSTS) => ({
    url: replaceBase(item.link),
    lastModified: new Date(item.date).toISOString(),
    priority: 0.8,
    changeFrequency: "daily"
  })));


  const categories: Array<t_sitemapElement> = await fetch(`https://cms.lifeestylee.pl/wp-json/wp/v2/categories?per_page=42`).then(res => res.json()).then(res => {
    return res.map((item: WP_REST_API_CATEGORIES) => {
      return {
        url: replaceBase(item.link),
        lastModified: new Date().toISOString(),
        priority: 0.6,
        changeFrequency: "weekly",
      }
    })
  })

  const tags: Array<t_sitemapElement> = await fetch(`https://cms.lifeestylee.pl/wp-json/wp/v2/tags?per_page=100`).then(res => res.json()).then(res => {
    return res.map((item: WP_REST_API_CATEGORIES) => {
      return {
        url: replaceBase(item.link, '/tag', '/tematy'),
        lastModified: new Date().toISOString(),
        priority: 0.6,
        changeFrequency: "weekly",
      }
    })
  })

  return [
    ...posts,
    ...categories,
    ...tags
  ]
}