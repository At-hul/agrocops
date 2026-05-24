import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '~/features/home/home-page'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: seo({
      title:
        'Agrocops Chelakkara | Agrocops Outlet, Organic Inputs & Crop Advisory',
      description:
        'Visit Agrocops Chelakkara near BSNL Telephone Exchange, Venganellur for official Agrocops product categories, crop advisory, WhatsApp support, and local farmer community services.',
      path: '/',
    }),
    links: [{ rel: 'canonical', href: getCanonicalUrl('/') }],
  }),
  component: HomePage,
})
