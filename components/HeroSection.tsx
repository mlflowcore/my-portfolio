import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { IconButton } from "@/components/ui/icon-button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden">
      {/* Diagonal geometric lines for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent transform rotate-12 translate-y-20"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent transform -rotate-6 translate-y-40"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent transform rotate-3 -translate-y-32"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex">
        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center lg:justify-start lg:ml-24 px-4 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto w-full">
            
            {/* Portrait Image with Chiaroscuro Effect */}
            <motion.div 
              className="relative order-2 lg:order-1 flex items-center justify-center lg:justify-start hidden lg:flex"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {/* Left Side Navigation - Hidden on mobile */}
              <nav className="absolute -left-20 lg:-left-32 hidden lg:flex flex-col items-center space-y-8">
                <IconButton
                  href="#home"
                  label="Go to Home"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  }
                />
                
                <IconButton
                  href="#about"
                  label="Go to About"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  }
                />
                
                <IconButton
                  href="#projects"
                  label="Go to Projects"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  }
                />
                
                <IconButton
                  href="#skills"
                  label="Go to Skills"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  }
                />
                
                <IconButton
                  href="#contact"
                  label="Go to Contact"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                />
              </nav>

              {/* Main Portrait Container */}
              <div className="relative w-full max-w-md mx-auto aspect-[3/4] lg:aspect-[4/5]">
                {/* Sharp Light Beam Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 transform skew-x-12 origin-left"></div>
                
                {/* Shadow Overlay for Chiaroscuro */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div>
                
                {/* Portrait Image */}
                <img
                  src="/profile2 (2).jpg"
                  alt="Chhatra Raj Neupane"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                
                {/* Subtle Frame */}
                <div className="absolute inset-0 border border-gray-900 pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Text Content - Right Side */}
            <motion.div 
              className="space-y-8 order-1 lg:order-2 text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              {/* Gallery Number Indicator */}
              <motion.div 
                className="text-gray-600 text-sm font-light tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                01
              </motion.div>
              
              {/* Divider Line */}
              <motion.div
                className="w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mb-6"
                initial={{ width: 0 }}
                animate={{ width: "8rem" }}
                transition={{ delay: 1, duration: 0.8 }}
              />

              {/* Main Headline */}
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-light text-white leading-tight tracking-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                CHHATRA RAJ<br/>NEUPANE
              </motion.h1>

              {/* Professional Title */}
              <motion.div 
                className="text-gray-400 text-lg tracking-widest font-light mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <TypeAnimation
                  sequence={[
                    "BACKEND ENGINEER",
                    1500,
                    "ML LEARNING ENTHUSIAST",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-gray-400 text-lg tracking-widest font-light"
                />
              </motion.div>

              {/* Call-to-Action Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <motion.a
                  href="https://github.com/chhatraraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-2 text-white border-b border-gray-600 pb-1 transition-all duration-300 hover:border-white"
                  whileHover={{ y: -2 }}
                >
                  <span className="text-sm font-light tracking-wider">VIEW GITHUB</span>
                  <motion.svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.a>
              </motion.div>

              {/* Download CV Button - Cinematic Style */}
              <motion.div 
                className="flex justify-end pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                <motion.a
                  href="/my_cv.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center space-x-3 px-6 py-3 border border-gray-800 bg-black/50 backdrop-blur-sm text-gray-300 text-sm font-light tracking-wider transition-all duration-300 hover:border-white hover:text-white"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>DOWNLOAD CV</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Gallery Number in Bottom Right */}
        <motion.div 
          className="fixed bottom-8 right-8 text-gray-700 text-sm font-light tracking-widest lg:block hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          01/04
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
