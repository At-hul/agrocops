import { createFileRoute } from '@tanstack/react-router'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { Badge } from '~/components/ui/badge'
import { Card } from '~/components/ui/card'
import { SectionHeading } from '~/components/ui/section-heading'
import {
  officialProductCategories,
  pageIntro,
  sampleProducts,
} from '~/features/content/site-content'
import { getCanonicalUrl, seo } from '~/features/seo/metadata'

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

function ProductsPage() {
  return (
    <div>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container max-w-4xl">
          <Badge tone="yellow">{pageIntro.products.eyebrow}</Badge>
          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            {pageIntro.products.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-primary-foreground/80">
            {pageIntro.products.description}
          </p>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="Official categories"
            title="Initial Agrocops catalog structure"
            description="Each category supports images, benefits, featured product examples, WhatsApp inquiry, and related crop recommendations."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {officialProductCategories.map((category) => (
              <Card key={category.slug} className="overflow-hidden">
                <div className="aspect-[16/10] bg-muted">
                  <img
                    className="h-full w-full object-cover"
                    src={category.categoryImage}
                    alt={`${category.title} category at Agrocops Chelakkara`}
                  />
                </div>
                <div className="p-5">
                  <Badge tone="green">{category.relatedCropRecommendations[0]}</Badge>
                  <h2 className="mt-4 text-xl font-bold">{category.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="mt-5 grid gap-4">
                    <div>
                      <p className="text-sm font-bold text-foreground">Benefits</p>
                      <ul className="mt-2 grid gap-1 text-sm text-muted-foreground">
                        {category.benefits.map((benefit) => (
                          <li key={benefit}>{benefit}</li>
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
      <section className="section-padding bg-muted/55">
        <div className="container">
          <SectionHeading
            eyebrow="Lead-first products"
            title="Featured product examples"
            description="Product records support stock status, pack sizes, brand, price range, and featured crop."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {sampleProducts.map((product) => (
              <Card key={product.slug} className="p-5">
                <Badge tone="green">{product.category}</Badge>
                <h2 className="mt-4 text-xl font-bold">{product.name}</h2>
                <dl className="mt-4 grid gap-2 text-sm text-muted-foreground">
                  <div><dt className="font-bold text-foreground">Stock</dt><dd>{product.stockStatus}</dd></div>
                  <div><dt className="font-bold text-foreground">Pack sizes</dt><dd>{product.packSizes}</dd></div>
                  <div><dt className="font-bold text-foreground">Brand</dt><dd>{product.brand}</dd></div>
                  <div><dt className="font-bold text-foreground">Featured crop</dt><dd>{product.featuredCrop}</dd></div>
                </dl>
                <WhatsappCta
                  label="Product inquiry"
                  context="product"
                  title={product.name}
                  cropType={product.featuredCrop}
                  variant="outline"
                  className="mt-5 w-full"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
