import type { z } from 'zod'
import { supabase } from '~/lib/supabase/client'
import type { ModuleConfig } from './admin-config'
import type { AdminModuleId, LeadStatus } from './admin-types'
import { leadUpdateSchema } from './admin-schemas'

export type AdminRecord = Record<string, any> & { id?: string }

const arrayFields = new Set(['benefits', 'suitable_crops', 'pack_sizes'])

export async function fetchModuleRecords(config: ModuleConfig) {
  if (!supabase) return { data: [] as AdminRecord[], error: null }

  const { data, error } = await supabase
    .from(config.table)
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50)

  return { data: (data ?? []) as AdminRecord[], error }
}

export async function saveModuleRecord(
  config: ModuleConfig,
  values: z.infer<typeof config.schema>,
  id?: string,
) {
  if (!supabase) return { data: null, error: null }

  const parsed = config.schema.safeParse(values)
  if (!parsed.success) {
    return {
      data: null,
      error: new Error(parsed.error.issues[0]?.message ?? 'Invalid record'),
    }
  }

  const payload = normalizePayload(parsed.data)

  if (id) {
    const { data, error } = await supabase
      .from(config.table)
      .update(payload)
      .eq('id', id)
      .select('*')
      .single()
    return { data, error }
  }

  const { data, error } = await supabase
    .from(config.table)
    .insert(payload)
    .select('*')
    .single()
  return { data, error }
}

export async function deleteModuleRecord(table: AdminModuleId, id: string) {
  if (!supabase) return { error: null }
  if (!id) return { error: new Error('Missing record id') }

  const { error } = await supabase.from(table).delete().eq('id', id)
  return { error }
}

export async function fetchDashboardSummary() {
  if (!supabase) {
    return {
      data: {
        stats: [] as Array<{ label: string; value: string; detail: string }>,
        activity: [] as Array<{ title: string; detail: string }>,
        pipeline: [] as Array<{ status: string; count: number; description: string }>,
      },
      error: null,
    }
  }
  const client = supabase

  const [
    openLeads,
    products,
    upcomingEvents,
    reviews,
    recentLeads,
    recentEvents,
  ] = await Promise.all([
    client
      .from('leads')
      .select('id', { count: 'exact', head: true })
      .in('follow_up_status', ['new', 'contacted', 'interested']),
    client
      .from('products')
      .select('id', { count: 'exact', head: true })
      .eq('status', 'published'),
    client
      .from('events')
      .select('id', { count: 'exact', head: true })
      .in('status', ['active', 'published']),
    client
      .from('reviews')
      .select('id', { count: 'exact', head: true })
      .in('status', ['draft', 'review']),
    client
      .from('leads')
      .select('name,lead_type,follow_up_status,created_at')
      .order('created_at', { ascending: false })
      .limit(3),
    client
      .from('events')
      .select('title,event_date,status')
      .order('created_at', { ascending: false })
      .limit(2),
  ])

  const statusCounts = await Promise.all(
    ['new', 'contacted', 'interested', 'visited_store', 'converted', 'repeat_customer', 'lost'].map(
      async (status) => {
        const { count } = await client
          .from('leads')
          .select('id', { count: 'exact', head: true })
          .eq('follow_up_status', status)
        return {
          status,
          count: count ?? 0,
          description: pipelineDescription(status),
        }
      },
    ),
  )

  const firstError =
    openLeads.error ??
    products.error ??
    upcomingEvents.error ??
    reviews.error ??
    recentLeads.error ??
    recentEvents.error

  return {
    data: {
      stats: [
        { label: 'Open leads', value: String(openLeads.count ?? 0), detail: 'New, contacted, interested' },
        { label: 'Published products', value: String(products.count ?? 0), detail: 'Visible catalog records' },
        { label: 'Upcoming events', value: String(upcomingEvents.count ?? 0), detail: 'Active or published' },
        { label: 'Review queue', value: String(reviews.count ?? 0), detail: 'Draft or review status' },
      ],
      activity: [
        ...(recentLeads.data ?? []).map((lead) => ({
          title: `Lead: ${lead.name ?? 'Unnamed'}`,
          detail: `${lead.lead_type ?? 'general'} is ${lead.follow_up_status ?? 'new'}.`,
        })),
        ...(recentEvents.data ?? []).map((event) => ({
          title: `Event: ${event.title ?? 'Untitled'}`,
          detail: `${event.status ?? 'draft'}${event.event_date ? ` on ${event.event_date}` : ''}.`,
        })),
      ],
      pipeline: statusCounts,
    },
    error: firstError,
  }
}

export async function fetchLeads(filters: {
  search?: string
  leadType?: string
  status?: string
}) {
  if (!supabase) return { data: [] as AdminRecord[], error: null }

  let query = supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100)

  if (filters.leadType && filters.leadType !== 'all') {
    query = query.eq('lead_type', filters.leadType)
  }

  if (filters.status && filters.status !== 'all') {
    query = query.eq('follow_up_status', filters.status)
  }

  if (filters.search) {
    query = query.or(
      `name.ilike.%${filters.search}%,phone.ilike.%${filters.search}%,crop_type.ilike.%${filters.search}%`,
    )
  }

  const { data, error } = await query
  return { data: (data ?? []) as AdminRecord[], error }
}

export async function updateLead(id: string, values: {
  follow_up_status: LeadStatus
  notes?: string | null
}) {
  if (!supabase) return { error: null }
  const parsed = leadUpdateSchema.safeParse(values)
  if (!parsed.success) {
    return { error: new Error(parsed.error.issues[0]?.message ?? 'Invalid lead update') }
  }

  const { error } = await supabase
    .from('leads')
    .update(parsed.data)
    .eq('id', id)

  return { error }
}

function pipelineDescription(status: string) {
  const descriptions: Record<string, string> = {
    new: 'Needs first response',
    contacted: 'Call or WhatsApp sent',
    interested: 'Product or advisory intent',
    visited_store: 'Store visit recorded',
    converted: 'Purchase completed',
    repeat_customer: 'Repeat follow-up pool',
    lost: 'Closed without conversion',
  }

  return descriptions[status] ?? 'Pipeline status'
}

function normalizePayload(values: Record<string, any>) {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => {
      if (arrayFields.has(key) && typeof value === 'string') {
        return [
          key,
          value
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean),
        ]
      }

      return [key, value === '' ? null : value]
    }),
  )
}
