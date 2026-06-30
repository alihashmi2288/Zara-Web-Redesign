import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PRODUCTS, Product } from '../constants/products';
import ProductCard from './ProductCard';
import Breadcrumbs from './Breadcrumbs';
import FilterSidebar from './FilterSidebar';
import Reveal from './Reveal';
import { SlidersHorizontal, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Hero details per category
const CATEGORY_META: Record<string, { title: string; desc: string; image: string; dbCategory: 'woman' | 'man' | 'kids' | 'beauty' | 'accessories' }> = {
  women: {
    title: 'Women',
    desc: 'Fluid silhouettes, sharp tailoring, and premium knits designed for the contemporary wardrobe.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1800&auto=format&fit=crop',
    dbCategory: 'woman',
  },
  woman: {
    title: 'Women',
    desc: 'Fluid silhouettes, sharp tailoring, and premium knits designed for the contemporary wardrobe.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1800&auto=format&fit=crop',
    dbCategory: 'woman',
  },
  men: {
    title: 'Men',
    desc: 'Modern structures, premium organic textiles, and casual tailoring for effortless daily styling.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1800&auto=format&fit=crop',
    dbCategory: 'man',
  },
  man: {
    title: 'Men',
    desc: 'Modern structures, premium organic textiles, and casual tailoring for effortless daily styling.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1800&auto=format&fit=crop',
    dbCategory: 'man',
  },
  kids: {
    title: 'Kids',
    desc: 'Comfortable and playful designs crafted in soft organic cotton for active young dreamers.',
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=1800&auto=format&fit=crop',
    dbCategory: 'kids',
  },
  accessories: {
    title: 'Accessories',
    desc: 'Sophisticated shapes, premium leathers, and metal details that form the finishing touch.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1800&auto=format&fit=crop',
    dbCategory: 'accessories',
  },
  beauty: {
    title: 'Beauty',
    desc: 'Seductive fragrances and cleanly formulated mineral makeup to reveal natural radiance.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1800&auto=format&fit=crop',
    dbCategory: 'beauty',
  },
};

export default function CollectionPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const catKey = categoryId ? categoryId.toLowerCase() : 'women';
  const meta = CATEGORY_META[catKey] || CATEGORY_META['women'];

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [filters, setFilters] = useState({
    priceRange: 'all',
    size: 'all',
    color: 'all',
    brand: 'all',
    subCategory: 'all',
    ageGroup: 'all',
  });

  // Reset filters when category changes
  useEffect(() => {
    setFilters({
      priceRange: 'all',
      size: 'all',
      color: 'all',
      brand: 'all',
      subCategory: 'all',
      ageGroup: 'all',
    });
    setSortBy('default');
    window.scrollTo(0, 0);
  }, [categoryId]);

  const dbCategory = meta.dbCategory;

  // Filter based on category
  const baseProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === dbCategory);
  }, [dbCategory]);

  // Extract available colors, sizes, brands dynamically for this specific category
  const availableBrands = useMemo(() => {
    return Array.from(new Set(baseProducts.map((p) => p.brand).filter(Boolean))) as string[];
  }, [baseProducts]);

  const availableColors = useMemo(() => {
    return Array.from(new Set(baseProducts.flatMap((p) => p.colors.map((c) => c.name))));
  }, [baseProducts]);

  const availableSizes = useMemo(() => {
    return Array.from(new Set(baseProducts.flatMap((p) => p.sizes)));
  }, [baseProducts]);

  // Filter and Sort implementation
  const filteredProducts = useMemo(() => {
    let result = [...baseProducts];

    // Filter by Subcategory
    if (filters.subCategory !== 'all') {
      result = result.filter((p) => p.subCategory === filters.subCategory);
    }

    // Filter by Kids Age Group
    if (dbCategory === 'kids' && filters.ageGroup !== 'all') {
      result = result.filter((p) => p.ageGroup === filters.ageGroup);
    }

    // Filter by Size
    if (filters.size !== 'all') {
      result = result.filter((p) => p.sizes.includes(filters.size));
    }

    // Filter by Color
    if (filters.color !== 'all') {
      result = result.filter((p) => p.colors.some((c) => c.name === filters.color));
    }

    // Filter by Brand
    if (filters.brand !== 'all') {
      result = result.filter((p) => p.brand === filters.brand);
    }

    // Filter by Price Range
    if (filters.priceRange !== 'all') {
      result = result.filter((p) => {
        const priceNum = parseFloat(p.price);
        if (filters.priceRange === 'under-50') return priceNum < 50;
        if (filters.priceRange === '50-100') return priceNum >= 50 && priceNum <= 100;
        if (filters.priceRange === '100-200') return priceNum >= 100 && priceNum <= 200;
        if (filters.priceRange === 'over-200') return priceNum > 200;
        return true;
      });
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortBy === 'rating-desc') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => {
        const dateA = a.dateAdded ? new Date(a.dateAdded).getTime() : 0;
        const dateB = b.dateAdded ? new Date(b.dateAdded).getTime() : 0;
        return dateB - dateA;
      });
    } else if (sortBy === 'popularity') {
      result.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    }

    return result;
  }, [baseProducts, filters, sortBy, dbCategory]);

  // Best Sellers (Subset for display banner)
  const bestSellers = useMemo(() => {
    return baseProducts.filter((p) => p.isBestSeller).slice(0, 4);
  }, [baseProducts]);

  // Related collections lists (to navigate elsewhere)
  const relatedCollections = useMemo(() => {
    const keys = Object.keys(CATEGORY_META).filter(k => k !== catKey && k !== 'woman' && k !== 'man');
    // Return distinct ones
    return Array.from(new Set(keys)).map(k => ({
      key: k,
      label: CATEGORY_META[k].title,
      image: CATEGORY_META[k].image,
    })).slice(0, 3);
  }, [catKey]);

  return (
    <div className="min-h-screen bg-white">
      {/* Category Hero Header */}
      <section className="relative h-[65vh] w-full overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={meta.image}
            alt={meta.title}
            className="w-full h-full object-cover object-center opacity-70"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="relative text-center px-6 text-white max-w-2xl space-y-6">
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-gray-300">ZARA COLLECTION</span>
          <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tighter uppercase leading-none">
            {meta.title}
          </h1>
          <p className="text-xs md:text-sm tracking-widest font-medium uppercase text-gray-200 leading-relaxed">
            {meta.desc}
          </p>
        </div>
      </section>

      {/* Main Listing Section */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        {/* Breadcrumbs */}
        <Reveal>
          <Breadcrumbs items={[{ label: meta.title }]} />
        </Reveal>

        {/* Filters and Subcategories */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            {/* Custom Kids Subcategory Tabs or general labels */}
            <div className="flex flex-wrap gap-4 text-[10px] tracking-[0.2em] font-bold uppercase">
              <button
                onClick={() => setFilters({ ...filters, subCategory: 'all' })}
                className={`pb-1 border-b transition-colors ${
                  filters.subCategory === 'all' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'
                }`}
              >
                All items
              </button>
              <button
                onClick={() => setFilters({ ...filters, subCategory: 'clothing' })}
                className={`pb-1 border-b transition-colors ${
                  filters.subCategory === 'clothing' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'
                }`}
              >
                Clothing
              </button>
              <button
                onClick={() => setFilters({ ...filters, subCategory: 'shoes' })}
                className={`pb-1 border-b transition-colors ${
                  filters.subCategory === 'shoes' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'
                }`}
              >
                Shoes
              </button>
              <button
                onClick={() => setFilters({ ...filters, subCategory: 'accessories' })}
                className={`pb-1 border-b transition-colors ${
                  filters.subCategory === 'accessories' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'
                }`}
              >
                Accessories
              </button>
            </div>

            {/* General Filter + Sort Controls */}
            <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] font-bold pb-2 items-center">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 border-b border-black pb-1 hover:opacity-60 transition-opacity"
              >
                <SlidersHorizontal size={12} />
                Filters
              </button>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-b border-black pb-1 pr-6 outline-none cursor-pointer text-[10px] tracking-[0.2em] font-bold uppercase select-none appearance-none"
                  style={{ borderRadius: 0 }}
                >
                  <option value="default">Sort: Recommended</option>
                  <option value="newest">Sort: Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating-desc">Top Rated</option>
                  <option value="popularity">Popularity</option>
                </select>
                <span className="absolute right-0 bottom-1 pointer-events-none text-[8px] opacity-40">▼</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Kids Age Selection Pills */}
        {dbCategory === 'kids' && (
          <Reveal>
            <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-4 hide-scrollbar">
              <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Age:</span>
              {['all', '0-2Y', '3-5Y', '6-12Y'].map((age) => (
                <button
                  key={age}
                  onClick={() => setFilters({ ...filters, ageGroup: age })}
                  className={`px-4 py-2 border text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    filters.ageGroup === age
                      ? 'bg-black text-white border-black'
                      : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'
                  }`}
                >
                  {age === 'all' ? 'All Ages' : age}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (index % 12) * 0.05 }}
              >
                <ProductCard product={product} tag={product.isSale ? `${product.discountPercentage}% OFF` : undefined} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="h-[40vh] flex flex-col items-center justify-center text-center">
            <p className="text-gray-400 uppercase tracking-widest text-sm">No items found matching the selected filters</p>
          </div>
        )}
      </div>

      {/* Men & Women Bestseller Promo */}
      {bestSellers.length > 0 && (
        <section className="bg-gray-50 py-32 px-6">
          <div className="max-w-[1800px] mx-auto">
            <div className="text-center space-y-4 mb-20">
              <span className="text-[10px] tracking-[0.5em] font-bold text-gray-400 uppercase">Highly Coveted</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter uppercase">BEST SELLERS</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {bestSellers.map((product) => (
                <div 
                  key={product.id} 
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="space-y-4 cursor-pointer group"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[10px] tracking-widest font-bold uppercase">{product.name}</h4>
                    <p className="text-[10px] text-gray-400">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Kids custom promotional banner */}
      {dbCategory === 'kids' && (
        <section className="py-24 px-6 max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?q=80&w=1200&auto=format&fit=crop"
              alt="Kids Editorial"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <span className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase">Season Special</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter leading-none">
              SUMMER RETREAT<br />KIDS COLLECTION
            </h2>
            <p className="text-xs md:text-sm tracking-widest text-gray-500 uppercase leading-relaxed max-w-md">
              A vibrant playground selection of breathable linens, light layers, and nonslip utility footwear built for summer explorations.
            </p>
            <Link
              to="/collections/kids"
              onClick={() => setFilters({ ...filters, subCategory: 'clothing' })}
              className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity"
            >
              Shop Clothing <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      )}

      {/* Related Collections Links */}
      <section className="py-32 px-6 border-t border-gray-100">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-16">
            <span className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase">Discover More</span>
            <h3 className="text-3xl md:text-5xl font-serif font-black tracking-tighter uppercase mt-2">Related Collections</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedCollections.map((col) => (
              <Link 
                key={col.key} 
                to={`/collections/${col.key}`}
                className="group relative h-[400px] overflow-hidden flex items-end p-8"
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={col.image}
                    alt={col.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <div className="relative text-white z-10 space-y-2">
                  <h4 className="text-2xl font-serif font-bold uppercase tracking-tight">{col.label}</h4>
                  <span className="text-[9px] uppercase tracking-widest font-bold border-b border-white pb-1 inline-block">
                    Explore
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onChange={setFilters}
        availableBrands={availableBrands}
        availableColors={availableColors}
        availableSizes={availableSizes}
        showAgeGroup={dbCategory === 'kids'}
      />
    </div>
  );
}
