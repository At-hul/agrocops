import { z } from 'zod'
import { leadStatuses } from './admin-types'

const optionalText = z.string().optional().nullable()

export const productSchema = z.object({
  name: z.string().min(2, 'Product name is required'),
  slug: z.string().min(2, 'Slug is required'),
  description: z.string().min(10, 'Description is required'),
  category_id: optionalText,
  application: optionalText,
  brand: optionalText,
  price_range: optionalText,
  featured_crop: optionalText,
  stock_status: z.enum(['in_stock', 'limited', 'out_of_stock', 'on_request']),
  pack_sizes: z.string().optional(),
  suitable_crops: z.string().optional(),
  benefits: z.string().optional(),
  status: z.enum(['draft', 'published', 'archived']),
  is_featured: z.boolean().default(false),
})

export const articleSchema = z.object({
  title: z.string().min(2, 'Title is required'),
  slug: z.string().min(2, 'Slug is required'),
  excerpt: optionalText,
  content: optionalText,
  language: z.string().default('en'),
  title_ml: optionalText,
  excerpt_ml: optionalText,
  content_ml: optionalText,
  category: optionalText,
  reading_time: optionalText,
  meta_title: optionalText,
  meta_description: optionalText,
  status: z.enum(['draft', 'published', 'archived']),
})

export const cropGuideSchema = z.object({
  crop_name: z.string().min(2, 'Crop name is required'),
  slug: z.string().min(2, 'Slug is required'),
  crop_name_ml: optionalText,
  problem: optionalText,
  symptoms: optionalText,
  treatment: optionalText,
  season: optionalText,
  status: z.enum(['draft', 'published', 'review', 'archived']),
})

export const eventSchema = z.object({
  title: z.string().min(2, 'Event title is required'),
  slug: z.string().min(2, 'Slug is required'),
  description: optionalText,
  event_date: optionalText,
  location: optionalText,
  capacity: z.coerce.number().optional().nullable(),
  status: z.enum(['draft', 'active', 'published', 'archived']),
})

export const reviewSchema = z.object({
  reviewer_name: z.string().min(2, 'Reviewer name is required'),
  rating: z.coerce.number().min(1).max(5),
  review_text: optionalText,
  source: z.string().default('google_business_profile'),
  source_url: optionalText,
  is_featured: z.boolean().default(false),
  status: z.enum(['draft', 'published', 'review', 'archived']),
})

export const successStorySchema = z.object({
  farmer_name: z.string().min(2, 'Farmer name is required'),
  phone: optionalText,
  village: optionalText,
  district: optionalText,
  crop: optionalText,
  story: z.string().min(10, 'Story is required'),
  image_url: optionalText,
  recognition_type: optionalText,
  website_featured: z.boolean().default(false),
  social_featured: z.boolean().default(false),
  event_featured: z.boolean().default(false),
  status: z.enum(['draft', 'published', 'review', 'archived']),
})

export const galleryItemSchema = z.object({
  title: z.string().min(2, 'Title is required'),
  category: optionalText,
  image_url: z.string().min(4, 'Image URL is required'),
  alt_text: z.string().min(4, 'Alt text is required'),
  status: z.enum(['draft', 'published', 'review', 'archived']),
})

export const leadUpdateSchema = z.object({
  follow_up_status: z.enum(leadStatuses),
  notes: optionalText,
})
