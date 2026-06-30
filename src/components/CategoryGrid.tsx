import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Reveal from './Reveal';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: 'WOMAN',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop',
    size: 'large',
  },
  {
    title: 'MAN',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1200&auto=format&fit=crop',
    size: 'medium',
  },
  {
    title: 'KIDS',
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=1200&auto=format&fit=crop',
    size: 'medium',
  },
  {
    title: 'BEAUTY',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2687&auto=format&fit=crop',
    size: 'small',
  },
  {
    title: 'ACCESSORIES',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2599&auto=format&fit=crop',
    size: 'small',
  },
];

export default function CategoryGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
        {categories.map((cat, i) => (
          <div
            key={cat.title}
            className={`relative group overflow-hidden cursor-pointer cursor-view ${
              cat.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
              cat.size === 'medium' ? 'md:col-span-2' : ''
            }`}
          >
            <Reveal delay={i * 0.1}>
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl md:text-5xl font-serif font-black tracking-tighter opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {cat.title}
                </h3>
              </div>
              <div className="absolute bottom-8 left-8">
                <span className="text-white text-xs tracking-[0.3em] font-bold uppercase border-b border-white pb-1">
                  Explore
                </span>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
