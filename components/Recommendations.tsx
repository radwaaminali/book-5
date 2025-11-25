import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, ShieldCheck, BarChart2 } from 'lucide-react';

const Recommendations: React.FC = () => {
  const recommendations = [
    {
      icon: <Zap size={32} />,
      title: "أتمتة الحملات",
      desc: "استخدام أدوات AI لتقليل الجهد اليدوي بنسبة 40% وزيادة الكفاءة.",
      color: "group-hover:text-yellow-400",
      glow: "hover:shadow-yellow-500/50",
      border: "hover:border-yellow-400"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "الاستثمار في الفيديو",
      desc: "تحويل 60% من ميزانية المحتوى لإنتاج Short-form Videos.",
      color: "group-hover:text-xfuse-primary",
      glow: "hover:shadow-xfuse-primary/50",
      border: "hover:border-xfuse-primary"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "تعزيز الثقة",
      desc: "إطلاق حملة Testimonials لزيادة المصداقية مع العملاء الجدد.",
      color: "group-hover:text-green-400",
      glow: "hover:shadow-green-500/50",
      border: "hover:border-green-400"
    },
    {
      icon: <BarChart2 size={32} />,
      title: "تتبع البيانات اللحظي",
      desc: "بناء Dashboard مركزي لمراقبة KPIs بشكل يومي.",
      color: "group-hover:text-xfuse-secondary",
      glow: "hover:shadow-xfuse-secondary/50",
      border: "hover:border-xfuse-secondary"
    }
  ];

  return (
    <section className="h-full min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden py-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-xfuse-dark to-transparent opacity-90 pointer-events-none" />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xfuse-accent font-bold tracking-widest text-sm uppercase mb-2 block">Insights</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">التوصيات الاستراتيجية</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            بناءً على تحليل البيانات، نوصي بالخطوات التالية لتحقيق أقصى عائد في الربع القادم.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className={`group relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 transition-all duration-300 ${item.border} ${item.glow} hover:shadow-2xl cursor-pointer`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white transition-colors duration-300 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                {item.desc}
              </p>
              
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-1 bg-white/20 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;