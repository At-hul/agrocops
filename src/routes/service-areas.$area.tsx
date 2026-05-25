import { createFileRoute } from '@tanstack/react-router'
import { MapPin, Phone, Sprout } from 'lucide-react'
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
    <div className="bg-background">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_58%,#ffffff_100%)]">
        <div className="premium-container grid gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.65fr)] lg:items-center">
          <div>
            <p className="premium-eyebrow">Service Area</p>
            <h1 className="premium-heading mt-4 text-primary">{area.title}</h1>
            <p className="premium-copy mt-5 max-w-2xl">
            {area.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappCta
                label={`Ask from ${area.name}`}
                context="service-area"
                serviceArea={area.name}
                title={area.title}
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
            <Badge tone="green">Near Chelakkara</Badge>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-primary">
              Local crop support for {area.name}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Message before travelling to check stock, pack sizes, seasonal
              recommendations, and the best time to visit the outlet.
            </p>
          </Card>
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="premium-container grid gap-4 md:grid-cols-3">
          {['Popular products', 'Seasonal advice', 'Directions and visit intent'].map((title) => (
            <Card key={title} className="surface-soft p-6">
              <Sprout className="size-6 text-accent" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-extrabold text-primary">{title}</h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
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
