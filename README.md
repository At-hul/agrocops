# Agrocops Chelakkara

Production-oriented TanStack Start platform for Agrocops Chelakkara.

## Stack

- TanStack Start
- TypeScript
- Tailwind CSS
- shadcn-style component primitives
- Supabase
- React Hook Form
- Zod
- Lucide icons

## Run

```bash
npm install
npm run dev
```

Local URL: `http://localhost:3000`

## Deployment

Use [DEPLOYMENT.md](./DEPLOYMENT.md) for Supabase setup, environment variables, Vercel deployment, and post-launch QA.

## Verify

```bash
npm run typecheck
npm run build
```

## Environment

Copy `.env.example` and set:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_PUBLIC_SITE_URL`
- `VITE_PUBLIC_WHATSAPP_NUMBER`

Do not expose a Supabase service role key in this app. Admin writes use the
authenticated user's Supabase session plus Row Level Security policies.

## Supabase

The schema lives in `supabase/schema.sql` and includes products, service areas, leads, seasonal campaigns, bilingual-ready articles, crop guides, events, community registrations, success stories, gallery items, and reviews.

Lead pipeline statuses:

- `new`
- `contacted`
- `interested`
- `visited_store`
- `converted`
- `repeat_customer`
- `lost`

## Admin Auth Setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the Supabase SQL editor.
3. In Supabase Auth, create an admin user with email and password.
4. Add that user to `admin_users`.

Example:

```sql
insert into public.admin_users (user_id, email, role, name, status)
values (
  'AUTH_USER_UUID_HERE',
  'agrocopschelakkara@gmail.com',
  'owner',
  'Agrocops Owner',
  'active'
);
```

Roles:

- `owner`: full access, including leads and admin profiles.
- `manager`: full operational access, including leads.
- `editor`: content access for articles, crop guides, events, gallery, reviews, success stories, and products are read-only where role policy or UI blocks access.

Admin routes:

- `/admin/login`: Supabase Auth login.
- `/admin`: protected dashboard. Unauthenticated users are redirected to `/admin/login` when Supabase is configured.

Both admin routes are marked `noindex, nofollow`.

## Admin CRUD

The dashboard can manage:

- Products
- Articles
- Crop guides
- Events
- Leads
- Reviews
- Success stories
- Gallery items

Lead tools include search, lead type filter, follow-up status filter, status update, notes, mark converted, and CSV export.

## Optional Seed Data

The application no longer depends on built-in sample rows. Empty Supabase tables render empty states in the admin. Add optional seed rows manually only after the schema is installed.

Suggested first records:

- Run `supabase/seed-product-categories.sql` to install the official Agrocops product category structure.
- One published product.
- One article draft.
- One crop guide.
- One upcoming event.
- One test lead submitted through the public contact form.

## Deployment Checklist

- Set all required Vercel environment variables.
- Run the Supabase schema SQL.
- Create at least one Supabase Auth admin user.
- Insert the admin user into `admin_users`.
- Confirm `/admin/login` works.
- Confirm `/admin` redirects unauthenticated users.
- Submit a public inquiry and verify it appears in Leads.
- Submit farmer registration, event registration, newsletter, and success story forms.
- Verify WhatsApp, call, and directions links.
- Replace `VITE_PUBLIC_SITE_URL` with the production domain.
- Update `public/sitemap.xml` and `public/robots.txt` with the production domain.

## Test Checklist

- `npm run typecheck`
- `npm run build`
- Login as owner.
- Login as manager.
- Login as editor and verify lead/settings restrictions.
- Create, edit, and delete a product.
- Create article, crop guide, event, review, success story, and gallery item.
- Filter leads by type and status.
- Update lead notes.
- Mark a lead converted.
- Export leads CSV.
- Verify empty states on empty tables.
