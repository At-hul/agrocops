-- Optional starter content for Agrocops Chelakkara.
-- Run after supabase/schema.sql. Safe to rerun; records upsert by slug.

insert into product_categories (
  slug,
  name,
  description,
  category_image_url,
  benefits,
  featured_products,
  related_crop_recommendations,
  sort_order
) values
  (
    'organic-fertilizers',
    'Organic Fertilizers',
    'Soil-building nutrition for farms, coconut gardens, banana plots, and home gardens.',
    '/products/organic-fertilizers.webp',
    array['Improves soil health', 'Supports root growth', 'Useful for regular nutrition plans'],
    array['Bone Meal', 'Potting Mix', 'Organic Soil Booster'],
    array['Coconut', 'Banana', 'Vegetables', 'Pepper'],
    10
  ),
  (
    'organic-pesticides',
    'Organic Pesticides',
    'Organic crop-protection support for vegetable gardens, home growers, and seasonal pest pressure.',
    '/products/organic-pesticides.webp',
    array['Helps manage common pests', 'Useful in kitchen gardens', 'Supports safer garden care'],
    array['Agrocops Vigor', 'Agrocops Shield', 'Neem-based support'],
    array['Vegetables', 'Kitchen Garden', 'Flowering Plants'],
    20
  ),
  (
    'vegetable-seeds',
    'Vegetable Seeds',
    'Seasonal vegetable seeds for kitchen gardens, terrace gardens, and local home food production.',
    '/products/vegetable-seeds.webp',
    array['Fresh home harvests', 'Good for seasonal planting', 'Beginner-friendly options'],
    array['Okra Seeds', 'Yard Long Beans', 'Brinjal Green Long'],
    array['Kitchen Garden', 'Vegetables', 'Terrace Garden'],
    30
  ),
  (
    'grow-bags',
    'Grow Bags',
    'Grow bags for terrace gardens, balcony planting, kitchen gardens, and seasonal vegetables.',
    '/products/grow-bags.webp',
    array['Space-saving cultivation', 'Good for terraces', 'Easy crop rotation'],
    array['HDPE Grow Bags', 'Vegetable Grow Bags', 'Starter Grow Bags'],
    array['Kitchen Garden', 'Vegetables', 'Leafy Greens'],
    40
  )
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  category_image_url = excluded.category_image_url,
  benefits = excluded.benefits,
  featured_products = excluded.featured_products,
  related_crop_recommendations = excluded.related_crop_recommendations,
  sort_order = excluded.sort_order;

insert into products (
  slug,
  name,
  category_id,
  description,
  benefits,
  application,
  suitable_crops,
  images,
  stock_status,
  pack_sizes,
  brand,
  price_range,
  featured_crop,
  seasonal_tags,
  is_featured,
  status
) values
  (
    'fish-amino-acid',
    'Fish Amino Acid',
    (select id from product_categories where slug = 'organic-fertilizers'),
    'Organic plant growth promoter and bio stimulant support for vegetables, banana, coconut, and terrace gardens.',
    array['Supports vegetative growth', 'Useful as foliar nutrition', 'Good for seasonal growth support'],
    'Use only after confirming crop stage and dilution guidance with Agrocops Chelakkara.',
    array['Vegetables', 'Banana', 'Coconut', 'Terrace Garden'],
    array['/products/organic-pesticides.webp'],
    'in_stock',
    array['100 ml', '250 ml', '500 ml'],
    'Agrocops',
    'On request',
    'Vegetables',
    array['monsoon', 'kitchen-garden'],
    true,
    'published'
  ),
  (
    'bone-meal',
    'Bone Meal',
    (select id from product_categories where slug = 'organic-fertilizers'),
    'Organic nutrition support for flowering, root development, vegetable gardens, and potted plants.',
    array['Supports root strength', 'Useful for flowering plants', 'Good for pot and grow bag mixes'],
    'Apply based on crop, pot size, and soil condition. Ask the outlet before use.',
    array['Flower Plants', 'Vegetables', 'Garden Pots'],
    array['/products/organic-fertilizers.webp'],
    'in_stock',
    array['1 kg'],
    'Agrocops',
    'On request',
    'Flower Plants',
    array['onam-gardening', 'kitchen-garden'],
    true,
    'published'
  ),
  (
    'kitchen-garden-seed-kit',
    'Kitchen Garden Seed Kit',
    (select id from product_categories where slug = 'vegetable-seeds'),
    'Starter seed support for home gardeners who want seasonal vegetables in grow bags or small garden beds.',
    array['Beginner-friendly', 'Good for terrace gardens', 'Supports fresh home harvests'],
    'Choose seeds based on season, available sunlight, and container size.',
    array['Kitchen Garden', 'Terrace Garden', 'Vegetables'],
    array['/products/vegetable-seeds.webp'],
    'limited',
    array['Starter kit'],
    'Agrocops',
    'On request',
    'Kitchen Garden',
    array['kitchen-garden', 'vishu-farming'],
    true,
    'published'
  )
on conflict (slug) do update set
  name = excluded.name,
  category_id = excluded.category_id,
  description = excluded.description,
  benefits = excluded.benefits,
  application = excluded.application,
  suitable_crops = excluded.suitable_crops,
  images = excluded.images,
  stock_status = excluded.stock_status,
  pack_sizes = excluded.pack_sizes,
  brand = excluded.brand,
  price_range = excluded.price_range,
  featured_crop = excluded.featured_crop,
  seasonal_tags = excluded.seasonal_tags,
  is_featured = excluded.is_featured,
  status = excluded.status,
  updated_at = now();

insert into articles (
  slug,
  title,
  excerpt,
  content,
  language,
  category,
  reading_time,
  featured_image,
  meta_title,
  meta_description,
  status,
  published_at
) values
  (
    'monsoon-crop-care-checklist',
    'Monsoon crop care checklist for Kerala farms',
    'A practical checklist for drainage, fungal pressure, weak roots, and crop nutrition during Kerala monsoon.',
    'Clear drainage channels before continuous rain starts.\n\nInspect leaves, stems, and root zones every few days for spreading symptoms.\n\nUse organic inputs and crop-protection products only after confirming crop stage and symptom type.\n\nFor urgent symptoms, send photos, crop name, village, and recent product use to Agrocops Chelakkara on WhatsApp.',
    'en',
    'Monsoon Farming',
    '5 min read',
    '/products/agrocops-network.webp',
    'Monsoon Crop Care Kerala | Agrocops Chelakkara',
    'Kerala monsoon crop care checklist from Agrocops Chelakkara with drainage, fungal prevention, and WhatsApp advisory guidance.',
    'published',
    now()
  ),
  (
    'terrace-garden-starter-guide',
    'Terrace garden starter guide for Chelakkara homes',
    'Simple guidance for choosing grow bags, seeds, potting mix, and daily care for terrace gardens.',
    'Start with vegetables that match your sunlight and watering routine.\n\nUse the right grow bag size and a good potting mix before adding nutrition.\n\nVisit Agrocops Chelakkara or WhatsApp the outlet for seasonal seed and product availability.',
    'en',
    'Terrace Gardening',
    '4 min read',
    '/products/grow-bags.webp',
    'Terrace Gardening Kerala | Agrocops Chelakkara',
    'Beginner-friendly terrace garden guide for grow bags, seeds, potting mix, and home garden care in Kerala.',
    'published',
    now()
  )
on conflict (slug) do update set
  title = excluded.title,
  excerpt = excluded.excerpt,
  content = excluded.content,
  language = excluded.language,
  category = excluded.category,
  reading_time = excluded.reading_time,
  featured_image = excluded.featured_image,
  meta_title = excluded.meta_title,
  meta_description = excluded.meta_description,
  status = excluded.status,
  published_at = excluded.published_at;

insert into crop_guides (
  slug,
  crop_name,
  problem,
  symptoms,
  treatment,
  season,
  status
) values
  (
    'banana-monsoon-care',
    'Banana',
    'Monsoon nutrition and disease-prevention planning',
    'Waterlogging, weak plant growth, leaf spots, and stress after heavy rain.',
    'Improve drainage, check plant base regularly, and confirm suitable nutrition or crop-protection support before applying products.',
    'Monsoon',
    'published'
  ),
  (
    'coconut-root-zone-care',
    'Coconut',
    'Root-zone care and regular nutrition planning',
    'Poor growth, weak palms, low vigor, or seasonal stress.',
    'Review soil condition, organic nutrition, and moisture management. Ask Agrocops Chelakkara for crop-stage product guidance.',
    'Year-round',
    'published'
  ),
  (
    'vegetable-kitchen-garden-pest-check',
    'Vegetables',
    'Kitchen garden pest checks',
    'Leaf damage, curling, visible insects, or slow growth in grow bags.',
    'Share clear photos on WhatsApp before spraying. Confirm pest type, plant stage, and organic pesticide suitability.',
    'Kitchen Garden',
    'published'
  )
on conflict (slug) do update set
  crop_name = excluded.crop_name,
  problem = excluded.problem,
  symptoms = excluded.symptoms,
  treatment = excluded.treatment,
  season = excluded.season,
  status = excluded.status;

insert into events (
  slug,
  title,
  description,
  event_date,
  location,
  capacity,
  featured_image,
  status
) values
  (
    'kitchen-garden-basics-session',
    'Kitchen Garden Basics Session',
    'A practical session on grow bags, potting mix, vegetable seeds, watering, and first-month care.',
    '2026-06-15 10:30:00+05:30',
    'Agrocops Chelakkara, Venganellur',
    25,
    '/products/grow-bags.webp',
    'published'
  ),
  (
    'monsoon-crop-help-day',
    'Monsoon Crop Help Day',
    'Bring crop photos or notes for practical guidance on drainage, disease pressure, and seasonal product selection.',
    '2026-07-06 10:00:00+05:30',
    'Agrocops Chelakkara, Venganellur',
    40,
    '/products/agrocops-network.webp',
    'active'
  )
on conflict (slug) do update set
  title = excluded.title,
  description = excluded.description,
  event_date = excluded.event_date,
  location = excluded.location,
  capacity = excluded.capacity,
  featured_image = excluded.featured_image,
  status = excluded.status;

insert into success_stories (
  farmer_name,
  village,
  district,
  crop,
  story,
  image_url,
  recognition_type,
  website_featured,
  social_featured,
  event_featured,
  status
) 
select *
from (values
  (
    'Suresh Kumar',
    'Chelakkara',
    'Thrissur',
    'Vegetables',
    'Used Agrocops guidance to restart a kitchen garden with grow bags, vegetable seeds, and regular nutrition planning.',
    '/products/vegetable-seeds.webp',
    'Website feature',
    true,
    true,
    false,
    'published'
  ),
  (
    'Mini Thomas',
    'Venganellur',
    'Thrissur',
    'Terrace Garden',
    'Started a compact terrace garden with grow bags, pots, potting mix, and seasonal seed support from the outlet.',
    '/products/grow-bags.webp',
    'Community feature',
    true,
    false,
    false,
    'published'
  )
) as starter_success_stories (
  farmer_name,
  village,
  district,
  crop,
  story,
  image_url,
  recognition_type,
  website_featured,
  social_featured,
  event_featured,
  status
)
where not exists (
  select 1
  from success_stories
  where success_stories.farmer_name = starter_success_stories.farmer_name
    and success_stories.village = starter_success_stories.village
    and success_stories.crop = starter_success_stories.crop
);
