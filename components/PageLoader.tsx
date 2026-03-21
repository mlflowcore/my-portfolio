import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PageLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Fade-in title animation
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Progress bar animation
      if (barRef.current) {
        gsap.set(barRef.current, { width: "0%" });
        gsap.to(barRef.current, {
          width: "100%",
          duration: 2.2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }, overlayRef);

    // Hide loader after page load
    const onReady = () => {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => setIsVisible(false),
      });
    };

    if (document.readyState === "complete") {
      setTimeout(onReady, 700);
    } else {
      const handleLoad = () => setTimeout(onReady, 500);
      window.addEventListener("load", handleLoad, { once: true });
      return () => {
        window.removeEventListener("load", handleLoad);
        ctx.revert();
      };
    }

    return () => ctx.revert();
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#1F2121]"
    >
      <div className="relative z-10 select-none flex flex-col items-center gap-8">
        {/* Title */}
        <div ref={textRef} className="text-center">
          <div className="text-xs tracking-[0.35em] text-gray-400">WELCOME</div>
          <div className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Loading Portfolio
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative w-64 md:w-80 h-[4px] rounded-full overflow-hidden bg-gray-700">
          <div
            ref={barRef}
            className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
