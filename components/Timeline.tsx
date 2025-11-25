import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, GripHorizontal, Flag, Zap, Target, Search, BarChart, Rocket } from 'lucide-react';

const Timeline: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const steps = [
    { day: "01-05", title: "البحث والتحليل", desc: "جمع البيانات وتحديد الجمهور.", icon: <Search /> },
    { day: "06-10", title: "بناء الاستراتيجية", desc: "تحديد قنوات التسويق والميزانية.", icon: <Flag /> },
    { day: "11-15", title: "إنشاء المحتوى", desc: "تصميم الحملات الإعلانية والمحتوى.", icon: <Zap /> },
    { day: "16-20", title: "الإطلاق التجريبي", desc: "تشغيل حملات A/B Testing.", icon: <Target /> },
    { day: "21-25", title: "التحسين", desc: "تحليل النتائج الأولية وتعديل الأداء.", icon: <BarChart /> },
    { day: "26-30", title: "التوسع", desc: "زيادة الميزانية على القنوات الناجحة.", icon: <Rocket /> },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="h-full min-h-screen flex flex-col justify-center bg-xfuse-dark relative overflow-hidden py-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 mb-12 z-10 pointer-events-none text-center">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <span className="text-xfuse-primary font-bold tracking-widest text-sm uppercase mb-2 block font-english">30-Day Roadmap</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">خطة العمل التنفيذية</h2>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <GripHorizontal size={16} />
            <span>اسحب لليمين واليسار لاستعراض الجدول الزمني</span>
            <ArrowLeft size={16} className="animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Draggable Area */}
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`w-full overflow-x-auto no-scrollbar py-12 px-4 cursor-grab active:cursor-grabbing relative z-20 ${isDragging ? 'scale-[1.01]' : ''} transition-transform`}
      >
        <div className="flex gap-8 w-max px-8 md:px-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, root: scrollRef }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative w-72 md:w-80 flex-shrink-0"
            >
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="absolute top-8 left-0 w-full h-1 bg-gray-800 -z-10 translate-x-1/2">
                   <div className="h-full bg-gradient-to-l from-xfuse-primary to-transparent w-full opacity-30" />
                </div>
              )}

              {/* Card */}
              <div className="bg-xfuse-surface border border-gray-700 p-6 rounded-2xl hover:border-xfuse-primary transition-colors shadow-lg group select-none">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-english text-white/20 group-hover:text-xfuse-primary/50 transition-colors">
                    {step.day}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white group-hover:bg-xfuse-primary group-hover:scale-110 transition-all shadow-lg">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Dot on line */}
              <div className="absolute top-8 right-1/2 translate-x-1/2 w-4 h-4 bg-xfuse-dark border-4 border-gray-600 rounded-full z-10 group-hover:border-xfuse-primary transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Progress Indicator */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center gap-2">
         {steps.map((_, i) => (
           <div key={i} className="w-2 h-2 rounded-full bg-gray-800" />
         ))}
      </div>
    </section>
  );
};

export default Timeline;