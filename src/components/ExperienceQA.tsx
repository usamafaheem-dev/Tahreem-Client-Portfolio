"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendar, FaCircle } from 'react-icons/fa6';

const ExperienceQA = () => {
    const experiences = [
        {
            title: "Manual SQA Engineer",
            company: "VertexAi",
            period: "May 2025 - Present",
            description: "Specializing in manual software quality assurance, ensuring product excellence through meticulous test execution, bug reporting, and regression testing.",
            type: "work",
            gradient: "from-violet-600 to-indigo-600"
        },
        {
            title: "QA Intern",
            company: "VertexAi",
            period: "Feb 2025 - Apr 2025",
            description: "Gained hands-on experience in software testing life cycle (STLC), assisting in test case development, and performing initial rounds of testing.",
            type: "work",
            gradient: "from-fuchsia-600 to-pink-600"
        },
        {
            title: "BS Software Engineering",
            company: "GC University Faisalabad",
            period: "2021 - 2025",
            description: "Focused on software development principles, quality assurance methodologies, and software human lifecycle management.",
            type: "education",
            gradient: "from-blue-600 to-cyan-600"
        }
    ];

    return (
        <section id="experience" className="py-24 md:py-32 bg-[var(--background)] overflow-hidden relative">
            {/* Ultra-Premium Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-violet-600/10 blur-[130px] rounded-full animate-blob hidden dark:block" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-fuchsia-600/10 blur-[130px] rounded-full animate-blob animation-delay-2000 hidden dark:block" />
            </div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 md:mb-32 max-w-3xl mx-auto"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 border border-violet-200 dark:border-violet-500/20">
                        The Professional Path
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tight">
                        Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Education</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Experience Section */}
                    <div className="relative">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-violet-600 shadow-xl shadow-violet-500/5 group">
                                <FaBriefcase className="text-2xl group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black font-outfit text-slate-900 dark:text-white uppercase tracking-tight">Experience</h3>
                        </div>

                        <div className="space-y-12 relative border-l-2 border-slate-200/50 dark:border-white/10 pl-8 ml-7">
                            {experiences.filter(exp => exp.type === 'work').map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    {/* Timeline Marker */}
                                    <div className="absolute -left-[43px] top-6 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-violet-600 z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
                                    <div className="absolute -left-[38px] top-11 w-[1px] h-full bg-gradient-to-b from-violet-600/50 to-transparent" />

                                    <div className="group relative bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-8 rounded-[35px] md:rounded-[45px] border border-slate-200 dark:border-white/10 hover:border-violet-500/40 transition-all duration-500 shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:shadow-violet-500/10">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300 text-[10px] font-black uppercase tracking-widest border border-violet-100 dark:border-violet-500/20">
                                                <FaCalendar size={10} />
                                                {exp.period}
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{exp.company}</span>
                                        </div>

                                        <h4 className="text-2xl font-black font-outfit text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-violet-600 transition-colors">
                                            {exp.title}
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                                            {exp.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="relative">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-fuchsia-600 shadow-xl shadow-fuchsia-500/5 group">
                                <FaGraduationCap className="text-2xl group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black font-outfit text-slate-900 dark:text-white uppercase tracking-tight">Education</h3>
                        </div>

                        <div className="space-y-12 relative border-l-2 border-slate-200/50 dark:border-white/10 pl-8 ml-7">
                            {experiences.filter(exp => exp.type === 'education').map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    {/* Timeline Marker */}
                                    <div className="absolute -left-[43px] top-6 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-fuchsia-600 z-10 shadow-[0_0_15px_rgba(192,38,211,0.5)]" />
                                    <div className="absolute -left-[38px] top-11 w-[1px] h-full bg-gradient-to-b from-fuchsia-600/50 to-transparent" />

                                    <div className="group relative bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-8 rounded-[35px] md:rounded-[45px] border border-slate-200 dark:border-white/10 hover:border-fuchsia-500/40 transition-all duration-500 shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:shadow-fuchsia-500/10">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/40 text-fuchsia-600 dark:text-fuchsia-300 text-[10px] font-black uppercase tracking-widest border border-fuchsia-100 dark:border-fuchsia-500/20">
                                                <FaCalendar size={10} />
                                                {exp.period}
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{exp.company}</span>
                                        </div>

                                        <h4 className="text-2xl font-black font-outfit text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-fuchsia-600 transition-colors">
                                            {exp.title}
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                                            {exp.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceQA;
