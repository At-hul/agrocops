# Agrocops Chelakkara Deployment Guide

This guide prepares the Agrocops Chelakkara website for Supabase, Vercel, and post-launch QA.

## 1. Supabase Setup

### Create Project

1. Go to Supabase and create a new project.
2. Choose a strong database password and save it securely.
3. Wait for the project to finish provisioning.
4. Open Project Settings, then API.
5. Copy the Project URL and anon public key for environment variables.

### Run Schema

1. Open the Supabase SQL Editor.
2. Open `supabase/schema.sql` from this repo.
3. Paste the full SQL into Supabase.
4. Run it once.
5. Confirm tables were created:
   - `products`
   - `articles`
   - `crop_guides`
   - `events`
   - `leads`
   - `reviews`
   - `success_stories`
   - `gallery_items`
   - `community_registrations`
   - `event_registrations`
   - `newsletter_subscribers`
   - `admin_users`

### Optional Product Category Seed

After `schema.sql` succeeds, run `supabase/seed-product-categories.sql` in the Supabase SQL Editor to install the official initial catalog categories:

- Organic Fertilizers
- Organic Pesticides
- Waste Treatment Agents
- Grow Bags
- Nursery Bags
- Sprayers
- Garden Tools
- Vegetable Seeds
- Flower Seeds
- Garden Pots & Containers

### Enable Auth

1. In Supabase, open Authentication.
2. Confirm Email provider is enabled.
3. For production, configure the Site URL to your live domain.
4. Add redirect URLs for:
   - `https://your-domain.com/admin`
   - `https://your-domain.com/admin/login`
   - `http://localhost:3000/admin`
   - `http://localhost:3000/admin/login`

### Create Admin User

1. In Supabase Authentication, create a new user.
2. Use the real admin email and a secure password.
3. Copy the user UUID.

### Insert `admin_users` Row

Run this in Supabase SQL Editor, replacing the values:

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

Supported roles:

- `owner`: full access.
- `manager`: operational access, including leads.
- `editor`: content access where permitted by UI and RLS.

### Confirm RLS Policies

1. Open Authentication as the admin user.
2. Log in at `/admin/login`.
3. Confirm `/admin` loads.
4. Test creating a product.
5. Test updating a lead status.
6. If you see unauthorized errors, confirm:
   - The logged-in user exists in `admin_users`.
   - `status` is `active`.
   - `role` is `owner`, `manager`, or `editor`.
   - The `user_id` matches the Supabase Auth user UUID.

### Test Public Form Inserts

Submit each public form and verify rows appear in Supabase:

- Contact/lead inquiry -> `leads`
- Farmer/community registration -> `community_registrations`
- Event registration -> `event_registrations`
- Newsletter signup -> `newsletter_subscribers`
- Success story submission -> `success_stories`

## 2. Environment Variables

Create these in local `.env` and in Vercel.

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_PUBLIC_SITE_URL=
VITE_PUBLIC_WHATSAPP_NUMBER=919744920187
```

### `VITE_SUPABASE_URL`

Your Supabase project URL.

Example:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
```

### `VITE_SUPABASE_ANON_KEY`

Your Supabase anon public key.

This is safe for browser use when Row Level Security is configured. Do not use the service role key in this app.

### `VITE_PUBLIC_SITE_URL`

The final production website URL.

Example:

```bash
VITE_PUBLIC_SITE_URL=https://www.agrocopschelakkara.com
```

This is used for canonical URLs, Open Graph URLs, and structured data.

### `VITE_PUBLIC_WHATSAPP_NUMBER`

WhatsApp number in international format without `+`.

For Agrocops Chelakkara:

```bash
VITE_PUBLIC_WHATSAPP_NUMBER=919744920187
```

## 3. Vercel Deployment

### Import GitHub Repo

1. Push this project to GitHub.
2. Open Vercel.
3. Click Add New Project.
4. Import the GitHub repository.
5. Keep the framework setting as Vite if detected.

### Add Environment Variables

In Vercel Project Settings, add:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_PUBLIC_SITE_URL`
- `VITE_PUBLIC_WHATSAPP_NUMBER`

Use the same values from your local `.env`.

### Deploy

1. Click Deploy.
2. Wait for the build to finish.
3. Open the Vercel preview URL.
4. Run the post-launch checklist below on the preview URL before assigning the production domain.

### Set Production Domain

1. In Vercel, open Project Settings, then Domains.
2. Add the production domain.
3. Follow Vercel DNS instructions.
4. Update `VITE_PUBLIC_SITE_URL` to the production domain.
5. Redeploy.

### Update Sitemap and Robots

Before final launch, update:

- `public/sitemap.xml`
- `public/robots.txt`

Confirm `https://www.agrocopschelakkara.com` matches the final production domain. If the domain changes, update both files before launch.

Then redeploy.

## 4. Post-Launch Checklist

Test on desktop and mobile.

- WhatsApp button opens the correct chat with `+91 97449 20187`.
- Call button opens `+91 97449 20187`.
- Directions button opens `https://maps.app.goo.gl/A2RqdwULKuoS9j3a8`.
- Lead form submits and creates a row in `leads`.
- Farmer registration submits and creates a row in `community_registrations`.
- Event registration submits and creates a row in `event_registrations`.
- Admin login works at `/admin/login`.
- Product CRUD works in `/admin`.
- Lead status update works in `/admin`.
- Mobile navigation works.
- Emergency crop help CTA is visible and usable.
- Sitemap loads at `/sitemap.xml`.
- Robots loads at `/robots.txt`.
- Submit sitemap to Google Search Console.
- Connect Google Analytics later.

## 5. Command Checklist

Run locally before deployment:

```bash
npm install
npm run typecheck
npm run build
```

All three should complete successfully before launch.
