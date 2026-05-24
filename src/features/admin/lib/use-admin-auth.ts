import type { Session } from '@supabase/supabase-js'
import { useEffect, useMemo, useState } from 'react'
import { supabase } from '~/lib/supabase/client'
import type { AdminProfile } from './admin-types'

type AuthState = {
  loading: boolean
  session: Session | null
  profile: AdminProfile | null
  error: string | null
  isConfigured: boolean
}

export function useAdminAuth() {
  const [state, setState] = useState<AuthState>({
    loading: true,
    session: null,
    profile: null,
    error: null,
    isConfigured: Boolean(supabase),
  })

  useEffect(() => {
    let active = true

    async function load() {
      if (!supabase) {
        setState({
          loading: false,
          session: null,
          profile: null,
          error: null,
          isConfigured: false,
        })
        return
      }

      const { data, error } = await supabase.auth.getSession()
      if (!active) return

      if (error || !data.session?.user.email) {
        setState({
          loading: false,
          session: null,
          profile: null,
          error: error?.message ?? null,
          isConfigured: true,
        })
        return
      }

      const profile = await fetchAdminProfile(
        data.session.user.id,
        data.session.user.email,
      )

      if (!active) return
      setState({
        loading: false,
        session: data.session,
        profile,
        error: profile ? null : 'No active admin profile found for this user.',
        isConfigured: true,
      })
    }

    void load()

    const subscription = supabase?.auth.onAuthStateChange(() => {
      void load()
    })

    return () => {
      active = false
      subscription?.data.subscription.unsubscribe()
    }
  }, [])

  return useMemo(() => state, [state])
}

export async function fetchAdminProfile(userId: string, email: string) {
  if (!supabase) return null

  const { data, error } = await supabase
    .from('admin_users')
    .select('id,user_id,email,role,name,status')
    .or(`user_id.eq.${userId},email.eq.${email}`)
    .eq('status', 'active')
    .limit(1)
    .maybeSingle()

  if (error || !data) {
    return null
  }

  return data as AdminProfile
}

export async function signOutAdmin() {
  if (!supabase) return
  await supabase.auth.signOut()
  window.location.href = '/admin/login'
}
