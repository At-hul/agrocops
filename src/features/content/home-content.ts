import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Handshake,
  Leaf,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sprout,
  Star,
  Store,
  TrendingUp,
  Users,
  Wheat,
} from 'lucide-react'
import { officialProductCategories } from '~/features/content/site-content'
import { siteConfig } from '~/lib/site'

export const quickActions = [
  { label: 'Call Now', href: siteConfig.phoneHref, icon: Phone },
  { label: 'WhatsApp Us', href: '#whatsapp', icon: MessageCircle },
  {
    label: 'Get Directions',
    href: siteConfig.directionsUrl,
    icon: MapPin,
  },
]

export const trustMetrics = [
  { label: 'Local service areas listed', value: '5' },
  { label: 'Official product categories', value: '10' },
  { label: 'Community growth goal', value: '1,000+' },
  { label: 'Seasonal campaign roadmap', value: '6' },
]

export const trustReasons = [
  {
    title: 'Local crop understanding',
    description: 'Guidance shaped around the crop patterns of Chelakkara, Venganellur, and nearby Thrissur villages.',
    icon: Sprout,
  },
  {
    title: 'Quality product focus',
    description: 'Organic fertilizers, bio inputs, seeds, plant nutrition, and tools selected for practical use.',
    icon: PackageCheck,
  },
  {
    title: 'Advisory before selling',
    description: 'Ask what suits your crop, stage, season, and budget before visiting the store.',
    icon: ShieldCheck,
  },
  {
    title: 'Community learning',
    description: 'WhatsApp updates, farmer stories, workshops, and seasonal reminders keep growers connected.',
    icon: Users,
  },
]

export const agrocopsNetworkPillars = [
  {
    title: 'Economics',
    description:
      'Agrocops Chelakkara keeps product guidance tied to farm economics: input planning, repeat-use value, and practical buying decisions.',
    icon: TrendingUp,
  },
  {
    title: 'Education',
    description:
      'The outlet experience is shaped around farmer learning through crop conversations, seasonal reminders, and knowledge-led product selection.',
    icon: BookOpen,
  },
  {
    title: 'Extension',
    description:
      'Local advisory, WhatsApp support, workshops, and crop-specific follow-up bring wider Agrocops knowledge closer to Chelakkara growers.',
    icon: Handshake,
  },
]

export const outletAdvantages = [
  {
    title: 'ETLP pricing mindset',
    description:
      'Every Time Low Pricing helps farmers ask for suitable inputs with confidence while the outlet stays focused on long-term trust.',
    icon: TrendingUp,
  },
  {
    title: 'Local Knowledge Zone',
    description:
      'Chelakkara-specific crop patterns, villages, seasons, and store conversations guide recommendations for nearby growers.',
    icon: MapPin,
  },
  {
    title: 'Central Knowledge Zone',
    description:
      'The wider Agrocops ecosystem supports knowledge sharing, learning resources, and expert-oriented agricultural guidance.',
    icon: BookOpen,
  },
  {
    title: 'Farmer Advisory Services',
    description:
      'Farmers can ask before buying, share crop symptoms on WhatsApp, and get product suggestions based on crop stage and season.',
    icon: ShieldCheck,
  },
  {
    title: 'Localized Brand Building',
    description:
      'The Chelakkara outlet can build its own local reputation while staying connected to the parent Agrocops movement.',
    icon: Store,
  },
]

export const networkImpact = [
  {
    label: 'Kerala-focused model',
    value: 'Statewide',
    description:
      'Agrocops positions its outlet network around Kerala farming needs, organic inputs, and panchayat-level access.',
  },
  {
    label: 'Knowledge ecosystem',
    value: 'Central + Local',
    description:
      'Local outlets and a broader Knowledge Zone together support product education, webinars, and problem-solving workflows.',
  },
  {
    label: 'Organic input focus',
    value: '10 categories',
    description:
      'The Chelakkara catalog now follows the official Agrocops category structure for farm and garden inputs.',
  },
  {
    label: 'Local outlet role',
    value: 'Chelakkara',
    description:
      'Agrocops Chelakkara translates network-level knowledge into practical store visits, WhatsApp leads, and farmer support.',
  },
]

export const productCategories = officialProductCategories.map((category) => ({
  title: category.title,
  description: category.description,
  featuredCrop: category.relatedCropRecommendations[0],
}))

export const cropAdvisory = [
  'Coconut care',
  'Banana nutrition',
  'Vegetable pest control',
  'Pepper support',
  'Arecanut guidance',
]

export const seasonalCampaigns = [
  {
    title: 'Monsoon Preparation',
    description: 'Drainage, fungal prevention, soil conditioning, and crop safety.',
    month: 'June - July',
  },
  {
    title: 'Banana Season',
    description: 'Nutrition, sucker management, pest care, and yield planning.',
    month: 'Seasonal',
  },
  {
    title: 'Coconut Care Month',
    description: 'Root feeding, micronutrients, pest checks, and basin care.',
    month: 'Monthly focus',
  },
  {
    title: 'Kitchen Garden Campaign',
    description: 'Seeds, grow bags, organic nutrition, and beginner guidance.',
    month: 'All year',
  },
  {
    title: 'Vishu Farming Offers',
    description: 'Festival-season planting bundles and home garden kits.',
    month: 'March - April',
  },
  {
    title: 'Onam Gardening Campaign',
    description: 'Flowering, vegetable, and terrace garden preparation.',
    month: 'July - August',
  },
]

export const articles = [
  {
    title: 'Monsoon crop care checklist for Kerala farms',
    category: 'Seasonal Farming',
    readTime: '5 min read',
  },
  {
    title: 'How to choose organic fertilizer for coconut',
    category: 'Crop Nutrition',
    readTime: '4 min read',
  },
  {
    title: 'Terrace gardening basics for beginners',
    category: 'Home Garden',
    readTime: '6 min read',
  },
]

export const stories = [
  {
    name: 'Farmer recognition program',
    location: 'Chelakkara',
    story:
      'Monthly website, WhatsApp, social, and event recognition for practical farming wins.',
  },
  {
    name: 'Community knowledge spotlight',
    location: 'Thrissur',
    story:
      'Stories can highlight crop recovery, better harvests, garden success, and student learning.',
  },
]

export const events = [
  {
    title: 'Kitchen Garden Starter Workshop',
    date: 'Upcoming',
    description: 'Seeds, soil mix, grow bags, and terrace care basics.',
    icon: Leaf,
  },
  {
    title: 'Crop Nutrition Advisory Day',
    date: 'Upcoming',
    description: 'Bring crop details and get product recommendations.',
    icon: Wheat,
  },
]

export const serviceAreas = [
  'Chelakkara',
  'Pazhayannur',
  'Wadakkanchery',
  'Vallathol Nagar',
  'Shoranur',
]

export const reviewHighlights = [
  {
    title: 'Google review showcase',
    description:
      'Launch with curated review highlights, then connect a review workflow through Google Business Profile.',
    icon: Star,
  },
  {
    title: 'Reputation workflow',
    description:
      'Request reviews after visits, respond weekly, tag feedback themes, and surface trusted snippets.',
    icon: CheckCircle2,
  },
]

export const upcomingCalendar = [
  { label: 'Crop of the Month', value: 'Coconut care' },
  { label: 'Urgent CTA', value: 'Emergency crop help on WhatsApp' },
  { label: 'Local SEO', value: '5 service area landing pages' },
  { label: 'Bilingual roadmap', value: 'Malayalam content fields ready' },
]

export const contactCards = [
  { label: 'Phone', value: siteConfig.phone, icon: Phone },
  { label: 'WhatsApp', value: 'Urgent crop guidance available', icon: MessageCircle },
  { label: 'Address', value: siteConfig.address, icon: MapPin },
  { label: 'Hours', value: siteConfig.hours, icon: CalendarDays },
]
