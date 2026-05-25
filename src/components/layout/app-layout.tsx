import * as React from 'react'
import {
  EmergencyCropHelpCta,
  InlineEmergencyCropHelpCta,
  MobileQuickActions,
} from '~/components/cta/whatsapp-cta'
import { SiteFooter } from '~/components/layout/site-footer'
import { SiteHeader } from '~/components/layout/site-header'

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SiteHeader />
      <main id="main-content">{children}</main>
      <InlineEmergencyCropHelpCta />
      <SiteFooter />
      <EmergencyCropHelpCta />
      <MobileQuickActions />
    </div>
  )
}
