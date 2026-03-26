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
          ? "bg-black/90 backdrop-blur-lg border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
