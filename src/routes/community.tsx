import { createFileRoute } from '@tanstack/react-router'
import { PublicConversionForm } from '~/components/forms/public-conversion-forms'
import { ContentPage } from '~/features/pages/content-page'
import { pageIntro } from '~/features/content/site-content'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'

export const Route = createFileRoute('/community')({
  head: () => ({
    meta: seo({
      title: 'Agrocops WhatsApp Farmer Community | Chelakkara',
      description:
        'Join the Agrocops Chelakkara farmer community for WhatsApp updates, seasonal guidance, workshops, farmer stories, and gardening support.',
      path: '/community',
    }),
    links: [{ rel: 'canonical', href: getCanonicalUrl('/community') }],
  }),
  component: CommunityPage,
})

function CommunityPage() {
  return (
    <>
      <ContentPage
        {...pageIntro.community}
        ctaContext="community"
        sections={[
          { title: 'Sticky CTA Funnel', description: 'Homepage, articles, products, crop guides, and service pages all route to WhatsApp.' },
          { title: 'Farmer Registration', description: 'Capture name, phone, village, district, crops, farm size, and language preference.' },
          { title: 'Success Stories', description: 'Recognize farmers on website, WhatsApp, social posts, and live events.' },
          { title: 'Community Segments', description: 'Segment by crop type, village, interest, event attendance, and repeat customer status.' },
          { title: 'Newsletter & Phone Updates', description: 'Growers can sign up for seasonal reminders, event notices, and crop-care updates.' },
          { title: 'Welcome Flow', description: 'Post-registration prompts can guide people into the correct WhatsApp community.' },
        ]}
      />
      <section className="section-padding bg-muted/55">
        <div className="container grid gap-6 lg:grid-cols-3">
          <PublicConversionForm kind="farmer" source="community_farmer_registration" />
          <PublicConversionForm kind="story" source="community_success_story" />
          <PublicConversionForm kind="newsletter" source="community_newsletter" />
        </div>
      </section>
    </>
  )
}
