import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS, Product } from '../constants/products';
import ProductCard from './ProductCard';
import Reveal from './Reveal';

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<string>('default');
  const [filterSize, setFilterSize] = useState<string>('all');

  useEffect(() => {
    // Reset filters when category changes
    setSortBy('default');
    setFilterSize('all');
    window.scrollTo(0, 0);
  }, [categoryId]);

  useEffect(() => {
    let result = categoryId 
      ? PRODUCTS.filter(p => p.category === categoryId.toLowerCase())
      : PRODUCTS;

    // Filter by size
    if (filterSize !== 'all') {
      result = result.filter(p => p.sizes.includes(filterSize));
    }

    // Sort
    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortBy === 'rating-desc') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(result);
  }, [categoryId, sortBy, filterSize]);

  const categoryName = categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : 'All Products';

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase font-black">
                {categoryName}
              </h1>
              <p className="text-gray-500 mt-4 uppercase tracking-widest text-xs font-medium">
                Showing {filteredProducts.length} items
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] font-bold pb-2 items-center">
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

              <div className="relative">
                <select 
                  value={filterSize}
                  onChange={(e) => setFilterSize(e.target.value)}
                  className="bg-transparent border-b border-black pb-1 pr-6 outline-none cursor-pointer text-[10px] tracking-[0.2em] font-bold uppercase select-none appearance-none"
                  style={{ borderRadius: 0 }}
                >
                  <option value="all">Size: All</option>
                  <option value="XS">Size: XS</option>
                  <option value="S">Size: S</option>
                  <option value="M">Size: M</option>
                  <option value="L">Size: L</option>
                  <option value="XL">Size: XL</option>
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
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="h-[40vh] flex flex-col items-center justify-center text-center">
            <p className="text-gray-400 uppercase tracking-widest text-sm">No products found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
