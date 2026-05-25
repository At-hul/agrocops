import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { serviceAreas } from '~/features/content/home-content'
import { createWhatsAppUrl } from '~/features/whatsapp/deep-links'
import { siteConfig } from '~/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="premium-container grid gap-10 py-14 md:grid-cols-[1.25fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              className="size-20 shrink-0 rounded-2xl bg-white object-contain p-2 shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
              src={siteConfig.logoPath}
              alt="Agrocops Official Logo"
              width="80"
              height="80"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="text-2xl font-black uppercase tracking-[0.08em]">{siteConfig.name}</p>
              <p className="mt-1 text-sm font-black uppercase tracking-[0.14em] text-accent">
                An Agrocops Franchise Outlet
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-base leading-7 text-primary-foreground/78">
            Product-first agricultural support, seasonal guidance, and farmer
            community growth for Chelakkara and nearby service areas.
          </p>
        </div>
        <div>
          <p className="font-black uppercase tracking-[0.14em] text-accent">Service Areas</p>
          <ul className="mt-4 grid gap-2 text-base text-primary-foreground/78">
            {serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-black uppercase tracking-[0.14em] text-accent">Contact</p>
          <div className="mt-4 grid gap-3 text-base text-primary-foreground/78">
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
              <MapPin className="mt-1 size-4" aria-hidden="true" />
              {siteConfig.address}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/12 py-5">
        <div className="premium-container flex flex-col gap-2 text-xs text-primary-foreground/68 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Agrocops Chelakkara. All rights reserved.</span>
          <span>SEO-first platform for products, advisory, community, and local trust.</span>
        </div>
      </div>
    </footer>
  )
}
