import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface FlyerProps {
  className?: string;
}

export default function FlyerEffect({ className = '' }: FlyerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create intersection observer to only animate when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!containerRef.current || !isVisible) return;
    
    const container = containerRef.current;
    const flyers = container.querySelectorAll('.flyer');
    
    // Clear any existing animations
    gsap.killTweensOf(flyers);
    
    // Reduce the number of animations by only animating visible flyers
    // Use requestAnimationFrame for better performance
    const animate = () => {
      // Animate each flyer with random parameters but with fewer property changes
      flyers.forEach((flyer) => {
        const startX = gsap.utils.random(-50, 50);
        const startY = gsap.utils.random(-30, 30);
        const duration = gsap.utils.random(20, 40); // Longer durations = fewer updates
        const delay = gsap.utils.random(0, 3);
        
        gsap.set(flyer, {
          x: startX,
          y: startY,
          opacity: 0,
          scale: gsap.utils.random(0.5, 1.2),
        });
        
        // Create animation timeline with fewer property changes
        const tl = gsap.timeline({ 
          repeat: -1,
          onComplete: () => isVisible && animate()
        });
        
        tl.to(flyer, {
          x: `+=${gsap.utils.random(-100, 100)}`,
          y: `+=${gsap.utils.random(-50, 50)}`,
          opacity: gsap.utils.random(0.2, 0.5),
          duration: duration / 2,
          ease: "power1.inOut",
          delay,
        })
        .to(flyer, {
          x: `+=${gsap.utils.random(-100, 100)}`,
          y: `+=${gsap.utils.random(-50, 50)}`,
          opacity: 0,
          duration: duration / 2,
          ease: "power1.inOut",
        });
      });
    };
    
    animate();
    
    return () => {
      gsap.killTweensOf(flyers);
    };
  }, [isVisible]);
  
  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {/* Flyers with different colors */}
      <div className="flyer absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 blur-sm"></div>
      <div className="flyer absolute w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 blur-sm"></div>
      <div className="flyer absolute w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 to-yellow-200 blur-sm"></div>
      <div className="flyer absolute w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-green-300 blur-sm"></div>
      <div className="flyer absolute w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-red-300 blur-sm"></div>
      <div className="flyer absolute w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 blur-sm"></div>
      <div className="flyer absolute w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-cyan-300 blur-sm"></div>
      <div className="flyer absolute w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-400 blur-sm"></div>
    </div>
  );
}