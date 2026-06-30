import { useState, useMemo } from 'react';
import { PRODUCTS, Product } from '../constants/products';
import ProductCard from './ProductCard';
import Breadcrumbs from './Breadcrumbs';
import FilterSidebar from './FilterSidebar';
import Reveal from './Reveal';
import { SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ShopPage() {
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
  const [visibleCount, setVisibleCount] = useState(12);

  // Extract available filter values dynamically
  const availableBrands = useMemo(() => {
    return Array.from(new Set(PRODUCTS.map((p) => p.brand).filter(Boolean))) as string[];
  }, []);

  const availableColors = useMemo(() => {
    return Array.from(new Set(PRODUCTS.flatMap((p) => p.colors.map((c) => c.name))));
  }, []);

  const availableSizes = useMemo(() => {
    return Array.from(new Set(PRODUCTS.flatMap((p) => p.sizes)));
  }, []);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Subcategory
    if (filters.subCategory !== 'all') {
      result = result.filter((p) => p.subCategory === filters.subCategory);
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
  }, [filters, sortBy]);

  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const activeFilterLabels = useMemo(() => {
    const labels = [];
    if (filters.subCategory !== 'all') labels.push(`Category: ${filters.subCategory}`);
    if (filters.size !== 'all') labels.push(`Size: ${filters.size}`);
    if (filters.color !== 'all') labels.push(`Color: ${filters.color}`);
    if (filters.brand !== 'all') labels.push(`Brand: ${filters.brand}`);
    if (filters.priceRange !== 'all') {
      const found = priceRanges.find(r => r.value === filters.priceRange);
      if (found) labels.push(found.label);
    }
    return labels;
  }, [filters]);

  const priceRanges = [
    { label: 'Under $50', value: 'under-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: 'Over $200', value: 'over-200' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        {/* Breadcrumb */}
        <Reveal>
          <Breadcrumbs items={[{ label: 'Shop' }]} />
        </Reveal>

        {/* Header Title */}
        <Reveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h1 className="text-5xl md:text-8xl font-serif tracking-tighter uppercase font-black">
                Shop All
              </h1>
              <p className="text-gray-500 mt-4 uppercase tracking-widest text-xs font-medium">
                Showing {filteredProducts.length} items
              </p>
            </div>

            {/* Filter and Sort Trigger */}
            <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] font-bold pb-2 items-center">
              {/* Trigger Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 border-b border-black pb-1 hover:opacity-60 transition-opacity"
              >
                <SlidersHorizontal size={12} />
                Filters
              </button>

              {/* Sort Dropdown */}
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

        {/* Active Filters Display */}
        {activeFilterLabels.length > 0 && (
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-8 items-center">
              <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mr-2">Active Filters:</span>
              {activeFilterLabels.map((lbl, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-black px-3 py-1.5 text-[9px] uppercase tracking-widest font-bold flex items-center gap-1.5"
                >
                  {lbl}
                </span>
              ))}
              <button
                onClick={() => setFilters({
                  priceRange: 'all',
                  size: 'all',
                  color: 'all',
                  brand: 'all',
                  subCategory: 'all',
                  ageGroup: 'all',
                })}
                className="text-[9px] uppercase tracking-widest text-black font-bold underline hover:opacity-60 transition-opacity ml-2"
              >
                Clear All
              </button>
            </div>
          </Reveal>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product, index) => (
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

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="h-[40vh] flex flex-col items-center justify-center text-center">
            <p className="text-gray-400 uppercase tracking-widest text-sm">No products matched your filter selections</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredProducts.length > visibleCount && (
          <Reveal>
            <div className="flex justify-center pt-24">
              <button
                onClick={handleLoadMore}
                className="px-12 py-4 border border-black text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-black hover:text-white transition-all duration-500"
              >
                Load More
              </button>
            </div>
          </Reveal>
        )}
      </div>

      {/* Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onChange={setFilters}
        availableBrands={availableBrands}
        availableColors={availableColors}
        availableSizes={availableSizes}
      />
    </div>
  );
}
