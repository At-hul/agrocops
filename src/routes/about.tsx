import { createFileRoute } from '@tanstack/react-router'
import { ContentPage } from '~/features/pages/content-page'
import { pageIntro } from '~/features/content/site-content'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: seo({
      title: 'About Agrocops Chelakkara | Agriculture Community & Advisory',
      description: pageIntro.about.description,
      path: '/about',
    }),
    links: [{ rel: 'canonical', href: getCanonicalUrl('/about') }],
  }),
  component: () => (
    <ContentPage
      {...pageIntro.about}
      ctaContext="community"
      sections={[
        { title: 'Story', description: 'A product-first local platform for farmers, home gardeners, students, and enthusiasts.' },
        { title: 'Mission', description: 'Help growers choose better products, get reliable guidance, and build confidence through community.' },
        { title: 'Vision', description: 'Become the trusted agriculture knowledge and product hub for Chelakkara, Venganellur, and nearby Thrissur communities.' },
        { title: 'Values', description: 'Trust, local relevance, practical advice, quality products, clear communication, and repeat support.' },
        { title: 'Impact', description: 'Track villages served, farmers helped, events hosted, stories recognized, and community growth.' },
        { title: 'Team & Community', description: 'A local store experience supported by farmer conversations, product guidance, workshops, and WhatsApp updates.' },
        { title: 'About Agrocops Network', description: 'Agrocops Chelakkara keeps its local identity while connecting farmers to a wider Kerala-focused ecosystem of organic inputs, knowledge sharing, and outlet-led support.' },
        { title: 'Economics', description: 'Product conversations consider input cost, crop stage, repeat value, and practical farm economics before purchase.' },
        { title: 'Education', description: 'The outlet supports learning through seasonal content, crop conversations, workshops, and community updates.' },
        { title: 'Extension', description: 'WhatsApp guidance, service-area support, and farmer follow-up help bring advisory closer to local fields and gardens.' },
        { title: 'Agrocops Outlet Advantage', description: 'ETLP thinking, Local Knowledge Zone, Central Knowledge Zone, advisory services, and localized brand building shape the Chelakkara experience.' },
      ]}
    />
  ),
})
