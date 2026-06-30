import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Heart, Share2, Plus, Minus, Info, Check, Star } from 'lucide-react';
import { PRODUCTS } from '../constants/products';
import { cn } from '@/src/lib/utils';
import Reveal from './Reveal';
import MagneticButton from './MagneticButton';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = PRODUCTS.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'composition' | 'care'>('description');
  const [videoErrors, setVideoErrors] = useState<Record<number, boolean>>({});
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (!product) return;
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    setIsAdding(true);
    addToCart(product, selectedSize, product.colors[0], quantity);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 2000);
  };

  const handleVideoError = (index: number) => {
    setVideoErrors(prev => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xs tracking-widest uppercase">Product not found</p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 px-6 max-w-[1800px] mx-auto">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[10px] tracking-widest font-bold uppercase mb-12 hover:opacity-60 transition-opacity"
      >
        <ChevronLeft size={16} /> BACK
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
        {/* Left: Images & Videos */}
        <div className="lg:col-span-7 space-y-4">
          {product.images.map((img, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 cursor-view">
                <img 
                  src={img} 
                  alt={`${product.name} ${i + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Reveal>
          ))}
          {product.videos?.map((vid, i) => !videoErrors[i] && (
            <Reveal key={`vid-${i}`} delay={0.3}>
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <video 
                  src={vid} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  onError={() => handleVideoError(i)}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Right: Product Info (Sticky) */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-32 space-y-12">
            <div className="space-y-4">
              <Reveal>
                <div className="flex justify-between items-start">
                  <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tighter leading-none">
                    {product.name}
                  </h1>
                  <div className="flex gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Heart size={20} strokeWidth={1.5} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 size={20} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="space-y-4">
                  <p className="text-xl font-medium text-gray-500">{product.price}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={cn(
                            "transition-colors",
                            i < Math.floor(product.rating) ? "fill-black text-black" : "fill-gray-100 text-gray-200"
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] tracking-widest font-bold text-gray-400">
                      {product.rating} ({product.reviewsCount} REVIEWS)
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="space-y-8">
              {/* Size Selector */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Select Size</span>
                  <button className="text-[10px] tracking-widest font-bold uppercase underline underline-offset-4 opacity-40 hover:opacity-100 transition-opacity">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-[11px] tracking-widest font-bold border transition-all duration-300 ${
                        selectedSize === size 
                          ? 'bg-black text-white border-black' 
                          : 'bg-white text-black border-gray-200 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Bag */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border border-gray-200 px-4 py-3">
                  <span className="text-[10px] tracking-widest font-bold uppercase">Quantity</span>
                  <div className="flex items-center gap-6">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:opacity-60">
                      <Minus size={14} />
                    </button>
                    <span className="text-xs font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="hover:opacity-60">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <MagneticButton strength={0.1}>
                  <button 
                    onClick={handleAddToCart}
                    disabled={isAdding}
                    className={cn(
                      "w-full py-5 text-xs tracking-[0.3em] font-bold uppercase transition-all duration-500 flex items-center justify-center gap-2",
                      isAdding ? "bg-green-600 text-white" : "bg-black text-white hover:bg-gray-900"
                    )}
                  >
                    {isAdding ? (
                      <>
                        <Check size={16} /> Added to Bag
                      </>
                    ) : (
                      'Add to Bag'
                    )}
                  </button>
                </MagneticButton>
              </div>
            </div>

            {/* Tabs / Accordion */}
            <div className="space-y-6 pt-12 border-t border-gray-100">
              <div className="flex gap-8 border-b border-gray-100">
                {['description', 'composition', 'care'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`pb-4 text-[10px] tracking-[0.3em] font-bold uppercase transition-all relative ${
                      activeTab === tab ? 'text-black' : 'text-gray-300 hover:text-gray-500'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div 
                        layoutId="activeTab" 
                        className="absolute bottom-0 left-0 right-0 h-px bg-black" 
                      />
                    )}
                  </button>
                ))}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs text-gray-500 leading-relaxed tracking-widest uppercase"
                >
                  {activeTab === 'description' && product.description}
                  {activeTab === 'composition' && product.composition}
                  {activeTab === 'care' && (
                    <ul className="space-y-2">
                      <li>Do not wash</li>
                      <li>Do not use bleach</li>
                      <li>Iron at maximum 110ºC/230ºF</li>
                      <li>Dry clean with tetrachloroethylene</li>
                      <li>Do not tumble dry</li>
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 pt-12">
              <div className="flex items-center gap-3 text-gray-400">
                <Info size={16} />
                <span className="text-[10px] tracking-widest uppercase font-medium">
                  Free shipping for orders over 50 USD
                </span>
              </div>
              <ul className="space-y-2">
                {product.details.map((detail, i) => (
                  <li key={i} className="text-[10px] tracking-widest text-gray-400 uppercase">
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <section className="mt-32 pt-32 border-t border-gray-100 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto space-y-24">
          <div className="text-center space-y-8">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tighter uppercase">
                Customer Reviews
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={cn(
                        i < Math.floor(product.rating) ? "fill-black text-black" : "fill-gray-100 text-gray-200"
                      )}
                    />
                  ))}
                </div>
                <p className="text-xs tracking-[0.4em] font-bold uppercase text-gray-400">
                  Based on {product.reviewsCount} verified purchases
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-16">
            {[
              {
                author: "ALEXA M.",
                date: "MARCH 12, 2026",
                rating: 5,
                title: "ABSOLUTELY STUNNING",
                content: "The quality of the fabric exceeded my expectations. The fit is true to size and the silhouette is incredibly flattering. A true staple piece."
              },
              {
                author: "JULIAN R.",
                date: "FEBRUARY 28, 2026",
                rating: 4,
                title: "PREMIUM FEEL",
                content: "Great design and material. The only minor issue was the shipping took a bit longer than expected, but the product itself is worth the wait."
              },
              {
                author: "SOPHIE T.",
                date: "JANUARY 15, 2026",
                rating: 5,
                title: "PERFECT MINIMALISM",
                content: "Exactly what I was looking for. Clean, modern, and high quality. Zara's premium line is really stepping up."
              }
            ].map((review, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-gray-50 last:border-0">
                  <div className="md:col-span-3 space-y-2">
                    <p className="text-[10px] tracking-[0.3em] font-bold uppercase">{review.author}</p>
                    <p className="text-[10px] tracking-widest text-gray-400 uppercase">{review.date}</p>
                    <div className="flex gap-0.5 pt-2">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          size={10}
                          className={starIdx < review.rating ? "fill-black text-black" : "fill-gray-100 text-gray-200"}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-9 space-y-4">
                    <h4 className="text-sm font-serif font-bold tracking-tight uppercase">{review.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed tracking-widest uppercase">
                      {review.content}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex justify-center pt-12">
            <button className="px-12 py-4 border border-black text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-black hover:text-white transition-all duration-500">
              Write a Review
            </button>
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="mt-64">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tighter uppercase">RECOMMENDED FOR YOU</h2>
          <button 
            onClick={() => navigate(`/category/${product.category}`)}
            className="text-[10px] tracking-widest font-bold uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PRODUCTS.filter(p => p.id !== id).map((p) => (
            <div key={p.id} className="space-y-4 cursor-pointer group" onClick={() => navigate(`/product/${p.id}`)}>
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-1">
                <h4 className="text-[10px] tracking-widest font-bold uppercase">{p.name}</h4>
                <p className="text-[10px] text-gray-400">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
