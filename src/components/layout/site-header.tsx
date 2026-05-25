import { MapPin, Menu, MessageCircle, Phone } from 'lucide-react'
import { buttonClassName } from '~/components/ui/button'
import { siteConfig } from '~/lib/site'
import { createWhatsAppUrl } from '~/features/whatsapp/deep-links'

const navItems = [
  { label: 'Products', href: '/products' },
  { label: 'Advisory', href: '/crop-advisory' },
  { label: 'Knowledge', href: '/knowledge-center' },
  { label: 'Community', href: '/community' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <a
        href="#main-content"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>
      <div className="premium-container flex min-h-[4.75rem] items-center justify-between gap-3">
        <a
          href="/"
          className="focus-ring flex min-w-0 shrink-0 items-center gap-2 rounded-xl sm:gap-3"
          aria-label="Agrocops Chelakkara home"
        >
          <img
            className="size-12 shrink-0 object-contain sm:size-14"
            src={siteConfig.logoPath}
            alt="Agrocops Official Logo"
            width="56"
            height="56"
            decoding="async"
          />
          <span className="min-w-0">
            <span className="hidden whitespace-nowrap text-sm font-black uppercase tracking-[0.08em] text-primary sm:block md:text-lg">
              AGROCOPS CHELAKKARA
            </span>
            <span className="block whitespace-nowrap text-sm font-black uppercase tracking-[0.08em] text-primary sm:hidden">
              Chelakkara
            </span>
            <span className="hidden text-xs font-bold text-muted-foreground sm:block">
              {siteConfig.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="focus-ring rounded-full px-3.5 py-2 text-sm font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className={buttonClassName({
              variant: 'outline',
              size: 'sm',
              className: 'hidden rounded-full lg:inline-flex',
            })}
            href={siteConfig.phoneHref}
            data-analytics-event="call_click"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call
          </a>
          <a
            className={buttonClassName({
              variant: 'outline',
              size: 'sm',
              className: 'hidden rounded-full xl:inline-flex',
            })}
            href={siteConfig.directionsUrl}
            target="_blank"
            rel="noreferrer"
            data-analytics-event="directions_click"
          >
            <MapPin className="size-4" aria-hidden="true" />
            Directions
          </a>
          <a
            className={buttonClassName({
              variant: 'primary',
              size: 'sm',
              className: 'rounded-full shadow-[0_14px_28px_rgba(11,122,42,0.18)]',
            })}
            href={createWhatsAppUrl({ context: 'community', title: 'Header CTA' })}
            target="_blank"
            rel="noreferrer"
            data-analytics-event="whatsapp_click"
            data-whatsapp-context="header"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp
          </a>
          <details className="relative lg:hidden">
            <summary
              className={buttonClassName({
                variant: 'ghost',
                size: 'icon',
                className: 'list-none [&::-webkit-details-marker]:hidden',
              })}
              aria-label="Open navigation"
            >
              <Menu className="size-5" aria-hidden="true" />
            </summary>
            <nav
              className="absolute right-0 top-14 grid w-72 gap-1 rounded-2xl border bg-card p-2 shadow-soft"
              aria-label="Mobile"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-muted-foreground hover:bg-muted hover:text-foreground"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
