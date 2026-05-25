import { createFileRoute } from '@tanstack/react-router'
import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { PublicConversionForm } from '~/components/forms/public-conversion-forms'
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
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_58%,#ffffff_100%)]">
        <div className="premium-container grid gap-10 py-16 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="premium-eyebrow">{pageIntro.contact.eyebrow}</p>
            <h1 className="premium-heading mt-4 text-primary">
              {pageIntro.contact.title}
            </h1>
            <p className="premium-copy mt-5 max-w-2xl">
              {pageIntro.contact.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                className={buttonClassName({ variant: 'primary', size: 'lg' })}
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
              />
              <a
                className={buttonClassName({
                  variant: 'outline',
                  size: 'lg',
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
          <Card className="surface-soft hover-lift p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid size-12 place-items-center rounded-md bg-primary text-primary-foreground">
                <MessageCircle className="size-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
                  Visit or message
                </p>
                <p className="text-sm text-muted-foreground">Open every day</p>
              </div>
            </div>
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
      <section className="py-14 md:py-20">
        <div className="premium-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="premium-eyebrow">Map Preview</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-primary">
              Find Agrocops Chelakkara
            </h2>
            <p className="mt-3 text-lg leading-8 text-muted-foreground">
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
            className="focus-ring hover-lift block overflow-hidden rounded-lg border bg-muted shadow-soft"
            href={siteConfig.directionsUrl}
            target="_blank"
            rel="noreferrer"
            data-analytics-event="directions_click"
            aria-label="Open Agrocops Chelakkara location in Google Maps"
          >
            <div className="grid min-h-80 place-items-center bg-[radial-gradient(circle_at_50%_20%,rgba(248,179,52,0.18),transparent_30%),linear-gradient(135deg,hsl(var(--muted)),hsl(var(--background)))] p-8 text-center">
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
      <section className="bg-muted/45 py-14 md:py-20">
        <div className="premium-container max-w-xl">
          <PublicConversionForm kind="newsletter" source="contact_newsletter" />
        </div>
      </section>
    </>
  )
}
