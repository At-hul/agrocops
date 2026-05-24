import * as React from 'react'
import {
  EmergencyCropHelpCta,
  MobileQuickActions,
} from '~/components/cta/whatsapp-cta'
import { SiteFooter } from '~/components/layout/site-footer'
import { SiteHeader } from '~/components/layout/site-header'

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <EmergencyCropHelpCta />
      <MobileQuickActions />
    </div>
  )
}
