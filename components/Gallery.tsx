import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  { id: 1, title: 'تحليل قطاع التجزئة', category: 'Research', img: 'https://picsum.photos/600/400?random=10' },
  { id: 2, title: 'نمو تطبيق FinTech', category: 'Strategy', img: 'https://picsum.photos/600/400?random=11' },
  { id: 3, title: 'دراسة سلوك المستهلك', category: 'Data Viz', img: 'https://picsum.photos/600/400?random=12' },
  { id: 4, title: 'إعادة الهوية البصرية', category: 'Branding', img: 'https://picsum.photos/600/400?random=13' },
  { id: 5, title: 'تحسين معدل التحويل', category: 'CRO', img: 'https://picsum.photos/600/400?random=14' },
  { id: 6, title: 'استراتيجية وسائل التواصل', category: 'Social', img: 'https://picsum.photos/600/400?random=15' },
];

const Gallery: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-xfuse-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">أعمالنا السابقة</h2>
          <p className="text-gray-500 dark:text-gray-400">نماذج من مشاريع ناجحة قمنا بتنفيذها</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img src={project.img} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-xfuse-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xfuse-secondary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-white flex items-center justify-between">
                  {project.title}
                  <ExternalLink size={18} />
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;