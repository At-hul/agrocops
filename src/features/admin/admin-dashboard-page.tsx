import { LogOut, MessageCircle, ShieldCheck } from 'lucide-react'
import { Badge } from '~/components/ui/badge'
import { buttonClassName } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { LeadManager } from './components/lead-manager'
import { ModuleManager } from './components/module-manager'
import { fetchDashboardSummary } from './lib/admin-repository'
import { moduleConfigs } from './lib/admin-config'
import { canManageModule } from './lib/admin-types'
import { signOutAdmin, useAdminAuth } from './lib/use-admin-auth'
import { useEffect, useState } from 'react'

export function AdminDashboardPage() {
  const { loading, profile, error, isConfigured } = useAdminAuth()
  const [summary, setSummary] = useState({
    stats: [] as Array<{ label: string; value: string; detail: string }>,
    activity: [] as Array<{ title: string; detail: string }>,
    pipeline: [] as Array<{ status: string; count: number; description: string }>,
  })
  const [summaryLoading, setSummaryLoading] = useState(true)

  useEffect(() => {
    async function loadSummary() {
      const { data } = await fetchDashboardSummary()
      setSummary(data)
      setSummaryLoading(false)
    }

    if (!loading) void loadSummary()
  }, [loading])

  if (loading) {
    return (
      <section className="section-padding bg-background">
        <div className="container">
          <Card className="p-6">
            <p className="font-bold">Checking admin access...</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Loading Supabase session and admin role.
            </p>
          </Card>
        </div>
      </section>
    )
  }

  if (!profile && isConfigured) {
    window.location.href = '/admin/login'
    return null
  }

  const role = profile?.role ?? 'owner'

  return (
    <div className="bg-background">
      <section className="border-b bg-primary text-primary-foreground">
        <div className="container py-10 md:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Badge tone="yellow">Protected Admin</Badge>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
                Manage Agrocops products, content, leads, and trust.
              </h1>
              <p className="mt-4 text-base leading-7 text-primary-foreground/78 md:text-lg">
                Role-aware admin tools for shop owners, managers, and editors.
                Records save to Supabase when environment variables and RLS are configured.
              </p>
              {!isConfigured ? (
                <p className="mt-4 rounded-md bg-white/10 p-3 text-sm font-semibold text-white">
                  Supabase is not configured. Admin records will show empty states until environment variables are set.
                </p>
              ) : null}
              {error ? (
                <p className="mt-4 rounded-md bg-red-50 p-3 text-sm font-semibold text-red-700">
                  {error}
                </p>
              ) : null}
            </div>
            <Card className="border-white/16 bg-white/95 p-4 text-foreground">
              <div className="flex items-start gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-md bg-secondary/15 text-primary">
                  <ShieldCheck className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-extrabold">{profile?.name ?? 'Setup mode'}</p>
                  <p className="text-sm text-muted-foreground">
                    {profile?.email ?? 'Supabase not configured'}
                  </p>
                  <Badge tone="green" className="mt-2">
                    {role}
                  </Badge>
                </div>
              </div>
              <button
                className={buttonClassName({
                  variant: 'outline',
                  size: 'sm',
                  className: 'mt-4 w-full',
                })}
                type="button"
                onClick={() => void signOutAdmin()}
              >
                <LogOut className="size-4" aria-hidden="true" />
                Sign out
              </button>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b bg-muted/55">
        <div className="container grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {summaryLoading ? (
            <Card className="p-4 sm:col-span-2 lg:col-span-4">
              <p className="font-bold">Loading dashboard metrics...</p>
            </Card>
          ) : null}
          {!summaryLoading && summary.stats.length === 0 ? (
            <Card className="p-4 sm:col-span-2 lg:col-span-4">
              <p className="font-bold">No dashboard metrics yet.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Connect Supabase and add records to populate this overview.
              </p>
            </Card>
          ) : null}
          {summary.stats.map((stat) => (
            <Card key={stat.label} className="p-4">
              <p className="text-sm font-bold text-muted-foreground">{stat.label}</p>
              <p className="mt-2 text-3xl font-extrabold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.detail}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container grid gap-8 xl:grid-cols-[260px_minmax(0,1fr)_320px]">
          <aside className="xl:sticky xl:top-20 xl:self-start">
            <div className="rounded-lg border bg-card p-3">
              <p className="px-2 py-2 text-xs font-bold uppercase text-muted-foreground">
                Modules
              </p>
              <nav className="grid gap-1" aria-label="Admin modules">
                {moduleConfigs.map((module) => (
                  <a
                    key={module.id}
                    className="focus-ring flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    href={`#${module.id}`}
                  >
                    <span>{module.label}</span>
                    {!canManageModule(role, module.id) ? (
                      <span className="text-xs">Read</span>
                    ) : null}
                  </a>
                ))}
                <a
                  className="focus-ring flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  href="#leads"
                >
                  <span>Leads</span>
                  {role === 'editor' ? <span className="text-xs">Read</span> : null}
                </a>
              </nav>
            </div>
          </aside>

          <div className="grid gap-6">
            {moduleConfigs.map((config) => (
              <ModuleManager key={config.id} config={config} role={role} />
            ))}
            <LeadManager role={role} />
          </div>

          <aside className="grid content-start gap-6">
            <Card className="p-5">
              <Badge tone="yellow">Lead Pipeline</Badge>
              <div className="mt-5 grid gap-3">
                {summary.pipeline.map((item) => (
                  <div key={item.status} className="rounded-md bg-muted p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-bold">{item.status}</span>
                      <span className="text-sm font-extrabold text-primary">
                        {item.count}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
                {!summaryLoading && summary.pipeline.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Lead status counts will appear after leads are captured.
                  </p>
                ) : null}
              </div>
            </Card>

            <Card className="p-5">
              <Badge tone="green">Today</Badge>
              <div className="mt-5 grid gap-4">
                {(summary.activity.length > 0
                  ? summary.activity.map((item) => ({
                      ...item,
                      icon: MessageCircle,
                    }))
                  : []
                ).map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-primary">
                      <item.icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-bold">{item.title}</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
                {!summaryLoading && summary.activity.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Recent leads and events will appear here.
                  </p>
                ) : null}
              </div>
            </Card>
          </aside>
        </div>
      </section>
    </div>
  )
}
