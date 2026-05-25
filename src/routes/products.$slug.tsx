import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2, MapPin, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LeadCaptureForm } from '~/components/forms/lead-capture-form'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { buttonClassName } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { sampleProducts } from '~/features/content/site-content'
import {
  fetchPublishedProductBySlug,
  type PublicProduct,
} from '~/features/content/public-content-repository'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'
import { siteConfig } from '~/lib/site'

export const Route = createFileRoute('/products/$slug')({
  head: ({ params }) => {
    const product = sampleProducts.find((item) => item.slug === params.slug)
    const fallbackTitle = titleizeSlug(params.slug)
    return {
      meta: seo({
        title: `${product?.name ?? fallbackTitle} | Agrocops Chelakkara`,
        description: `Inquire about ${product?.name ?? fallbackTitle} with stock status, pack sizes, brand, price range, and crop guidance.`,
        path: `/products/${params.slug}`,
      }),
      links: [
        {
          rel: 'canonical',
          href: getCanonicalUrl(`/products/${params.slug}`),
        },
      ],
    }
  },
  component: ProductDetailPage,
})

const productImages: Record<string, string> = {
  'organic-soil-booster': '/products/organic-fertilizers.webp',
  'organic-pest-care': '/products/organic-pesticides.webp',
  'kitchen-garden-seed-kit': '/products/vegetable-seeds.webp',
}

function ProductDetailPage() {
  const { slug } = Route.useParams()
  const staticProduct = sampleProducts.find((item) => item.slug === slug)
  const [liveProduct, setLiveProduct] = useState<PublicProduct | null>(null)
  const [loadingProduct, setLoadingProduct] = useState(true)
  const [isConfigured, setIsConfigured] = useState(false)
  const [loadError, setLoadError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoadingProduct(true)
    fetchPublishedProductBySlug(slug).then((result) => {
      if (!mounted) return
      setLiveProduct(result.data)
      setIsConfigured(result.configured)
      setLoadError(result.error)
      setLoadingProduct(false)
    })
    return () => {
      mounted = false
    }
  }, [slug])

  const product =
    liveProduct ??
    (!isConfigured && staticProduct
      ? {
          slug: staticProduct.slug,
          name: staticProduct.name,
          description: `Ask for ${staticProduct.name} availability, pack sizes, crop suitability, and usage guidance at Agrocops Chelakkara.`,
          category: staticProduct.category,
          stock_status: staticProduct.stockStatus,
          pack_sizes: staticProduct.packSizes.split(',').map((item) => item.trim()),
          brand: staticProduct.brand,
          price_range: staticProduct.priceRange,
          featured_crop: staticProduct.featuredCrop,
        }
      : null)

  if (loadingProduct && isConfigured) {
    return (
      <section className="bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_100%)] py-16 md:py-24">
        <div className="premium-container max-w-3xl">
          <p className="font-bold text-muted-foreground">Loading product...</p>
        </div>
      </section>
    )
  }

  if (!product) {
    return (
      <section className="bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_100%)] py-16 md:py-24">
        <div className="premium-container max-w-3xl">
          <nav className="text-sm font-bold text-muted-foreground" aria-label="Breadcrumb">
            <a className="hover:text-primary" href="/">Home</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <a className="hover:text-primary" href="/products">Products</a>
          </nav>
          <h1 className="premium-heading mt-6 text-primary">Product not found</h1>
          <p className="premium-copy mt-5">
            This product page is not available yet. Browse the product catalog or
            WhatsApp Agrocops Chelakkara for current stock and recommendations.
          </p>
          {loadError ? (
            <p className="mt-4 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700">
              Unable to load product: {loadError}
            </p>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsappCta label="Ask on WhatsApp" context="product" title="Unknown product" />
            <a className={buttonClassName({ variant: 'outline', size: 'lg' })} href="/products">
              View Products
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_60%,#ffffff_100%)]">
        <div className="premium-container grid gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.75fr)] lg:items-center">
          <div>
            <nav className="mb-6 text-sm font-bold text-muted-foreground" aria-label="Breadcrumb">
              <a className="hover:text-primary" href="/">Home</a>
              <span className="mx-2" aria-hidden="true">/</span>
              <a className="hover:text-primary" href="/products">Products</a>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-primary">{product.name}</span>
            </nav>
            <p className="premium-eyebrow">{product.category}</p>
            <h1 className="premium-heading mt-4 text-primary">{product.name}</h1>
            <p className="premium-copy mt-5 max-w-2xl">
              {product.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappCta
                label="WhatsApp product inquiry"
                context="product"
                title={product.name}
                cropType={product.featured_crop ?? undefined}
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
          <Card className="hover-lift image-zoom overflow-hidden border-white/70 bg-white shadow-soft">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                className="h-full w-full object-cover"
                src={product.images?.[0] ?? productImages[product.slug] ?? '/products/organic-fertilizers.webp'}
                alt={`${product.name} at Agrocops Chelakkara`}
                loading="eager"
              />
            </div>
            <dl className="grid gap-4 p-6 text-sm">
              <div><dt className="font-bold text-foreground">Stock status</dt><dd className="mt-1 text-muted-foreground">{formatStock(product.stock_status)}</dd></div>
              <div><dt className="font-bold text-foreground">Pack sizes</dt><dd className="mt-1 text-muted-foreground">{formatList(product.pack_sizes)}</dd></div>
              <div><dt className="font-bold text-foreground">Brand</dt><dd className="mt-1 text-muted-foreground">{product.brand ?? 'Agrocops'}</dd></div>
              <div><dt className="font-bold text-foreground">Price range</dt><dd className="mt-1 text-muted-foreground">{product.price_range ?? 'On request'}</dd></div>
              <div><dt className="font-bold text-foreground">Featured crop</dt><dd className="mt-1 text-muted-foreground">{product.featured_crop ?? 'Ask for guidance'}</dd></div>
            </dl>
          </Card>
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="premium-container grid gap-8 lg:grid-cols-[1fr_0.72fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: 'Benefits', copy: formatList(product.benefits) },
              { title: 'Application', copy: product.application ?? 'Ask Agrocops for crop-stage guidance, dosage, and timing before use.' },
              { title: 'Suitable Crops', copy: formatList(product.suitable_crops) },
              { title: 'FAQs', copy: 'Ask Agrocops for crop-stage guidance, safe usage, and suitable alternatives before purchase.' },
            ].map((item) => (
              <Card key={item.title} className="surface-soft p-6">
                <CheckCircle2 className="size-6 text-accent" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-extrabold text-primary">{item.title}</h2>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {item.copy}
                </p>
              </Card>
            ))}
          </div>
          <LeadCaptureForm leadType="product_inquiry" inquirySource="product_detail" />
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

function titleizeSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
