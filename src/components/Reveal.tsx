import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
}

export default function Reveal({ 
  children, 
  delay = 0, 
  duration = 1.4,
  triggerOnce = true
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.98,
      duration: duration,
      ease: 'power4.out',
      delay: delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        toggleActions: triggerOnce ? 'play none none none' : 'play reverse play reverse',
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full h-full">
      {children}
    </div>
  );
}
