import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#1A1C1C] text-white relative overflow-hidden"
    >
      {/* Subtle dots pattern for about section */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>

          {/* Professional Line */}
          <div className="max-w-xs mx-auto mb-12">
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-9 md:gap-x-24 items-start">
            {/* Left Column - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                Hello everyone, I am Chhatra Neupane, currently pursuing my final year bachelor's degree in CSE. I am a passionate Backend developer, machine learning and deep learning enthusiast, and an avid problem solver. Dedicated to crafting elegant and efficient solutions, I enjoy working in teams and continuously exploring new technologies and frameworks to stay at the forefront of innovation.
              </p>
            </motion.div>

            {/* Right Column - Experience & Expertise */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Experience */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">Experience</h3>
                <p className="text-gray-300 leading-relaxed">
                  2+ years of hands-on experience in full-stack web development, delivering responsive, scalable, and performance-driven applications.
                </p>
              </div>

              {/* Expertise */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">Expertise</h3>
                <p className="text-gray-300 leading-relaxed">
                  Proficient in React, Node.js, Python, Machine Learning, and modern web technologies with focus on clean code and best practices.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
