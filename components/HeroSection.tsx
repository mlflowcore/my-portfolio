import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-[#1F2121] relative overflow-hidden">
      {/* Subtle background pattern for hero */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M0 40L40 0H20L0 20M40 40V20L20 40\"/%3E%3C/g%3E%3C/svg%3E')"
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-4">
                Hi, I'm{" "}
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent inline-block font-light"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.1 }
                  }}
                >
                  {"Chhatra Neupane".split('').map((letter, index) => (
                    <motion.span
                      key={index}
                      whileHover={{
                        rotateY: [0, 90, 180, 270, 360],
                        color: ["#60A5FA", "#06B6D4", "#10B981", "#F59E0B", "#60A5FA"],
                        transition: {
                          duration: 0.3,
                          ease: "easeInOut"
                        }
                      }}
                      style={{ display: 'inline-block' }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </motion.span>
              </h1>
              
              <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-semibold">
                <TypeAnimation
                  sequence={[
                    "Backend Engineer",
                    1500,
                    "ML Learning Enthusiast",
                    1500,
                    "Full Stack Developer",
                    1500,
                    "Problem Solver",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                />
              </div>
            </motion.div>

            {/* Description - Original text */}
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Passionate <span className="font-semibold text-white">Backend Developer</span> and 
              <span className="font-semibold text-white"> ML Learning Engineer</span> with a creative mindset and 
              strong attention to detail. I specialize in building scalable APIs, 
              managing databases efficiently, and crafting secure backend systems.  
              Currently exploring Machine Learning to create smarter, more intuitive web applications.
            </motion.p>

            {/* Simple buttons matching screenshot style */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a
                href="https://github.com/chhatraneupane"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-8 text-white font-light transition-all duration-200 hover:bg-gray-800"
              >
                {"View GitHub".split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    whileHover={{
                      rotateY: [0, 180, 360],
                      color: ["#ffffff", "#FB923C", "#ffffff"],
                      scale: [1, 1.2, 1],
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut"
                      }
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.a>
              
              <motion.a
                href="/my_cv.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-gray-900 bg-white px-8 text-gray-900 font-light transition-all duration-200 hover:bg-gray-900 hover:text-white"
              >
                {"Download CV".split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    whileHover={{
                      rotateY: [0, 180, 360],
                      color: ["#111827", "#FB923C", "#111827"],
                      scale: [1, 1.2, 1],
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut"
                      }
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Section - Clear Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200">
              {/* Profile Image - Clear and Professional */}
              <img
                src="/profile2.jpg"
                alt="Chhatra Neupane"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
