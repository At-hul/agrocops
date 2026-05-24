import type { z } from 'zod'
import {
  articleSchema,
  cropGuideSchema,
  eventSchema,
  galleryItemSchema,
  productSchema,
  reviewSchema,
  successStorySchema,
} from './admin-schemas'
import type { AdminModuleId } from './admin-types'

export type FieldConfig = {
  name: string
  label: string
  type?: 'text' | 'textarea' | 'select' | 'number' | 'checkbox' | 'datetime'
  options?: Array<{ label: string; value: string }>
}

export type ModuleConfig = {
  id: AdminModuleId
  label: string
  table: AdminModuleId
  schema: z.ZodObject<any>
  listColumns: Array<{ key: string; label: string }>
  fields: FieldConfig[]
}

const statusOptions = [
  { label: 'Draft', value: 'draft' },
  { label: 'Published', value: 'published' },
  { label: 'Review', value: 'review' },
  { label: 'Archived', value: 'archived' },
]

export const moduleConfigs: ModuleConfig[] = [
  {
    id: 'products',
    label: 'Products',
    table: 'products',
    schema: productSchema,
    listColumns: [
      { key: 'name', label: 'Name' },
      { key: 'stock_status', label: 'Stock' },
      { key: 'brand', label: 'Brand' },
      { key: 'featured_crop', label: 'Crop' },
      { key: 'status', label: 'Status' },
    ],
    fields: [
      { name: 'name', label: 'Name' },
      { name: 'slug', label: 'Slug' },
      { name: 'description', label: 'Description', type: 'textarea' },
      {
        name: 'stock_status',
        label: 'Stock status',
        type: 'select',
        options: [
          { label: 'In stock', value: 'in_stock' },
          { label: 'Limited', value: 'limited' },
          { label: 'Out of stock', value: 'out_of_stock' },
          { label: 'On request', value: 'on_request' },
        ],
      },
      { name: 'pack_sizes', label: 'Pack sizes' },
      { name: 'brand', label: 'Brand' },
      { name: 'price_range', label: 'Price range' },
      { name: 'featured_crop', label: 'Featured crop' },
      { name: 'benefits', label: 'Benefits', type: 'textarea' },
      { name: 'suitable_crops', label: 'Suitable crops' },
      { name: 'is_featured', label: 'Featured product', type: 'checkbox' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  {
    id: 'articles',
    label: 'Articles',
    table: 'articles',
    schema: articleSchema,
    listColumns: [
      { key: 'title', label: 'Title' },
      { key: 'category', label: 'Category' },
      { key: 'language', label: 'Language' },
      { key: 'status', label: 'Status' },
    ],
    fields: [
      { name: 'title', label: 'Title' },
      { name: 'slug', label: 'Slug' },
      { name: 'excerpt', label: 'Excerpt', type: 'textarea' },
      { name: 'content', label: 'Content', type: 'textarea' },
      { name: 'category', label: 'Category' },
      { name: 'reading_time', label: 'Reading time' },
      { name: 'title_ml', label: 'Malayalam title' },
      { name: 'meta_title', label: 'Meta title' },
      { name: 'meta_description', label: 'Meta description', type: 'textarea' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  {
    id: 'crop_guides',
    label: 'Crop Guides',
    table: 'crop_guides',
    schema: cropGuideSchema,
    listColumns: [
      { key: 'crop_name', label: 'Crop' },
      { key: 'problem', label: 'Problem' },
      { key: 'season', label: 'Season' },
      { key: 'status', label: 'Status' },
    ],
    fields: [
      { name: 'crop_name', label: 'Crop name' },
      { name: 'slug', label: 'Slug' },
      { name: 'crop_name_ml', label: 'Malayalam crop name' },
      { name: 'problem', label: 'Problem' },
      { name: 'symptoms', label: 'Symptoms', type: 'textarea' },
      { name: 'treatment', label: 'Treatment', type: 'textarea' },
      { name: 'season', label: 'Season' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  {
    id: 'events',
    label: 'Events',
    table: 'events',
    schema: eventSchema,
    listColumns: [
      { key: 'title', label: 'Title' },
      { key: 'event_date', label: 'Date' },
      { key: 'location', label: 'Location' },
      { key: 'status', label: 'Status' },
    ],
    fields: [
      { name: 'title', label: 'Title' },
      { name: 'slug', label: 'Slug' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'event_date', label: 'Event date', type: 'datetime' },
      { name: 'location', label: 'Location' },
      { name: 'capacity', label: 'Capacity', type: 'number' },
      {
        name: 'status',
        label: 'Status',
        type: 'select',
        options: [
          { label: 'Draft', value: 'draft' },
          { label: 'Active', value: 'active' },
          { label: 'Published', value: 'published' },
          { label: 'Archived', value: 'archived' },
        ],
      },
    ],
  },
  {
    id: 'reviews',
    label: 'Reviews',
    table: 'reviews',
    schema: reviewSchema,
    listColumns: [
      { key: 'reviewer_name', label: 'Reviewer' },
      { key: 'rating', label: 'Rating' },
      { key: 'source', label: 'Source' },
      { key: 'status', label: 'Status' },
    ],
    fields: [
      { name: 'reviewer_name', label: 'Reviewer name' },
      { name: 'rating', label: 'Rating', type: 'number' },
      { name: 'review_text', label: 'Review text', type: 'textarea' },
      { name: 'source', label: 'Source' },
      { name: 'source_url', label: 'Source URL' },
      { name: 'is_featured', label: 'Feature review', type: 'checkbox' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  {
    id: 'success_stories',
    label: 'Success Stories',
    table: 'success_stories',
    schema: successStorySchema,
    listColumns: [
      { key: 'farmer_name', label: 'Farmer' },
      { key: 'village', label: 'Village' },
      { key: 'crop', label: 'Crop' },
      { key: 'status', label: 'Status' },
    ],
    fields: [
      { name: 'farmer_name', label: 'Farmer name' },
      { name: 'phone', label: 'Phone' },
      { name: 'village', label: 'Village' },
      { name: 'district', label: 'District' },
      { name: 'crop', label: 'Crop' },
      { name: 'story', label: 'Story', type: 'textarea' },
      { name: 'image_url', label: 'Image URL' },
      { name: 'recognition_type', label: 'Recognition type' },
      { name: 'website_featured', label: 'Website featured', type: 'checkbox' },
      { name: 'social_featured', label: 'Social featured', type: 'checkbox' },
      { name: 'event_featured', label: 'Event featured', type: 'checkbox' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  {
    id: 'gallery_items',
    label: 'Gallery Items',
    table: 'gallery_items',
    schema: galleryItemSchema,
    listColumns: [
      { key: 'title', label: 'Title' },
      { key: 'category', label: 'Category' },
      { key: 'alt_text', label: 'Alt text' },
      { key: 'status', label: 'Status' },
    ],
    fields: [
      { name: 'title', label: 'Title' },
      { name: 'category', label: 'Category' },
      { name: 'image_url', label: 'Image URL' },
      { name: 'alt_text', label: 'Alt text' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
]
