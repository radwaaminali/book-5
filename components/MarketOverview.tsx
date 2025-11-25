import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'يناير', growth: 2400, active: 1400 },
  { name: 'فبراير', growth: 1398, active: 2210 },
  { name: 'مارس', growth: 9800, active: 2290 },
  { name: 'أبريل', growth: 3908, active: 2000 },
  { name: 'مايو', growth: 4800, active: 2181 },
  { name: 'يونيو', growth: 3800, active: 2500 },
  { name: 'يوليو', growth: 4300, active: 2100 },
];

const MarketOverview: React.FC = () => {
  return (
    <section id="market" className="py-20 bg-xfuse-light dark:bg-xfuse-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">نظرة عامة على السوق</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            تظهر المؤشرات نمواً ملحوظاً في الربع الثاني، مدفوعاً بزيادة الطلب على الحلول الرقمية المتكاملة.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chart Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 h-[400px] bg-white dark:bg-xfuse-surface p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF0066" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FF0066" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00CFFF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00CFFF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="growth" stroke="#FF0066" fillOpacity={1} fill="url(#colorGrowth)" name="النمو الكلي" />
                <Area type="monotone" dataKey="active" stroke="#00CFFF" fillOpacity={1} fill="url(#colorActive)" name="النشاط الحالي" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Key Stats Side Panel */}
          <div className="flex flex-col justify-center gap-6">
            {[
              { label: 'حصة السوق', value: '35%', color: 'text-xfuse-primary' },
              { label: 'معدل النمو السنوي', value: '+12.4%', color: 'text-xfuse-secondary' },
              { label: 'حجم الجمهور المستهدف', value: '2.1M', color: 'text-xfuse-accent' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white dark:bg-xfuse-surface p-6 rounded-xl border-r-4 border-r-current shadow-md"
                style={{ color: idx === 0 ? '#FF0066' : idx === 1 ? '#00CFFF' : '#FBBF24' }}
              >
                <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{stat.label}</h4>
                <p className={`text-4xl font-bold font-english ${stat.color}`}>{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;