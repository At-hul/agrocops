import type * as React from 'react'
import { MapPin, Phone, Sprout } from 'lucide-react'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { Badge } from '~/components/ui/badge'
import { buttonClassName } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { siteConfig } from '~/lib/site'

type ContentPageProps = {
  eyebrow: string
  title: string
  description: string
  sections: Array<{
    title: string
    description: string
    badge?: string
  }>
  ctaContext?: React.ComponentProps<typeof WhatsappCta>['context']
}

export function ContentPage({
  eyebrow,
  title,
  description,
  sections,
  ctaContext = 'general',
}: ContentPageProps) {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(248,179,52,0.16),transparent_28%),linear-gradient(135deg,#fffdf7_0%,#edf5e8_100%)]">
        <div className="premium-container grid gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.65fr)] lg:items-center">
          <div className="reveal-soft">
            <p className="premium-eyebrow">{eyebrow}</p>
            <h1 className="premium-heading mt-4 max-w-4xl text-primary">
              {title}
            </h1>
            <p className="premium-copy mt-5 max-w-2xl">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappCta
                label="WhatsApp Us"
                context={ctaContext}
                title={title}
                variant="primary"
              />
              <a
                className={buttonClassName({ variant: 'outline', size: 'lg' })}
                href={siteConfig.phoneHref}
                data-analytics-event="call_click"
              >
                <Phone className="size-5" aria-hidden="true" />
                Call Now
              </a>
              <a
                className={buttonClassName({ variant: 'outline', size: 'lg' })}
                href={siteConfig.directionsUrl}
                target="_blank"
                rel="noreferrer"
                data-analytics-event="directions_click"
              >
                <MapPin className="size-5" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>
          <Card className="surface-soft hover-lift p-6">
            <div className="flex items-center gap-4">
              <div className="grid size-14 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                <Sprout className="size-7" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
                  Agrocops Chelakkara
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Local outlet support backed by the wider Agrocops knowledge ecosystem.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 text-sm font-semibold text-foreground sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-md bg-background/80 p-4">Products with guidance</div>
              <div className="rounded-md bg-background/80 p-4">WhatsApp-first help</div>
              <div className="rounded-md bg-background/80 p-4">Store visit support</div>
              <div className="rounded-md bg-background/80 p-4">Community updates</div>
            </div>
          </Card>
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="premium-container">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <Card key={section.title} className="hover-lift surface-soft p-6">
                <div className="flex items-start justify-between gap-4">
                  {section.badge ? <Badge tone="green">{section.badge}</Badge> : null}
                  <span className="text-sm font-extrabold text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-primary">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {section.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
