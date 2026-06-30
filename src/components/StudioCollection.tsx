import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Reveal from './Reveal';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const studioItems = [
  {
    title: 'THE SILK EDIT',
    color: '#f5f5f5', // Light gray
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop',
    desc: 'Fluid silhouettes in premium mulberry silk.',
    target: '/collections/women',
  },
  {
    title: 'ARCHITECTURAL WOOL',
    color: '#e2e2e2', // Slightly darker gray
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2574&auto=format&fit=crop',
    desc: 'Structured tailoring with a modern edge.',
    target: '/product/1',
  },
  {
    title: 'MINIMALIST LEATHER',
    color: '#d4d4d4', // Darker gray
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2680&auto=format&fit=crop',
    desc: 'Buttery soft leather in timeless shapes.',
    target: '/product/13',
  }
];

export default function StudioCollection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    studioItems.forEach((item, i) => {
      ScrollTrigger.create({
        trigger: `.studio-item-${i}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          gsap.to(containerRef.current, { backgroundColor: item.color, duration: 1 });
        },
        onEnterBack: () => {
          gsap.to(containerRef.current, { backgroundColor: item.color, duration: 1 });
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="transition-colors duration-1000 py-32 px-6">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-24 text-center">
          <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-gray-400">Exclusive</span>
          <h2 className="text-6xl md:text-9xl font-serif font-black tracking-tighter mt-4">ZARA STUDIO</h2>
        </div>

        <div className="space-y-64">
          {studioItems.map((item, i) => (
            <div 
              key={i} 
              className={`studio-item-${i} grid grid-cols-1 md:grid-cols-2 gap-24 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
                <Reveal>
                  <Link to={item.target} aria-label={`Explore ${item.title}`} className="block aspect-[3/4] overflow-hidden cursor-view">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                </Reveal>
              </div>
              <div className={`space-y-8 ${i % 2 !== 0 ? 'md:order-1 md:text-right' : ''}`}>
                <Reveal delay={0.2}>
                  <h3 className="text-4xl md:text-6xl font-serif font-black tracking-tighter leading-none">
                    {item.title}
                  </h3>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="text-xs md:text-sm tracking-widest text-gray-500 uppercase leading-relaxed max-w-md ml-auto mr-auto md:ml-0 md:mr-0">
                    {item.desc}
                  </p>
                </Reveal>
                <Reveal delay={0.4}>
                  <Link to={item.target} className="inline-block text-xs font-bold tracking-widest uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity">
                    Shop Collection
                  </Link>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
