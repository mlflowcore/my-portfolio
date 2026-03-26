import React, { useState, useEffect } from "react";
import { CodeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/src/smoothScroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("home");
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#050505]/95 backdrop-blur-lg border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.1\"/%3E%3C/svg%3E')",
          backgroundSize: '200px 200px'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center h-16">
          {/* Logo / Brand - learner - Left Side */}
          <motion.a 
            href="#home" 
            className="flex items-center group"
            onClick={handleNavClick}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#050505] via-orange-400 to-[#050505] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: isScrolled ? 0.8 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <CodeIcon className="relative h-8 w-8 text-white z-10" />
            </div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="ml-3 text-white font-semibold hidden sm:block"
            >
              learner .
            </motion.span>
          </motion.a>
        </div>
      </div>
    </header>
  );
}
