"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { usePortfolio } from '@/context/PortfolioContext';

const Experience = () => {
    const { data } = usePortfolio();
    const experiences = data?.experience || [
        {
            id: 1,
            role: "Manual SQA",
            company: "vertexAi",
            date: "May 2025 - Present",
            description: "Specializing in manual software quality assurance, ensuring product excellence through meticulous test execution, bug reporting, and regression testing.",
            type: "work"
        },
        {
            id: 2,
            role: "QA Intern",
            company: "vertexAi",
            date: "Feb 2025 - Apr 2025",
            description: "Gained hands-on experience in software testing life cycle (STLC), assisting in test case development, and performing initial rounds of testing.",
            type: "work"
        },
        {
            id: 3,
            role: "BS Software Engineering",
            company: "GC University Faisalabad",
            date: "2021 - 2025",
            description: "Focused on software development principles, quality assurance methodologies, and software human lifecycle management.",
            type: "education"
        }
    ];

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

                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;
                        const isEducation = exp.type === 'education';
                        const Icon = isEducation ? FaGraduationCap : FaBriefcase;

                        // Dynamic styling based on index/type to maintain variety
                        const colorClass = isEducation ? 'fuchsia' : (index % 2 === 0 ? 'violet' : 'slate');
                        // Mapping tailwind classes dynamically - simplified to avoid complex string interpolation issues with purge
                        // Using style objects or specific conditionals is safer, but here we'll use conditional vars

                        let markerColor = 'bg-violet-600';
                        let badgeBg = 'bg-violet-50 dark:bg-violet-900/40';
                        let badgeText = 'text-violet-600';
                        let iconColor = 'text-violet-600';
                        if (exp.type === 'education') {
                            markerColor = 'bg-fuchsia-600';
                            badgeBg = 'bg-fuchsia-50 dark:bg-fuchsia-900/40';
                            badgeText = 'text-fuchsia-600';
                            iconColor = 'text-fuchsia-600';
                        } else if (index % 2 !== 0) {
                            markerColor = 'bg-slate-300 dark:bg-white/20';
                            badgeBg = 'bg-slate-100 dark:bg-white/5';
                            badgeText = 'text-slate-400';
                            iconColor = 'text-slate-400';
                        }

                        return (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-10 md:pl-0"
                            >
                                <div className={`md:w-1/2 ${isLeft ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16 md:text-right'} relative`}>
                                    {/* Marker */}
                                    <div className={`absolute left-[-15px] ${isLeft ? 'md:left-[-11px]' : 'md:right-[-11px] md:left-auto'} top-10 w-6 h-6 rounded-full ${markerColor} border-[6px] border-white dark:border-[#020110] shadow-2xl z-10`}></div>

                                    <div className="bg-white dark:bg-white/5 p-8 md:p-12 rounded-[50px] border border-slate-100 dark:border-white/5 hover:border-violet-500/50 transition-all group shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
                                        <div className="flex flex-col md:flex-row gap-8 items-start">
                                            <div className="flex-1">
                                                <span className={`inline-block mb-6 text-[10px] font-black ${badgeText} ${badgeBg} px-5 py-2 rounded-full uppercase tracking-widest`}>{exp.date}</span>
                                                <h3 className={`text-3xl font-black font-outfit text-slate-900 dark:text-white flex items-center gap-4 mb-4 ${!isLeft ? 'md:flex-row-reverse md:justify-start' : ''}`}>
                                                    <Icon className={`${iconColor} flex-shrink-0 text-2xl`} /> {exp.role}
                                                </h3>
                                                <p className="text-slate-400 font-bold mb-6 uppercase tracking-widest text-[10px]">{exp.company}</p>
                                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
