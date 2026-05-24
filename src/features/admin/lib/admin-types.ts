export type AdminRole = 'owner' | 'manager' | 'editor'

export type AdminProfile = {
  id: string
  user_id: string | null
  email: string
  role: AdminRole
  name: string | null
  status: 'active' | 'disabled'
}

export type AdminModuleId =
  | 'products'
  | 'articles'
  | 'crop_guides'
  | 'events'
  | 'leads'
  | 'reviews'
  | 'success_stories'
  | 'gallery_items'

export const leadStatuses = [
  'new',
  'contacted',
  'interested',
  'visited_store',
  'converted',
  'repeat_customer',
  'lost',
] as const

export type LeadStatus = (typeof leadStatuses)[number]

export function canManageModule(role: AdminRole, moduleId: AdminModuleId) {
  if (role === 'owner' || role === 'manager') {
    return true
  }

  return ['articles', 'crop_guides', 'events', 'gallery_items'].includes(moduleId)
}

export function canManageLeads(role: AdminRole) {
  return role === 'owner' || role === 'manager'
}
