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
    <header className="sticky top-0 z-50 border-b bg-background/92 backdrop-blur">
      <a
        href="#main-content"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>
      <div className="container flex min-h-16 items-center justify-between gap-4">
        <a
          href="/"
          className="focus-ring flex min-w-0 items-center gap-2 rounded-md sm:gap-3"
          aria-label="Agrocops Chelakkara home"
        >
          <img
            className="size-10 shrink-0 object-contain sm:size-12"
            src={siteConfig.logoPath}
            alt="Agrocops Official Logo"
            width="48"
            height="48"
            decoding="async"
          />
          <span className="min-w-0">
            <span className="block truncate text-sm font-extrabold uppercase text-primary sm:text-base md:text-lg">
              Agrocops Chelakkara
            </span>
            <span className="hidden text-xs font-semibold text-muted-foreground sm:block">
              {siteConfig.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
              className: 'hidden lg:inline-flex',
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
              className: 'hidden xl:inline-flex',
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
            className={buttonClassName({ variant: 'primary', size: 'sm' })}
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
              className="absolute right-0 top-12 grid w-64 gap-1 rounded-lg border bg-card p-2 shadow-soft"
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
