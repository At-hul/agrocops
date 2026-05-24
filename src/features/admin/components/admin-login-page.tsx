import { zodResolver } from '@hookform/resolvers/zod'
import { LockKeyhole, LogIn } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { supabase } from '~/lib/supabase/client'
import { fetchAdminProfile } from '../lib/use-admin-auth'

const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginValues = z.infer<typeof loginSchema>

export function AdminLoginPage() {
  const [message, setMessage] = useState<string | null>(null)
  const [isConfigured] = useState(Boolean(supabase))
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  useEffect(() => {
    async function redirectIfLoggedIn() {
      if (!supabase) return
      const { data } = await supabase.auth.getSession()
      if (data.session?.user.email) {
        const profile = await fetchAdminProfile(
          data.session.user.id,
          data.session.user.email,
        )
        if (profile) window.location.href = '/admin'
      }
    }

    void redirectIfLoggedIn()
  }, [])

  async function onSubmit(values: LoginValues) {
    if (!supabase) {
      setMessage('Supabase is not configured. Add env vars to enable login.')
      return
    }

    setMessage(null)
    const { data, error } = await supabase.auth.signInWithPassword(values)

    if (error || !data.user.email) {
      setMessage(error?.message ?? 'Login failed.')
      return
    }

    const profile = await fetchAdminProfile(data.user.id, data.user.email)
    if (!profile) {
      await supabase.auth.signOut()
      setMessage('This user is not an active Agrocops admin.')
      return
    }

    window.location.href = '/admin'
  }

  return (
    <section className="section-padding min-h-[calc(100vh-4rem)] bg-muted/55">
      <div className="container flex justify-center">
        <Card className="w-full max-w-md p-6">
          <div className="inline-flex size-12 items-center justify-center rounded-md bg-secondary/15 text-primary">
            <LockKeyhole className="size-6" aria-hidden="true" />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold">Admin login</h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Sign in with a Supabase Auth account that exists in the
            `admin_users` table.
          </p>

          {!isConfigured ? (
            <p className="mt-4 rounded-md bg-accent/15 p-3 text-sm font-semibold text-accent-foreground">
              Supabase env vars are not configured. The dashboard runs in
              preview mode only.
            </p>
          ) : null}

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-sm font-bold" htmlFor="admin-email">
                Email
              </label>
              <input
                id="admin-email"
                className="focus-ring mt-2 min-h-11 w-full rounded-md border bg-background px-3 text-sm"
                type="email"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                {...register('email')}
              />
              {errors.email ? (
                <p className="mt-1 text-sm text-red-700">{errors.email.message}</p>
              ) : null}
            </div>
            <div>
              <label className="text-sm font-bold" htmlFor="admin-password">
                Password
              </label>
              <input
                id="admin-password"
                className="focus-ring mt-2 min-h-11 w-full rounded-md border bg-background px-3 text-sm"
                type="password"
                autoComplete="current-password"
                aria-invalid={Boolean(errors.password)}
                {...register('password')}
              />
              {errors.password ? (
                <p className="mt-1 text-sm text-red-700">
                  {errors.password.message}
                </p>
              ) : null}
            </div>
            <Button type="submit" disabled={isSubmitting || !isConfigured}>
              <LogIn className="size-4" aria-hidden="true" />
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          {message ? (
            <p className="mt-4 rounded-md bg-red-50 p-3 text-sm font-semibold text-red-700" role="alert">
              {message}
            </p>
          ) : null}
        </Card>
      </div>
    </section>
  )
}
