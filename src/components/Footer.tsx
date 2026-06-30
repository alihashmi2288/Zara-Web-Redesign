import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zara-gray py-24 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-8">
          <h2 className="text-4xl font-serif font-black tracking-tighter">ZARA</h2>
          <p className="text-xs leading-relaxed text-gray-500 max-w-xs">
            Join our newsletter to receive the latest updates on collections, events, and exclusive offers.
          </p>
          <div className="flex border-b border-black pb-2 max-w-xs">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="bg-transparent border-none outline-none text-[10px] tracking-widest w-full"
            />
            <button className="text-[10px] font-bold tracking-widest">JOIN</button>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase">Help</h4>
          <ul className="flex flex-col gap-3 text-[11px] tracking-widest text-gray-500 uppercase">
            <li><Link to="/shop" className="hover:text-black transition-colors">Shop at Zara.com</Link></li>
            <li><Link to="/shop" className="hover:text-black transition-colors">Product</Link></li>
            <li><Link to="/contact" className="hover:text-black transition-colors">Payment</Link></li>
            <li><Link to="/contact" className="hover:text-black transition-colors">Shipping</Link></li>
            <li><Link to="/contact" className="hover:text-black transition-colors">Exchanges and Returns</Link></li>
            <li><Link to="/about" className="hover:text-black transition-colors">Shops and Company</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase">Follow Us</h4>
          <ul className="flex flex-col gap-3 text-[11px] tracking-widest text-gray-500 uppercase">
            <li><a href="https://instagram.com/zara" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a></li>
            <li><a href="https://facebook.com/zara" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Facebook</a></li>
            <li><a href="https://twitter.com/zara" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Twitter</a></li>
            <li><a href="https://pinterest.com/zara" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Pinterest</a></li>
            <li><a href="https://youtube.com/zara" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Youtube</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase">Company</h4>
          <ul className="flex flex-col gap-3 text-[11px] tracking-widest text-gray-500 uppercase">
            <li><Link to="/about" className="hover:text-black transition-colors">About Zara</Link></li>
            <li><Link to="/about" className="hover:text-black transition-colors">JOIN LIFE</Link></li>
            <li><Link to="/about" className="hover:text-black transition-colors">Offices</Link></li>
            <li><Link to="/contact" className="hover:text-black transition-colors">Stores</Link></li>
            <li><Link to="/about" className="hover:text-black transition-colors">Work with us</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] tracking-widest text-gray-400 uppercase">
          © 2026 ZARA. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 text-[10px] tracking-widest text-gray-400 uppercase font-medium">
          <Link to="/about" className="hover:text-black transition-colors">Cookies Settings</Link>
          <Link to="/about" className="hover:text-black transition-colors">Privacy and Cookies Policy</Link>
          <Link to="/about" className="hover:text-black transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
