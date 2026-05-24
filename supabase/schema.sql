create type lead_status as enum (
  'new',
  'contacted',
  'interested',
  'visited_store',
  'converted',
  'repeat_customer',
  'lost'
);

create type stock_status as enum (
  'in_stock',
  'limited',
  'out_of_stock',
  'on_request'
);

create type admin_role as enum (
  'owner',
  'manager',
  'editor'
);

create table product_categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  category_image_url text,
  benefits text[] default '{}',
  featured_products text[] default '{}',
  related_crop_recommendations text[] default '{}',
  icon text,
  sort_order integer default 0,
  created_at timestamptz default now()
);

create table products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category_id uuid references product_categories(id),
  description text not null,
  benefits text[] default '{}',
  application text,
  suitable_crops text[] default '{}',
  images text[] default '{}',
  stock_status stock_status default 'on_request',
  pack_sizes text[] default '{}',
  brand text,
  price_range text,
  featured_crop text,
  seasonal_tags text[] default '{}',
  is_featured boolean default false,
  status text default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table service_areas (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  district text default 'Thrissur',
  intro text,
  local_keywords text[] default '{}',
  map_embed_url text,
  meta_title text,
  meta_description text,
  faq_items jsonb default '[]'::jsonb,
  status text default 'draft',
  created_at timestamptz default now()
);

create table leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  message text,
  lead_type text not null,
  crop_type text,
  product_id uuid references products(id),
  event_id uuid,
  service_area_id uuid references service_areas(id),
  inquiry_source text not null,
  page_path text,
  follow_up_status lead_status default 'new',
  assigned_to uuid,
  notes text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table seasonal_campaigns (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  campaign_type text not null,
  season text,
  month text,
  crop text,
  recommendations text,
  recommended_product_ids uuid[] default '{}',
  start_date date,
  end_date date,
  status text default 'draft',
  created_at timestamptz default now()
);

create table articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  content text,
  language text default 'en',
  title_ml text,
  excerpt_ml text,
  content_ml text,
  category text,
  reading_time text,
  featured_image text,
  meta_title text,
  meta_description text,
  status text default 'draft',
  published_at timestamptz,
  created_at timestamptz default now()
);

create table crop_guides (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  crop_name text not null,
  crop_name_ml text,
  problem text,
  symptoms text,
  treatment text,
  recommended_product_ids uuid[] default '{}',
  season text,
  status text default 'draft',
  created_at timestamptz default now()
);

create table events (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  event_date timestamptz,
  location text,
  capacity integer,
  status text default 'draft',
  featured_image text,
  created_at timestamptz default now()
);

create table community_registrations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  village text,
  district text,
  crops text[] default '{}',
  interest_type text,
  source text,
  status text default 'new',
  created_at timestamptz default now()
);

create table event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references events(id),
  name text not null,
  phone text not null,
  village text,
  district text,
  crops text[] default '{}',
  attendee_count integer default 1,
  source text,
  status text default 'new',
  created_at timestamptz default now()
);

create table newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text,
  phone text,
  source text,
  consent boolean default true,
  created_at timestamptz default now()
);

create table success_stories (
  id uuid primary key default gen_random_uuid(),
  farmer_name text not null,
  phone text,
  village text,
  district text,
  crop text,
  story text not null,
  image_url text,
  recognition_type text,
  website_featured boolean default false,
  social_featured boolean default false,
  event_featured boolean default false,
  status text default 'draft',
  created_at timestamptz default now()
);

create table gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text,
  image_url text not null,
  alt_text text not null,
  related_event_id uuid references events(id),
  related_story_id uuid references success_stories(id),
  status text default 'draft',
  created_at timestamptz default now()
);

create table reviews (
  id uuid primary key default gen_random_uuid(),
  reviewer_name text not null,
  rating integer not null check (rating between 1 and 5),
  review_text text,
  source text default 'google_business_profile',
  source_url text,
  is_featured boolean default false,
  status text default 'draft',
  reviewed_at timestamptz,
  created_at timestamptz default now()
);

create table admin_users (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  email text not null,
  role admin_role not null default 'editor',
  name text,
  status text default 'active',
  created_at timestamptz default now()
);

create unique index admin_users_user_id_idx on admin_users(user_id) where user_id is not null;
create unique index admin_users_email_idx on admin_users(lower(email));

alter table product_categories enable row level security;
alter table products enable row level security;
alter table service_areas enable row level security;
alter table leads enable row level security;
alter table seasonal_campaigns enable row level security;
alter table articles enable row level security;
alter table crop_guides enable row level security;
alter table events enable row level security;
alter table community_registrations enable row level security;
alter table event_registrations enable row level security;
alter table newsletter_subscribers enable row level security;
alter table success_stories enable row level security;
alter table gallery_items enable row level security;
alter table reviews enable row level security;
alter table admin_users enable row level security;

create or replace function public.current_admin_role()
returns admin_role
language sql
security definer
set search_path = public
stable
as $$
  select role
  from public.admin_users
  where status = 'active'
    and (user_id = auth.uid() or lower(email) = lower(auth.jwt() ->> 'email'))
  limit 1
$$;

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select public.current_admin_role() is not null
$$;

create policy "Admins can read admin profiles"
on admin_users for select
to authenticated
using (public.is_admin());

create policy "Owner and manager can manage admin profiles"
on admin_users for all
to authenticated
using (public.current_admin_role() in ('owner', 'manager'))
with check (public.current_admin_role() in ('owner', 'manager'));

create policy "Owner and manager can manage products"
on products for all
to authenticated
using (public.current_admin_role() in ('owner', 'manager'))
with check (public.current_admin_role() in ('owner', 'manager'));

create policy "Owner and manager can manage product categories"
on product_categories for all
to authenticated
using (public.current_admin_role() in ('owner', 'manager'))
with check (public.current_admin_role() in ('owner', 'manager'));

create policy "Admins and editors can manage articles"
on articles for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Admins and editors can manage crop guides"
on crop_guides for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Admins and editors can manage events"
on events for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Owner and manager can manage success stories"
on success_stories for all
to authenticated
using (public.current_admin_role() in ('owner', 'manager'))
with check (public.current_admin_role() in ('owner', 'manager'));

create policy "Admins and editors can manage gallery"
on gallery_items for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Owner and manager can manage reviews"
on reviews for all
to authenticated
using (public.current_admin_role() in ('owner', 'manager'))
with check (public.current_admin_role() in ('owner', 'manager'));

create policy "Owner and manager can manage leads"
on leads for all
to authenticated
using (public.current_admin_role() in ('owner', 'manager'))
with check (public.current_admin_role() in ('owner', 'manager'));

create policy "Public can create leads"
on leads for insert
to anon, authenticated
with check (true);

create policy "Public can create community registrations"
on community_registrations for insert
to anon, authenticated
with check (true);

create policy "Admins can manage community registrations"
on community_registrations for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Public can create event registrations"
on event_registrations for insert
to anon, authenticated
with check (true);

create policy "Admins can manage event registrations"
on event_registrations for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Public can create newsletter subscriptions"
on newsletter_subscribers for insert
to anon, authenticated
with check (true);

create policy "Admins can manage newsletter subscriptions"
on newsletter_subscribers for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Public can submit success stories"
on success_stories for insert
to anon, authenticated
with check (status in ('draft', 'review'));
