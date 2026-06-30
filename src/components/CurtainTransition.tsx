import { motion } from 'motion/react';

export default function CurtainTransition({ isVisible }: { isVisible: boolean }) {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ 
        x: isVisible ? '0%' : '100%',
        visibility: isVisible ? 'visible' : 'hidden'
      }}
      transition={{ 
        x: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        visibility: { delay: isVisible ? 0 : 0.8 }
      }}
      className="fixed inset-0 z-[200] bg-black pointer-events-none"
    />
  );
}
