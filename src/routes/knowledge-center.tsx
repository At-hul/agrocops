import { createFileRoute } from '@tanstack/react-router'
import { ContentPage } from '~/features/pages/content-page'
import { pageIntro } from '~/features/content/site-content'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'

export const Route = createFileRoute('/knowledge-center')({
  head: () => ({
    meta: seo({
      title: 'Organic Farming Kerala Knowledge Center | Agrocops Chelakkara',
      description:
        'Read practical Kerala farming articles on organic fertilizers, monsoon crop care, terrace gardening, plant nutrition, and seasonal recommendations.',
      path: '/knowledge-center',
    }),
    links: [{ rel: 'canonical', href: getCanonicalUrl('/knowledge-center') }],
  }),
  component: () => (
    <ContentPage
      {...pageIntro.knowledge}
      ctaContext="article"
      sections={[
        { title: 'Organic Farming Kerala', description: 'Educational content targeting practical organic farming search intent.' },
        { title: 'Terrace Gardening Kerala', description: 'Beginner-friendly guides for grow bags, seeds, nutrition, and seasonal care.' },
        { title: 'Monsoon Farming', description: 'Drainage, disease prevention, fungus care, soil health, and urgent advisory links.' },
        { title: 'Malayalam Content', description: 'Malayalam-friendly article planning helps local growers understand seasonal care and product use clearly.' },
        { title: 'Related Content Flow', description: 'Articles link to crop guides, products, community join, and service area pages.' },
        { title: 'Share & Conversion', description: 'Article CTAs support WhatsApp questions, community funnel, and lead tracking.' },
      ]}
    />
  ),
})
