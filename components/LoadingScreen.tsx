import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
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
      {/* Diagonal geometric lines — same as hero section */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent transform rotate-12 translate-y-20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent transform -rotate-6 translate-y-40" />
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent transform rotate-3 -translate-y-32" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Gallery number — matching hero/about/projects style */}
          <motion.div
            className="text-gray-600 text-sm font-light tracking-widest mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            00
          </motion.div>

          {/* Divider line */}
          <motion.div
            className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mb-16"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />

          {/* Percentage — the one focal element */}
          <motion.div
            className="text-7xl md:text-8xl font-light text-white tabular-nums leading-none mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {loadingProgress}
          </motion.div>

          {/* Progress bar — width driven by real load state, not decorative */}
          <div className="h-px w-48 mx-auto bg-white/10 overflow-hidden mb-4">
            <motion.div
              className="h-full bg-orange-400"
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.2, ease: "linear" }}
            />
          </div>

          {/* Label */}
          <motion.div
            className="text-gray-500 text-sm tracking-widest font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            PREPARING PORTFOLIO
          </motion.div>
        </div>
      </div>

      {/* Gallery number in bottom right — same as hero section */}
      <motion.div
        className="fixed bottom-8 right-8 text-gray-700 text-sm font-light tracking-widest lg:block hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        00/05
      </motion.div>

      {/* Film reel effect on sides — same as hero */}
      <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
    </section>
  );
};

export default LoadingScreen;