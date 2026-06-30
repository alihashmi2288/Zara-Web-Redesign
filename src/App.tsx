import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import HorizontalEditorial from './components/HorizontalEditorial';
import StudioCollection from './components/StudioCollection';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';
import Reveal from './components/Reveal';
import VirtualStylist from './components/VirtualStylist';
import CurtainTransition from './components/CurtainTransition';
import ProductDetail from './components/ProductDetail';
import CategoryPage from './components/CategoryPage';
import CartDrawer from './components/CartDrawer';
import SearchOverlay from './components/SearchOverlay';
import { AnimatePresence } from 'motion/react';
import { CartProvider } from './context/CartContext';
import GrainOverlay from './components/GrainOverlay';

function Home({ onCategoryClick }: { onCategoryClick: () => void }) {
  return (
    <main>
      <Hero />
      
      <section className="py-32 px-6 text-center max-w-4xl mx-auto">
        <Reveal>
          <div className="flex flex-col items-center gap-8 mb-12">
            <h2 
              className="text-4xl md:text-[83px] font-serif italic font-normal tracking-tighter uppercase leading-[68px]"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              YOUR NEXT OBSESSION
            </h2>
            <button className="px-10 py-4 bg-[#800000] text-white text-xs font-bold tracking-[0.3em] uppercase hover:bg-[#600000] transition-colors">
              TRY NOW
            </button>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xs md:text-[16px] tracking-[0.2em] font-medium text-gray-500 uppercase leading-relaxed">
            Discover our latest collection of essential pieces designed for the modern wardrobe. 
            Clean lines, premium fabrics, and timeless silhouettes that define the season.
          </p>
        </Reveal>
      </section>

      <CategoryGrid />
      
      <StudioCollection />

      <HorizontalEditorial />

      <FeaturedProducts />

      <section className="py-24 bg-black text-white px-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <h2 key={i} className="text-[15vw] font-serif font-black tracking-tighter leading-none mr-24 opacity-20">
              ZARA EDITORIAL 2026
            </h2>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <Reveal>
          <div className="aspect-[4/5] overflow-hidden cursor-view">
            <img 
              src="https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=1200&auto=format&fit=crop" 
              alt="Zara Campaign" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </Reveal>
        <div className="space-y-12">
          <Reveal delay={0.1}>
            <span className="text-xs tracking-[0.4em] font-bold uppercase text-gray-400">Sustainability</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tighter leading-[0.9]">
              JOIN LIFE<br />COMMITMENT
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xs md:text-sm tracking-widest text-gray-500 uppercase leading-relaxed max-w-md">
              We work with monitoring programmes to guarantee compliance with our social, environmental and health and safety standards for our garments.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <button className="text-xs font-bold tracking-widest uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity">
              Read More
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [showCurtain, setShowCurtain] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleOpenSearch = () => {
      setIsSearchOpen(true);
    };
    window.addEventListener('open-search', handleOpenSearch);
    return () => window.removeEventListener('open-search', handleOpenSearch);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Trigger curtain on route change
  useEffect(() => {
    if (!isLoading) {
      setShowCurtain(true);
      const timer = setTimeout(() => setShowCurtain(false), 800);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleCategoryClick = () => {
    setShowCurtain(true);
    setTimeout(() => {
      setShowCurtain(false);
      window.scrollTo(0, 0);
    }, 800);
  };

  return (
    <div className="relative min-h-screen selection:bg-black selection:text-white">
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Navbar 
        onCategoryClick={handleCategoryClick} 
        onCartClick={() => setIsCartOpen(true)} 
        onSearchClick={() => setIsSearchOpen(true)}
      />
      
      <Routes>
        <Route path="/" element={<Home onCategoryClick={handleCategoryClick} />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />

      {/* Overlays at the end with pointer-events-none */}
      <CurtainTransition isVisible={showCurtain} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <VirtualStylist />
      <GrainOverlay />
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <CartProvider>
        <SmoothScroll>
          <AppContent />
        </SmoothScroll>
      </CartProvider>
    </Router>
  );
}
