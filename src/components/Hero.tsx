import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import MagneticButton from './MagneticButton';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    // Split text for animation
    if (titleRef.current) {
      const split = new SplitType(titleRef.current, { types: 'chars' });
      
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from(imageRef.current, {
        scale: 1.3,
        duration: 2.5,
        ease: 'power2.out'
      })
      .from(split.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.02,
        duration: 1.5,
      }, '-=1.5')
      .from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
      }, '-=1')
      .from(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
      }, '-=0.8');
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full">
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2574&auto=format&fit=crop" 
          alt="Zara Collection" 
          className="w-full h-full object-cover object-center opacity-80"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <span 
          ref={subtitleRef}
          className="text-xs tracking-[0.5em] uppercase font-medium mb-6"
        >
          New Collection 2026
        </span>
        <h1 
          ref={titleRef}
          className="text-[12vw] md:text-[118px] font-serif font-black italic tracking-tighter mb-[-20px] md:mb-[-111px] leading-[1] md:leading-[107.4px] overflow-hidden"
        >
          TRENDS EVOLVE,<br />SO DO YOU
        </h1>
        <div className="flex flex-col items-center gap-4">
          <MagneticButton strength={0.2}>
            <Link to="/shop" aria-label="View Collection">
              <button 
                ref={buttonRef}
                className="px-12 py-4 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-500"
              >
                View Collection
              </button>
            </Link>
          </MagneticButton>
          <div className="mt-12 animate-bounce opacity-50 flex flex-col items-center gap-2">
            <span className="text-[8px] tracking-[0.5em] font-bold uppercase">Scroll</span>
            <div className="w-px h-12 bg-white mx-auto" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 hidden lg:block">
        <div className="text-[10px] tracking-[0.3em] text-white/60 font-medium uppercase space-y-2">
          <p>Spring / Summer</p>
          <p>Limited Edition</p>
        </div>
      </div>
    </section>
  );
}
