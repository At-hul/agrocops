import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { Card } from '~/components/ui/card'
import { ContentPage } from '~/features/pages/content-page'
import { pageIntro } from '~/features/content/site-content'
import {
  emptyPublicContent,
  fetchPublishedCropGuides,
  type PublicCropGuide,
} from '~/features/content/public-content-repository'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'

export const Route = createFileRoute('/crop-advisory')({
  head: () => ({
    meta: seo({
      title: 'Agrocops Chelakkara Farm Advisory | Crop Help',
      description:
        'Get crop advisory for coconut, banana, vegetables, pepper, arecanut, terrace gardens, and urgent WhatsApp crop help from Agrocops Chelakkara.',
      path: '/crop-advisory',
    }),
    links: [{ rel: 'canonical', href: getCanonicalUrl('/crop-advisory') }],
  }),
  component: CropAdvisoryPage,
})

function CropAdvisoryPage() {
  const [guides, setGuides] = useState(emptyPublicContent<PublicCropGuide>())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetchPublishedCropGuides().then((result) => {
      if (!mounted) return
      setGuides(result)
      setLoading(false)
    })
    return () => {
      mounted = false
    }
  }, [])

  return (
    <>
      <ContentPage
        {...pageIntro.advisory}
        ctaContext="crop-guide"
        sections={[
          { title: 'Coconut', description: 'Root care, nutrition, pest checks, and seasonal recommendations.', badge: 'Crop guide' },
          { title: 'Banana', description: 'Stage-wise nutrition, sucker management, disease prevention, and seasonal planning.', badge: 'Crop guide' },
          { title: 'Vegetables', description: 'Kitchen garden and farm vegetable care with organic pesticide guidance.', badge: 'Crop guide' },
          { title: 'Pepper', description: 'Support for vine health, fungal issues, nutrition, and monsoon care.', badge: 'Crop guide' },
          { title: 'Arecanut', description: 'Support for nutrition, seasonal stress, common pest issues, and product selection.', badge: 'Crop guide' },
          { title: 'Urgent Crop Help', description: 'Use WhatsApp when symptoms are spreading quickly or crop damage needs fast guidance.', badge: 'WhatsApp' },
        ]}
      />
      <section className="bg-muted/45 py-14 md:py-20">
        <div className="premium-container">
          <div className="max-w-2xl">
            <p className="premium-eyebrow">Published Crop Guides</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
              Live crop guidance from the admin dashboard.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.data.map((guide) => (
              <Card key={guide.slug} className="hover-lift p-6">
                <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-accent">
                  {guide.season ?? 'Crop guide'}
                </p>
                <h3 className="mt-4 text-2xl font-extrabold text-primary">
                  {guide.crop_name}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {guide.problem ?? 'Seasonal care guidance'}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {guide.treatment ?? guide.symptoms ?? 'WhatsApp Agrocops for a recommendation.'}
                </p>
              </Card>
            ))}
          </div>
          {!loading && guides.configured && guides.data.length === 0 ? (
            <Card className="mt-8 border-dashed p-6">
              <h3 className="text-xl font-extrabold text-primary">No published crop guides yet.</h3>
              <p className="mt-2 text-base leading-7 text-muted-foreground">
                Publish crop guides from the admin dashboard to show live advisory
                content here.
              </p>
              <WhatsappCta label="Ask crop guidance" context="crop-guide" title="Crop guide empty state" className="mt-5" />
            </Card>
          ) : null}
          {guides.error ? (
            <p className="mt-5 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700">
              Unable to load crop guides: {guides.error}
            </p>
          ) : null}
        </div>
      </section>
    </>
  )
}
