import { MapPin, MessageCircle, Phone, Siren } from 'lucide-react'
import { buttonClassName } from '~/components/ui/button'
import { createWhatsAppUrl, type WhatsappContext } from '~/features/whatsapp/deep-links'
import { siteConfig } from '~/lib/site'
import { cn } from '~/lib/utils'

type WhatsappCtaProps = {
  label?: string
  context?: WhatsappContext
  title?: string
  cropType?: string
  serviceArea?: string
  pagePath?: string
  variant?: 'primary' | 'accent' | 'outline'
  className?: string
}

export function WhatsappCta({
  label = 'WhatsApp Agrocops',
  context = 'general',
  title,
  cropType,
  serviceArea,
  pagePath,
  variant = 'primary',
  className,
}: WhatsappCtaProps) {
  return (
    <a
      className={buttonClassName({ variant, size: 'lg', className })}
      href={createWhatsAppUrl({ context, title, cropType, serviceArea, pagePath })}
      target="_blank"
      rel="noreferrer"
      data-analytics-event="whatsapp_click"
      data-whatsapp-context={context}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      {label}
    </a>
  )
}

export function EmergencyCropHelpCta({ className }: { className?: string }) {
  return (
    <a
      className={cn(
        'focus-ring fixed bottom-20 left-4 right-4 z-40 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-bold text-accent-foreground shadow-soft transition-colors hover:bg-accent/90 md:bottom-4 md:left-auto md:right-6 md:w-auto',
        className,
      )}
      href={createWhatsAppUrl({ context: 'emergency', title: 'Urgent crop guidance' })}
      target="_blank"
      rel="noreferrer"
      data-analytics-event="emergency_crop_help_click"
    >
      <Siren className="size-5" aria-hidden="true" />
      Need urgent crop guidance? WhatsApp Agrocops now
    </a>
  )
}

export function MobileQuickActions() {
  const actions = [
    {
      label: 'WhatsApp',
      href: createWhatsAppUrl({ context: 'general', title: 'Mobile quick action' }),
      icon: MessageCircle,
      event: 'whatsapp_click',
      external: true,
    },
    {
      label: 'Call',
      href: siteConfig.phoneHref,
      icon: Phone,
      event: 'call_click',
      external: false,
    },
    {
      label: 'Directions',
      href: siteConfig.directionsUrl,
      icon: MapPin,
      event: 'directions_click',
      external: true,
    },
  ]

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t bg-card/98 shadow-soft backdrop-blur md:hidden"
      aria-label="Mobile quick actions"
    >
      {actions.map((action) => (
        <a
          key={action.label}
          className="focus-ring flex min-h-16 flex-col items-center justify-center gap-1 px-2 text-xs font-extrabold text-primary transition-colors hover:bg-muted"
          href={action.href}
          target={action.external ? '_blank' : undefined}
          rel={action.external ? 'noreferrer' : undefined}
          data-analytics-event={action.event}
        >
          <action.icon className="size-5" aria-hidden="true" />
          {action.label}
        </a>
      ))}
    </nav>
  )
}
