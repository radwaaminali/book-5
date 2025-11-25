import React from 'react';
import { motion } from 'framer-motion';

const SWOTItem = ({ title, items, color, initial, delay }: { title: string, items: string[], color: string, initial: any, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, ...initial }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.7, type: "spring", bounce: 0.4 }}
    className={`p-6 rounded-2xl border-2 ${color} bg-white dark:bg-xfuse-dark h-full shadow-lg`}
  >
    <h3 className="text-xl font-bold mb-4 dark:text-white flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${color.replace('border', 'bg')}`}></span>
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm">
          <span className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Strategy: React.FC = () => {
  return (
    <section id="strategy" className="h-full min-h-screen flex items-center justify-center bg-xfuse-light dark:bg-xfuse-dark py-20">
      <div className="container mx-auto px-4">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl font-bold dark:text-white mb-2">تحليل SWOT</h2>
            <p className="text-gray-500 dark:text-gray-400">تقييم شامل للموقف الاستراتيجي الحالي والمستقبلي</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Top Left - From Left */}
          <SWOTItem 
            title="نقاط القوة (Strengths)" 
            items={["فريق خبير ومتخصص في تحليل البيانات الضخمة", "تقنيات AI متقدمة تعطي دقة 99%", "قاعدة عملاء حالية قوية وسمعة ممتازة"]}
            color="border-green-500"
            initial={{ x: -100 }}
            delay={0.1}
          />
           {/* Top Right - From Top (simulated by negative Y) */}
           <SWOTItem 
            title="نقاط الضعف (Weaknesses)" 
            items={["ميزانية تسويق محدودة حالياً مقارنة بالمنافسين الكبار", "الاعتماد الجزئي على منصات طرف ثالث في جمع البيانات"]}
            color="border-red-500"
            initial={{ y: -100 }}
            delay={0.3}
          />
           {/* Bottom Left - From Bottom */}
           <SWOTItem 
            title="الفرص (Opportunities)" 
            items={["نمو قطاع التجارة الإلكترونية بنسبة 25% سنوياً", "غياب المنافسين المتخصصين في المناطق الجنوبية", "زيادة الطلب على الأتمتة"]}
            color="border-blue-500"
            initial={{ y: 100 }}
            delay={0.5}
          />
           {/* Bottom Right - From Right */}
           <SWOTItem 
            title="التهديدات (Threats)" 
            items={["تغير سياسات الخصوصية العالمية (Cookieless Future)", "احتمالية دخول منافسين دوليين للسوق المحلي قريباً"]}
            color="border-yellow-500"
            initial={{ x: 100 }}
            delay={0.7}
          />
        </div>
      </div>
    </section>
  );
};

export default Strategy;