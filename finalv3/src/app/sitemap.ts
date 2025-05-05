import type { MetadataRoute } from 'next'

export async function generateSitemaps() {
  return [
    {
      id: 0
    },
    {
      id: 1
    }
  ]
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {

  console.log(`id: ${id}`)
  // const baseUrl = process.env.DOMAIN_URL as string;
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  const baseUrl = 'https://www.lifeestylee.pl'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/uroda`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/zdrowie`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}