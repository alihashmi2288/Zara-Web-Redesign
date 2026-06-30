import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar({ onCategoryClick, onCartClick, onSearchClick }: { onCategoryClick?: () => void, onCartClick?: () => void, onSearchClick?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useCart();

  const isHomeTop = location.pathname === '/' && !isScrolled;

  const handleHomeClick = () => {
    setIsMenuOpen(false);
    navigate('/');
    window.scrollTo(0, 0);
  };

  const handleLinkClick = (category: string) => {
    setIsMenuOpen(false);
    onCategoryClick?.();
    navigate(`/category/${category.toLowerCase()}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between',
          isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 text-black' : '',
          isHomeTop ? 'bg-transparent text-white' : 'bg-transparent text-black'
        )}
      >
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="hover:opacity-60 transition-opacity"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
          <div className="hidden md:flex items-center gap-4 text-xs font-medium tracking-widest uppercase">
            <button onClick={handleHomeClick} className="hover:underline underline-offset-4">Home</button>
            <button onClick={() => handleLinkClick('woman')} className="hover:underline underline-offset-4">Woman</button>
            <button onClick={() => handleLinkClick('man')} className="hover:underline underline-offset-4">Man</button>
            <button onClick={() => handleLinkClick('kids')} className="hover:underline underline-offset-4">Kids</button>
            <button onClick={() => handleLinkClick('beauty')} className="hover:underline underline-offset-4">Beauty</button>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 
            onClick={() => navigate('/')}
            className="text-4xl md:text-5xl font-serif tracking-[-0.1em] font-black select-none cursor-pointer"
          >
            ZARA
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <div 
            onClick={onSearchClick}
            className={cn(
              "hidden md:flex items-center border-b pb-1 group cursor-pointer transition-colors",
              isHomeTop ? "border-white/20 hover:border-white" : "border-black/20 hover:border-black"
            )}
          >
            <span className={cn(
              "text-[10px] tracking-widest w-24",
              isHomeTop ? "text-white/60" : "text-gray-400"
            )}>SEARCH</span>
            <Search size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:opacity-60 transition-opacity">
              <User size={20} strokeWidth={1.5} />
            </button>
            <button 
              onClick={onCartClick}
              className="hover:opacity-60 transition-opacity relative"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className={cn(
                  "absolute -top-1 -right-1 text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold",
                  isHomeTop ? "bg-white text-black" : "bg-black text-white"
                )}>
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-serif font-black tracking-tighter">ZARA</h2>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex flex-col gap-6 text-4xl md:text-6xl font-serif font-light tracking-tight">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={handleHomeClick}
                className="text-left hover:italic hover:pl-4 transition-all duration-300 uppercase"
              >
                Home
              </motion.button>
              {['WOMAN', 'MAN', 'KIDS', 'BEAUTY'].map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  onClick={() => handleLinkClick(item)}
                  className="text-left hover:italic hover:pl-4 transition-all duration-300 uppercase"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4 text-xs tracking-widest font-medium text-gray-500 uppercase">
              <a href="#" className="hover:text-black">Help</a>
              <a href="#" className="hover:text-black">Privacy Policy</a>
              <a href="#" className="hover:text-black">Terms of Use</a>
              <div className="mt-4 flex gap-4">
                <a href="#" className="hover:text-black">Instagram</a>
                <a href="#" className="hover:text-black">Facebook</a>
                <a href="#" className="hover:text-black">Twitter</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
