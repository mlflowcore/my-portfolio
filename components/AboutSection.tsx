import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-black relative overflow-hidden">
      {/* Film grain effect */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.1\"/%3E%3C/svg%3E')",
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black to-transparent z-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent z-20"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Film-style opening text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-6"
          >
            {/* Gallery Number Indicator */}
            <motion.div
              className="text-gray-600 text-sm font-light tracking-widest mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              02
            </motion.div>
            
            {/* Divider Line */}
            <motion.div
              className="w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.2, duration: 0.4 }}
            />
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              THE STORY
            </motion.h1>
          </motion.div>

          {/* Main content with cinematic timing */}
          <motion.div
            className="space-y-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Opening narrative */}
            <motion.p 
              className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Hello everyone, I am Chhatra Neupane, currently pursuing my final year bachelor's degree in CSE. I am a passionate Backend developer, machine learning and deep learning enthusiast, and an avid problem solver.
            </motion.p>

            {/* Character development */}
            <motion.p 
              className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto font-light italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              "Dedicated to crafting elegant and efficient solutions, I enjoy working in teams and continuously exploring new technologies and frameworks to stay at the forefront of innovation."
            </motion.p>

            {/* Act breaks with experience */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  className="text-orange-400 text-sm font-light tracking-widest"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-200px" }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                >
                  ACT I: EXPERIENCE
                </motion.div>
                
                <motion.div
                  className="flex-1 h-0.5 bg-gradient-to-r from-orange-400/20 via-orange-400 to-orange-400/20 mx-8"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-200px" }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                2+ years of hands-on experience in full-stack web development, delivering responsive, scalable, and performance-driven applications.
              </motion.p>
            </motion.div>

            {/* Second act with expertise */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 2, duration: 0.4 }}
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  className="flex-1 h-0.5 bg-gradient-to-l from-orange-400/20 via-orange-400 to-orange-400/20 mx-8"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-200px" }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                  style={{ transformOrigin: 'right' }}
                />
                
                <motion.div
                  className="text-orange-400 text-sm font-light tracking-widest"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-200px" }}
                  transition={{ delay: 2.4, duration: 0.4 }}
                >
                  ACT II: EXPERTISE
                </motion.div>
              </div>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ delay: 2.6, duration: 0.6 }}
              >
                Proficient in React, Node.js, Python, Machine Learning, and modern web technologies with focus on clean code and best practices.
              </motion.p>
            </motion.div>

            {/* Closing scene - Enhanced right alignment */}
            <motion.div
              className="pt-12 flex justify-end"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 3.2, duration: 0.8 }}
            >
              <div className="text-right max-w-md">
                <motion.div
                  className="text-orange-400 text-sm font-medium tracking-widest mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-200px" }}
                  transition={{ delay: 3.4, duration: 0.6 }}
                >
                  THE JOURNEY CONTINUES...
                </motion.div>
                
                <motion.div
                  className="relative h-0.5 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-200px" }}
                  transition={{ delay: 3.6, duration: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-orange-400 to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ delay: 3.8, duration: 1 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-orange-400/50 to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ delay: 4, duration: 1.5 }}
                  />
                </motion.div>
                
                <motion.div
                  className="text-gray-500 text-xs font-light tracking-widest italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-200px" }}
                  transition={{ delay: 4.2, duration: 0.6 }}
                >
                  End of Chapter II
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Film reel effect on sides */}
      <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
    </section>
  );
};

export default AboutSection;
