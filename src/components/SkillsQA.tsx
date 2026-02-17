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
        items: ["Selenium", "Cypress", "Appium"],
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
        <section id="skills" className="py-32 bg-[var(--background)] overflow-hidden relative">
            {/* Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 relative"
                >
                    <div className="absolute -top-20 right-0 hidden lg:block w-40 h-40 opacity-20">
                        <img src="https://illustrations.popsy.co/purple/data-analysis.svg" alt="Analysis" className="w-full h-full object-contain animate-float" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-outfit font-black text-slate-900 dark:text-white mb-6">
                        My <span className="text-violet-600">Expert</span> Areas
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                        Focusing on cutting-edge SQA methodologies to deliver high-quality digital products through meticulous testing and automation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group p-10 rounded-[40px] border transition-all duration-500 ${skill.active
                                ? "bg-violet-600 border-violet-500 shadow-2xl shadow-violet-500/30 text-white"
                                : "bg-white dark:bg-white/5 border-slate-100 dark:border-white/5 hover:border-violet-500/50 hover:shadow-xl dark:hover:bg-white/10"
                                }`}
                        >
                            <div className={`w-16 h-16 rounded-3xl flex items-center justify-center text-3xl mb-10 transition-transform duration-500 group-hover:scale-110 ${skill.active ? "bg-white text-violet-600" : "bg-violet-100 dark:bg-violet-900/40 text-violet-600"
                                }`}>
                                {skill.icon}
                            </div>

                            <h3 className={`text-2xl font-black font-outfit mb-4 ${skill.active ? "text-white" : "text-slate-900 dark:text-white"}`}>
                                {skill.category}
                            </h3>

                            <p className={`text-sm leading-relaxed mb-8 ${skill.active ? "text-white/80" : "text-slate-500 dark:text-slate-400 text-balance"}`}>
                                {skill.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span key={i} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${skill.active ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                                        }`}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsQA;
