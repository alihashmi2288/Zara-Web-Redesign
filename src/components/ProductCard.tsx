import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Heart, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../constants/products';

interface ProductProps {
  product: Product;
  tag?: string;
}

export default function ProductCard({ product, tag }: ProductProps) {
  const { id, name, price, images, videos } = product;
  const image = images[0];
  const hoverImage = images[1] || images[0];
  const hoverVideo = videos?.[0];
  
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !videoError) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setVideoError(true);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="group flex flex-col gap-4 cursor-pointer cursor-view"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          referrerPolicy="no-referrer"
        />
        
        {hoverVideo && !videoError ? (
          <video
            ref={videoRef}
            src={hoverVideo}
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        ) : (
          <img 
            src={hoverImage} 
            alt={name} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            referrerPolicy="no-referrer"
          />
        )}
        
        {tag && (
          <div className="absolute top-4 left-4 bg-black text-white text-[10px] px-2 py-1 tracking-widest font-bold z-10">
            {tag}
          </div>
        )}

        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white z-10">
          <Heart size={16} strokeWidth={1.5} />
        </button>

        <button className="absolute bottom-0 left-0 w-full py-4 bg-black text-white text-xs tracking-widest font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center gap-2 z-10">
          <Plus size={16} /> ADD TO BAG
        </button>
      </div>

      <div className="flex justify-between items-start px-1">
        <div className="flex flex-col gap-1">
          <h4 className="text-[11px] tracking-widest font-medium uppercase group-hover:underline underline-offset-4 cursor-pointer">
            {name}
          </h4>
          <p className="text-[11px] text-gray-500">{price}</p>
          <div className="flex items-center gap-1 mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-2 h-2 ${i < Math.floor(product.rating) ? 'text-black fill-black' : 'text-gray-200 fill-gray-200'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[9px] text-gray-400 tracking-tighter">({product.reviewsCount})</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
