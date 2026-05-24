import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import { WhatsappCta } from '~/components/cta/whatsapp-cta'
import { Button } from '~/components/ui/button'
import {
  isPublicFormBackendAvailable,
  submitPublicLead,
} from '~/features/forms/public-form-repository'
import { publicLeadSchema } from '~/features/forms/public-form-schemas'
import { cn } from '~/lib/utils'

type LeadFormValues = z.infer<typeof publicLeadSchema>

type LeadCaptureFormProps = {
  leadType?: string
  inquirySource?: string
  className?: string
}

export function LeadCaptureForm({
  leadType = 'general',
  inquirySource = 'website',
  className,
}: LeadCaptureFormProps) {
  const formId = useId()
  const backendAvailable = isPublicFormBackendAvailable()
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(publicLeadSchema),
    defaultValues: {
      name: '',
      phone: '',
      crop_type: '',
      message: '',
      honeypot: '',
    },
  })

  async function onSubmit(values: LeadFormValues) {
    setStatus('idle')
    setMessage('')

    if (!backendAvailable) {
      setStatus('error')
      setMessage('Online form is temporarily unavailable. Please contact Agrocops on WhatsApp.')
      return
    }

    const { error } = await submitPublicLead(
      { ...values },
      { source: `${inquirySource}:${leadType}`, pagePath: window.location.pathname },
    )

    if (error) {
      setStatus('error')
      setMessage(error)
      return
    }

    setStatus('success')
    reset()
  }

  return (
    <form
      className={cn('grid gap-4 rounded-lg border bg-card p-5 shadow-sm', className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="sr-only" htmlFor={`${formId}-company`}>
          Company
        </label>
        <input
          id={`${formId}-company`}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          {...register('honeypot')}
        />
      </div>
      <div>
        <label className="text-sm font-bold" htmlFor={`${formId}-lead-name`}>
          Name
        </label>
        <input
          id={`${formId}-lead-name`}
          className="focus-ring mt-2 min-h-11 w-full rounded-md border bg-background px-3 text-sm"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${formId}-lead-name-error` : undefined}
          {...register('name')}
        />
        {errors.name ? (
          <p id={`${formId}-lead-name-error`} className="mt-1 text-sm text-red-700">
            {errors.name.message}
          </p>
        ) : null}
      </div>
      <div>
        <label className="text-sm font-bold" htmlFor={`${formId}-lead-phone`}>
          Phone
        </label>
        <input
          id={`${formId}-lead-phone`}
          type="tel"
          className="focus-ring mt-2 min-h-11 w-full rounded-md border bg-background px-3 text-sm"
          autoComplete="tel"
          inputMode="tel"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? `${formId}-lead-phone-error` : undefined}
          {...register('phone')}
        />
        {errors.phone ? (
          <p id={`${formId}-lead-phone-error`} className="mt-1 text-sm text-red-700">
            {errors.phone.message}
          </p>
        ) : null}
      </div>
      <div>
        <label className="text-sm font-bold" htmlFor={`${formId}-lead-crop`}>
          Crop or interest
        </label>
        <input
          id={`${formId}-lead-crop`}
          className="focus-ring mt-2 min-h-11 w-full rounded-md border bg-background px-3 text-sm"
          placeholder="Coconut, banana, terrace garden..."
          {...register('crop_type')}
        />
      </div>
      <div>
        <label className="text-sm font-bold" htmlFor={`${formId}-lead-message`}>
          Message
        </label>
        <textarea
          id={`${formId}-lead-message`}
          className="focus-ring mt-2 min-h-28 w-full rounded-md border bg-background px-3 py-2 text-sm"
          placeholder="Tell us what you need help with"
          {...register('message')}
        />
      </div>
      {!backendAvailable ? (
        <p className="rounded-md bg-accent/15 p-3 text-sm font-semibold text-accent-foreground">
          Online form is temporarily unavailable. Please use WhatsApp for immediate support.
        </p>
      ) : null}
      <Button type="submit" disabled={isSubmitting || !backendAvailable}>
        <Send className="size-4" aria-hidden="true" />
        {isSubmitting ? 'Submitting...' : 'Submit inquiry'}
      </Button>
      {status === 'success' ? (
        <p
          className="rounded-md bg-secondary/15 p-3 text-sm font-semibold text-primary"
          role="status"
        >
          Inquiry captured. Agrocops can follow up from the lead dashboard.
        </p>
      ) : null}
      {status === 'error' ? (
        <div className="grid gap-3 rounded-md bg-red-50 p-3" role="alert">
          <p className="text-sm font-semibold text-red-700">
            {message || 'Could not submit right now. Please use WhatsApp for immediate help.'}
          </p>
          <WhatsappCta
            label="Unable to submit form? Contact us on WhatsApp."
            context="general"
            title="Public inquiry form fallback"
            variant="accent"
            className="w-full"
          />
        </div>
      ) : null}
    </form>
  )
}
