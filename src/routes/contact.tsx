import { createFileRoute } from '@tanstack/react-router'
import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { PublicConversionForm } from '~/components/forms/public-conversion-forms'
import { Badge } from '~/components/ui/badge'
import { buttonClassName } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { pageIntro } from '~/features/content/site-content'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'
import { siteConfig } from '~/lib/site'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: seo({
      title: 'Contact Agrocops Chelakkara | Call, WhatsApp & Directions',
      description:
        'Call or WhatsApp Agrocops Chelakkara at +91 97449 20187, get directions to Venganellur, and submit agriculture product inquiries.',
      path: '/contact',
    }),
    links: [{ rel: 'canonical', href: getCanonicalUrl('/contact') }],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <Badge tone="yellow">{pageIntro.contact.eyebrow}</Badge>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
              {pageIntro.contact.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-primary-foreground/80">
              {pageIntro.contact.description}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                className={buttonClassName({ variant: 'accent', size: 'lg' })}
                href={siteConfig.phoneHref}
                data-analytics-event="call_click"
              >
                <Phone className="size-5" aria-hidden="true" />
                Call Agrocops Chelakkara
              </a>
              <WhatsappCta
                label="WhatsApp Us"
                context="general"
                title="Contact page hero"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white/18"
              />
              <a
                className={buttonClassName({
                  variant: 'outline',
                  size: 'lg',
                  className: 'border-white/40 bg-white/10 text-white hover:bg-white/18',
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
          </div>
          <Card className="border-white/16 bg-white/95 p-5 text-foreground">
            <div className="grid gap-4">
              <div>
                <p className="text-sm font-bold uppercase text-muted-foreground">
                  Phone
                </p>
                <p className="mt-1 text-lg font-extrabold">{siteConfig.phone}</p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-muted-foreground">
                  Address
                </p>
                <p className="mt-1 font-semibold leading-7">{siteConfig.address}</p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-muted-foreground">
                  Business hours
                </p>
                <p className="mt-1 font-semibold">{siteConfig.hours}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge tone="green">Map Preview</Badge>
            <h2 className="mt-4 text-3xl font-bold">Find Agrocops Chelakkara</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Use directions to visit the outlet near the BSNL Telephone Exchange
              in Venganellur, Chelakkara.
            </p>
            <a
              className={buttonClassName({ variant: 'primary', size: 'lg', className: 'mt-6' })}
              href={siteConfig.directionsUrl}
              target="_blank"
              rel="noreferrer"
              data-analytics-event="directions_click"
            >
              <MapPin className="size-5" aria-hidden="true" />
              Open Google Maps
            </a>
          </div>
          <a
            className="focus-ring block overflow-hidden rounded-lg border bg-muted shadow-sm"
            href={siteConfig.directionsUrl}
            target="_blank"
            rel="noreferrer"
            data-analytics-event="directions_click"
            aria-label="Open Agrocops Chelakkara location in Google Maps"
          >
            <div className="grid min-h-72 place-items-center bg-[linear-gradient(135deg,hsl(var(--muted)),hsl(var(--background)))] p-8 text-center">
              <MapPin className="size-10 text-accent" aria-hidden="true" />
              <p className="mt-4 text-xl font-extrabold text-primary">
                Agrocops Chelakkara
              </p>
              <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                {siteConfig.address}
              </p>
              <p className="mt-4 text-sm font-bold text-primary underline underline-offset-4">
                Tap to open directions
              </p>
            </div>
          </a>
        </div>
      </section>
      <section className="section-padding bg-muted/55">
        <div className="container max-w-xl">
          <PublicConversionForm kind="newsletter" source="contact_newsletter" />
        </div>
      </section>
    </>
  )
}
