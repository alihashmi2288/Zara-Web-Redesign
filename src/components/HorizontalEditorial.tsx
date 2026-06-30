import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const editorialImages = [
  {
    url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2574&auto=format&fit=crop',
    title: 'THE NEW MINIMALISM',
    desc: 'Clean lines and premium fabrics.',
    target: '/product/1',
  },
  {
    url: 'https://images.unsplash.com/photo-1488161628813-244768e7f074?q=80&w=2564&auto=format&fit=crop',
    title: 'URBAN NOMAD',
    desc: 'Versatile pieces for the city.',
    target: '/collections/men',
  },
  {
    url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop',
    title: 'TIMELESS ELEGANCE',
    desc: 'Silhouettes that define the season.',
    target: '/product/2',
  },
  {
    url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2670&auto=format&fit=crop',
    title: 'MODERN CLASSIC',
    desc: 'Essential pieces for every wardrobe.',
    target: '/product/9',
  }
];

export default function HorizontalEditorial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const totalWidth = containerRef.current?.scrollWidth || 0;
    const windowWidth = window.innerWidth;
    
    gsap.to(containerRef.current, {
      x: -(totalWidth - windowWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen overflow-hidden bg-zara-gray">
      <div className="absolute top-12 left-12 z-10">
        <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter leading-none">
          EDITORIAL<br />VOL. 02
        </h2>
      </div>

      <div ref={containerRef} className="flex h-full items-center px-[10vw] gap-[5vw]">
        {editorialImages.map((item, i) => (
          <Link 
            key={i} 
            to={item.target}
            aria-label={`Explore ${item.title}`}
            className="flex-shrink-0 w-[60vw] md:w-[40vw] aspect-[3/4] relative group cursor-view block"
          >
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 to-transparent w-full">
              <h3 className="text-2xl font-serif font-bold tracking-tight">{item.title}</h3>
              <p className="text-xs tracking-widest uppercase mt-2">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
