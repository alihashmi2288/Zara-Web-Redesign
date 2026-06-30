import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import Reveal from './Reveal';

const LOOKBOOK_ITEMS = [
  {
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop',
    title: 'THE SILK LINE',
    desc: 'Vol. 1 — Summer Silk Edit',
    target: '/collections/women',
    size: 'tall',
  },
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
    title: 'SATIN STRUCTURES',
    desc: 'Vol. 2 — Modern Drape',
    target: '/product/2',
    size: 'wide',
  },
  {
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    title: 'ARCHITECTURAL WOOL',
    desc: 'Vol. 3 — Tailored Outerwear',
    target: '/product/1',
    size: 'wide',
  },
  {
    image: 'https://images.unsplash.com/photo-1488161628813-244768e7f074?q=80&w=800&auto=format&fit=crop',
    title: 'URBAN TAILORING',
    desc: 'Vol. 4 — Casual Suits',
    target: '/collections/men',
    size: 'tall',
  },
  {
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    title: 'SAGE LINEN EDITION',
    desc: 'Vol. 5 — Earthy Tones',
    target: '/product/18',
    size: 'tall',
  },
  {
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop',
    title: 'SATIN COUTURE',
    desc: 'Vol. 6 — Holiday Gown',
    target: '/collections/women',
    size: 'wide',
  },
];

export default function LookbookPage() {
  return (
    <div className="min-h-screen pt-32 pb-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <Reveal>
          <Breadcrumbs items={[{ label: 'Lookbook' }]} />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="text-center space-y-4 mb-24">
            <span className="text-[10px] tracking-[0.5em] font-bold text-gray-400 uppercase">Fashion Inspiration</span>
            <h1 className="text-6xl md:text-9xl font-serif font-black tracking-tighter uppercase leading-none">
              LOOKBOOK<br />COLLECTION 2026
            </h1>
            <p className="text-xs md:text-sm tracking-widest text-gray-500 uppercase leading-relaxed max-w-lg mx-auto">
              Visual narratives exploring form, structure, and minimal elegance. Click on any frame to view the corresponding garments.
            </p>
          </div>
        </Reveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {LOOKBOOK_ITEMS.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <Link 
                to={item.target}
                className={`group block cursor-view relative overflow-hidden ${
                  item.size === 'wide' ? 'aspect-[4/3]' : 'aspect-[3/4]'
                }`}
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700" />

                {/* Info Text */}
                <div className="absolute inset-x-8 bottom-8 flex flex-col justify-end text-white pointer-events-none z-10 transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl font-serif font-bold tracking-tight uppercase leading-none">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-end mt-2">
                    <p className="text-[10px] tracking-widest text-gray-300 uppercase font-medium">{item.desc}</p>
                    <span className="text-[9px] uppercase tracking-widest font-bold border-b border-white pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Shop look
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
