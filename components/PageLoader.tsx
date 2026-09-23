import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PageLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Fade-in title block
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

      // Gentle continuous float once the title has settled in,
      // paired with a glow that shrinks/dims as it rises — like
      // a light source beneath it, so it reads as levitating
      // rather than just sliding up and down.
      if (titleRef.current) {
        tl.to(
          titleRef.current,
          {
            y: -10,
            duration: 2.4,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          },
          "-=0.2"
        );
      }

      if (glowRef.current) {
        tl.to(
          glowRef.current,
          {
            scaleX: 0.55,
            opacity: 0.2,
            duration: 2.4,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          },
          "<"
        );
      }

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
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black"
    >
      <div className="relative z-10 select-none flex flex-col items-center gap-8">
        {/* Title */}
        <div ref={textRef} className="text-center">
          <div className="text-xs font-light tracking-[0.35em] text-gray-600">
            WELCOME
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto my-4" />
          <div className="relative inline-block">
            <div
              ref={titleRef}
              className="relative z-10 text-3xl md:text-4xl font-light text-white tracking-tight drop-shadow-[0_0_18px_rgba(251,146,60,0.3)]"
            >
              Loading Portfolio
            </div>
            <div
              ref={glowRef}
              className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-40 h-3 rounded-full bg-orange-400/40 blur-xl"
            />
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative w-64 md:w-80 h-px overflow-hidden bg-white/10">
          <div
            ref={barRef}
            className="h-full bg-orange-400"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;