import { supabase } from '~/lib/supabase/client'
import {
  eventRegistrationSchema,
  farmerRegistrationSchema,
  newsletterSchema,
  publicLeadSchema,
  successStorySubmissionSchema,
} from './public-form-schemas'

type SubmitOptions = {
  source: string
  pagePath: string
}

const backendUnavailableMessage =
  'Online form is temporarily unavailable. Please contact Agrocops on WhatsApp.'
const insertFailedMessage =
  'Could not submit right now. Please contact Agrocops on WhatsApp for immediate help.'

export function isPublicFormBackendAvailable() {
  return Boolean(supabase)
}

export async function submitPublicLead(values: unknown, options: SubmitOptions) {
  const parsed = publicLeadSchema.safeParse(values)
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? 'Invalid lead' }
  if (!supabase) {
    console.error('Public lead submission blocked: Supabase is not configured.')
    return { error: backendUnavailableMessage }
  }

  const { honeypot, ...lead } = parsed.data
  if (honeypot) return { error: 'Spam detected' }

  const { error } = await supabase.from('leads').insert({
    ...lead,
    lead_type: 'general',
    inquiry_source: options.source,
    page_path: options.pagePath,
    follow_up_status: 'new',
  })

  if (error) {
    console.error('Public lead submission failed:', error)
    return { error: insertFailedMessage }
  }

  return { error: null }
}

export async function submitFarmerRegistration(values: unknown, options: SubmitOptions) {
  const parsed = farmerRegistrationSchema.safeParse(values)
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? 'Invalid registration' }
  if (!supabase) {
    console.error('Farmer registration blocked: Supabase is not configured.')
    return { error: backendUnavailableMessage }
  }

  const { honeypot, crops, ...registration } = parsed.data
  if (honeypot) return { error: 'Spam detected' }

  const { error } = await supabase.from('community_registrations').insert({
    ...registration,
    crops: splitCsv(crops),
    interest_type: 'farmer_registration',
    source: options.source,
    status: 'new',
  })

  if (error) {
    console.error('Farmer registration failed:', error)
    return { error: insertFailedMessage }
  }

  return { error: null }
}

export async function submitEventRegistration(values: unknown, options: SubmitOptions) {
  const parsed = eventRegistrationSchema.safeParse(values)
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? 'Invalid event registration' }
  if (!supabase) {
    console.error('Event registration blocked: Supabase is not configured.')
    return { error: backendUnavailableMessage }
  }

  const { honeypot, crops, ...registration } = parsed.data
  if (honeypot) return { error: 'Spam detected' }

  const { error } = await supabase.from('event_registrations').insert({
    ...registration,
    crops: splitCsv(crops),
    source: options.source,
    status: 'new',
  })

  if (error) {
    console.error('Event registration failed:', error)
    return { error: insertFailedMessage }
  }

  return { error: null }
}

export async function submitNewsletter(values: unknown, options: SubmitOptions) {
  const parsed = newsletterSchema.safeParse(values)
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? 'Invalid signup' }
  if (!supabase) {
    console.error('Newsletter signup blocked: Supabase is not configured.')
    return { error: backendUnavailableMessage }
  }

  const { honeypot, ...signup } = parsed.data
  if (honeypot) return { error: 'Spam detected' }

  const { error } = await supabase.from('newsletter_subscribers').insert({
    ...signup,
    source: options.source,
    consent: true,
  })

  if (error) {
    console.error('Newsletter signup failed:', error)
    return { error: insertFailedMessage }
  }

  return { error: null }
}

export async function submitSuccessStory(values: unknown, options: SubmitOptions) {
  const parsed = successStorySubmissionSchema.safeParse(values)
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? 'Invalid story' }
  if (!supabase) {
    console.error('Success story submission blocked: Supabase is not configured.')
    return { error: backendUnavailableMessage }
  }

  const { honeypot, ...story } = parsed.data
  if (honeypot) return { error: 'Spam detected' }

  const { error } = await supabase.from('success_stories').insert({
    ...story,
    recognition_type: options.source,
    status: 'review',
  })

  if (error) {
    console.error('Success story submission failed:', error)
    return { error: insertFailedMessage }
  }

  return { error: null }
}

function splitCsv(value?: string) {
  return value
    ? value
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
    : []
}
