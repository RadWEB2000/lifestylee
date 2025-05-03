export const dynamic = 'force-dynamic'


export function GET() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  const content = `
    User-agent: *
    Allow: /
    Sitemap: https://www.lifeestylee.pl/sitemap.xml
  `.trim()

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}