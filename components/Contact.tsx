import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-xfuse-dark to-slate-900 text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">جاهز لنقل علامتك التجارية للمستوى التالي؟</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              دعنا نناقش كيف يمكن لبيانات XFUSE أن تصنع الفرق في استراتيجيتك القادمة.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
               <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-green-500/20">
                <MessageCircle size={20} />
                تواصل عبر واتساب
              </button>
              <button className="px-8 py-4 bg-xfuse-primary hover:bg-pink-600 text-white font-bold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-xfuse-primary/30">
                <Mail size={20} />
                ابدأ مشروعك الآن
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-8 mt-8 text-sm text-gray-400">
                <div className="flex flex-col items-center gap-2">
                    <Phone className="text-xfuse-secondary" size={24} />
                    <span>+966 50 000 0000</span>
                </div>
                 <div className="flex flex-col items-center gap-2">
                    <Mail className="text-xfuse-secondary" size={24} />
                    <span>hello@xfuse.agency</span>
                </div>
                 <div className="flex flex-col items-center gap-2">
                    <MapPin className="text-xfuse-secondary" size={24} />
                    <span>الرياض، المملكة العربية السعودية</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;