import { Download, RefreshCcw, Save } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Badge } from '~/components/ui/badge'
import { Button, buttonClassName } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import {
  fetchLeads,
  updateLead,
  type AdminRecord,
} from '../lib/admin-repository'
import type { AdminRole, LeadStatus } from '../lib/admin-types'
import { canManageLeads, leadStatuses } from '../lib/admin-types'

export function LeadManager({ role }: { role: AdminRole }) {
  const [leads, setLeads] = useState<AdminRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [leadType, setLeadType] = useState('all')
  const [status, setStatus] = useState('all')
  const [message, setMessage] = useState<string | null>(null)
  const allowed = canManageLeads(role)
  const leadTypes = useMemo(
    () => ['all', ...Array.from(new Set(leads.map((lead) => String(lead.lead_type))))],
    [leads],
  )

  useEffect(() => {
    void refresh()
  }, [leadType, status])

  async function refresh() {
    setLoading(true)
    const { data, error } = await fetchLeads({ search, leadType, status })
    setLoading(false)
    if (error) {
      setMessage(error.message)
      return
    }
    setLeads(data)
  }

  async function saveLead(lead: AdminRecord, nextStatus: LeadStatus, notes: string) {
    if (!allowed) {
      setMessage('Your role cannot manage leads.')
      return
    }

    const { error } = await updateLead(lead.id!, {
      follow_up_status: nextStatus,
      notes,
    })

    if (error) {
      setMessage(error.message)
      return
    }

    setMessage('Lead updated.')
    await refresh()
  }

  function exportCsv() {
    const headers = ['name', 'phone', 'lead_type', 'crop_type', 'inquiry_source', 'follow_up_status', 'notes']
    const csv = [
      headers.join(','),
      ...leads.map((lead) =>
        headers
          .map((header) => `"${String(lead[header] ?? '').replaceAll('"', '""')}"`)
          .join(','),
      ),
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'agrocops-leads.csv'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="scroll-mt-24 rounded-lg border bg-card" id="leads">
      <div className="flex flex-col gap-4 border-b p-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-extrabold">Leads</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Search, filter, update status, add notes, mark converted, and export CSV.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            className={buttonClassName({ variant: 'outline', size: 'sm' })}
            type="button"
            onClick={() => void refresh()}
          >
            <RefreshCcw className="size-4" aria-hidden="true" />
            Refresh
          </button>
          <button
            className={buttonClassName({ variant: 'primary', size: 'sm' })}
            type="button"
            onClick={exportCsv}
          >
            <Download className="size-4" aria-hidden="true" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="grid gap-4 border-b p-5 md:grid-cols-3">
        <div>
          <label className="text-sm font-bold" htmlFor="lead-search">
            Search
          </label>
          <input
            id="lead-search"
            className="focus-ring mt-1 min-h-10 w-full rounded-md border bg-background px-3 text-sm"
            placeholder="Name, phone, crop"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') void refresh()
            }}
          />
        </div>
        <div>
          <label className="text-sm font-bold" htmlFor="lead-type">
            Lead type
          </label>
          <select
            id="lead-type"
            className="focus-ring mt-1 min-h-10 w-full rounded-md border bg-background px-3 text-sm"
            value={leadType}
            onChange={(event) => setLeadType(event.target.value)}
          >
            {leadTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-bold" htmlFor="lead-status">
            Follow-up status
          </label>
          <select
            id="lead-status"
            className="focus-ring mt-1 min-h-10 w-full rounded-md border bg-background px-3 text-sm"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="all">all</option>
            {leadStatuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 p-5">
        {leads.map((lead) => (
          <LeadRow
            key={lead.id}
            lead={lead}
            allowed={allowed}
            onSave={saveLead}
          />
        ))}
        {loading ? (
          <p className="text-sm font-semibold text-muted-foreground">Loading leads...</p>
        ) : null}
        {!loading && leads.length === 0 ? (
          <div className="rounded-md border border-dashed bg-muted/45 p-5">
            <p className="font-bold">No leads found.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Public inquiry forms and WhatsApp lead capture will populate this pipeline.
            </p>
          </div>
        ) : null}
      </div>

      {message ? (
        <p className="mx-5 mb-5 rounded-md bg-muted p-3 text-sm font-semibold" role="status">
          {message}
        </p>
      ) : null}
    </section>
  )
}

function LeadRow({
  lead,
  allowed,
  onSave,
}: {
  lead: AdminRecord
  allowed: boolean
  onSave: (lead: AdminRecord, status: LeadStatus, notes: string) => Promise<void>
}) {
  const [nextStatus, setNextStatus] = useState<LeadStatus>(
    (lead.follow_up_status as LeadStatus) ?? 'new',
  )
  const [notes, setNotes] = useState(String(lead.notes ?? ''))

  return (
    <Card className="p-4">
      <div className="grid gap-4 lg:grid-cols-[1fr_220px_1fr_auto] lg:items-start">
        <div>
          <p className="font-extrabold">{lead.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{lead.phone}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge tone="neutral">{lead.lead_type}</Badge>
            <Badge tone="green">{lead.crop_type ?? 'No crop'}</Badge>
            <Badge tone="yellow">{lead.inquiry_source}</Badge>
          </div>
        </div>
        <div>
          <label className="text-sm font-bold" htmlFor={`${lead.id}-status`}>
            Status
          </label>
          <select
            id={`${lead.id}-status`}
            className="focus-ring mt-1 min-h-10 w-full rounded-md border bg-background px-3 text-sm"
            value={nextStatus}
            disabled={!allowed}
            onChange={(event) => setNextStatus(event.target.value as LeadStatus)}
          >
            {leadStatuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-bold" htmlFor={`${lead.id}-notes`}>
            Notes
          </label>
          <textarea
            id={`${lead.id}-notes`}
            className="focus-ring mt-1 min-h-20 w-full rounded-md border bg-background px-3 py-2 text-sm"
            value={notes}
            disabled={!allowed}
            onChange={(event) => setNotes(event.target.value)}
          />
        </div>
        <div className="flex gap-2 lg:flex-col">
          <Button
            type="button"
            disabled={!allowed}
            onClick={() => void onSave(lead, nextStatus, notes)}
          >
            <Save className="size-4" aria-hidden="true" />
            Save
          </Button>
          <button
            className={buttonClassName({ variant: 'outline' })}
            type="button"
            disabled={!allowed}
            onClick={() => void onSave(lead, 'converted', notes)}
          >
            Mark converted
          </button>
        </div>
      </div>
    </Card>
  )
}
