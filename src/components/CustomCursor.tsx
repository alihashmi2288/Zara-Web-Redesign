import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'view' | 'drag'>('default');

  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .cursor-view, [role="button"], .cursor-pointer')) {
        setIsHovering(true);
        if (target.closest('.cursor-view')) setCursorType('view');
        else setCursorType('default');
      } else {
        setIsHovering(false);
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 1)',
          width: isHovering ? 40 : 8,
          height: isHovering ? 40 : 8,
        }}
        className="rounded-full border border-black/10 flex items-center justify-center overflow-hidden"
      >
        {isHovering && cursorType === 'view' && (
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[8px] font-bold tracking-widest text-black uppercase"
          >
            View
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
