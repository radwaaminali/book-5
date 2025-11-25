import React from 'react';
import { motion } from 'framer-motion';

const SWOTItem = ({ title, items, color, delay }: { title: string, items: string[], color: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`p-6 rounded-2xl border-2 ${color} bg-white dark:bg-xfuse-dark h-full`}
  >
    <h3 className="text-xl font-bold mb-4 dark:text-white">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-50" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Strategy: React.FC = () => {
  return (
    <section id="strategy" className="py-20 bg-xfuse-light dark:bg-xfuse-dark">
      <div className="container mx-auto px-4">
        
        {/* KPI Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
                { label: 'الميزانية (SAR)', value: '500K', color: 'text-xfuse-primary' },
                { label: 'الهدف (Leads)', value: '1200', color: 'text-xfuse-secondary' },
                { label: 'المتوقع ROI', value: '350%', color: 'text-xfuse-accent' },
                { label: 'المدة (يوم)', value: '90', color: 'text-white' },
            ].map((stat, i) => (
                <div key={i} className="text-center p-6 bg-xfuse-dark dark:bg-xfuse-surface rounded-xl shadow-lg border border-gray-800">
                    <h3 className={`text-3xl md:text-4xl font-black font-english mb-2 ${stat.color}`}>
                        {stat.value}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                </div>
            ))}
        </div>

        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold dark:text-white">تحليل SWOT</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <SWOTItem 
            title="نقاط القوة (Strengths)" 
            items={["فريق خبير ومتخصص", "تقنيات تحليل بيانات متقدمة", "سمعة قوية في السوق المحلي"]}
            color="border-green-500"
            delay={0}
          />
           <SWOTItem 
            title="نقاط الضعف (Weaknesses)" 
            items={["ميزانية تسويق محدودة حالياً", "الاعتماد على منصات طرف ثالث"]}
            color="border-red-500"
            delay={0.2}
          />
           <SWOTItem 
            title="الفرص (Opportunities)" 
            items={["نمو قطاع التجارة الإلكترونية", "غياب المنافسين في المناطق الجنوبية"]}
            color="border-blue-500"
            delay={0.4}
          />
           <SWOTItem 
            title="التهديدات (Threats)" 
            items={["تغير سياسات الخصوصية العالمية", "دخول منافسين دوليين للسوق"]}
            color="border-yellow-500"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Strategy;