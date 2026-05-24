import { createFileRoute } from '@tanstack/react-router'
import { AdminLoginPage } from '~/features/admin/components/admin-login-page'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'

export const Route = createFileRoute('/admin/login')({
  head: () => ({
    meta: seo({
      title: 'Agrocops Admin Login',
      description: 'Protected admin login for Agrocops Chelakkara.',
      path: '/admin/login',
      noIndex: true,
    }),
    links: [{ rel: 'canonical', href: getCanonicalUrl('/admin/login') }],
  }),
  component: AdminLoginPage,
})
