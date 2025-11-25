import React from 'react';
import { motion, animate, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = '', prefix = '' }: { value: number, suffix?: string, prefix?: string }) => {
    const nodeRef = React.useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true });
    
    React.useEffect(() => {
        if (!isInView) return;
        
        const node = nodeRef.current;
        const controls = animate(0, value, {
            duration: 2.5,
            ease: "easeOut",
            onUpdate: (v) => {
                if (node) {
                    node.textContent = `${prefix}${Math.floor(v).toLocaleString()}${suffix}`;
                }
            }
        });
        
        return () => controls.stop();
    }, [value, isInView, suffix, prefix]);

    return <span ref={nodeRef} className="tabular-nums">0</span>;
};

const KPIs: React.FC = () => {
    const stats = [
        { label: 'الميزانية (SAR)', value: 500000, prefix: '', suffix: '', color: 'text-xfuse-primary' },
        { label: 'الهدف (Leads)', value: 1200, prefix: '', suffix: '', color: 'text-xfuse-secondary' },
        { label: 'المتوقع ROI', value: 350, prefix: '', suffix: '%', color: 'text-xfuse-accent' },
        { label: 'المدة (يوم)', value: 90, prefix: '', suffix: '', color: 'text-white' },
    ];

    return (
        <section className="h-full min-h-screen flex items-center justify-center bg-xfuse-dark relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-xfuse-surface via-xfuse-dark to-black opacity-80" />
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-center mb-20"
                >
                    <span className="text-xfuse-secondary font-bold tracking-widest text-sm uppercase">Strategy & Performance</span>
                    <h2 className="text-5xl md:text-7xl font-black text-white mt-4">KPIs 2025</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, type: "spring", bounce: 0.5 }}
                            className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 hover:border-xfuse-primary/50 transition-all duration-300 group"
                        >
                            <h3 className={`text-4xl md:text-5xl font-black font-english mb-4 ${stat.color} drop-shadow-lg`}>
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                            </h3>
                            <p className="text-gray-400 text-lg font-medium group-hover:text-white transition-colors">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
                
                {/* Bottom decoration */}
                <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: "100%" }} 
                    transition={{ delay: 1, duration: 1.5 }}
                    className="h-1 bg-gradient-to-r from-transparent via-xfuse-primary to-transparent mt-20 opacity-50 max-w-2xl mx-auto"
                />
            </div>
        </section>
    );
};

export default KPIs;