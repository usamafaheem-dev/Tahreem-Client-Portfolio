"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaTools, FaBug, FaServer } from 'react-icons/fa';

const skills = [
    {
        category: "Manual Testing",
        icon: <FaBug />,
        desc: "Ensure flawless application logic through detailed exploratory and regression testing.",
        items: ["Functional", "UI/UX", "Regression"],
        active: false
    },
    {
        category: "Automation SQA",
        icon: <FaLaptopCode />,
        desc: "Robust Selenium & Cypress suites for continuous testing and rapid deployment.",
        items: ["Selenium", "Cypress", "Playwright"],
        active: true
    },
    {
        category: "API Testing",
        icon: <FaServer />,
        desc: "Expert validation of backend services using Postman and Rest Assured protocols.",
        items: ["Postman", "REST", "SOAP"],
        active: false
    },
    {
        category: "Quality Control",
        icon: <FaTools />,
        desc: "Meticulous quality control processes ensuring 100% project satisfaction.",
        items: ["Jira", "Jenkins", "Git"],
        active: false
    }
];

const SkillsQA = () => {
    return (
        <section id="skills" className="py-24 md:py-32 bg-[var(--background)] overflow-hidden relative">
            {/* Ambient Lighting */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto relative z-10 px-6 sm:px-12 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-violet-600/10 border border-violet-600/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                            <span className="text-violet-600 font-black uppercase tracking-[0.2em] text-[10px]">Technical Stack</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-slate-900 dark:text-white leading-tight">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Expert</span> Area
                        </h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm text-sm md:text-base">
                        Specializing in modern SQA methodologies to ensure high-performance and bug-free digital ecosystems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Card Background with Glassmorphism */}
                            <div className={`h-full p-8 rounded-[32px] border transition-all duration-500 relative overflow-hidden flex flex-col ${skill.active
                                ? "bg-slate-900 border-slate-800 dark:bg-white/10 dark:border-white/10 shadow-2xl"
                                : "bg-white/50 dark:bg-white/5 border-slate-100 dark:border-white/10 hover:border-violet-600/30 shadow-xl shadow-slate-200/50 dark:shadow-none"
                                }`}>
                                {/* Hover Glow Effect */}
                                <div className="absolute -inset-24 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${skill.active
                                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/40"
                                    : "bg-violet-50 dark:bg-violet-900/30 text-violet-600"
                                    }`}>
                                    {skill.icon}
                                </div>

                                <div className="space-y-4 mb-8 flex-grow">
                                    <h3 className={`text-xl font-black font-outfit tracking-tight ${skill.active ? "text-white" : "text-slate-900 dark:text-white"
                                        }`}>
                                        {skill.category}
                                    </h3>

                                    <p className={`text-xs md:text-sm leading-relaxed font-medium ${skill.active ? "text-slate-400" : "text-slate-500 dark:text-slate-400"
                                        }`}>
                                        {skill.desc}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-white/5">
                                    {skill.items.map((item, i) => (
                                        <span key={i} className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-colors ${skill.active
                                            ? "bg-slate-800 dark:bg-white/5 text-slate-300 group-hover:text-violet-400"
                                            : "bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 group-hover:text-violet-600"
                                            }`}>
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom Accent Line */}
                                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-500 ${skill.active ? "w-full" : "w-0 group-hover:w-full"
                                    }`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsQA;
