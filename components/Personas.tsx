import React from 'react';
import { motion } from 'framer-motion';

const Personas: React.FC = () => {
  const personas = [
    {
      name: "سارة أحمد",
      role: "رائدة أعمال تقنية",
      age: "28",
      img: "https://picsum.photos/400/600?random=1",
      traits: ["طموحة", "تقنية", "سريعة القرار"],
      needs: "تبحث عن حلول توفر الوقت وتزيد الإنتاجية."
    },
    {
      name: "خالد عمر",
      role: "مدير تسويق",
      age: "35",
      img: "https://picsum.photos/400/600?random=2",
      traits: ["تحليلي", "منظم", "يركز على ROI"],
      needs: "يحتاج إلى بيانات دقيقة وتقارير مفصلة."
    },
    {
      name: "ليلى حسن",
      role: "مؤثرة اجتماعية",
      age: "24",
      img: "https://picsum.photos/400/600?random=3",
      traits: ["مبدعة", "اجتماعية", "بصرية"],
      needs: "تهتم بالجماليات وسهولة المشاركة."
    },
    {
      name: "يوسف كمال",
      role: "مستثمر",
      age: "45",
      img: "https://picsum.photos/400/600?random=4",
      traits: ["حذر", "استراتيجي", "بعيد النظر"],
      needs: "يبحث عن الاستدامة والنمو المستقر."
    }
  ];

  return (
    <section id="personas" className="py-24 bg-gray-50 dark:bg-xfuse-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">تحليل الشخصيات</h2>
          <p className="text-gray-500 dark:text-gray-400">فهم عميق لمن نتحدث إليهم وكيف يفكرون</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="group h-[400px] perspective-1000 cursor-pointer">
              <div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-180 shadow-xl rounded-2xl">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden">
                  <img src={persona.img} alt={persona.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white">{persona.name}</h3>
                    <p className="text-xfuse-secondary font-medium">{persona.role}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-white dark:bg-xfuse-surface rounded-2xl p-6 backface-hidden rotate-y-180 border-2 border-xfuse-primary flex flex-col justify-center text-center">
                  <h4 className="text-xl font-bold text-xfuse-primary mb-1">{persona.name}</h4>
                  <span className="text-sm text-gray-500 mb-6">{persona.age} سنة</span>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">السمات</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {persona.traits.map((t, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded text-gray-700 dark:text-gray-200">{t}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">الاحتياجات</p>
                       <p className="text-sm text-gray-600 dark:text-gray-300 italic">"{persona.needs}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;