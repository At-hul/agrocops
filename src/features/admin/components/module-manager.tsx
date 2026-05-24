import { zodResolver } from '@hookform/resolvers/zod'
import { Edit, Plus, RefreshCcw, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Badge } from '~/components/ui/badge'
import { Button, buttonClassName } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import type { ModuleConfig } from '../lib/admin-config'
import {
  deleteModuleRecord,
  fetchModuleRecords,
  saveModuleRecord,
  type AdminRecord,
} from '../lib/admin-repository'
import type { AdminRole } from '../lib/admin-types'
import { canManageModule } from '../lib/admin-types'

type ModuleManagerProps = {
  config: ModuleConfig
  role: AdminRole
}

export function ModuleManager({ config, role }: ModuleManagerProps) {
  const [records, setRecords] = useState<AdminRecord[]>([])
  const [editing, setEditing] = useState<AdminRecord | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const allowed = canManageModule(role, config.id)
  const form = useForm({
    resolver: zodResolver(config.schema),
    defaultValues: getDefaultValues(config),
  })

  useEffect(() => {
    void refresh()
  }, [config.id])

  async function refresh() {
    setLoading(true)
    const { data, error } = await fetchModuleRecords(config)
    setLoading(false)
    if (error) {
      setMessage(error.message)
      return
    }
    setRecords(data)
  }

  async function onSubmit(values: Record<string, unknown>) {
    if (!allowed) {
      setMessage('Your role cannot manage this module.')
      return
    }

    setSaving(true)
    const parsed = config.schema.safeParse(values)
    if (!parsed.success) {
      setSaving(false)
      setMessage('Please fix validation errors before saving.')
      return
    }

    const { error } = await saveModuleRecord(config, parsed.data, editing?.id)
    setSaving(false)
    if (error) {
      setMessage(error.message)
      return
    }

    setMessage(editing ? 'Record updated.' : 'Record created.')
    setEditing(null)
    form.reset(getDefaultValues(config))
    await refresh()
  }

  async function deleteRecord(record: AdminRecord) {
    if (!allowed || !record.id) return
    if (!window.confirm(`Delete this ${config.label} record? This cannot be undone.`)) return
    const { error } = await deleteModuleRecord(config.table, record.id)
    if (error) {
      setMessage(error.message)
      return
    }
    setMessage('Record deleted.')
    await refresh()
  }

  function startEdit(record: AdminRecord) {
    if (!allowed) return
    setEditing(record)
    form.reset(toFormValues(config, record))
  }

  return (
    <section className="scroll-mt-24 rounded-lg border bg-card" id={config.id}>
      <div className="flex flex-col gap-4 border-b p-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-extrabold">{config.label}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {allowed
              ? 'Create, edit, and manage live Supabase records.'
              : 'Read-only for your role.'}
          </p>
        </div>
        <button
          className={buttonClassName({ variant: 'outline', size: 'sm' })}
          type="button"
          onClick={() => void refresh()}
        >
          <RefreshCcw className="size-4" aria-hidden="true" />
          Refresh
        </button>
      </div>

      <div className="grid gap-6 p-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-muted/70 text-xs uppercase text-muted-foreground">
              <tr>
                {config.listColumns.map((column) => (
                  <th key={column.key} className="px-4 py-3">
                    {column.label}
                  </th>
                ))}
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {records.map((record) => (
                <tr key={record.id} className="hover:bg-muted/45">
                  {config.listColumns.map((column, index) => (
                    <td
                      key={column.key}
                      className={index === 0 ? 'px-4 py-3 font-bold' : 'px-4 py-3 text-muted-foreground'}
                    >
                      {String(record[column.key] ?? '')}
                    </td>
                  ))}
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        className={buttonClassName({ variant: 'outline', size: 'sm' })}
                        type="button"
                        disabled={!allowed}
                        onClick={() => startEdit(record)}
                      >
                        <Edit className="size-4" aria-hidden="true" />
                        Edit
                      </button>
                      <button
                        className={buttonClassName({ variant: 'ghost', size: 'sm' })}
                        type="button"
                        disabled={!allowed}
                        onClick={() => void deleteRecord(record)}
                      >
                        <Trash2 className="size-4" aria-hidden="true" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {loading ? (
            <p className="p-5 text-sm font-semibold text-muted-foreground">
              Loading {config.label.toLowerCase()}...
            </p>
          ) : null}
          {!loading && records.length === 0 ? (
            <div className="p-5">
              <div className="rounded-md border border-dashed bg-muted/45 p-5">
                <p className="font-bold">No {config.label.toLowerCase()} yet.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Create the first record with the form on the right.
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <Card className="p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="font-bold">{editing ? 'Edit record' : 'Add record'}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Validated before saving to Supabase.
              </p>
            </div>
            {!allowed ? <Badge tone="brown">Read only</Badge> : null}
          </div>
          <form className="mt-4 grid gap-3" onSubmit={form.handleSubmit(onSubmit)}>
            {config.fields.map((field) => (
              <FieldInput key={field.name} field={field} form={form} disabled={!allowed} />
            ))}
            <div className="flex gap-2">
              <Button type="submit" disabled={!allowed || saving}>
                <Plus className="size-4" aria-hidden="true" />
                {saving ? 'Saving...' : editing ? 'Save changes' : 'Create'}
              </Button>
              {editing ? (
                <button
                  className={buttonClassName({ variant: 'ghost' })}
                  type="button"
                  onClick={() => {
                    setEditing(null)
                    form.reset(getDefaultValues(config))
                  }}
                >
                  Cancel
                </button>
              ) : null}
            </div>
          </form>
          {message ? (
            <p className="mt-4 rounded-md bg-muted p-3 text-sm font-semibold" role="status">
              {message}
            </p>
          ) : null}
        </Card>
      </div>
    </section>
  )
}

function FieldInput({ field, form, disabled }: any) {
  const error = form.formState.errors[field.name]?.message as string | undefined

  return (
    <div>
      <label className="text-sm font-bold" htmlFor={field.name}>
        {field.label}
      </label>
      {field.type === 'textarea' ? (
        <textarea
          id={field.name}
          className="focus-ring mt-1 min-h-24 w-full rounded-md border bg-background px-3 py-2 text-sm"
          disabled={disabled}
          {...form.register(field.name)}
        />
      ) : field.type === 'select' ? (
        <select
          id={field.name}
          className="focus-ring mt-1 min-h-10 w-full rounded-md border bg-background px-3 text-sm"
          disabled={disabled}
          {...form.register(field.name)}
        >
          {field.options?.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : field.type === 'checkbox' ? (
        <input
          id={field.name}
          className="focus-ring mt-2 size-5 rounded border"
          type="checkbox"
          disabled={disabled}
          {...form.register(field.name)}
        />
      ) : (
        <input
          id={field.name}
          className="focus-ring mt-1 min-h-10 w-full rounded-md border bg-background px-3 text-sm"
          type={field.type === 'number' ? 'number' : field.type === 'datetime' ? 'datetime-local' : 'text'}
          disabled={disabled}
          {...form.register(field.name)}
        />
      )}
      {error ? <p className="mt-1 text-xs font-semibold text-red-700">{error}</p> : null}
    </div>
  )
}

function getDefaultValues(config: ModuleConfig) {
  return Object.fromEntries(
    config.fields.map((field) => {
      if (field.type === 'checkbox') return [field.name, false]
      if (field.name === 'stock_status') return [field.name, 'on_request']
      if (field.name === 'status') return [field.name, field.options?.[0]?.value ?? 'draft']
      if (field.name === 'language') return [field.name, 'en']
      if (field.name === 'rating') return [field.name, 5]
      return [field.name, '']
    }),
  )
}

function toFormValues(config: ModuleConfig, record: AdminRecord) {
  const defaults = getDefaultValues(config)
  return Object.fromEntries(
    Object.entries(defaults).map(([key, value]) => {
      const recordValue = record[key]
      if (Array.isArray(recordValue)) return [key, recordValue.join(', ')]
      return [key, recordValue ?? value]
    }),
  )
}
