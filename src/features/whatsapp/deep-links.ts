import { siteConfig } from '~/lib/site'

export type WhatsappContext =
  | 'product'
  | 'crop-guide'
  | 'article'
  | 'event'
  | 'service-area'
  | 'emergency'
  | 'community'
  | 'general'

type DeepLinkInput = {
  context: WhatsappContext
  title?: string
  cropType?: string
  serviceArea?: string
  pagePath?: string
}

const contextCopy: Record<WhatsappContext, string> = {
  product: 'I want to inquire about this product',
  'crop-guide': 'I need guidance based on this crop guide',
  article: 'I read this article and need advice',
  event: 'I want to register or know more about this event',
  'service-area': 'I am looking for agricultural support in my area',
  emergency: 'Need urgent crop guidance. Please help me now',
  community: 'I want to join the Agrocops farmer community',
  general: 'I want to contact Agrocops Chelakkara',
}

export function createWhatsAppUrl(input: DeepLinkInput = { context: 'general' }) {
  const parts = [
    `Hello Agrocops, ${contextCopy[input.context]}.`,
    input.title ? `Reference: ${input.title}.` : '',
    input.cropType ? `Crop: ${input.cropType}.` : '',
    input.serviceArea ? `Location: ${input.serviceArea}.` : '',
    input.pagePath ? `Page: ${input.pagePath}.` : '',
  ].filter(Boolean)

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    parts.join(' '),
  )}`
}
