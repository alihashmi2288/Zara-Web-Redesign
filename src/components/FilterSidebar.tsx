import { X } from 'lucide-react';
import { motion } from 'motion/react';

interface FilterState {
  priceRange: string;
  size: string;
  color: string;
  brand: string;
  subCategory: string;
  ageGroup: string;
}

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  availableBrands: string[];
  availableColors: string[];
  availableSizes: string[];
  showAgeGroup?: boolean;
}

export default function FilterSidebar({
  isOpen,
  onClose,
  filters,
  onChange,
  availableBrands,
  availableColors,
  availableSizes,
  showAgeGroup = false,
}: FilterSidebarProps) {
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $50 USD', value: 'under-50' },
    { label: '$50 - $100 USD', value: '50-100' },
    { label: '$100 - $200 USD', value: '100-200' },
    { label: 'Over $200 USD', value: 'over-200' },
  ];

  const handlePriceChange = (val: string) => {
    onChange({ ...filters, priceRange: val });
  };

  const handleSizeChange = (val: string) => {
    onChange({ ...filters, size: val });
  };

  const handleColorChange = (val: string) => {
    onChange({ ...filters, color: val });
  };

  const handleBrandChange = (val: string) => {
    onChange({ ...filters, brand: val });
  };

  const handleSubcatChange = (val: string) => {
    onChange({ ...filters, subCategory: val });
  };

  const handleAgeChange = (val: string) => {
    onChange({ ...filters, ageGroup: val });
  };

  const handleReset = () => {
    onChange({
      priceRange: 'all',
      size: 'all',
      color: 'all',
      brand: 'all',
      subCategory: 'all',
      ageGroup: 'all',
    });
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-[100] transition-opacity"
        />
      )}

      {/* Sidebar Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-screen w-full max-w-md bg-white z-[150] shadow-2xl flex flex-col p-8 overflow-y-auto"
      >
        <div className="flex justify-between items-center pb-6 border-b border-gray-100 mb-8">
          <h3 className="text-sm font-bold tracking-[0.3em] uppercase">Filters</h3>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 space-y-8 pr-2">
          {/* Subcategories */}
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400">Category</h4>
            <div className="flex flex-wrap gap-2">
              {['all', 'clothing', 'shoes', 'accessories', 'perfume', 'cosmetics'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleSubcatChange(cat)}
                  className={`px-4 py-2 border text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    filters.subCategory === cat
                      ? 'bg-black text-white border-black'
                      : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Kids Age Groups */}
          {showAgeGroup && (
            <div className="space-y-4">
              <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400">Age Group</h4>
              <div className="flex gap-2">
                {['all', '0-2Y', '3-5Y', '6-12Y'].map((age) => (
                  <button
                    key={age}
                    onClick={() => handleAgeChange(age)}
                    className={`px-4 py-2 border text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
                      filters.ageGroup === age
                        ? 'bg-black text-white border-black'
                        : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400">Size</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleSizeChange('all')}
                className={`px-3 py-2 border text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  filters.size === 'all'
                    ? 'bg-black text-white border-black'
                    : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'
                }`}
              >
                All
              </button>
              {availableSizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => handleSizeChange(sz)}
                  className={`px-3 py-2 border text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    filters.size === sz
                      ? 'bg-black text-white border-black'
                      : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400">Color</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleColorChange('all')}
                className={`px-3 py-2 border text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  filters.color === 'all'
                    ? 'bg-black text-white border-black'
                    : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'
                }`}
              >
                All
              </button>
              {availableColors.map((col) => (
                <button
                  key={col}
                  onClick={() => handleColorChange(col)}
                  className={`px-3 py-2 border text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    filters.color === col
                      ? 'bg-black text-white border-black'
                      : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'
                  }`}
                >
                  {col}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400">Price</h4>
            <div className="flex flex-col gap-2">
              {priceRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => handlePriceChange(range.value)}
                  className={`text-left py-2 px-4 border text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    filters.priceRange === range.value
                      ? 'bg-black text-white border-black'
                      : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* Brands */}
          {availableBrands.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400">Brand</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleBrandChange('all')}
                  className={`px-3 py-2 border text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    filters.brand === 'all'
                      ? 'bg-black text-white border-black'
                      : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'
                  }`}
                >
                  All Brands
                </button>
                {availableBrands.map((br) => (
                  <button
                    key={br}
                    onClick={() => handleBrandChange(br)}
                    className={`px-3 py-2 border text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
                      filters.brand === br
                        ? 'bg-black text-white border-black'
                        : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'
                    }`}
                  >
                    {br}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sticky Actions */}
        <div className="pt-6 border-t border-gray-100 flex gap-4 mt-8 bg-white">
          <button
            onClick={handleReset}
            className="flex-1 py-4 border border-gray-200 text-[10px] tracking-widest font-bold uppercase hover:border-black transition-colors"
          >
            Clear All
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-4 bg-black text-white text-[10px] tracking-widest font-bold uppercase hover:bg-gray-900 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </motion.div>
    </>
  );
}
