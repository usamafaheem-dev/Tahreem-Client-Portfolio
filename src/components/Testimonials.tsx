"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaCheckCircle } from 'react-icons/fa';

const testimonials = [
    {
        name: "Leslie Alexander",
        role: "Project Manager",
        content: "Tehreem is an exceptional SQA engineer. Her attention to detail and ability to identify critical edge cases helped us launch our products with zero major bugs.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        verified: true
    },
    {
        name: "Guy Hawkins",
        role: "CTO at VertexAI",
        content: "Working with Tehreem was a breeze. She not only found bugs but also suggested UX improvements that made our bot much more user-friendly.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        verified: true
    },
    {
        name: "Eleanor Pena",
        role: "Founder of LipLock",
        content: "Professional, thorough, and highly skilled in both manual and automation testing. Highly recommended for any high-growth startup.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
        verified: true
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none hidden dark:block"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none hidden dark:block"
            />

            <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-600/10 border border-violet-600/20 mb-6 font-black uppercase tracking-[0.2em] text-[10px] text-violet-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
                            Client Testimonials
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-slate-900 dark:text-white leading-tight mb-6">
                            What My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500">Clients</span> Say
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium text-sm md:text-base">
                            Trusted by professionals worldwide for delivering exceptional quality and reliability in every project.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="group relative h-full"
                        >
                            <div className="h-full bg-white dark:bg-slate-900/40 backdrop-blur-2xl p-8 md:p-10 rounded-[40px] border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:-translate-y-4 group-hover:border-violet-500/50 group-hover:shadow-[0_40px_80px_-15px_rgba(139,92,246,0.2)] overflow-hidden">

                                {/* Inner Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="flex gap-1.5">
                                            {[...Array(t.rating)].map((_, i) => (
                                                <FaStar key={i} className="text-amber-400 group-hover:scale-110 transition-transform" size={16} />
                                            ))}
                                        </div>
                                        <div className="text-violet-600/20 group-hover:text-violet-600/40 transition-all duration-500 group-hover:rotate-12">
                                            <FaQuoteLeft size={40} />
                                        </div>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-200 font-medium leading-relaxed mb-10 text-[15px] italic">
                                        "{t.content}"
                                    </p>

                                    <div className="flex items-center gap-4 border-t border-slate-100 dark:border-white/10 pt-8">
                                        <div className="relative">
                                            <motion.img
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                                                src={t.image}
                                                alt={t.name}
                                                className="w-14 h-14 rounded-2xl object-cover ring-2 ring-violet-500/20 group-hover:ring-violet-500/40 transition-all shadow-lg"
                                            />
                                            {t.verified && (
                                                <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-800 rounded-full p-0.5 text-violet-600 shadow-sm border border-slate-100 dark:border-white/20">
                                                    <FaCheckCircle size={12} />
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-1">
                                                {t.name}
                                            </h4>
                                            <p className="text-[9px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest">
                                                {t.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-600/20 to-transparent" />
        </section>
    );
};

export default Testimonials;

