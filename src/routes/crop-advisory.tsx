import { createFileRoute } from '@tanstack/react-router'
import { ContentPage } from '~/features/pages/content-page'
import { pageIntro } from '~/features/content/site-content'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'

export const Route = createFileRoute('/crop-advisory')({
  head: () => ({
    meta: seo({
      title: 'Agrocops Chelakkara Farm Advisory | Crop Help',
      description:
        'Get crop advisory for coconut, banana, vegetables, pepper, arecanut, terrace gardens, and urgent WhatsApp crop help from Agrocops Chelakkara.',
      path: '/crop-advisory',
    }),
    links: [{ rel: 'canonical', href: getCanonicalUrl('/crop-advisory') }],
  }),
  component: () => (
    <ContentPage
      {...pageIntro.advisory}
      ctaContext="crop-guide"
      sections={[
        { title: 'Coconut', description: 'Root care, nutrition, pest checks, and seasonal recommendations.', badge: 'Crop guide' },
        { title: 'Banana', description: 'Stage-wise nutrition, sucker management, disease prevention, and seasonal planning.', badge: 'Crop guide' },
        { title: 'Vegetables', description: 'Kitchen garden and farm vegetable care with organic pesticide guidance.', badge: 'Crop guide' },
        { title: 'Pepper', description: 'Support for vine health, fungal issues, nutrition, and monsoon care.', badge: 'Crop guide' },
        { title: 'Arecanut', description: 'Support for nutrition, seasonal stress, common pest issues, and product selection.', badge: 'Crop guide' },
        { title: 'Urgent Crop Help', description: 'Use WhatsApp when symptoms are spreading quickly or crop damage needs fast guidance.', badge: 'WhatsApp' },
      ]}
    />
  ),
})
