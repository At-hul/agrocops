import {
  BookOpen,
  CheckCircle2,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Sprout,
  Store,
  Users,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { LeadCaptureForm } from '~/components/forms/lead-capture-form'
import { Badge } from '~/components/ui/badge'
import { buttonClassName } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import {
  emptyPublicContent,
  fetchPublishedProducts,
  fetchPublishedSuccessStories,
  type PublicProduct,
  type PublicSuccessStory,
} from '~/features/content/public-content-repository'
import { createWhatsAppUrl } from '~/features/whatsapp/deep-links'
import { siteConfig } from '~/lib/site'

const growerIntents = [
  {
    title: 'Vegetables',
    image: '/products/vegetable-seeds.webp',
    copy: 'Seeds, nutrition, organic pest care',
  },
  {
    title: 'Flowers',
    image: '/products/flower-seeds.webp',
    copy: 'Flower seeds, pots, seasonal care',
  },
  {
    title: 'Home Garden',
    image: '/products/garden-pots.webp',
    copy: 'Pots, tools, potting support',
  },
  {
    title: 'Terrace Garden',
    image: '/products/grow-bags.webp',
    copy: 'Grow bags, soil mix, starter inputs',
  },
  {
    title: 'Organic Farming',
    image: '/products/organic-fertilizers.webp',
    copy: 'Organic inputs and crop guidance',
  },
]

const solutionCategories = [
  {
    title: 'Organic Fertilizers',
    image: '/products/organic-fertilizers.webp',
    crop: 'Coconut',
  },
  {
    title: 'Organic Pesticides',
    image: '/products/organic-pesticides.webp',
    crop: 'Vegetables',
  },
  {
    title: 'Vegetable Seeds',
    image: '/products/vegetable-seeds.webp',
    crop: 'Kitchen Garden',
  },
  {
    title: 'Flower Seeds',
    image: '/products/flower-seeds.webp',
    crop: 'Flower Garden',
  },
  {
    title: 'Grow Bags',
    image: '/products/grow-bags.webp',
    crop: 'Terrace Garden',
  },
  {
    title: 'Garden Pots',
    image: '/products/garden-pots.webp',
    crop: 'Home Garden',
  },
  {
    title: 'Sprayers',
    image: '/products/sprayers.webp',
    crop: 'Crop Care',
  },
  {
    title: 'Garden Tools',
    image: '/products/garden-tools.webp',
    crop: 'Daily Garden Work',
  },
  {
    title: 'Composting Products',
    image: '/products/inoculum-mix.webp',
    crop: 'Waste Treatment',
  },
]

const featuredProducts = [
  {
    name: 'Fish Amino Acid',
    category: 'Plant Growth Promoter',
    image: '/products/organic-pesticides.webp',
  },
  {
    name: 'Agrocops Vigor',
    category: 'Organic Input',
    image: '/products/organic-pesticides.webp',
  },
  {
    name: 'Agrocops Shield',
    category: 'Organic Crop Care',
    image: '/products/organic-pesticides.webp',
  },
  {
    name: 'Bone Meal',
    category: 'Organic Fertilizer',
    image: '/products/organic-fertilizers.webp',
  },
  {
    name: 'Potting Mix',
    category: 'Home Garden',
    image: '/products/organic-fertilizers.webp',
  },
  {
    name: 'Inoculum Mix',
    category: 'Composting Product',
    image: '/products/inoculum-mix.webp',
  },
]

const advantages = [
  { label: 'Genuine Products', icon: CheckCircle2 },
  { label: 'Expert Guidance', icon: ShieldCheck },
  { label: 'Agrocops Network', icon: Sparkles },
  { label: 'Community Support', icon: Users },
  { label: 'Organic Solutions', icon: Leaf },
]

const networkPillars = [
  { title: 'Economics', copy: 'Better input decisions for practical farm value.', icon: Store },
  { title: 'Education', copy: 'Clear guidance for farmers and home gardeners.', icon: BookOpen },
  { title: 'Extension', copy: 'Local WhatsApp support and store-level follow-up.', icon: Sprout },
]

const successStories = [
  {
    name: 'Farmer Recognition',
    location: 'Chelakkara',
    quote: 'Local growers get product support, seasonal reminders, and community visibility.',
  },
  {
    name: 'Kitchen Garden Support',
    location: 'Venganellur',
    quote: 'Home gardeners can start with seeds, grow bags, nutrition, and WhatsApp advice.',
  },
  {
    name: 'Crop Help Pathway',
    location: 'Thrissur',
    quote: 'Farmers can share symptoms and visit the outlet with more confidence.',
  },
]

export function HomePage() {
  const [liveProducts, setLiveProducts] = useState(emptyPublicContent<PublicProduct>())
  const [liveStories, setLiveStories] = useState(emptyPublicContent<PublicSuccessStory>())

  useEffect(() => {
    let mounted = true
    Promise.all([fetchPublishedProducts(), fetchPublishedSuccessStories()]).then(
      ([products, stories]) => {
        if (!mounted) return
        setLiveProducts(products)
        setLiveStories(stories)
      },
    )
    return () => {
      mounted = false
    }
  }, [])

  const homepageProducts =
    liveProducts.data.length > 0
      ? liveProducts.data.slice(0, 6).map((product) => ({
          name: product.name,
          category: product.category ?? 'Agrocops product',
          image: product.images?.[0] ?? '/products/organic-fertilizers.webp',
        }))
      : featuredProducts

  const homepageStories =
    liveStories.data.length > 0
      ? liveStories.data.slice(0, 3).map((story) => ({
          name: story.farmer_name,
          location: story.village ?? 'Local grower',
          quote: story.story,
        }))
      : successStories

  return (
    <>
      <HeroSection />
      <GrowerExplorerSection />
      <SolutionsSection />
      <FeaturedProductsSection products={homepageProducts} />
      <AdvantageSection />
      <SeasonalFocusSection />
      <NetworkSection />
      <CommunitySection />
      <StoriesSection stories={homepageStories} />
      <LocationSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100vh-4.75rem)] overflow-hidden bg-[radial-gradient(circle_at_80%_10%,rgba(216,139,0,0.16),transparent_28%),linear-gradient(135deg,hsl(var(--background)),hsl(var(--muted)))]">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-primary/10 to-transparent" />
      <div className="premium-container grid min-h-[calc(100vh-4.75rem)] items-center gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal-soft max-w-3xl">
          <div className="inline-flex items-center gap-3 rounded-full border bg-white/80 px-4 py-2 shadow-sm">
            <img
              className="size-9 object-contain"
              src={siteConfig.logoPath}
              alt="Agrocops Official Logo"
              width="36"
              height="36"
            />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-primary">
              An Agrocops Franchise Outlet
            </span>
          </div>
          <h1 className="mt-8 text-6xl font-black leading-[0.9] tracking-normal text-primary sm:text-7xl lg:text-8xl">
            Grow Better.
            <span className="block text-foreground">Harvest Smarter.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-bold leading-9 text-muted-foreground md:text-2xl">
            Organic Inputs. Quality Seeds. Expert Guidance.
            <span className="block text-foreground">For Farmers & Home Gardeners.</span>
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsappCta
              label="WhatsApp Us"
              context="general"
              title="Homepage hero"
              variant="primary"
              className="rounded-full px-7"
            />
            <a
              className={buttonClassName({
                variant: 'outline',
                size: 'lg',
                className: 'rounded-full bg-white/70 px-7',
              })}
              href={siteConfig.phoneHref}
              data-analytics-event="call_click"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call Now
            </a>
            <a
              className={buttonClassName({
                variant: 'accent',
                size: 'lg',
                className: 'rounded-full px-7',
              })}
              href={siteConfig.directionsUrl}
              target="_blank"
              rel="noreferrer"
              data-analytics-event="directions_click"
            >
              <MapPin className="size-5" aria-hidden="true" />
              Visit Store
            </a>
          </div>
        </div>

        <div className="reveal-soft relative">
          <div className="absolute inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" />
          <div className="group overflow-hidden rounded-[2rem] border bg-white shadow-[0_34px_100px_rgba(19,53,31,0.16)]">
            <img
              className="image-zoom aspect-[4/3] w-full object-cover"
              src="/products/organic-fertilizers.webp"
              alt="Agrocops organic fertilizer product packs"
              width="900"
              height="675"
              fetchPriority="high"
            />
            <div className="grid gap-3 p-5 sm:grid-cols-3">
              {[
                ['Open', siteConfig.hours],
                ['Location', 'Venganellur, Chelakkara'],
                ['Support', 'WhatsApp crop advice'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-muted p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-black text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GrowerExplorerSection() {
  return (
    <section className="section-padding bg-background">
      <div className="premium-container">
        <SectionIntro
          eyebrow="What do you grow?"
          title="Start with your garden, crop, or field."
          copy="Choose a growing need and ask Agrocops Chelakkara for the right inputs."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {growerIntents.map((item) => (
            <a
              key={item.title}
              className="group hover-lift focus-ring overflow-hidden rounded-3xl border bg-card"
              href={createWhatsAppUrl({
                context: 'crop-guide',
                title: `I grow ${item.title}`,
                cropType: item.title,
              })}
              target="_blank"
              rel="noreferrer"
              data-analytics-event="whatsapp_click"
            >
              <img
                className="image-zoom aspect-[4/3] w-full object-cover"
                src={item.image}
                alt={`${item.title} support from Agrocops Chelakkara`}
                width="360"
                height="270"
                loading="lazy"
                decoding="async"
              />
              <div className="p-4">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{item.copy}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionsSection() {
  return (
    <section className="section-padding bg-muted/55">
      <div className="premium-container">
        <SectionIntro
          eyebrow="Recommended solutions"
          title="Official Agrocops categories, ready for local guidance."
          copy="Visual product categories with quick WhatsApp inquiry for availability, pack size, and crop fit."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutionCategories.map((item) => (
            <Card key={item.title} className="group hover-lift overflow-hidden rounded-3xl p-0">
              <img
                className="image-zoom aspect-[16/10] w-full object-cover"
                src={item.image}
                alt={`${item.title} available through Agrocops Chelakkara`}
                width="560"
                height="350"
                loading="lazy"
                decoding="async"
              />
              <div className="p-5">
                <Badge tone="green">{item.crop}</Badge>
                <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                <WhatsappCta
                  label="Ask availability"
                  context="product"
                  title={item.title}
                  cropType={item.crop}
                  variant="outline"
                  className="mt-5 w-full rounded-full"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProductsSection({ products }: { products: typeof featuredProducts }) {
  return (
    <section className="section-padding bg-background">
      <div className="premium-container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Featured products"
            title="Premium inputs for farms and gardens."
            copy="Swipe through popular Agrocops products and ask the outlet for current availability."
          />
          <WhatsappCta
            label="Ask for product list"
            context="product"
            title="Featured product carousel"
            variant="primary"
            className="rounded-full"
          />
        </div>
        <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group hover-lift min-w-[280px] snap-start overflow-hidden rounded-3xl p-0 sm:min-w-[360px]"
            >
              <img
                className="image-zoom aspect-[4/3] w-full object-cover"
                src={product.image}
                alt={`${product.name} product at Agrocops Chelakkara`}
                width="480"
                height="360"
                loading="lazy"
                decoding="async"
              />
              <div className="p-5">
                <p className="premium-eyebrow">{product.category}</p>
                <h3 className="mt-3 text-2xl font-black">{product.name}</h3>
                <WhatsappCta
                  label="Product inquiry"
                  context="product"
                  title={product.name}
                  variant="outline"
                  className="mt-5 w-full rounded-full"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function AdvantageSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="premium-container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
              Agrocops advantage
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Simple reasons farmers choose us.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {advantages.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/14 bg-white/10 p-5">
                <item.icon className="size-7 text-accent" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-black">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SeasonalFocusSection() {
  return (
    <section className="section-padding bg-background">
      <div className="premium-container">
        <div className="grid gap-8 rounded-[2rem] border bg-card p-6 shadow-[0_28px_90px_rgba(19,53,31,0.10)] md:grid-cols-[1fr_0.9fr] md:p-10">
          <div>
            <p className="premium-eyebrow">Seasonal focus</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Monsoon-ready crop care.
            </h2>
            <p className="mt-4 premium-copy">
              Ask about drainage, fungal prevention, organic crop protection,
              soil conditioning, and emergency guidance.
            </p>
            <WhatsappCta
              label="Need crop advice?"
              context="emergency"
              title="Seasonal monsoon crop care"
              variant="accent"
              className="mt-7 rounded-full"
            />
          </div>
          <div className="grid gap-3">
            {['Organic pesticides', 'Sprayers', 'Composting support'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-muted p-4">
                <CheckCircle2 className="size-5 text-secondary" aria-hidden="true" />
                <span className="font-black">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function NetworkSection() {
  return (
    <section className="section-padding bg-muted/55">
      <div className="premium-container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="group overflow-hidden rounded-[2rem] border bg-card shadow-[0_28px_90px_rgba(19,53,31,0.10)]">
          <img
            className="image-zoom aspect-[4/3] w-full object-cover"
            src="/products/agrocops-network.webp"
            alt="Agrocops network visual with agriculture ecosystem"
            width="720"
            height="540"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <p className="premium-eyebrow">Agrocops Network</p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Economics. Education. Extension.
          </h2>
          <p className="mt-5 premium-copy">
            A local outlet experience backed by the wider Agrocops knowledge
            ecosystem and shaped for Chelakkara growers.
          </p>
          <div className="mt-8 grid gap-4">
            {networkPillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-4 rounded-2xl bg-white p-5">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary/12 text-primary">
                  <pillar.icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-black">{pillar.title}</h3>
                  <p className="mt-1 text-sm font-semibold leading-6 text-muted-foreground">
                    {pillar.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CommunitySection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="premium-container grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
            Farmer community
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Join local farming updates on WhatsApp.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/78">
            Seasonal reminders, event updates, crop-care prompts, and product
            availability from Agrocops Chelakkara.
          </p>
        </div>
        <Card className="bg-white p-6 text-foreground">
          <MessageCircle className="size-9 text-secondary" aria-hidden="true" />
          <h3 className="mt-5 text-2xl font-black">WhatsApp Farming Community</h3>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Built for farmers, terrace gardeners, families, and plant lovers.
          </p>
          <WhatsappCta
            label="Join Community"
            context="community"
            title="Homepage community panel"
            variant="primary"
            className="mt-6 w-full rounded-full"
          />
        </Card>
      </div>
    </section>
  )
}

function StoriesSection({ stories }: { stories: typeof successStories }) {
  return (
    <section className="section-padding bg-background">
      <div className="premium-container">
        <SectionIntro
          eyebrow="Success stories"
          title="Local growing wins deserve recognition."
          copy="Short, visual stories can become website features, community highlights, and event moments."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {stories.map((story) => (
            <Card key={story.name} className="hover-lift rounded-3xl p-6">
              <div className="flex size-14 items-center justify-center rounded-full bg-secondary/12 text-primary">
                <Users className="size-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-black">{story.name}</h3>
              <p className="mt-1 font-bold text-accent">{story.location}</p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">"{story.quote}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section className="section-padding bg-muted/55" id="contact">
      <div className="premium-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="premium-eyebrow">Visit Agrocops Chelakkara</p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Call, WhatsApp, or visit the store.
          </h2>
          <div className="mt-8 grid gap-4">
            {[
              ['Phone', siteConfig.phone, Phone],
              ['Address', siteConfig.address, MapPin],
              ['Hours', siteConfig.hours, Store],
            ].map(([label, value, Icon]) => (
              <div key={String(label)} className="flex gap-4 rounded-2xl bg-white p-5">
                <Icon className="mt-1 size-5 shrink-0 text-secondary" aria-hidden="true" />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">
                    {String(label)}
                  </p>
                  <p className="mt-1 font-black leading-7">{String(value)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsappCta
              label="WhatsApp Us"
              context="general"
              title="Homepage location"
              variant="primary"
              className="rounded-full"
            />
            <a
              className={buttonClassName({ variant: 'accent', size: 'lg', className: 'rounded-full' })}
              href={siteConfig.directionsUrl}
              target="_blank"
              rel="noreferrer"
              data-analytics-event="directions_click"
            >
              <MapPin className="size-5" aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>
        <div className="grid gap-5">
          <a
            className="group focus-ring overflow-hidden rounded-[2rem] border bg-card shadow-[0_28px_90px_rgba(19,53,31,0.10)]"
            href={siteConfig.directionsUrl}
            target="_blank"
            rel="noreferrer"
            data-analytics-event="directions_click"
            aria-label="Open Agrocops Chelakkara location in Google Maps"
          >
            <div className="grid min-h-80 place-items-center bg-[radial-gradient(circle_at_center,rgba(216,139,0,0.18),transparent_34%),linear-gradient(135deg,hsl(var(--background)),hsl(var(--muted)))] p-8 text-center">
              <MapPin className="size-12 text-accent transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true" />
              <p className="mt-5 text-3xl font-black text-primary">Agrocops Chelakkara</p>
              <p className="mt-3 max-w-lg text-base leading-7 text-muted-foreground">
                Opposite BSNL Telephone Exchange, Venganellur P.O., Chelakkara
              </p>
              <p className="mt-5 font-black text-primary underline underline-offset-4">
                Open Google Maps
              </p>
            </div>
          </a>
          <LeadCaptureForm leadType="general" inquirySource="homepage_location" />
        </div>
      </div>
    </section>
  )
}

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string
  title: string
  copy: string
}) {
  return (
    <div className="max-w-3xl">
      <p className="premium-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 premium-heading">{title}</h2>
      <p className="mt-5 premium-copy">{copy}</p>
    </div>
  )
}
