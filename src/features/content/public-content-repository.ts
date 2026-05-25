import { supabase } from '~/lib/supabase/client'

export type PublicProduct = {
  id?: string
  slug: string
  name: string
  description: string
  category?: string | null
  benefits?: string[]
  application?: string | null
  suitable_crops?: string[]
  images?: string[]
  stock_status?: string | null
  pack_sizes?: string[]
  brand?: string | null
  price_range?: string | null
  featured_crop?: string | null
  is_featured?: boolean
}

export type PublicArticle = {
  slug: string
  title: string
  excerpt?: string | null
  content?: string | null
  category?: string | null
  reading_time?: string | null
  featured_image?: string | null
  meta_title?: string | null
  meta_description?: string | null
}

export type PublicCropGuide = {
  slug: string
  crop_name: string
  problem?: string | null
  symptoms?: string | null
  treatment?: string | null
  season?: string | null
}

export type PublicEvent = {
  slug: string
  title: string
  description?: string | null
  event_date?: string | null
  location?: string | null
  featured_image?: string | null
}

export type PublicSuccessStory = {
  farmer_name: string
  village?: string | null
  crop?: string | null
  story: string
  image_url?: string | null
}

type PublicContentState<T> = {
  data: T[]
  error: string | null
  configured: boolean
}

export const emptyPublicContent = <T,>(): PublicContentState<T> => ({
  data: [],
  error: null,
  configured: Boolean(supabase),
})

export async function fetchPublishedProducts(): Promise<PublicContentState<PublicProduct>> {
  if (!supabase) return emptyPublicContent()

  const { data, error } = await supabase
    .from('products')
    .select(`
      id,
      slug,
      name,
      description,
      benefits,
      application,
      suitable_crops,
      images,
      stock_status,
      pack_sizes,
      brand,
      price_range,
      featured_crop,
      is_featured,
      product_categories(name)
    `)
    .eq('status', 'published')
    .order('is_featured', { ascending: false })
    .order('created_at', { ascending: false })

  if (error) return { ...emptyPublicContent(), error: error.message }

  return {
    data: (data ?? []).map((product: any) => ({
      ...product,
      category: product.product_categories?.name ?? null,
    })),
    error: null,
    configured: true,
  }
}

export async function fetchPublishedProductBySlug(
  slug: string,
): Promise<{ data: PublicProduct | null; error: string | null; configured: boolean }> {
  if (!supabase) return { data: null, error: null, configured: false }

  const { data, error } = await supabase
    .from('products')
    .select(`
      id,
      slug,
      name,
      description,
      benefits,
      application,
      suitable_crops,
      images,
      stock_status,
      pack_sizes,
      brand,
      price_range,
      featured_crop,
      is_featured,
      product_categories(name)
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle()

  if (error) return { data: null, error: error.message, configured: true }

  return {
    data: data
      ? {
          ...(data as any),
          category: (data as any).product_categories?.name ?? null,
        }
      : null,
    error: null,
    configured: true,
  }
}

export async function fetchPublishedArticles(): Promise<PublicContentState<PublicArticle>> {
  if (!supabase) return emptyPublicContent()

  const { data, error } = await supabase
    .from('articles')
    .select('slug,title,excerpt,content,category,reading_time,featured_image,meta_title,meta_description,published_at,created_at')
    .eq('status', 'published')
    .order('published_at', { ascending: false, nullsFirst: false })
    .order('created_at', { ascending: false })

  if (error) return { ...emptyPublicContent(), error: error.message }
  return { data: (data ?? []) as PublicArticle[], error: null, configured: true }
}

export async function fetchPublishedArticleBySlug(
  slug: string,
): Promise<{ data: PublicArticle | null; error: string | null; configured: boolean }> {
  if (!supabase) return { data: null, error: null, configured: false }

  const { data, error } = await supabase
    .from('articles')
    .select('slug,title,excerpt,content,category,reading_time,featured_image,meta_title,meta_description')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle()

  if (error) return { data: null, error: error.message, configured: true }
  return { data: (data ?? null) as PublicArticle | null, error: null, configured: true }
}

export async function fetchPublishedCropGuides(): Promise<PublicContentState<PublicCropGuide>> {
  if (!supabase) return emptyPublicContent()

  const { data, error } = await supabase
    .from('crop_guides')
    .select('slug,crop_name,problem,symptoms,treatment,season,created_at')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  if (error) return { ...emptyPublicContent(), error: error.message }
  return { data: (data ?? []) as PublicCropGuide[], error: null, configured: true }
}

export async function fetchPublishedEvents(): Promise<PublicContentState<PublicEvent>> {
  if (!supabase) return emptyPublicContent()

  const { data, error } = await supabase
    .from('events')
    .select('slug,title,description,event_date,location,featured_image,created_at')
    .in('status', ['active', 'published'])
    .order('event_date', { ascending: true, nullsFirst: false })

  if (error) return { ...emptyPublicContent(), error: error.message }
  return { data: (data ?? []) as PublicEvent[], error: null, configured: true }
}

export async function fetchPublishedSuccessStories(): Promise<PublicContentState<PublicSuccessStory>> {
  if (!supabase) return emptyPublicContent()

  const { data, error } = await supabase
    .from('success_stories')
    .select('farmer_name,village,crop,story,image_url,created_at')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  if (error) return { ...emptyPublicContent(), error: error.message }
  return { data: (data ?? []) as PublicSuccessStory[], error: null, configured: true }
}
