import { createFileRoute } from '@tanstack/react-router'
import { MapPin } from 'lucide-react'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { Badge } from '~/components/ui/badge'
import { buttonClassName } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { serviceAreaPages } from '~/features/content/site-content'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'
import { siteConfig } from '~/lib/site'

export const Route = createFileRoute('/service-areas/$area')({
  head: ({ params }) => {
    const area = serviceAreaPages.find((item) => item.slug === params.area)
    return {
      meta: seo({
        title: area
          ? `${area.title} | Agrocops Chelakkara`
          : 'Agrocops Chelakkara Service Area',
        description: area?.description,
        path: `/service-areas/${params.area}`,
      }),
      links: [
        {
          rel: 'canonical',
          href: getCanonicalUrl(`/service-areas/${params.area}`),
        },
      ],
    }
  },
  component: ServiceAreaPage,
})

function ServiceAreaPage() {
  const { area: slug } = Route.useParams()
  const area = serviceAreaPages.find((item) => item.slug === slug) ?? serviceAreaPages[0]

  return (
    <div>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container max-w-4xl">
          <Badge tone="yellow">Service Area</Badge>
          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">{area.title}</h1>
          <p className="mt-5 text-lg leading-8 text-primary-foreground/80">
            {area.description}
          </p>
          <WhatsappCta
            label={`Ask Agrocops from ${area.name}`}
            context="service-area"
            serviceArea={area.name}
            title={area.title}
            variant="accent"
            className="mt-8"
          />
          <a
            className={buttonClassName({
              variant: 'outline',
              size: 'lg',
              className:
                'ml-0 mt-3 border-white/40 bg-white/10 text-white hover:bg-white/18 sm:ml-3',
            })}
            href={siteConfig.directionsUrl}
            target="_blank"
            rel="noreferrer"
            data-analytics-event="directions_click"
          >
            <MapPin className="size-5" aria-hidden="true" />
            Get Directions
          </a>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container grid gap-4 md:grid-cols-3">
          {['Popular products', 'Seasonal advice', 'Directions and visit intent'].map((title) => (
            <Card key={title} className="p-5">
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Get product availability, seasonal crop guidance, WhatsApp
                support, and directions to Agrocops Chelakkara from {area.name}.
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
