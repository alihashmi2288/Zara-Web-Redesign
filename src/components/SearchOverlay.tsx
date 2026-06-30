import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search as SearchIcon, ArrowRight } from 'lucide-react';
import { PRODUCTS, Product } from '../constants/products';
import { useNavigate } from 'react-router-dom';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOpenSearch = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.query) {
        setQuery(customEvent.detail.query);
      }
    };
    window.addEventListener('open-search', handleOpenSearch);
    return () => window.removeEventListener('open-search', handleOpenSearch);
  }, []);

  useEffect(() => {
    if (query.trim().length > 1) {
      const filtered = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleProductClick = (id: string) => {
    navigate(`/product/${id}`);
    onClose();
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-white flex flex-col"
        >
          <div className="p-6 md:p-12 flex flex-col h-full max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-center mb-20">
              <h2 className="text-3xl font-serif font-black tracking-tighter">ZARA</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>

            <div className="relative border-b-2 border-black pb-4 flex items-center group">
              <SearchIcon size={32} className="text-gray-300 group-focus-within:text-black transition-colors" />
              <input 
                autoFocus
                type="text" 
                placeholder="ENTER SEARCH TERMS"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-3xl md:text-5xl font-serif tracking-tight px-6 placeholder:text-gray-100"
              />
            </div>

            <div className="flex-1 overflow-y-auto mt-12 no-scrollbar">
              {results.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {results.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group cursor-pointer"
                      onClick={() => handleProductClick(product.id)}
                    >
                      <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                        <img 
                          src={product.images[0]} 
                          alt={product.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xs font-bold tracking-widest uppercase">{product.name}</h3>
                          <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">{product.category}</p>
                        </div>
                        <p className="text-xs font-medium">{product.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : query.trim().length > 1 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-300">
                  <p className="uppercase tracking-[0.3em] text-sm">No results found for "{query}"</p>
                </div>
              ) : (
                <div className="space-y-12">
                  <div>
                    <h4 className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase mb-6">Trending Searches</h4>
                    <div className="flex flex-wrap gap-4">
                      {['Coats', 'Dresses', 'Man Suit', 'New In', 'Beauty'].map((tag) => (
                        <button 
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-6 py-3 border border-gray-200 text-[10px] tracking-widest font-bold uppercase hover:border-black transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
