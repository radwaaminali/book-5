import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Globe, Smartphone, Users, X, ArrowRight } from 'lucide-react';

const opportunities = [
  {
    id: 1,
    icon: <Rocket size={32} />,
    title: 'توسع في الأسواق الناشئة',
    desc: 'فرصة ذهبية للدخول في أسواق شمال أفريقيا مع حلول منخفضة التكلفة.',
    details: 'تشير البيانات إلى نمو بنسبة 45% في الطلب على الخدمات الرقمية في دول شمال أفريقيا، مع نقص حاد في المزودين المحليين ذوي الجودة العالية. يمكننا استغلال البنية التحتية الحالية لتقديم خدماتنا بتكلفة تنافسية.'
  },
  {
    id: 2,
    icon: <Smartphone size={32} />,
    title: 'التحول للموبايل أولاً',
    desc: '78% من الجمهور يستخدمون الهواتف، مما يستدعي تجربة مستخدم مخصصة.',
    details: 'أظهرت تحليلات المستخدمين أن معدل الارتداد (Bounce Rate) أعلى بنسبة 30% على النسخة الحالية للموبايل. إعادة تصميم التجربة لتكون "Mobile-First" سترفع معدلات التحويل (Conversion Rate) بشكل ملحوظ.'
  },
  {
    id: 3,
    icon: <Globe size={32} />,
    title: 'الشراكات الرقمية',
    desc: 'بناء تحالفات مع منصات التجارة الإلكترونية لزيادة نقاط الوصول.',
    details: 'الاندماج مع منصات مثل Salla و Zid سيتيح لنا الوصول المباشر إلى قاعدة بيانات تضم أكثر من 50,000 تاجر يبحثون عن حلولنا.'
  },
  {
    id: 4,
    icon: <Users size={32} />,
    title: 'المجتمعات المتخصصة',
    desc: 'خلق مجتمعات (Micro-Communities) لتعزيز الولاء للعلامة التجارية.',
    details: 'المستخدمون يثقون في توصيات أقرانهم أكثر من الإعلانات. بناء مجتمع رقمي (Community) سيقلل تكلفة الاستحواذ على العملاء (CAC) بنسبة 20% خلال 6 أشهر.'
  }
];

const Opportunities: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedOpp = opportunities.find(o => o.id === selectedId);

  return (
    <section className="h-full min-h-screen py-20 bg-xfuse-primary relative overflow-hidden flex flex-col justify-center">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">الفرص المتاحة</h2>
          <p className="text-white/80 max-w-2xl mx-auto">اضغط على البطاقات لاستكشاف تفاصيل استراتيجية النمو</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.id}
              layoutId={`card-${opp.id}`}
              onClick={() => setSelectedId(opp.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors group cursor-pointer relative"
            >
              <div className="w-14 h-14 rounded-full bg-white text-xfuse-primary flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {opp.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{opp.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {opp.desc}
              </p>
              <div className="flex items-center text-white/50 text-xs font-bold group-hover:text-white transition-colors">
                 قراءة المزيد <ArrowRight size={12} className="mr-1 rotate-180" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedId && selectedOpp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="bg-white dark:bg-xfuse-surface w-full max-w-lg rounded-3xl p-8 relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 left-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-red-100 hover:text-red-500 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-xfuse-primary/10 flex items-center justify-center text-xfuse-primary">
                    {React.cloneElement(selectedOpp.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <div>
                   <span className="text-xfuse-secondary text-xs font-bold uppercase tracking-wider">Opportunity Analysis</span>
                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedOpp.title}</h3>
                </div>
              </div>
              
              <div className="prose dark:prose-invert">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                   {selectedOpp.details}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                <button 
                  onClick={() => setSelectedId(null)}
                  className="px-6 py-2 bg-xfuse-primary text-white rounded-xl font-bold hover:bg-pink-600 transition-colors"
                >
                  إغلاق
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Opportunities;