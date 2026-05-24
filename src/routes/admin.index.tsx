import { createFileRoute } from '@tanstack/react-router'
import { AdminDashboardPage } from '~/features/admin/admin-dashboard-page'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'

export const Route = createFileRoute('/admin/')({
  head: () => ({
    meta: seo({
      title: 'Agrocops Admin Dashboard Architecture',
      description: 'Supabase-backed admin modules for products, blogs, crop guides, events, leads, community, stories, gallery, and reviews.',
      path: '/admin',
      noIndex: true,
    }),
    links: [{ rel: 'canonical', href: getCanonicalUrl('/admin') }],
  }),
  component: AdminDashboardPage,
})
