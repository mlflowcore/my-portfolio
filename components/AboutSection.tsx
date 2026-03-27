import React, { useEffect, useState } from "react";

const AboutSection = () => {
  const [motionModule, setMotionModule] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    // Dynamically import framer-motion to avoid adding it to the initial bundle
    import("framer-motion").then((mod) => {
      if (mounted) setMotionModule(mod);
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Static fallback (renders immediately without framer-motion)
  if (!motionModule) {
    return (
      <section id="about" className="min-h-screen bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 film-grain" />

        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black to-transparent z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent z-20" />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <div className="text-gray-600 text-sm font-light tracking-widest mb-3">02</div>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mb-4" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-4">THE STORY</h1>
            </div>

            <div className="space-y-8 text-center">
              <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto font-light">
                Hello everyone, I am Chhatra Neupane, currently pursuing my final year bachelor's degree in Computer Engineering. I am a passionate Backend Developer, machine learning and deep learning enthusiast, and an avid problem solver.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto font-light italic">
                "I’m an engineer and AI enthusiast driven to build smart, efficient systems while continuously learning and applying new technologies in collaborative environments.”
              </p>

              <div className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-orange-400 text-sm font-light tracking-widest">ACT I: EXPERIENCE</div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-400/20 via-orange-400 to-orange-400/20 mx-8" />
                </div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto font-light">2+ years of hands-on experience in full-stack web development, delivering responsive, scalable, and performance-driven applications.</p>
              </div>

              <div className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1 h-0.5 bg-gradient-to-l from-orange-400/20 via-orange-400 to-orange-400/20 mx-8" />
                  <div className="text-orange-400 text-sm font-light tracking-widest">ACT II: EXPERTISE</div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto font-light">Proficient in React, Node.js, Python, Machine Learning, and modern web technologies with focus on clean code and best practices.</p>
              </div>

              <div className="pt-12 flex justify-end">
                <div className="text-right max-w-md">
                  <div className="text-orange-400 text-sm font-medium tracking-widest mb-4">THE JOURNEY CONTINUES...</div>
                  <div className="relative h-0.5 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-orange-400 to-transparent" style={{ width: '100%' }} />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-orange-400/50 to-transparent" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
      </section>
    );
  }

  const { motion } = motionModule as any;

  return (
    <section id="about" className="min-h-screen bg-black relative overflow-hidden">
      {/* Film grain effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 film-grain" />
      </div>

      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black to-transparent z-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent z-20"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-6"
          >
            <motion.div
              className="text-gray-600 text-sm font-light tracking-widest mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              02
            </motion.div>

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

          <motion.div
            className="space-y-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.p
              className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Hello everyone, I am Chhatra Neupane, currently pursuing my final year bachelor's degree in Computer Engineering. I am a passionate Backend Developer, machine learning and deep learning enthusiast, and an avid problem solver.
            </motion.p>

            <motion.p
              className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto font-light italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              "I’m an engineer and AI enthusiast driven to build smart, efficient systems while continuously learning and applying new technologies in collaborative environments.”
            </motion.p>

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
                ></motion.div>
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
