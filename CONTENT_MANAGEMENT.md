# Content Management Guide

Use this guide after Supabase is configured and an admin user can log in at
`/admin/login`.

## Starter Content

Run these SQL files in Supabase SQL Editor, in this order:

```sql
-- 1. Core tables, RLS policies, and grants
-- paste supabase/schema.sql

-- 2. Official Agrocops categories
-- paste supabase/seed-product-categories.sql

-- 3. Realistic starter products, articles, crop guides, events, and stories
-- paste supabase/seed-starter-content.sql
```

The starter content includes published records so the public site can immediately
show live Supabase content.

## Upload Product Images

Recommended option for launch:

1. In Supabase, open `Storage`.
2. Create a public bucket named `content`.
3. Upload product images into folders such as:
   - `products/fish-amino-acid.webp`
   - `products/bone-meal.webp`
   - `events/kitchen-garden-session.webp`
4. Open the uploaded file and copy the public URL.
5. Paste that URL into the admin form:
   - Products: `Image URLs`
   - Articles: `Featured image URL`
   - Events: `Featured image URL`
   - Success Stories: `Image URL`
   - Gallery Items: `Image URL`

For multiple product images, paste one URL per line or separate URLs with commas.
The first URL is used as the primary image on public pages.

Local starter image paths such as `/products/grow-bags.webp` also work because
they already exist in the app.

## Add New Products

1. Go to `/admin/login` and sign in as `owner` or `manager`.
2. Open `/admin`.
3. In `Products`, use `Add Product`.
4. Fill:
   - `Name`: customer-facing product name.
   - `Slug`: lowercase URL slug, for example `fish-amino-acid`.
   - `Description`: short product use summary.
   - `Stock status`: `In stock`, `Limited`, `Out of stock`, or `On request`.
   - `Pack sizes`: comma-separated, for example `100 ml, 250 ml, 500 ml`.
   - `Brand`: usually `Agrocops`.
   - `Price range`: use `On request` unless prices are approved for publishing.
   - `Featured crop`: the main crop or use case.
   - `Image URLs`: one or more image URLs.
   - `Benefits`: comma-separated benefits.
   - `Suitable crops`: comma-separated crops.
   - `Featured product`: checked if it should appear first.
   - `Status`: set to `Published` when ready.
5. Save.
6. Check `/products` and `/products/{slug}`.

## Publish Articles

1. In `/admin`, open `Articles`.
2. Use `Add Article`.
3. Fill:
   - `Title`
   - `Slug`
   - `Excerpt`
   - `Content`: use short paragraphs separated by blank lines.
   - `Category`
   - `Reading time`
   - `Featured image URL`
   - `Meta title`
   - `Meta description`
   - Optional Malayalam fields for future bilingual content.
4. Set `Status` to `Published`.
5. Save.
6. Check `/knowledge-center` and `/knowledge-center/{slug}`.

## Publish Crop Guides

1. In `/admin`, open `Crop Guides`.
2. Use `Add Crop Guide`.
3. Fill:
   - `Crop name`: for example `Banana`.
   - `Slug`: for example `banana-monsoon-care`.
   - `Problem`: short issue title.
   - `Symptoms`: what the farmer sees.
   - `Treatment`: practical next steps and product guidance.
   - `Season`: for example `Monsoon` or `Year-round`.
4. Set `Status` to `Published`.
5. Save.
6. Check `/crop-advisory`.

## Add Events

1. In `/admin`, open `Events`.
2. Use `Add Event`.
3. Fill title, slug, description, date, location, capacity, and optional featured image.
4. Set `Status` to `Active` or `Published`.
5. Save.
6. Check `/events`.

## Add Success Stories

1. In `/admin`, open `Success Stories`.
2. Use `Add Success Story`.
3. Fill farmer name, village, district, crop, story, image URL, and recognition type.
4. Check the relevant feature flags.
5. Set `Status` to `Published` only after approval.
6. Save.
7. Check `/community` and the homepage success story section.

## Empty States

If a table has no published records, public pages show a helpful empty state and
a WhatsApp CTA instead of fake rows. Draft records do not appear publicly.
