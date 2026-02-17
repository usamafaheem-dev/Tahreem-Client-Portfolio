"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    SiSelenium, SiCypress, SiAppium, SiPostman, SiJira, SiTrello, SiGithub,
    SiGit, SiVisualstudiocode, SiAndroidstudio, SiXcode, SiMicrosoftsqlserver, SiClickup
} from 'react-icons/si';

const skills = [
    { name: "Manual Testing", level: 95 },
    { name: "Automation (Cypress/Selenium)", level: 85 },
    { name: "API Testing (Postman)", level: 90 },
    { name: "Mobile Testing (Appium)", level: 80 },
];

const featureSkills = [
    { name: "UI/UX Quality", icon: <SiSelenium />, desc: "Ensuring visual perfection." },
    { name: "API Integrity", icon: <SiPostman />, desc: "Robust backend validation." },
    { name: "Performance", icon: <SiAppium />, desc: "Load & Stress testing." },
    { name: "Security", icon: <SiJira />, desc: "Vulnerability assessment." }
];

const Tools = () => {
    return (
        <section id="skills" className="py-32 bg-[var(--background)] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Left: Progress Bars */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-violet-600 font-black uppercase tracking-widest text-[10px] mb-6">Expertise Level</p>
                        <h2 className="text-4xl md:text-6xl font-black font-outfit text-slate-900 dark:text-white leading-[1.1] mb-12">
                            What My Quality <br />
                            <span className="text-violet-600">Skills Include</span>
                        </h2>

                        <div className="space-y-10">
                            {skills.map((skill, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <span className="font-black text-slate-700 dark:text-white uppercase text-[10px] tracking-[0.2em]">{skill.name}</span>
                                        <span className="font-black text-violet-600 text-xs">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Grid of Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {featureSkills.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-white/5 p-10 rounded-[40px] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5 flex flex-col items-center text-center group hover:border-violet-600/50 transition-all cursor-default"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center text-4xl text-violet-600 mb-8 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500">
                                    {feature.icon}
                                </div>
                                <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-4">{feature.name}</h4>
                                <p className="text-[11px] text-slate-400 font-medium leading-relaxed uppercase tracking-widest">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
