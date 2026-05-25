import { createFileRoute } from '@tanstack/react-router'
import { CalendarDays, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { PublicConversionForm } from '~/components/forms/public-conversion-forms'
import { Card } from '~/components/ui/card'
import { ContentPage } from '~/features/pages/content-page'
import { pageIntro } from '~/features/content/site-content'
import {
  emptyPublicContent,
  fetchPublishedEvents,
  type PublicEvent,
} from '~/features/content/public-content-repository'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'

export const Route = createFileRoute('/events')({
  head: () => ({
    meta: seo({
      title: 'Agrocops Chelakkara Events | Agriculture Workshops',
      description:
        'Register for Agrocops Chelakkara workshops, crop advisory days, kitchen garden sessions, and seasonal farming events.',
      path: '/events',
    }),
    links: [{ rel: 'canonical', href: getCanonicalUrl('/events') }],
  }),
  component: EventsPage,
})

function EventsPage() {
  const [events, setEvents] = useState(emptyPublicContent<PublicEvent>())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetchPublishedEvents().then((result) => {
      if (!mounted) return
      setEvents(result)
      setLoading(false)
    })
    return () => {
      mounted = false
    }
  }, [])

  return (
    <>
      <ContentPage
        {...pageIntro.events}
        ctaContext="event"
        sections={[
          { title: 'Upcoming Events', description: 'Event cards with date, topic, location, registration, and WhatsApp questions.' },
          { title: 'Past Events', description: 'Archive workshops and advisory days for trust and local SEO.' },
          { title: 'Registration', description: 'Forms capture attendee details, village, crops, source, and confirmation status.' },
          { title: 'Attendance', description: 'Admin can follow up after events and move leads through the pipeline.' },
          { title: 'Gallery', description: 'Event photos support community proof and Google Business Profile posts.' },
          { title: 'Recognition', description: 'Events can include farmer spotlight and success story recognition moments.' },
        ]}
      />
      <section className="bg-background py-14 md:py-20">
        <div className="premium-container">
          <div className="max-w-2xl">
            <p className="premium-eyebrow">Published Events</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
              Upcoming sessions managed from Supabase.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {events.data.map((event) => (
              <Card key={event.slug} className="hover-lift overflow-hidden">
                {event.featured_image ? (
                  <img
                    className="aspect-[16/10] w-full object-cover"
                    src={event.featured_image}
                    alt={`${event.title} at Agrocops Chelakkara`}
                    loading="lazy"
                  />
                ) : null}
                <div className="p-6">
                  <h3 className="text-2xl font-extrabold text-primary">{event.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {event.description ?? 'Register for practical agriculture support.'}
                  </p>
                  <div className="mt-5 grid gap-2 text-sm font-semibold text-muted-foreground">
                    <span className="flex gap-2">
                      <CalendarDays className="size-4 text-accent" aria-hidden="true" />
                      {event.event_date ? new Date(event.event_date).toLocaleString() : 'Date announced soon'}
                    </span>
                    <span className="flex gap-2">
                      <MapPin className="size-4 text-accent" aria-hidden="true" />
                      {event.location ?? 'Agrocops Chelakkara'}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {!loading && events.configured && events.data.length === 0 ? (
            <Card className="mt-8 border-dashed p-6">
              <h3 className="text-xl font-extrabold text-primary">No published events yet.</h3>
              <p className="mt-2 text-base leading-7 text-muted-foreground">
                Add an event from the admin dashboard to show it here. Visitors can
                WhatsApp Agrocops for upcoming workshop information.
              </p>
              <WhatsappCta label="Ask about events" context="event" title="Events empty state" className="mt-5" />
            </Card>
          ) : null}
          {events.error ? (
            <p className="mt-5 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700">
              Unable to load events: {events.error}
            </p>
          ) : null}
        </div>
      </section>
      <section className="bg-muted/45 py-14 md:py-20">
        <div className="premium-container max-w-xl">
          <PublicConversionForm kind="event" source="events_registration" />
        </div>
      </section>
    </>
  )
}
