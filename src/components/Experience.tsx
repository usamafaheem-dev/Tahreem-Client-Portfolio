"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-[var(--background)] overflow-hidden relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 blur-[120px] rounded-full hidden dark:block" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-600/5 blur-[120px] rounded-full hidden dark:block" />

            <div className="container mx-auto px-6 sm:px-12 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <p className="text-violet-600 font-black uppercase tracking-widest text-[10px] mb-6">The Journey</p>
                    <h2 className="text-4xl md:text-6xl font-black font-outfit text-slate-900 dark:text-white leading-[1.1] mb-4">
                        Experience & <span className="text-violet-600">Education</span>
                    </h2>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-16 relative">
                    {/* Central Line */}
                    <div className="absolute top-0 bottom-0 left-[-2px] md:left-1/2 w-px bg-slate-200 dark:bg-white/10 md:transform md:-translate-x-1/2 z-0"></div>

                    {/* Current Experience Item */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative pl-10 md:pl-0"
                    >
                        <div className="md:w-1/2 md:ml-auto md:pl-16 relative">
                            {/* Marker */}
                            <div className="absolute left-[-15px] md:left-[-11px] top-10 w-6 h-6 rounded-full bg-violet-600 border-[6px] border-white dark:border-[#020110] shadow-2xl z-10"></div>

                            <div className="bg-white dark:bg-white/5 p-12 rounded-[50px] border border-slate-100 dark:border-white/5 hover:border-violet-500/50 transition-all group shadow-2xl shadow-slate-200/50 dark:shadow-none">
                                <span className="inline-block mb-6 text-[10px] font-black text-violet-600 bg-violet-50 dark:bg-violet-900/40 px-5 py-2 rounded-full uppercase tracking-widest">May 2025 - Present</span>
                                <h3 className="text-3xl font-black font-outfit text-slate-900 dark:text-white flex items-center gap-4 mb-4">
                                    <FaBriefcase className="text-violet-600 flex-shrink-0 text-2xl" /> Manual SQA
                                </h3>
                                <p className="text-slate-400 font-bold mb-6 uppercase tracking-widest text-[10px]">vertexAi</p>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                    Specializing in manual software quality assurance, ensuring product excellence through meticulous test execution, bug reporting, and regression testing.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Internship Item */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative pl-10 md:pl-0"
                    >
                        <div className="md:w-1/2 md:mr-auto md:pr-16 md:text-right relative">
                            <div className="absolute left-[-15px] md:right-[-11px] md:left-auto top-10 w-6 h-6 rounded-full bg-slate-300 dark:bg-white/20 border-[6px] border-white dark:border-[#020110] shadow-2xl z-10"></div>

                            <div className="bg-white dark:bg-white/5 p-12 rounded-[50px] border border-slate-100 dark:border-white/5 hover:border-violet-500/50 transition-all group shadow-2xl shadow-slate-200/50 dark:shadow-none">
                                <span className="inline-block mb-6 text-[10px] font-black text-slate-400 bg-slate-100 dark:bg-white/5 px-5 py-2 rounded-full uppercase tracking-widest">Feb 2025 - Apr 2025</span>
                                <h3 className="text-3xl font-black font-outfit text-slate-900 dark:text-white flex items-center md:flex-row-reverse gap-4 md:justify-start mb-4">
                                    <FaBriefcase className="text-slate-400 flex-shrink-0 text-2xl" /> QA Intern
                                </h3>
                                <p className="text-slate-400 font-bold mb-6 uppercase tracking-widest text-[10px]">vertexAi</p>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                    Gained hands-on experience in software testing life cycle (STLC), assisting in test case development, and performing initial rounds of testing.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Item */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative pl-10 md:pl-0"
                    >
                        <div className="md:w-1/2 md:ml-auto md:pl-16 relative">
                            <div className="absolute left-[-15px] md:left-[-11px] top-10 w-6 h-6 rounded-full bg-fuchsia-600 border-[6px] border-white dark:border-[#020110] shadow-2xl z-10"></div>

                            <div className="bg-white dark:bg-white/5 p-12 rounded-[50px] border border-slate-100 dark:border-white/5 hover:border-violet-500/50 transition-all group shadow-2xl shadow-slate-200/50 dark:shadow-none">
                                <span className="inline-block mb-6 text-[10px] font-black text-fuchsia-600 bg-fuchsia-50 dark:bg-fuchsia-900/40 px-5 py-2 rounded-full uppercase tracking-widest">2021 - 2025</span>
                                <h3 className="text-3xl font-black font-outfit text-slate-900 dark:text-white flex items-center gap-4 mb-4">
                                    <FaGraduationCap className="text-fuchsia-600 flex-shrink-0 text-2xl" /> BS Software Engineering
                                </h3>
                                <p className="text-slate-400 font-bold mb-6 uppercase tracking-widest text-[10px]">GC University Faisalabad</p>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                    Focused on software development principles, quality assurance methodologies, and software human lifecycle management.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
