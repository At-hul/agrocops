import { siteConfig } from '~/lib/site'

export function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Store'],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Opposite BSNL Telephone Exchange, Venganellur P.O.',
      addressLocality: 'Chelakkara',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
      addressDistrict: 'Thrissur',
    },
    geo: {
      '@type': 'GeoCoordinates',
      address: siteConfig.address,
    },
    hasMap: siteConfig.directionsUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    areaServed: [
      'Chelakkara',
      'Pazhayannur',
      'Wadakkanchery',
      'Vallathol Nagar',
      'Shoranur',
    ],
    openingHours: 'Mo-Su 09:00-20:00',
    sameAs: [siteConfig.directionsUrl],
  }

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    slogan: siteConfig.tagline,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['English', 'Malayalam'],
    },
  }

  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Agricultural products and farm inputs',
    brand: siteConfig.name,
    category: [
      'Organic Fertilizers',
      'Organic Pesticides',
      'Waste Treatment Agents',
      'Grow Bags',
      'Nursery Bags',
      'Sprayers',
      'Garden Tools',
      'Vegetable Seeds',
      'Flower Seeds',
      'Garden Pots & Containers',
    ],
    description:
      'Organic fertilizers, organic pesticides, waste treatment agents, grow bags, nursery bags, sprayers, garden tools, vegetable seeds, flower seeds, and garden pots available through Agrocops Chelakkara.',
    areaServed: 'Thrissur, Kerala',
  }

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kerala farming knowledge and crop advisory',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    about: ['Organic farming Kerala', 'Terrace gardening Kerala', 'Crop advisory'],
  }

  const event = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Agrocops farming workshops and advisory days',
    startDate: '2026-06-15T10:00:00+05:30',
    description:
      'Practical agriculture workshops, crop advisory days, and kitchen garden sessions hosted by Agrocops Chelakkara.',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: siteConfig.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Opposite BSNL Telephone Exchange, Venganellur P.O.',
        addressLocality: 'Chelakkara',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Agrocops Chelakkara located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: siteConfig.address,
        },
      },
      {
        '@type': 'Question',
        name: 'Can I ask for crop guidance on WhatsApp?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Contact Agrocops Chelakkara on WhatsApp or call ${siteConfig.phone} for crop guidance and product inquiries.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What are the shop hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: siteConfig.hours,
        },
      },
    ],
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${siteConfig.siteUrl}/products`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        item: `${siteConfig.siteUrl}/contact`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          localBusiness,
          organization,
          product,
          article,
          event,
          faq,
          breadcrumb,
        ]),
      }}
    />
  )
}
