import { createFileRoute } from '@tanstack/react-router'
import { LeadCaptureForm } from '~/components/forms/lead-capture-form'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { Badge } from '~/components/ui/badge'
import { Card } from '~/components/ui/card'
import { sampleProducts } from '~/features/content/site-content'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'

export const Route = createFileRoute('/products/$slug')({
  head: ({ params }) => {
    const product = sampleProducts.find((item) => item.slug === params.slug)
    return {
      meta: seo({
        title: `${product?.name ?? 'Product'} | Agrocops Chelakkara`,
        description: `Inquire about ${product?.name ?? 'agricultural products'} with stock status, pack sizes, brand, price range, and crop guidance.`,
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

function ProductDetailPage() {
  const { slug } = Route.useParams()
  const product = sampleProducts.find((item) => item.slug === slug) ?? sampleProducts[0]

  return (
    <div>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <Badge tone="yellow">{product.category}</Badge>
            <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">{product.name}</h1>
            <p className="mt-5 text-lg leading-8 text-primary-foreground/80">
              Check pack sizes, stock status, suitable crops, and application
              guidance before you call, WhatsApp, or visit Agrocops Chelakkara.
            </p>
            <WhatsappCta
              label="WhatsApp product inquiry"
              context="product"
              title={product.name}
              cropType={product.featuredCrop}
              variant="accent"
              className="mt-8"
            />
          </div>
          <Card className="bg-white/95 p-5 text-foreground">
            <dl className="grid gap-4">
              <div><dt className="font-bold">Stock status</dt><dd className="text-muted-foreground">{product.stockStatus}</dd></div>
              <div><dt className="font-bold">Pack sizes</dt><dd className="text-muted-foreground">{product.packSizes}</dd></div>
              <div><dt className="font-bold">Brand</dt><dd className="text-muted-foreground">{product.brand}</dd></div>
              <div><dt className="font-bold">Price range</dt><dd className="text-muted-foreground">{product.priceRange}</dd></div>
              <div><dt className="font-bold">Featured crop</dt><dd className="text-muted-foreground">{product.featuredCrop}</dd></div>
            </dl>
          </Card>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container grid gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {['Benefits', 'Application', 'Suitable Crops', 'FAQs'].map((title) => (
              <Card key={title} className="p-5">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Ask Agrocops for crop-stage guidance, safe usage, and suitable
                  alternatives before purchase.
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
