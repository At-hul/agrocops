import {
  ArrowRight,
  CalendarDays,
  MapPin,
  MessageCircle,
  Phone,
  Sprout,
} from 'lucide-react'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { LeadCaptureForm } from '~/components/forms/lead-capture-form'
import { Badge } from '~/components/ui/badge'
import { buttonClassName } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { SectionHeading } from '~/components/ui/section-heading'
import {
  articles,
  agrocopsNetworkPillars,
  contactCards,
  cropAdvisory,
  events,
  networkImpact,
  outletAdvantages,
  productCategories,
  quickActions,
  reviewHighlights,
  seasonalCampaigns,
  serviceAreas,
  stories,
  trustMetrics,
  trustReasons,
  upcomingCalendar,
} from '~/features/content/home-content'
import { siteConfig } from '~/lib/site'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AgrocopsNetworkSection />
      <TrustSection />
      <KnowledgeEcosystemSection />
      <CorePillarsSection />
      <ProductCategoriesSection />
      <SeasonalCampaignSection />
      <CropAdvisorySection />
      <KnowledgeSection />
      <CommunitySection />
      <EventsSection />
      <OutletAdvantagesSection />
      <NetworkImpactSection />
      <ServiceAreasSection />
      <ReviewsSection />
      <ContactSection />
    </>
  )
}

function AgrocopsNetworkSection() {
  return (
    <section className="section-padding bg-background" id="agrocops-network">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Badge tone="green">About Agrocops Network</Badge>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Local Chelakkara service, connected to the wider Agrocops ecosystem
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Agrocops Chelakkara is built as a local outlet identity for nearby
            farmers, home gardeners, and terrace growers. The experience connects
            store visits, WhatsApp guidance, organic inputs, and practical
            knowledge inspired by the parent Agrocops network.
          </p>
          <WhatsappCta
            label="Ask Agrocops Chelakkara"
            context="general"
            title="Agrocops Network section"
            variant="primary"
            className="mt-6"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {networkImpact.map((item) => (
            <Card key={item.label} className="p-5">
              <p className="text-sm font-bold uppercase text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-extrabold text-primary">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
      <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 md:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <Badge tone="yellow">Agricultural Shop & Farm Advisory in Chelakkara</Badge>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-normal md:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/82 md:text-xl">
            Visit Agrocops Chelakkara near the BSNL Telephone Exchange in
            Venganellur for agricultural products, terrace gardening supplies,
            seasonal crop advice, and WhatsApp support.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className={buttonClassName({ variant: 'accent', size: 'lg' })} href="#contact">
              Contact Us
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <WhatsappCta
              label="Join Community"
              context="community"
              title="Homepage hero community CTA"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/18"
            />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {quickActions.map((action) => (
              <a
                key={action.label}
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 text-sm font-semibold text-white transition-colors hover:bg-white/16"
                href={action.href === '#whatsapp' ? '#community' : action.href}
                target={action.label === 'Get Directions' ? '_blank' : undefined}
                rel={action.label === 'Get Directions' ? 'noreferrer' : undefined}
                data-analytics-event={
                  action.label === 'Get Directions'
                    ? 'directions_click'
                    : action.label === 'Call Now'
                      ? 'call_click'
                      : 'whatsapp_click'
                }
              >
                <action.icon className="size-4" aria-hidden="true" />
                {action.label}
              </a>
            ))}
          </div>
        </div>
        <Card className="border-white/16 bg-white/92 p-5 text-foreground shadow-soft">
          <div className="aspect-[4/3] overflow-hidden rounded-md bg-muted">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
              alt="Healthy farm field representing Agrocops crop support"
            />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {upcomingCalendar.map((item) => (
              <div key={item.label} className="rounded-md bg-muted p-4">
                <p className="text-xs font-bold uppercase text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-bold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}

function TrustSection() {
  return (
    <section className="section-padding bg-background" id="trust">
      <div className="container">
        <SectionHeading
          eyebrow="Trust Layer"
          title="Why farmers trust Agrocops"
          description="The platform leads with local presence, advisory support, product quality, and visible community impact."
          align="center"
        />
        <Card className="mt-10 grid gap-5 p-5 md:grid-cols-[auto_1fr] md:items-center">
          <img
            className="size-24 shrink-0 rounded-md bg-white object-contain p-2 shadow-sm"
            src={siteConfig.logoPath}
            alt="Agrocops Official Logo"
            width="96"
            height="96"
            loading="lazy"
            decoding="async"
          />
          <div>
            <Badge tone="green">Part of the Agrocops Network</Badge>
            <h3 className="mt-3 text-2xl font-extrabold">
              Agrocops Chelakkara brings the wider Agrocops ecosystem closer to local growers
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The Chelakkara outlet keeps the relationship local while using
              Agrocops brand knowledge, official product categories, and
              farmer-first advisory principles to support store visits and
              WhatsApp guidance.
            </p>
          </div>
        </Card>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((metric) => (
            <Card key={metric.label} className="p-5 text-center">
              <p className="text-3xl font-extrabold text-primary">{metric.value}</p>
              <p className="mt-2 text-sm font-semibold text-muted-foreground">
                {metric.label}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustReasons.map((reason) => (
            <Card key={reason.title} className="p-5">
              <reason.icon className="size-6 text-secondary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function KnowledgeEcosystemSection() {
  return (
    <section className="section-padding bg-muted/55" id="knowledge-ecosystem">
      <div className="container">
        <SectionHeading
          eyebrow="Agrocops Knowledge Ecosystem"
          title="Backed by product knowledge, local advisory, and farmer education"
          description="The Chelakkara outlet is positioned as a practical front door to the wider Agrocops knowledge model: local crop conversations, central learning resources, and action-oriented recommendations."
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {agrocopsNetworkPillars.map((pillar) => (
            <Card key={pillar.title} className="p-5">
              <pillar.icon className="size-6 text-secondary" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function CorePillarsSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground" id="economics-education-extension">
      <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Badge tone="yellow">Economics · Education · Extension</Badge>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Three practical pillars for better farming decisions
          </h2>
          <p className="mt-4 text-base leading-7 text-primary-foreground/78">
            Agrocops Chelakkara turns the parent network's core thinking into a
            local service model: help farmers reduce uncertainty, learn before
            buying, and get support after the first conversation.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {agrocopsNetworkPillars.map((pillar) => (
            <div key={pillar.title} className="rounded-lg border border-white/14 bg-white/10 p-5">
              <pillar.icon className="size-6 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-primary-foreground/72">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCategoriesSection() {
  return (
    <section className="section-padding bg-muted/55" id="products">
      <div className="container">
        <SectionHeading
          eyebrow="Products"
          title="Product categories built for Kerala growing needs"
          description="Ask about stock, pack sizes, brands, crop fit, and application guidance before visiting the store."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <Card key={category.title} className="p-5">
              <Badge tone="green">{category.featuredCrop}</Badge>
              <h3 className="mt-4 text-xl font-bold">{category.title}</h3>
              <p className="mt-2 min-h-16 text-sm leading-6 text-muted-foreground">
                {category.description}
              </p>
              <WhatsappCta
                label="Ask about products"
                context="product"
                title={category.title}
                cropType={category.featuredCrop}
                variant="outline"
                className="mt-5 w-full"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function SeasonalCampaignSection() {
  return (
    <section className="section-padding bg-background" id="seasonal">
      <div className="container">
        <SectionHeading
          eyebrow="Campaign Engine"
          title="Seasonal agriculture campaigns"
          description="Campaigns power homepage modules, articles, product bundles, WhatsApp messages, and local offers."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {seasonalCampaigns.map((campaign) => (
            <Card key={campaign.title} className="p-5">
              <div className="flex items-center justify-between gap-3">
                <Badge tone="yellow">{campaign.month}</Badge>
                <CalendarDays className="size-5 text-accent" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{campaign.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {campaign.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function CropAdvisorySection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground" id="advisory">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Badge tone="yellow">Crop Advisory</Badge>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Practical guidance before product selection
          </h2>
          <p className="mt-4 text-base leading-7 text-primary-foreground/78">
            Crop guides connect symptoms, crop type, seasonal context, and
            recommended products. Every guide includes urgent WhatsApp support.
          </p>
          <WhatsappCta
            label="Need urgent crop guidance?"
            context="emergency"
            title="Crop advisory section"
            variant="accent"
            className="mt-6"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {cropAdvisory.map((item) => (
            <div key={item} className="rounded-lg border border-white/14 bg-white/10 p-5">
              <Sprout className="size-5 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-bold">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/72">
                Searchable crop content with treatments, product suggestions,
                and WhatsApp escalation.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function KnowledgeSection() {
  return (
    <section className="section-padding bg-background" id="knowledge">
      <div className="container">
        <SectionHeading
          eyebrow="Knowledge Center"
          title="Content that brings search visitors into the community"
          description="Read practical Kerala-focused articles on monsoon care, organic farming, crop nutrition, and terrace gardening."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.title} className="p-5">
              <Badge tone="neutral">{article.category}</Badge>
              <h3 className="mt-4 text-lg font-bold">{article.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{article.readTime}</p>
              <WhatsappCta
                label="Ask after reading"
                context="article"
                title={article.title}
                variant="outline"
                className="mt-5 w-full"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function CommunitySection() {
  return (
    <section className="section-padding bg-muted/55" id="community">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Community"
            title="A complete farmer recognition program"
            description="Success stories can become website features, WhatsApp community highlights, social posts, and event recognition."
          />
          <WhatsappCta
            label="Join WhatsApp Community"
            context="community"
            title="Homepage community funnel"
            variant="primary"
            className="mt-6"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {stories.map((story) => (
            <Card key={story.name} className="p-5">
              <Badge tone="brown">{story.location}</Badge>
              <h3 className="mt-4 text-lg font-bold">{story.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {story.story}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function EventsSection() {
  return (
    <section className="section-padding bg-background" id="events">
      <div className="container">
        <SectionHeading
          eyebrow="Events"
          title="Workshops and advisory days that turn interest into store visits"
          description="Events support registration, confirmation, attendance tracking, and follow-up lead status."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {events.map((event) => (
            <Card key={event.title} className="p-5">
              <event.icon className="size-6 text-secondary" aria-hidden="true" />
              <Badge tone="yellow" className="mt-4">
                {event.date}
              </Badge>
              <h3 className="mt-4 text-xl font-bold">{event.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {event.description}
              </p>
              <WhatsappCta
                label="Ask about this event"
                context="event"
                title={event.title}
                variant="outline"
                className="mt-5 w-full"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function OutletAdvantagesSection() {
  return (
    <section className="section-padding bg-muted/55" id="outlet-advantages">
      <div className="container">
        <SectionHeading
          eyebrow="Outlet Advantages"
          title="Why an Agrocops outlet matters locally"
          description="Agrocops Chelakkara combines local trust with network-backed knowledge, pricing discipline, advisory support, and repeat community engagement."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {outletAdvantages.map((advantage) => (
            <Card key={advantage.title} className="p-5">
              <advantage.icon className="size-6 text-secondary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold">{advantage.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {advantage.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function NetworkImpactSection() {
  return (
    <section className="section-padding bg-background" id="network-impact">
      <div className="container">
        <SectionHeading
          eyebrow="Agrocops Network Impact"
          title="Parent-brand strength, translated for Chelakkara farmers"
          description="The local outlet can use network-level positioning around organic inputs, knowledge access, outlet reach, and sustainable farming to build confidence with nearby growers."
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {networkImpact.map((item) => (
            <Card key={item.label} className="p-5 text-center">
              <p className="text-sm font-bold uppercase text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-2 text-3xl font-extrabold text-primary">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceAreasSection() {
  return (
    <section className="section-padding bg-muted/55" id="service-areas">
      <div className="container">
        <SectionHeading
          eyebrow="Local SEO"
          title="Service area pages for nearby farming communities"
          description="Dedicated pages will target local search intent with area-specific FAQs, products, directions, and WhatsApp deep links."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {serviceAreas.map((area) => (
            <Card key={area} className="p-5">
              <MapPin className="size-5 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-bold">{area}</h3>
              <a
                className="focus-ring mt-4 inline-flex text-sm font-bold text-primary underline-offset-4 hover:underline"
                href={`/service-areas/${area.toLowerCase().replaceAll(' ', '-')}`}
              >
                View area page
              </a>
              <WhatsappCta
                label="Ask locally"
                context="service-area"
                serviceArea={area}
                title={`Agricultural support in ${area}`}
                variant="outline"
                className="mt-5 w-full px-3"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewsSection() {
  return (
    <section className="section-padding bg-background" id="reviews">
      <div className="container">
        <SectionHeading
          eyebrow="Reputation"
          title="Google Business Profile content workflow"
          description="Google review highlights, farmer recognition, and community stories help new customers choose Agrocops with confidence."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {reviewHighlights.map((review) => (
            <Card key={review.title} className="p-5">
              <review.icon className="size-6 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold">{review.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {review.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="section-padding bg-muted/55 pb-28 md:pb-20" id="contact">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Call, WhatsApp, or visit Agrocops Chelakkara"
            description="Every contact action is prepared for analytics and lead pipeline tracking from new to converted or repeat customer."
          />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a className={buttonClassName({ variant: 'primary', size: 'lg' })} href={siteConfig.phoneHref}>
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
            <WhatsappCta
              label="WhatsApp Us"
              context="general"
              title="Contact section"
              variant="accent"
            />
          </div>
        </div>
        <div className="grid gap-4 xl:grid-cols-[0.85fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {contactCards.map((card) => (
              <Card key={card.label} className="p-5">
                <card.icon className="size-5 text-secondary" aria-hidden="true" />
                <p className="mt-4 text-sm font-bold uppercase text-muted-foreground">
                  {card.label}
                </p>
                <p className="mt-1 font-semibold">{card.value}</p>
              </Card>
            ))}
          </div>
          <LeadCaptureForm leadType="general" inquirySource="homepage_contact" />
        </div>
      </div>
    </section>
  )
}
