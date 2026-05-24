import type * as React from 'react'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { Badge } from '~/components/ui/badge'
import { Card } from '~/components/ui/card'

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
    <div>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container max-w-4xl">
          <Badge tone="yellow">{eyebrow}</Badge>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-primary-foreground/80">
            {description}
          </p>
          <WhatsappCta
            label="WhatsApp Agrocops"
            context={ctaContext}
            title={title}
            variant="accent"
            className="mt-8"
          />
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <Card key={section.title} className="p-5">
                {section.badge ? <Badge tone="green">{section.badge}</Badge> : null}
                <h2 className="mt-4 text-xl font-bold">{section.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
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
