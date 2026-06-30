import { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants/products';
import ProductCard from './ProductCard';
import Breadcrumbs from './Breadcrumbs';
import FilterSidebar from './FilterSidebar';
import Reveal from './Reveal';
import { SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function NewArrivalsPage() {
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

  const arrivalProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.isNewArrival);
  }, []);

  const availableBrands = useMemo(() => {
    return Array.from(new Set(arrivalProducts.map((p) => p.brand).filter(Boolean))) as string[];
  }, [arrivalProducts]);

  const availableColors = useMemo(() => {
    return Array.from(new Set(arrivalProducts.flatMap((p) => p.colors.map((c) => c.name))));
  }, [arrivalProducts]);

  const availableSizes = useMemo(() => {
    return Array.from(new Set(arrivalProducts.flatMap((p) => p.sizes)));
  }, [arrivalProducts]);

  const filteredProducts = useMemo(() => {
    let result = [...arrivalProducts];

    if (filters.subCategory !== 'all') {
      result = result.filter((p) => p.subCategory === filters.subCategory);
    }

    if (filters.size !== 'all') {
      result = result.filter((p) => p.sizes.includes(filters.size));
    }

    if (filters.color !== 'all') {
      result = result.filter((p) => p.colors.some((c) => c.name === filters.color));
    }

    if (filters.brand !== 'all') {
      result = result.filter((p) => p.brand === filters.brand);
    }

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

    if (sortBy === 'price-asc') {
      result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortBy === 'rating-desc') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [arrivalProducts, filters, sortBy]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <Reveal>
          <Breadcrumbs items={[{ label: 'New Arrivals' }]} />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h1 className="text-5xl md:text-8xl font-serif tracking-tighter uppercase font-black">
                New Arrivals
              </h1>
              <p className="text-gray-500 mt-4 uppercase tracking-widest text-xs font-medium">
                Showing {filteredProducts.length} recent additions
              </p>
            </div>

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
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating-desc">Top Rated</option>
                </select>
                <span className="absolute right-0 bottom-1 pointer-events-none text-[8px] opacity-40">▼</span>
              </div>
            </div>
          </div>
        </Reveal>

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
                <ProductCard product={product} tag="NEW" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="h-[40vh] flex flex-col items-center justify-center text-center">
            <p className="text-gray-400 uppercase tracking-widest text-sm">No new items found matching selected filters</p>
          </div>
        )}
      </div>

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
