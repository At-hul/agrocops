import { createFileRoute } from '@tanstack/react-router'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { Badge } from '~/components/ui/badge'
import { Card } from '~/components/ui/card'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'

export const Route = createFileRoute('/knowledge-center/$slug')({
  head: ({ params }) => ({
    meta: seo({
      title: 'Agrocops Chelakkara Article | Farming Knowledge',
      description: 'SEO-ready farming article with table of contents, related content, share actions, and WhatsApp lead conversion.',
      path: `/knowledge-center/${params.slug}`,
    }),
    links: [
      {
        rel: 'canonical',
        href: getCanonicalUrl(`/knowledge-center/${params.slug}`),
      },
    ],
  }),
  component: ArticlePage,
})

function ArticlePage() {
  return (
    <div>
      <section className="section-padding bg-background">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,760px)_320px]">
          <article>
            <Badge tone="green">5 min read</Badge>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
              Monsoon crop care checklist for Kerala farms
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Heavy rain can quickly expose drainage problems, fungal pressure,
              weak roots, and nutrition gaps. Use this checklist before visiting
              the store or asking Agrocops on WhatsApp.
            </p>
            <div className="mt-8 grid gap-5 text-base leading-8 text-muted-foreground">
              <p>
                Keep drainage clear, inspect crops regularly, and use advisory-backed products before issues spread.
              </p>
              <p>
                For urgent crop symptoms, send a WhatsApp message with crop name,
                location, visible symptoms, and recent product use.
              </p>
            </div>
          </article>
          <aside className="grid content-start gap-4">
            <Card className="p-5">
              <h2 className="font-bold">Table of contents</h2>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <li>Drainage</li>
                <li>Fungal prevention</li>
                <li>Recommended products</li>
                <li>Related crop guides</li>
              </ul>
            </Card>
            <WhatsappCta
              label="Ask about this article"
              context="article"
              title="Monsoon crop care checklist"
              variant="accent"
              className="w-full"
            />
          </aside>
        </div>
      </section>
    </div>
  )
}
