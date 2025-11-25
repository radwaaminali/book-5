import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, ChevronRight, ChevronLeft, BookOpen, Layers } from 'lucide-react';

// Components
import Hero from './components/Hero';
import About from './components/About';
import MarketOverview from './components/MarketOverview';
import Opportunities from './components/Opportunities';
import Personas from './components/Personas';
import Competitors from './components/Competitors';
import Strategy from './components/Strategy';
import KPIs from './components/KPIs';
import Timeline from './components/Timeline';
import Recommendations from './components/Recommendations';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const sections = [
  { id: 'hero', title: 'Intro', component: Hero },
  { id: 'about', title: 'About XFUSE', component: About },
  { id: 'market', title: 'Market Overview', component: MarketOverview },
  { id: 'opportunities', title: 'Opportunities', component: Opportunities },
  { id: 'personas', title: 'Personas', component: Personas },
  { id: 'competitors', title: 'Competitors', component: Competitors },
  { id: 'strategy', title: 'SWOT Analysis', component: Strategy },
  { id: 'kpis', title: 'KPIs & Strategy', component: KPIs },
  { id: 'timeline', title: '30-Day Plan', component: Timeline },
  { id: 'recommendations', title: 'Recommendations', component: Recommendations },
  { id: 'gallery', title: 'Portfolio Gallery', component: Gallery },
  { id: 'contact', title: 'Contact', component: Contact },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Initialize Theme
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const isDark = storedTheme === 'dark' || (!storedTheme && true); // Default to dark
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const changeSection = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < sections.length) {
      setDirection(newIndex > activeSection ? 1 : -1);
      setActiveSection(newIndex);
      setSidebarOpen(false);
    }
  };

  const nextSection = () => changeSection(activeSection + 1);
  const prevSection = () => changeSection(activeSection - 1);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSection();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSection();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  const CurrentComponent = sections[activeSection].component;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  return (
    <div className={`h-screen w-full overflow-hidden flex flex-col bg-slate-100 dark:bg-black transition-colors duration-500 font-sans`}>
      
      {/* Top Bar */}
      <header className="h-16 flex items-center justify-between px-6 z-50 bg-white/80 dark:bg-xfuse-dark/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)} 
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Menu size={24} className="text-xfuse-primary" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-xfuse-primary to-xfuse-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-xfuse-primary/20">X</div>
            <span className="hidden md:block text-xl font-bold font-english tracking-tight dark:text-white">XFUSE <span className="text-xfuse-secondary font-light">INTELLIGENCE</span></span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-500 dark:text-gray-400">
             <BookOpen size={14} />
             <span>Page {activeSection + 1} of {sections.length}</span>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:scale-110 transition-transform"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Main Content Area (The "Book") */}
      <main className="flex-1 relative perspective-1000 overflow-hidden bg-slate-50 dark:bg-[#0B1120]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={activeSection}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              rotateY: { duration: 0.5 } // 3D page turn effect
            }}
            className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar bg-white dark:bg-xfuse-dark shadow-2xl"
          >
            <div className="min-h-full">
              <CurrentComponent 
                scrollToStart={nextSection} 
              />
            </div>
            
            {/* Page Footer Watermark */}
            <div className="absolute bottom-4 right-6 opacity-30 pointer-events-none z-0">
               <span className="text-6xl font-black text-gray-200 dark:text-gray-800">XFUSE</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls (Floating) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 z-40 bg-white/10 dark:bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-2xl">
          <button 
            onClick={prevSection} 
            disabled={activeSection === 0}
            className="p-2 rounded-full bg-white dark:bg-xfuse-surface text-xfuse-primary hover:bg-xfuse-primary hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-xfuse-primary transition-all"
          >
            <ChevronRight size={24} /> 
          </button>
          
          <div className="flex gap-2">
            {sections.map((_, idx) => (
              <button
                key={idx}
                onClick={() => changeSection(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeSection 
                    ? 'w-6 bg-xfuse-secondary' 
                    : 'bg-gray-400/50 hover:bg-xfuse-primary/50'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={nextSection} 
            disabled={activeSection === sections.length - 1}
            className="p-2 rounded-full bg-white dark:bg-xfuse-surface text-xfuse-primary hover:bg-xfuse-primary hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-xfuse-primary transition-all"
          >
             <ChevronLeft size={24} />
          </button>
        </div>
      </main>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-xfuse-surface z-[70] shadow-2xl border-l border-gray-200 dark:border-gray-700 flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <h2 className="text-xl font-bold dark:text-white flex items-center gap-2">
                  <Layers className="text-xfuse-accent" />
                  Table of Contents
                </h2>
                <button onClick={() => setSidebarOpen(false)} className="text-gray-500 hover:text-red-500">
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {sections.map((section, idx) => (
                  <button
                    key={section.id}
                    onClick={() => changeSection(idx)}
                    className={`w-full text-right p-4 rounded-xl transition-all flex items-center justify-end gap-3 ${
                      activeSection === idx
                        ? 'bg-xfuse-primary text-white shadow-lg shadow-xfuse-primary/30'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className="font-medium">{section.title}</span>
                    <span className={`text-xs font-bold w-6 h-6 rounded flex items-center justify-center ${
                       activeSection === idx ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-700'
                    }`}>
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>

              <div className="p-6 border-t border-gray-100 dark:border-gray-700">
                <p className="text-xs text-center text-gray-400">
                  © 2025 XFUSE Intelligence
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;