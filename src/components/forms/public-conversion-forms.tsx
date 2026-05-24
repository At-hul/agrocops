import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { Button } from '~/components/ui/button'
import {
  isPublicFormBackendAvailable,
  submitEventRegistration,
  submitFarmerRegistration,
  submitNewsletter,
  submitSuccessStory,
} from '~/features/forms/public-form-repository'
import {
  eventRegistrationSchema,
  farmerRegistrationSchema,
  newsletterSchema,
  successStorySubmissionSchema,
} from '~/features/forms/public-form-schemas'

type PublicFormKind = 'farmer' | 'event' | 'newsletter' | 'story'

const configs = {
  farmer: {
    title: 'Farmer registration',
    schema: farmerRegistrationSchema,
    submit: submitFarmerRegistration,
    fields: ['name', 'phone', 'village', 'district', 'crops', 'farm_size'],
  },
  event: {
    title: 'Event registration',
    schema: eventRegistrationSchema,
    submit: submitEventRegistration,
    fields: ['name', 'phone', 'village', 'district', 'crops', 'attendee_count'],
  },
  newsletter: {
    title: 'Newsletter signup',
    schema: newsletterSchema,
    submit: submitNewsletter,
    fields: ['email', 'phone'],
  },
  story: {
    title: 'Success story submission',
    schema: successStorySubmissionSchema,
    submit: submitSuccessStory,
    fields: ['farmer_name', 'phone', 'village', 'district', 'crop', 'story', 'image_url'],
  },
} as const

export function PublicConversionForm({
  kind,
  source,
}: {
  kind: PublicFormKind
  source: string
}) {
  const config = configs[kind]
  const backendAvailable = isPublicFormBackendAvailable()
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const form = useForm<any>({
    resolver: zodResolver(config.schema as z.ZodTypeAny),
    defaultValues: Object.fromEntries([...config.fields, 'honeypot'].map((field) => [field, ''])),
  })

  async function onSubmit(values: unknown) {
    setStatus('idle')
    setMessage('')

    if (!backendAvailable) {
      setStatus('error')
      setMessage('Online form is temporarily unavailable. Please contact Agrocops on WhatsApp.')
      return
    }

    const { error } = await config.submit(values, {
      source,
      pagePath: window.location.pathname,
    })

    if (error) {
      setStatus('error')
      setMessage(error)
      return
    }

    setStatus('success')
    setMessage('Submitted successfully. Agrocops can follow up from the dashboard.')
    form.reset()
  }

  return (
    <form className="grid gap-3 rounded-lg border bg-card p-5" onSubmit={form.handleSubmit(onSubmit)}>
      <h2 className="text-xl font-extrabold">{config.title}</h2>
      <label className="sr-only" htmlFor={`${kind}-company`}>
        Company
      </label>
      <input
        id={`${kind}-company`}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        {...form.register('honeypot')}
      />
      {config.fields.map((field) => (
        <div key={field}>
          <label className="text-sm font-bold capitalize" htmlFor={`${kind}-${field}`}>
            {field.replaceAll('_', ' ')}
          </label>
          {field === 'story' ? (
            <textarea
              id={`${kind}-${field}`}
              className="focus-ring mt-1 min-h-24 w-full rounded-md border bg-background px-3 py-2 text-sm"
              {...form.register(field)}
            />
          ) : (
            <input
              id={`${kind}-${field}`}
              className="focus-ring mt-1 min-h-10 w-full rounded-md border bg-background px-3 text-sm"
              type={field === 'email' ? 'email' : field === 'attendee_count' ? 'number' : 'text'}
              {...form.register(field)}
            />
          )}
          {form.formState.errors[field]?.message ? (
            <p className="mt-1 text-xs font-semibold text-red-700">
              {String(form.formState.errors[field]?.message)}
            </p>
          ) : null}
        </div>
      ))}
      {!backendAvailable ? (
        <p className="rounded-md bg-accent/15 p-3 text-sm font-semibold text-accent-foreground">
          Online form is temporarily unavailable. Please use WhatsApp for immediate support.
        </p>
      ) : null}
      <Button type="submit" disabled={form.formState.isSubmitting || !backendAvailable}>
        <Send className="size-4" aria-hidden="true" />
        {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
      {status !== 'idle' ? (
        status === 'success' ? (
          <p
            className="rounded-md bg-secondary/15 p-3 text-sm font-semibold text-primary"
            role="status"
          >
            {message}
          </p>
        ) : (
          <div className="grid gap-3 rounded-md bg-red-50 p-3" role="alert">
            <p className="text-sm font-semibold text-red-700">{message}</p>
            <WhatsappCta
              label="Unable to submit form? Contact us on WhatsApp."
              context="general"
              title={`${config.title} fallback`}
              variant="accent"
              className="w-full"
            />
          </div>
        )
      ) : null}
    </form>
  )
}
