import Breadcrumbs from './Breadcrumbs';
import Reveal from './Reveal';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto space-y-32">
        <Reveal>
          <Breadcrumbs items={[{ label: 'About' }]} />
        </Reveal>

        {/* Section 1: Hero Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase">Our Identity</span>
            <h1 className="text-5xl md:text-8xl font-serif font-black tracking-tighter uppercase leading-none">
              ZARA REDESIGNED
            </h1>
            <p className="text-sm md:text-base tracking-widest text-gray-500 uppercase leading-relaxed max-w-lg">
              At the intersection of rapid creativity, architectural spaces, and high-fashion accessibility. We bring refined, curated wardrobe collections directly to the global stage.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-gray-100 cursor-view">
            <img 
              src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1200&auto=format&fit=crop" 
              alt="Zara Design Office" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1200ms]"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Section 2: Values Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-gray-100">
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase">01 / Aesthetics</span>
            <h3 className="text-3xl font-serif font-bold tracking-tight uppercase">PURE MINIMALISM</h3>
            <p className="text-xs tracking-widest text-gray-500 uppercase leading-relaxed">
              Every fold, zip, and silhouette is considered. We focus on structural lines and high-quality finishes that remain relevant season after season.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase">02 / Commitment</span>
            <h3 className="text-3xl font-serif font-bold tracking-tight uppercase">JOIN LIFE</h3>
            <p className="text-xs tracking-widest text-gray-500 uppercase leading-relaxed">
              We monitor our environmental footprint by using sustainably sourced organic cotton, recycled polyester fibers, and water-conscious dyeing techniques.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase">03 / Experience</span>
            <h3 className="text-3xl font-serif font-bold tracking-tight uppercase">ARCHITECTURAL</h3>
            <p className="text-xs tracking-widest text-gray-500 uppercase leading-relaxed">
              Our websites, digital styling tools, and physical retail locations share a singular architectural language of clean white spacing and stark shadows.
            </p>
          </div>
        </section>

        {/* Section 3: Large Editorial Block */}
        <section className="relative h-[60vh] overflow-hidden bg-black flex items-center justify-center text-white">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1800&auto=format&fit=crop" 
              alt="Editorial Banner" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative text-center px-6 max-w-xl space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tighter uppercase leading-tight">
              FORM FOLLOWS FUNCTION
            </h2>
            <p className="text-xs md:text-sm tracking-widest text-gray-200 uppercase leading-relaxed">
              \"A coat should not only envelope, it should frame the wearer. Tailoring is the art of structuring empty space around the physical body.\"
            </p>
            <span className="text-[9px] tracking-[0.4em] font-bold text-gray-400 uppercase block">Zara Studio, Paris</span>
          </div>
        </section>
      </div>
    </div>
  );
}
