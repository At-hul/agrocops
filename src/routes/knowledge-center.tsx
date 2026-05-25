import { Outlet, createFileRoute, useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { Card } from '~/components/ui/card'
import { ContentPage } from '~/features/pages/content-page'
import { pageIntro } from '~/features/content/site-content'
import {
  emptyPublicContent,
  fetchPublishedArticles,
  type PublicArticle,
} from '~/features/content/public-content-repository'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'

export const Route = createFileRoute('/knowledge-center')({
  head: () => ({
    meta: seo({
      title: 'Organic Farming Kerala Knowledge Center | Agrocops Chelakkara',
      description:
        'Read practical Kerala farming articles on organic fertilizers, monsoon crop care, terrace gardening, plant nutrition, and seasonal recommendations.',
      path: '/knowledge-center',
    }),
    links: [{ rel: 'canonical', href: getCanonicalUrl('/knowledge-center') }],
  }),
  component: KnowledgeCenterPage,
})

function KnowledgeCenterPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const [articles, setArticles] = useState(emptyPublicContent<PublicArticle>())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetchPublishedArticles().then((result) => {
      if (!mounted) return
      setArticles(result)
      setLoading(false)
    })
    return () => {
      mounted = false
    }
  }, [])

  if (pathname !== '/knowledge-center') {
    return <Outlet />
  }

  return (
    <>
      <ContentPage
        {...pageIntro.knowledge}
        ctaContext="article"
        sections={[
          { title: 'Organic Farming Kerala', description: 'Educational content targeting practical organic farming search intent.' },
          { title: 'Terrace Gardening Kerala', description: 'Beginner-friendly guides for grow bags, seeds, nutrition, and seasonal care.' },
          { title: 'Monsoon Farming', description: 'Drainage, disease prevention, fungus care, soil health, and urgent advisory links.' },
          { title: 'Malayalam Content', description: 'Malayalam-friendly article planning helps local growers understand seasonal care and product use clearly.' },
          { title: 'Related Content Flow', description: 'Articles link to crop guides, products, community join, and service area pages.' },
          { title: 'Share & Conversion', description: 'Article CTAs support WhatsApp questions, community funnel, and lead tracking.' },
        ]}
      />
    <section className="bg-muted/45 py-14 md:py-20">
      <div className="premium-container">
        <div className="max-w-2xl">
          <p className="premium-eyebrow">Published Articles</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Practical guides ready for growers.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.data.map((article) => (
            <Card key={article.slug} className="hover-lift p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-accent">
                {article.category ?? 'Farming guide'}
              </p>
              <h3 className="mt-4 text-2xl font-extrabold text-primary">
                <a className="hover:underline" href={`/knowledge-center/${article.slug}`}>
                  {article.title}
                </a>
              </h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                {article.excerpt ?? 'Read practical guidance from Agrocops Chelakkara.'}
              </p>
              <a
                className="mt-5 inline-flex text-sm font-extrabold text-primary underline underline-offset-4"
                href={`/knowledge-center/${article.slug}`}
              >
                Read article
              </a>
            </Card>
          ))}
        </div>
        {!loading && articles.configured && articles.data.length === 0 ? (
          <Card className="mt-8 border-dashed p-6">
            <h3 className="text-xl font-extrabold text-primary">No published articles yet.</h3>
            <p className="mt-2 text-base leading-7 text-muted-foreground">
              Publish articles from the admin dashboard to populate the Knowledge
              Center. Visitors can still ask Agrocops on WhatsApp.
            </p>
            <WhatsappCta
              label="Ask for guidance"
              context="article"
              title="Knowledge Center empty state"
              className="mt-5"
            />
          </Card>
        ) : null}
        {articles.error ? (
          <p className="mt-5 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700">
            Unable to load articles: {articles.error}
          </p>
        ) : null}
      </div>
      </section>
    </>
  )
}
