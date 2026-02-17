"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: "Leslie Alexander",
        role: "Project Manager",
        content: "Tehreem is an exceptional SQA engineer. Her attention to detail and ability to identify critical edge cases helped us launch our products with zero major bugs.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=1"
    },
    {
        name: "Guy Hawkins",
        role: "CTO at VertexAI",
        content: "Working with Tehreem was a breeze. She not only found bugs but also suggested UX improvements that made our bot much more user-friendly.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=2"
    },
    {
        name: "Eleanor Pena",
        role: "Founder of LipLock",
        content: "Professional, thorough, and highly skilled in both manual and automation testing. Highly recommended for any high-growth startup.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=3"
    }
];

const Testimonials = () => {
    return (
        <section className="py-32 bg-[var(--background)] relative overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-outfit font-black text-slate-900 dark:text-white mb-6">
                        What My <span className="text-violet-600">Clients</span> Say
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                        Trusted by professionals worldwide for delivering exceptional quality and reliability in every project.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[40px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none relative group"
                        >
                            <div className="absolute top-10 right-10 text-violet-600/10 group-hover:text-violet-600/20 transition-colors">
                                <FaQuoteLeft size={60} />
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-amber-400" size={14} />
                                ))}
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8 italic relative z-10">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <motion.img
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                                    src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-violet-100 dark:border-white/10"
                                />
                                <div>
                                    <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-wider text-xs">{t.name}</h4>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
