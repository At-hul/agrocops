import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { PublicConversionForm } from '~/components/forms/public-conversion-forms'
import { Card } from '~/components/ui/card'
import { ContentPage } from '~/features/pages/content-page'
import { pageIntro } from '~/features/content/site-content'
import {
  emptyPublicContent,
  fetchPublishedSuccessStories,
  type PublicSuccessStory,
} from '~/features/content/public-content-repository'
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
  const [stories, setStories] = useState(emptyPublicContent<PublicSuccessStory>())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetchPublishedSuccessStories().then((result) => {
      if (!mounted) return
      setStories(result)
      setLoading(false)
    })
    return () => {
      mounted = false
    }
  }, [])

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
      <section className="bg-background py-14 md:py-20">
        <div className="premium-container">
          <div className="max-w-2xl">
            <p className="premium-eyebrow">Farmer Recognition</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
              Published success stories.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stories.data.map((story) => (
              <Card key={`${story.farmer_name}-${story.crop}`} className="hover-lift overflow-hidden">
                {story.image_url ? (
                  <img
                    className="aspect-[16/10] w-full object-cover"
                    src={story.image_url}
                    alt={`${story.farmer_name} success story from ${story.village ?? 'Agrocops Chelakkara'}`}
                    loading="lazy"
                  />
                ) : null}
                <div className="p-6">
                  <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-accent">
                    {story.crop ?? 'Success story'}
                  </p>
                  <h3 className="mt-4 text-2xl font-extrabold text-primary">
                    {story.farmer_name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">
                    {story.village ?? 'Local grower'}
                  </p>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    {story.story}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          {!loading && stories.configured && stories.data.length === 0 ? (
            <Card className="mt-8 border-dashed p-6">
              <h3 className="text-xl font-extrabold text-primary">No published success stories yet.</h3>
              <p className="mt-2 text-base leading-7 text-muted-foreground">
                Publish approved stories from the admin dashboard to recognize
                farmers and gardeners here.
              </p>
              <WhatsappCta label="Share a story" context="community" title="Success story empty state" className="mt-5" />
            </Card>
          ) : null}
          {stories.error ? (
            <p className="mt-5 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700">
              Unable to load success stories: {stories.error}
            </p>
          ) : null}
        </div>
      </section>
      <section className="bg-muted/45 py-14 md:py-20">
        <div className="premium-container grid gap-6 lg:grid-cols-3">
          <PublicConversionForm kind="farmer" source="community_farmer_registration" />
          <PublicConversionForm kind="story" source="community_success_story" />
          <PublicConversionForm kind="newsletter" source="community_newsletter" />
        </div>
      </section>
    </>
  )
}
