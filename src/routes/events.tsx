import { createFileRoute } from '@tanstack/react-router'
import { PublicConversionForm } from '~/components/forms/public-conversion-forms'
import { ContentPage } from '~/features/pages/content-page'
import { pageIntro } from '~/features/content/site-content'
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
      <section className="section-padding bg-muted/55">
        <div className="container max-w-xl">
          <PublicConversionForm kind="event" source="events_registration" />
        </div>
      </section>
    </>
  )
}
