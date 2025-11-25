import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

interface HeroProps {
  scrollToStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToStart }) => {
  return (
    <section className="relative h-full min-h-screen flex items-center justify-center overflow-hidden bg-xfuse-light dark:bg-xfuse-dark">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-xfuse-primary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-xfuse-secondary/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 text-center z-10 flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-xfuse-primary/30 mb-10 shadow-lg shadow-xfuse-primary/10"
        >
          <Zap size={18} className="text-xfuse-accent fill-xfuse-accent" />
          <span className="text-sm font-bold text-xfuse-primary dark:text-white font-english tracking-widest uppercase">
            Market Intelligence 2025
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, letterSpacing: "10px" }}
          animate={{ opacity: 1, letterSpacing: "0px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight text-slate-900 dark:text-white"
        >
          FUTURE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-xfuse-primary via-xfuse-secondary to-xfuse-accent animate-gradient-x">
            VISION
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          استكشف أعمق تحليلات السوق في تجربة تفاعلية تدمج البيانات بالاستراتيجية.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          onClick={scrollToStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-5 bg-xfuse-primary text-white font-bold rounded-full shadow-[0_0_30px_rgba(255,0,102,0.4)] overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3 text-lg">
            ابدأ الجولة
            <ArrowRight className="group-hover:translate-x-1 transition-transform rotate-180" size={24} />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;