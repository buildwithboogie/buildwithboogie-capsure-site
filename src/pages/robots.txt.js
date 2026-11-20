// Generates /robots.txt automatically from the site address.
export function GET({ site }) {
  return new Response(`User-agent: *\nAllow: /\nDisallow: /thanks/\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
