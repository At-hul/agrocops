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
        <a href="/" className="focus-ring rounded-md" aria-label="Agrocops home">
          <span className="block text-base font-extrabold text-primary md:text-lg">
            {siteConfig.name}
          </span>
          <span className="hidden text-xs font-semibold text-muted-foreground sm:block">
            {siteConfig.tagline}
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
