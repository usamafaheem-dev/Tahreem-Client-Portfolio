"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaUserCheck, FaLightbulb, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const AboutQA = () => {
    return (
        <section id="about" className="py-32 bg-[var(--background)] overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column: Image with Experience Badge */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/5] rounded-[60px] overflow-hidden border border-slate-100 dark:border-white/5 shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop"
                                alt="About Tahreem"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Large Experience Badge */}
                            <div className="absolute top-10 right-10 p-10 rounded-[40px] bg-violet-600 text-white shadow-2xl z-20 animate-float">
                                <p className="text-6xl font-black font-outfit mb-2">01+</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/80 leading-none">Years Of<br />Experience</p>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-fuchsia-600/20 rounded-full blur-3xl"></div>
                        </motion.div>
                    </div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div>
                            <p className="text-violet-600 font-black uppercase tracking-widest text-[10px] mb-6">About Me</p>
                            <h2 className="text-4xl md:text-6xl font-black font-outfit text-slate-900 dark:text-white leading-[1] mb-8">
                                "Crafting Enjoyable <br />
                                <span className="text-violet-600">Digital Solutions</span> <br />
                                From Business Ideas."
                            </h2>
                            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                I specialize in Manual & Automation Quality Assurance, ensuring that your digital products are not only bug-free but also provide a seamless and enjoyable user experience.
                            </p>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                "Smart Flow Protocols",
                                "Trust Your Website",
                                "Bug-Free Releases",
                                "Beyond Testing",
                                "Rapid Execution",
                                "Data Driven Insight"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 group">
                                    <div className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-violet-600 transition-colors uppercase tracking-widest text-[10px]">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6">
                            <a href="#projects" className="px-10 py-5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-violet-500/10 active:scale-95">
                                My Expertise
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutQA;
