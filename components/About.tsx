import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const cards = [
    {
      icon: <Target className="w-8 h-8 text-xfuse-primary" />,
      title: 'دقة البيانات',
      desc: 'نعتمد على مصادر موثوقة وتحليلات دقيقة لضمان جودة القرارات.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-xfuse-accent" />,
      title: 'رؤية إبداعية',
      desc: 'تحويل الأرقام الجامدة إلى قصص ملهمة واستراتيجيات قابلة للتنفيذ.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-xfuse-secondary" />,
      title: 'نمو مستدام',
      desc: 'خططنا مصممة لتحقيق نتائج طويلة المدى وليس مجرد مكاسب لحظية.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-xfuse-surface relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-sm font-bold text-xfuse-secondary tracking-wider mb-2 font-english uppercase">About XFUSE</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              نحن نمزج بين <span className="text-xfuse-primary">الذكاء</span> و <span className="text-xfuse-secondary">الإبداع</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              في XFUSE، لا نقدم مجرد تقارير، بل نصنع تجارب بيانات تفاعلية. مهمتنا هي تمكين العلامات التجارية من فهم جمهورها بعمق واكتشاف فرص السوق الخفية من خلال عدسة تحليلية متطورة.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-xfuse-primary to-xfuse-secondary rounded-full"></div>
          </motion.div>

          {/* Feature Cards */}
          <div className="md:w-1/2 grid gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 dark:bg-xfuse-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-start gap-4"
              >
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 dark:text-white">{card.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;