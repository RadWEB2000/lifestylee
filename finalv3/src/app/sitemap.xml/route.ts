export const dynamic = 'force-dynamic'


export async function GET() {
  const baseUrl = 'https://www.lifeestylee.pl'
  const apiUrl = 'https://cms.lifeestylee.pl/wp-json/wp/v2'

  const [posts, categories, tags] = await Promise.all([
    fetch(`${apiUrl}/posts?per_page=100`).then(res => res.json()),
    fetch(`${apiUrl}/categories?per_page=100`).then(res => res.json()),
    fetch(`${apiUrl}/tags?per_page=100`).then(res => res.json()),
  ])

  const urls: string[] = []

  const mapItems = (items: any[]) => {
    return items.map(item => {
      const url = new URL(item.link)
      const path = url.pathname.replace(/\/$/, '')
      const fullUrl = `${baseUrl}${path}`
      const lastmod = new Date(item.modified ?? new Date()).toISOString()

      return `<url><loc>${fullUrl}</loc><lastmod>${lastmod}</lastmod></url>`
    })
  }

  urls.push(`<url><loc>${baseUrl}/blog</loc><lastmod>${new Date().toISOString()}</lastmod></url>`)
  urls.push(...mapItems(posts))
  urls.push(...mapItems(categories))
  urls.push(...mapItems(tags))

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('\n')}
    </urlset>
  `.trim()

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}