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
  'Soil-building organic nutrition for farms, home gardens, coconut, banana, vegetables, and long-term crop health.',
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80',
  array['Improves soil health', 'Supports root growth', 'Useful for regular nutrition plans'],
  array['Organic Soil Booster', 'Compost Mix', 'Plant Growth Tonic'],
  array['Coconut', 'Banana', 'Vegetables', 'Pepper'],
  10
),
(
  'organic-pesticides',
  'Organic Pesticides',
  'Organic pest-control support for vegetables, gardens, and seasonal pest pressure with guidance before use.',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80',
  array['Helps manage common pests', 'Supports safer garden care', 'Useful in kitchen gardens'],
  array['Organic Pest Care', 'Neem-Based Spray', 'Bio Control Support'],
  array['Vegetables', 'Kitchen Garden', 'Flowering Plants'],
  20
),
(
  'waste-treatment-agents',
  'Waste Treatment Agents',
  'Composting and waste-treatment inputs for farm residue, home garden waste, and cleaner growing spaces.',
  'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=900&q=80',
  array['Supports composting', 'Reduces garden waste issues', 'Improves organic matter reuse'],
  array['Compost Activator', 'Waste Treatment Mix', 'Organic Decomposer'],
  array['Home Garden', 'Terrace Garden', 'Vegetables'],
  30
),
(
  'grow-bags',
  'Grow Bags',
  'Grow bags for terrace gardening, kitchen gardens, balcony planting, and seasonal vegetable cultivation.',
  'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80',
  array['Space-saving cultivation', 'Good for terraces', 'Easy crop rotation'],
  array['HDPE Grow Bags', 'Vegetable Grow Bags', 'Terrace Garden Starter Bags'],
  array['Kitchen Garden', 'Vegetables', 'Leafy Greens'],
  40
),
(
  'nursery-bags',
  'Nursery Bags',
  'Nursery bags for seedlings, saplings, propagation, and organized plant raising before field or pot transfer.',
  'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80',
  array['Supports seedling management', 'Useful for saplings', 'Easy handling and transfer'],
  array['Seedling Nursery Bags', 'Sapling Bags', 'Propagation Bags'],
  array['Vegetables', 'Fruit Saplings', 'Flower Plants'],
  50
),
(
  'sprayers',
  'Sprayers',
  'Sprayers for garden care, foliar nutrition, pest-control application, and regular crop maintenance.',
  'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=900&q=80',
  array['Even application', 'Useful for foliar care', 'Supports faster farm and garden work'],
  array['Hand Sprayer', 'Garden Pressure Sprayer', 'Farm Sprayer'],
  array['Vegetables', 'Banana', 'Pepper', 'Terrace Garden'],
  60
),
(
  'garden-tools',
  'Garden Tools',
  'Essential tools for daily garden care, planting, pruning, soil preparation, and home farming tasks.',
  'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80',
  array['Improves daily garden work', 'Supports cleaner planting', 'Useful for beginners and regular growers'],
  array['Hand Trowel', 'Pruning Tool', 'Garden Fork'],
  array['Home Garden', 'Terrace Garden', 'Flower Plants'],
  70
),
(
  'vegetable-seeds',
  'Vegetable Seeds',
  'Vegetable seeds for kitchen gardens, terrace growers, seasonal planting, and local home food production.',
  'https://images.unsplash.com/photo-1599685315640-3f9d8f5f5f94?auto=format&fit=crop&w=900&q=80',
  array['Supports fresh home harvests', 'Good for seasonal planting', 'Beginner-friendly options available'],
  array['Okra Seeds', 'Chilli Seeds', 'Leafy Vegetable Seeds'],
  array['Kitchen Garden', 'Vegetables', 'Terrace Garden'],
  80
),
(
  'flower-seeds',
  'Flower Seeds',
  'Flower seeds for home gardens, pots, festive planting, pollinator-friendly spaces, and seasonal color.',
  'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80',
  array['Improves garden appeal', 'Supports seasonal planting', 'Good for pots and borders'],
  array['Marigold Seeds', 'Sunflower Seeds', 'Mixed Flower Seeds'],
  array['Flower Garden', 'Pots', 'Onam Gardening'],
  90
),
(
  'garden-pots-containers',
  'Garden Pots & Containers',
  'Pots and containers for indoor plants, balcony gardens, terrace gardens, flowers, herbs, and vegetables.',
  'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80',
  array['Fits small spaces', 'Useful for decorative planting', 'Supports container gardening'],
  array['Garden Pots', 'Planters', 'Container Sets'],
  array['Herbs', 'Flower Plants', 'Terrace Garden', 'Kitchen Garden'],
  100
)
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  category_image_url = excluded.category_image_url,
  benefits = excluded.benefits,
  featured_products = excluded.featured_products,
  related_crop_recommendations = excluded.related_crop_recommendations,
  sort_order = excluded.sort_order;
