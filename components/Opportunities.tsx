import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Globe, Smartphone, Users } from 'lucide-react';

const opportunities = [
  {
    icon: <Rocket size={32} />,
    title: 'توسع في الأسواق الناشئة',
    desc: 'فرصة ذهبية للدخول في أسواق شمال أفريقيا مع حلول منخفضة التكلفة.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'التحول للموبايل أولاً',
    desc: '78% من الجمهور يستخدمون الهواتف، مما يستدعي تجربة مستخدم مخصصة.'
  },
  {
    icon: <Globe size={32} />,
    title: 'الشراكات الرقمية',
    desc: 'بناء تحالفات مع منصات التجارة الإلكترونية لزيادة نقاط الوصول.'
  },
  {
    icon: <Users size={32} />,
    title: 'المجتمعات المتخصصة',
    desc: 'خلق مجتمعات (Micro-Communities) لتعزيز الولاء للعلامة التجارية.'
  }
];

const Opportunities: React.FC = () => {
  return (
    <section className="py-20 bg-xfuse-primary relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">الفرص المتاحة</h2>
          <p className="text-white/80 max-w-2xl mx-auto">مجالات النمو التي يجب التركيز عليها في الربع القادم</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors group cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-white text-xfuse-primary flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {opp.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{opp.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {opp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;