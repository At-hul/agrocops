import { Outlet, createFileRoute, useRouterState } from '@tanstack/react-router'
import { MapPin, Phone, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { Badge } from '~/components/ui/badge'
import { buttonClassName } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import {
  officialProductCategories,
  pageIntro,
  sampleProducts,
} from '~/features/content/site-content'
import {
  emptyPublicContent,
  fetchPublishedProducts,
  type PublicProduct,
} from '~/features/content/public-content-repository'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'
import { siteConfig } from '~/lib/site'

export const Route = createFileRoute('/products')({
  head: () => ({
    meta: seo({
      title: 'Agricultural Products Chelakkara | Agrocops Product Catalog',
      description:
        'Explore organic fertilizers, organic pesticides, waste treatment agents, grow bags, nursery bags, sprayers, seeds, garden tools, pots, and containers at Agrocops Chelakkara.',
      path: '/products',
    }),
    links: [{ rel: 'canonical', href: getCanonicalUrl('/products') }],
  }),
  component: ProductsPage,
})

const categoryImages: Record<string, string> = {
  'organic-fertilizers': '/products/organic-fertilizers.webp',
  'organic-pesticides': '/products/organic-pesticides.webp',
  'waste-treatment-agents': '/products/inoculum-mix.webp',
  'grow-bags': '/products/grow-bags.webp',
  'nursery-bags': '/products/grow-bags.webp',
  sprayers: '/products/sprayers.webp',
  'garden-tools': '/products/garden-tools.webp',
  'vegetable-seeds': '/products/vegetable-seeds.webp',
  'flower-seeds': '/products/flower-seeds.webp',
  'garden-pots-containers': '/products/garden-pots.webp',
}

const productImages: Record<string, string> = {
  'organic-soil-booster': '/products/organic-fertilizers.webp',
  'organic-pest-care': '/products/organic-pesticides.webp',
  'kitchen-garden-seed-kit': '/products/vegetable-seeds.webp',
}

function ProductsPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const [publishedProducts, setPublishedProducts] = useState(emptyPublicContent<PublicProduct>())
  const [loadingProducts, setLoadingProducts] = useState(true)

  useEffect(() => {
    let mounted = true
    fetchPublishedProducts().then((result) => {
      if (!mounted) return
      setPublishedProducts(result)
      setLoadingProducts(false)
    })
    return () => {
      mounted = false
    }
  }, [])

  if (pathname !== '/products') {
    return <Outlet />
  }

  const featuredProducts =
    publishedProducts.data.length > 0
      ? publishedProducts.data
      : publishedProducts.configured
        ? []
        : sampleProducts.map((product) => ({
            slug: product.slug,
            name: product.name,
            description: `${product.category} for ${product.featuredCrop}.`,
            category: product.category,
            stock_status: product.stockStatus,
            pack_sizes: product.packSizes.split(',').map((item) => item.trim()),
            brand: product.brand,
            price_range: product.priceRange,
            featured_crop: product.featuredCrop,
            images: [productImages[product.slug] ?? '/products/organic-fertilizers.webp'],
          }))

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_52%,#ffffff_100%)]">
        <div className="premium-container grid gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.8fr)] lg:items-center">
          <div className="reveal-soft">
            <p className="premium-eyebrow">{pageIntro.products.eyebrow}</p>
            <h1 className="premium-heading mt-4 max-w-4xl text-primary">
              {pageIntro.products.title}
            </h1>
            <p className="premium-copy mt-5 max-w-2xl">
              {pageIntro.products.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappCta
                label="WhatsApp Product Help"
                context="product"
                title="Products page"
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
                Visit Store
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {officialProductCategories.slice(0, 4).map((category, index) => (
              <Card
                key={category.slug}
                className={`image-zoom overflow-hidden border-white/70 bg-white/80 shadow-soft ${
                  index === 1 ? 'translate-y-6' : ''
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    className="h-full w-full object-cover"
                    src={categoryImages[category.slug] ?? category.categoryImage}
                    alt={`${category.title} at Agrocops Chelakkara`}
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-extrabold text-primary">
                    {category.title}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="premium-container">
          <div className="max-w-2xl">
            <p className="premium-eyebrow">Product Universe</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
              Official Agrocops categories, made easy to choose.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {officialProductCategories.map((category) => (
              <Card key={category.slug} className="hover-lift image-zoom overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    className="h-full w-full object-cover"
                    src={categoryImages[category.slug] ?? category.categoryImage}
                    alt={`${category.title} category at Agrocops Chelakkara`}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <Badge tone="green">{category.relatedCropRecommendations[0]}</Badge>
                  <h2 className="mt-4 text-2xl font-extrabold text-primary">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="mt-5 grid gap-4 text-sm">
                    <div>
                      <p className="text-sm font-bold text-foreground">Benefits</p>
                      <ul className="mt-2 grid gap-1 text-muted-foreground">
                        {category.benefits.map((benefit) => (
                          <li key={benefit} className="flex gap-2">
                            <Sparkles className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Featured products</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {category.featuredProducts.join(', ')}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Related crops</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {category.relatedCropRecommendations.join(', ')}
                      </p>
                    </div>
                  </div>
                  <WhatsappCta
                    label="Ask about this category"
                    context="product"
                    title={category.title}
                    cropType={category.relatedCropRecommendations[0]}
                    variant="outline"
                    className="mt-5 w-full"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-muted/45 py-14 md:py-20">
        <div className="premium-container">
          <div className="max-w-2xl">
            <p className="premium-eyebrow">Featured Products</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
              Ask before you buy. Leave with the right input.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <Card key={product.slug} className="hover-lift image-zoom overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    className="h-full w-full object-cover"
                    src={product.images?.[0] ?? productImages[product.slug] ?? '/products/organic-fertilizers.webp'}
                    alt={`${product.name} product inquiry at Agrocops Chelakkara`}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <Badge tone="green">{product.category ?? 'Agrocops product'}</Badge>
                  <h2 className="mt-4 text-2xl font-extrabold text-primary">
                    {product.name}
                  </h2>
                  <dl className="mt-4 grid gap-2 text-sm text-muted-foreground">
                  <div><dt className="font-bold text-foreground">Stock</dt><dd>{formatStock(product.stock_status)}</dd></div>
                  <div><dt className="font-bold text-foreground">Pack sizes</dt><dd>{formatList(product.pack_sizes)}</dd></div>
                  <div><dt className="font-bold text-foreground">Brand</dt><dd>{product.brand ?? 'Agrocops'}</dd></div>
                  <div><dt className="font-bold text-foreground">Featured crop</dt><dd>{product.featured_crop ?? 'Ask for guidance'}</dd></div>
                  </dl>
                  <WhatsappCta
                    label="Product inquiry"
                    context="product"
                    title={product.name}
                    cropType={product.featured_crop ?? undefined}
                    variant="outline"
                    className="mt-5 w-full"
                  />
                </div>
              </Card>
            ))}
          </div>
          {!loadingProducts && publishedProducts.configured && featuredProducts.length === 0 ? (
            <Card className="mt-8 border-dashed p-6">
              <h3 className="text-xl font-extrabold text-primary">No published products yet.</h3>
              <p className="mt-2 text-base leading-7 text-muted-foreground">
                Add and publish products from the admin dashboard to populate this
                section. Visitors can still WhatsApp Agrocops for current stock.
              </p>
              <WhatsappCta
                label="Ask current availability"
                context="product"
                title="Products empty state"
                className="mt-5"
              />
            </Card>
          ) : null}
          {publishedProducts.error ? (
            <p className="mt-5 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700">
              Unable to load live products: {publishedProducts.error}
            </p>
          ) : null}
        </div>
      </section>
    </div>
  )
}

function formatStock(status?: string | null) {
  const labels: Record<string, string> = {
    in_stock: 'In stock',
    limited: 'Limited',
    out_of_stock: 'Out of stock',
    on_request: 'On request',
  }
  return status ? labels[status] ?? status : 'On request'
}

function formatList(value?: string[] | string | null) {
  if (Array.isArray(value)) return value.length > 0 ? value.join(', ') : 'Ask at store'
  return value || 'Ask at store'
}
