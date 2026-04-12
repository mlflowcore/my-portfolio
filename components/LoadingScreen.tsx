import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';



const LoadingScreen = () => {

  const [loadingProgress, setLoadingProgress] = useState(0);



  useEffect(() => {

    const interval = setInterval(() => {

      setLoadingProgress(prev => {

        if (prev >= 100) {

          clearInterval(interval);

          return 100;

        }

        return prev + 1;

      });

    }, 25);



    return () => clearInterval(interval);

  }, []);



  return (

    <section className="min-h-screen bg-black relative overflow-hidden">

      {/* Diagonal geometric lines - same as hero section */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent transform rotate-12 translate-y-20"></div>

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent transform -rotate-6 translate-y-40"></div>

        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent transform rotate-3 -translate-y-32"></div>

      </div>



      {/* Main Content Container - same layout as hero */}

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">

        <div className="max-w-4xl mx-auto text-center">

          

          {/* Gallery Number Indicator - matching hero section style */}

          <motion.div 

            className="text-gray-600 text-sm font-light tracking-widest mb-4"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ delay: 0.2, duration: 0.5 }}

          >

            00

          </motion.div>

          

          {/* Divider Line - matching hero section style */}

          <motion.div

            className="w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mb-8"

            initial={{ width: 0 }}

            animate={{ width: "8rem" }}

            transition={{ delay: 0.4, duration: 0.6 }}

          />

          

          {/* Circulating Loading Pattern */}

          <motion.div

            initial={{ scale: 0, rotate: -180 }}

            animate={{ 

              scale: [0, 1.2, 1],

              rotate: [-180, 360, 0]

            }}

            transition={{ 

              duration: 2,

              ease: [0.23, 0.0, 0.0, 1.0]

            }}

            className="mb-12"

          >

            <div className="relative w-32 h-32 mx-auto">

              {/* Sharp Light Beam Effect - same as hero portrait */}

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 transform skew-x-12 origin-left"></div>

              

              {/* Shadow Overlay for Chiaroscuro - same as hero */}

              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>

              <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div>

              

              {/* Loading Portrait with Circulating Pattern */}

              <div className="absolute inset-4 border border-gray-900 rounded-lg flex items-center justify-center">

                {/* Circulating Ring System */}

                <motion.div

                  animate={{ rotate: 360 }}

                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}

                  className="w-full h-full rounded-lg border-2 border-orange-400/30 relative overflow-hidden"

                >

                  {/* Outer circulating dots */}

                  {[...Array(8)].map((_, i) => (

                    <motion.div

                      key={i}

                      className="absolute w-2 h-2 bg-orange-400 rounded-full"

                      style={{

                        top: '50%',

                        left: '50%',

                        transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-40px)`

                      }}

                      animate={{

                        scale: [1, 1.5, 1],

                        opacity: [0.5, 1, 0.5]

                      }}

                      transition={{

                        duration: 2,

                        repeat: Infinity,

                        delay: i * 0.2,

                        ease: "easeInOut"

                      }}

                    />

                  ))}

                  

                  {/* Middle rotating ring */}

                  <motion.div

                    animate={{ rotate: -360 }}

                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}

                    className="absolute inset-2 rounded-full border-2 border-gradient-to-r from-orange-400 to-pink-400"

                  />

                  

                  {/* Inner core */}

                  <motion.div

                    animate={{ 

                      scale: [1, 1.2, 1],

                      rotate: [0, 180, 360]

                    }}

                    transition={{ 

                      duration: 1.5,

                      repeat: Infinity,

                      ease: "easeInOut"

                    }}

                    className="absolute inset-6 flex items-center justify-center"

                  >

                    <div className="relative">

                      <motion.div

                        animate={{ opacity: [0.5, 1, 0.5] }}

                        transition={{ duration: 1, repeat: Infinity }}

                        className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-orange-200"

                        style={{

                          boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)'

                        }}

                      />

                      <motion.div

                        animate={{ scale: [1, 1.5, 1] }}

                        transition={{ duration: 2, repeat: Infinity }}

                        className="absolute inset-0 rounded-full border border-white/30"

                      />

                    </div>

                  </motion.div>

                </motion.div>

              </div>

              

              {/* Subtle Frame - same as hero */}

              <div className="absolute inset-0 border border-gray-900 pointer-events-none rounded-lg"></div>

            </div>

          </motion.div>



          {/* Loading Text - cinematic style */}

          <motion.div

            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ delay: 0.8, duration: 0.8 }}

            className="space-y-8"

          >

            <motion.h1 

              className="text-6xl md:text-7xl lg:text-8xl font-light text-white leading-tight tracking-tight"

              initial={{ opacity: 0, scale: 0.9 }}

              animate={{ opacity: 1, scale: 1 }}

              transition={{ delay: 1, duration: 0.8 }}

            >

              LOADING

            </motion.h1>



            <motion.div 

              className="text-gray-400 text-lg tracking-widest font-light"

              initial={{ opacity: 0 }}

              animate={{ opacity: 1 }}

              transition={{ delay: 1.2, duration: 0.8 }}

            >

              <motion.span

                animate={{ opacity: [0.5, 1, 0.5] }}

                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}

              >

                PORTFOLIO

              </motion.span>

            </motion.div>

          </motion.div>



          {/* Progress Bar - cinematic style */}

          <motion.div

            initial={{ width: 0, opacity: 0 }}

            animate={{ width: `${loadingProgress}%`, opacity: 1 }}

            transition={{ duration: 0.3 }}

            className="mt-12 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent max-w-xs mx-auto rounded-full"

          />

          

          {/* Progress Percentage */}

          <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ delay: 1.4, duration: 0.5 }}

            className="mt-6 text-orange-400 text-sm font-mono tracking-widest"

          >

            {loadingProgress}%

          </motion.div>

        </div>

      </div>



      {/* Gallery Number in Bottom Right - same as hero section */}

      <motion.div 

        className="fixed bottom-8 right-8 text-gray-700 text-sm font-light tracking-widest lg:block hidden"

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: 1.6, duration: 0.8 }}

      >

        00/05

      </motion.div>



      {/* Film reel effect on sides - same as hero */}

      <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

      <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>

    </section>

  );

};



export default LoadingScreen;

