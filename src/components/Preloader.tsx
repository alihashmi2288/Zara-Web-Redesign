import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center gap-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-serif font-black tracking-tighter"
        >
          ZARA
        </motion.h1>
        <div className="w-48 h-px bg-gray-100 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-black origin-left"
            style={{ scaleX: progress / 100 }}
          />
        </div>
        <span className="text-[10px] tracking-[0.5em] font-bold text-gray-400 uppercase">
          Loading {progress}%
        </span>
      </div>
    </motion.div>
  );
}
