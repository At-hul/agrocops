import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, Clock, MapPin, Phone, Share2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { Badge } from '~/components/ui/badge'
import { buttonClassName } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import {
  fetchPublishedArticleBySlug,
  type PublicArticle,
} from '~/features/content/public-content-repository'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'
import { siteConfig } from '~/lib/site'

const articles = [
  {
    slug: 'monsoon-crop-care-checklist',
    title: 'Monsoon crop care checklist for Kerala farms',
    readTime: '5 min read',
    category: 'Kerala monsoon care',
    description:
      'Heavy rain can quickly expose drainage problems, fungal pressure, weak roots, and nutrition gaps. Use this checklist before visiting the store or asking Agrocops on WhatsApp.',
  },
]

export const Route = createFileRoute('/knowledge-center/$slug')({
  head: ({ params }) => {
    const article = articles.find((item) => item.slug === params.slug)
    const fallbackTitle = titleizeSlug(params.slug)
    return {
      meta: seo({
        title: article
          ? `${article.title} | Agrocops Chelakkara`
          : `${fallbackTitle} | Agrocops Chelakkara`,
        description:
          article?.description ??
          `Read ${fallbackTitle} from Agrocops Chelakkara or WhatsApp us for local crop guidance.`,
        path: `/knowledge-center/${params.slug}`,
      }),
      links: [
        {
          rel: 'canonical',
          href: getCanonicalUrl(`/knowledge-center/${params.slug}`),
        },
      ],
    }
  },
  component: ArticlePage,
})

function ArticlePage() {
  const { slug } = Route.useParams()
  const staticArticle = articles.find((item) => item.slug === slug)
  const [liveArticle, setLiveArticle] = useState<PublicArticle | null>(null)
  const [isConfigured, setIsConfigured] = useState(false)
  const [loadingArticle, setLoadingArticle] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoadingArticle(true)
    fetchPublishedArticleBySlug(slug).then((result) => {
      if (!mounted) return
      setLiveArticle(result.data)
      setIsConfigured(result.configured)
      setLoadError(result.error)
      setLoadingArticle(false)
    })
    return () => {
      mounted = false
    }
  }, [slug])

  const article =
    liveArticle ??
    (!isConfigured && staticArticle
      ? {
          ...staticArticle,
          excerpt: staticArticle.description,
          content:
            'Keep drainage clear, inspect crops regularly, and use advisory-backed products before issues spread.\n\nFor urgent crop symptoms, send a WhatsApp message with crop name, location, visible symptoms, and recent product use.',
          reading_time: staticArticle.readTime,
        }
      : null)

  if (loadingArticle && isConfigured) {
    return (
      <section className="bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_100%)] py-16 md:py-24">
        <div className="premium-container max-w-3xl">
          <p className="font-bold text-muted-foreground">Loading article...</p>
        </div>
      </section>
    )
  }

  if (!article) {
    return (
      <section className="bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_100%)] py-16 md:py-24">
        <div className="premium-container max-w-3xl">
          <nav className="text-sm font-bold text-muted-foreground" aria-label="Breadcrumb">
            <a className="hover:text-primary" href="/">Home</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <a className="hover:text-primary" href="/knowledge-center">Knowledge Center</a>
          </nav>
          <h1 className="premium-heading mt-6 text-primary">Article not found</h1>
          <p className="premium-copy mt-5">
            This article is not available yet. Visit the Knowledge Center or
            WhatsApp Agrocops Chelakkara for crop guidance.
          </p>
          {loadError ? (
            <p className="mt-4 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700">
              Unable to load article: {loadError}
            </p>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsappCta label="Ask on WhatsApp" context="article" title="Unknown article" />
            <a
              className={buttonClassName({ variant: 'outline', size: 'lg' })}
              href="/knowledge-center"
            >
              View Knowledge Center
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="bg-background">
      <section className="bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_100%)] py-14 md:py-20">
        <div className="premium-container grid gap-10 lg:grid-cols-[minmax(0,760px)_minmax(280px,360px)]">
          <article>
            <nav className="mb-6 text-sm font-bold text-muted-foreground" aria-label="Breadcrumb">
              <a className="hover:text-primary" href="/">Home</a>
              <span className="mx-2" aria-hidden="true">/</span>
              <a className="hover:text-primary" href="/knowledge-center">Knowledge Center</a>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-primary">{article.title}</span>
            </nav>
            <div className="flex flex-wrap gap-3">
              <Badge tone="green">{article.reading_time ?? '5 min read'}</Badge>
              <Badge tone="yellow">{article.category ?? 'Farming guide'}</Badge>
            </div>
            <h1 className="premium-heading mt-5 text-primary">
              {article.title}
            </h1>
            <p className="premium-copy mt-5">
              {article.excerpt ?? 'Practical farming guidance from Agrocops Chelakkara.'}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappCta
                label="Ask about this article"
                context="article"
                title={article.title}
              />
              <a
                className={buttonClassName({ variant: 'outline', size: 'lg' })}
                href={siteConfig.phoneHref}
                data-analytics-event="call_click"
              >
                <Phone className="size-5" aria-hidden="true" />
                Call Now
              </a>
              <a
                className={buttonClassName({ variant: 'outline', size: 'lg' })}
                href={siteConfig.directionsUrl}
                target="_blank"
                rel="noreferrer"
                data-analytics-event="directions_click"
              >
                <MapPin className="size-5" aria-hidden="true" />
                Get Directions
              </a>
            </div>
            <div className="mt-8 grid gap-5 text-base leading-8 text-muted-foreground">
              {(article.content ?? '').split('\n\n').filter(Boolean).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <aside className="grid content-start gap-4">
            <Card className="surface-soft p-6">
              <div className="flex items-center gap-3">
                <BookOpen className="size-5 text-accent" aria-hidden="true" />
                <h2 className="font-extrabold text-primary">Table of contents</h2>
              </div>
              <ul className="mt-4 grid gap-3 text-sm font-semibold text-muted-foreground">
                <li>Drainage checks</li>
                <li>Fungal prevention</li>
                <li>Recommended products</li>
                <li>Related crop guides</li>
              </ul>
            </Card>
            <Card className="surface-soft p-6">
              <Clock className="size-5 text-accent" aria-hidden="true" />
              <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
                Fast help
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Send crop name, visible symptoms, location, and recent product use
                on WhatsApp for clearer guidance.
              </p>
            </Card>
            <a
              className={buttonClassName({ variant: 'outline', size: 'lg', className: 'w-full' })}
              href={`https://wa.me/?text=${encodeURIComponent(
                `${article.title} - ${siteConfig.siteUrl}/knowledge-center/${article.slug}`,
              )}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Share this article"
            >
              <Share2 className="size-5" aria-hidden="true" />
              Share Article
            </a>
          </aside>
        </div>
      </section>
    </div>
  )
}

function titleizeSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
