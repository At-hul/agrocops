import { siteConfig } from '~/lib/site'

type SeoInput = {
  title?: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
}

export function seo({
  title = `${siteConfig.name} | ${siteConfig.tagline}`,
  description = siteConfig.description,
  path = '/',
  image = '/og-image.jpg',
  noIndex = false,
}: SeoInput = {}) {
  const url = getCanonicalUrl(path)

  return [
    { title },
    { name: 'description', content: description },
    { name: 'robots', content: noIndex ? 'noindex, nofollow' : 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
  ]
}

export function getCanonicalUrl(path = '/') {
  return new URL(path, siteConfig.siteUrl).toString()
}
