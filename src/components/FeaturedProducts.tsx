import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants/products';
import { Link } from 'react-router-dom';

export default function FeaturedProducts() {
  return (
    <section className="py-24 px-6">
      <div className="flex justify-between items-end mb-12 max-w-[1800px] mx-auto">
        <div className="space-y-2">
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-gray-400">Shop the look</span>
          <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tighter">NEW ARRIVALS</h2>
        </div>
        <Link to="/category/woman" className="text-[10px] tracking-widest font-bold uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 max-w-[1800px] mx-auto">
        {PRODUCTS.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </section>
  );
}
