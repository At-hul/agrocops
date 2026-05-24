import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { serviceAreas } from '~/features/content/home-content'
import { createWhatsAppUrl } from '~/features/whatsapp/deep-links'
import { siteConfig } from '~/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container grid gap-8 py-12 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              className="size-16 shrink-0 rounded-md bg-white object-contain p-1"
              src={siteConfig.logoPath}
              alt="Agrocops Official Logo"
              width="64"
              height="64"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="text-xl font-extrabold uppercase">{siteConfig.name}</p>
              <p className="mt-1 text-sm font-bold text-accent">
                An Agrocops Franchise Outlet
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-primary-foreground/78">
            Product-first agricultural support, seasonal guidance, and farmer
            community growth for Chelakkara and nearby service areas.
          </p>
        </div>
        <div>
          <p className="font-bold">Service Areas</p>
          <ul className="mt-3 grid gap-2 text-sm text-primary-foreground/78">
            {serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <div className="mt-3 grid gap-3 text-sm text-primary-foreground/78">
            <a className="inline-flex items-center gap-2 hover:text-white" href={siteConfig.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <a
              className="inline-flex items-center gap-2 hover:text-white"
              href={createWhatsAppUrl({ context: 'general', title: 'Footer contact' })}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp Agrocops
            </a>
            <span className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 size-4" aria-hidden="true" />
              {siteConfig.address}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/12 py-5">
        <div className="container flex flex-col gap-2 text-xs text-primary-foreground/68 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Agrocops Chelakkara. All rights reserved.</span>
          <span>SEO-first platform for products, advisory, community, and local trust.</span>
        </div>
      </div>
    </footer>
  )
}
