import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    { day: "01-05", title: "البحث والتحليل", desc: "جمع البيانات وتحديد الجمهور." },
    { day: "06-10", title: "بناء الاستراتيجية", desc: "تحديد قنوات التسويق والميزانية." },
    { day: "11-15", title: "إنشاء المحتوى", desc: "تصميم الحملات الإعلانية والمحتوى." },
    { day: "16-20", title: "الإطلاق التجريبي", desc: "تشغيل حملات A/B Testing." },
    { day: "21-25", title: "التحسين", desc: "تحليل النتائج الأولية وتعديل الأداء." },
    { day: "26-30", title: "التوسع", desc: "زيادة الميزانية على القنوات الناجحة." },
  ];

  return (
    <section className="h-full min-h-screen flex flex-col justify-center bg-xfuse-dark relative overflow-hidden">
      <div className="container mx-auto px-4 mb-8 z-10">
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="border-r-4 border-xfuse-primary pr-6"
        >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-2">خطة الـ 30 يوماً</h2>
            <div className="flex items-center gap-2 text-xfuse-secondary">
                 <ArrowRight size={20} className="animate-pulse" />
                 <p className="text-lg">اسحب لليسار لاستعراض الجدول الزمني</p>
            </div>
        </motion.div>
      </div>
      
      <div 
        ref={containerRef}
        className="w-full overflow-x-auto no-scrollbar pb-12 pl-8 pr-8 md:pr-20"
      >
          <div className="flex gap-8 w-max px-4 md:px-20 relative pt-10">
            {/* Connecting Line */}
            <div className="absolute top-[3.5rem] left-0 right-0 h-1 bg-gradient-to-l from-transparent via-gray-700 to-transparent w-full z-0" />
            
            {steps.map((step, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ root: containerRef }}
                    className="relative min-w-[280px] md:min-w-[350px] group z-10"
                >
                    {/* Dot */}
                    <div className="w-6 h-6 rounded-full bg-xfuse-dark border-4 border-xfuse-primary absolute top-0 left-1/2 -translate-x-1/2 z-20 group-hover:scale-150 group-hover:border-xfuse-secondary transition-all duration-300 shadow-[0_0_15px_rgba(255,0,102,0.5)]" />
                    
                    {/* Content Card */}
                    <div className="mt-12 p-8 bg-xfuse-surface/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-xfuse-primary hover:bg-xfuse-surface transition-all duration-300 group-hover:-translate-y-2 shadow-xl">
                        <span className="text-4xl font-black text-white/10 absolute top-4 left-4 font-english">{index + 1}</span>
                        <span className="text-xfuse-secondary font-bold font-english text-xl block mb-3 relative">{step.day}</span>
                        <h3 className="text-2xl font-bold text-white mb-3 relative">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed relative">{step.desc}</p>
                    </div>
                </motion.div>
            ))}
            
            {/* End spacer */}
            <div className="w-10" /> 
          </div>
      </div>
    </section>
  );
};

export default Timeline;