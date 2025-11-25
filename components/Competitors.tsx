import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Competitors: React.FC = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const competitors = [
    { name: 'XFUSE (لنا)', marketShare: '35%', tech: true, price: '$$', satisfaction: '9.2/10' },
    { name: 'Alpha Corp', marketShare: '28%', tech: true, price: '$$$', satisfaction: '8.5/10' },
    { name: 'Beta Solutions', marketShare: '15%', tech: false, price: '$', satisfaction: '7.0/10' },
    { name: 'Gamma Inc', marketShare: '10%', tech: false, price: '$$', satisfaction: '6.5/10' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-xfuse-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold dark:text-white">المنافسة في السوق</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                <th className="p-4 text-right font-medium">الشركة</th>
                <th className="p-4 text-center font-medium">حصة السوق</th>
                <th className="p-4 text-center font-medium">تقنية متقدمة</th>
                <th className="p-4 text-center font-medium">السعر</th>
                <th className="p-4 text-center font-medium">رضا العملاء</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((comp, index) => (
                <motion.tr
                  key={index}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`transition-colors duration-200 ${
                    index === 0 ? 'bg-xfuse-primary/5 dark:bg-xfuse-primary/10' : ''
                  } ${hoveredRow === index ? 'bg-gray-50 dark:bg-gray-800' : ''}`}
                >
                  <td className="p-4 font-bold dark:text-white flex items-center gap-2">
                    {index === 0 && <span className="w-2 h-2 rounded-full bg-xfuse-primary"></span>}
                    {comp.name}
                  </td>
                  <td className="p-4 text-center dark:text-gray-300 font-english">{comp.marketShare}</td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      {comp.tech ? (
                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                          <Check size={14} />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center">
                          <X size={14} />
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-center dark:text-gray-300 font-english">{comp.price}</td>
                  <td className="p-4 text-center font-bold text-xfuse-secondary font-english">{comp.satisfaction}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Competitors;