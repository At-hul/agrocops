import { createFileRoute } from '@tanstack/react-router'
import { ContentPage } from '~/features/pages/content-page'
import { pageIntro } from '~/features/content/site-content'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'

export const Route = createFileRoute('/gallery')({
  head: () => ({
    meta: seo({
      title: 'Agrocops Chelakkara Gallery | Farms, Workshops & Harvests',
      description:
        'View Agrocops Chelakkara farms, workshops, products, farmers, harvests, and community agriculture moments.',
      path: '/gallery',
    }),
    links: [{ rel: 'canonical', href: getCanonicalUrl('/gallery') }],
  }),
  component: () => (
    <ContentPage
      {...pageIntro.gallery}
      sections={[
        { title: 'Farms', description: 'Farm visuals with alt text, location tags, and related crop guides.' },
        { title: 'Workshops', description: 'Community learning proof and event follow-up content.' },
        { title: 'Products', description: 'Product availability and category visuals for trust-building.' },
        { title: 'Farmers', description: 'Recognition images connected to success stories.' },
        { title: 'Harvests', description: 'Outcome-focused proof for product and advisory credibility.' },
        { title: 'GBP Posts', description: 'Reusable content workflow for Google Business Profile updates.' },
      ]}
    />
  ),
})
