"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    SiSelenium, SiCypress, SiAppium, SiPostman, SiJira, SiTrello, SiGithub,
    SiGit, SiVisualstudiocode, SiAndroidstudio, SiXcode, SiMicrosoftsqlserver, SiClickup
} from 'react-icons/si';

const skills = [
    { name: "Manual Testing", level: 95, icon: "📋" },
    { name: "Automation (Cypress/Selenium)", level: 50, icon: "🤖" },
    { name: "API Testing (Postman)", level: 90, icon: "🚀" },
    { name: "Cloud & DevSecOps", level: 75, icon: "☁️" },
];

const featureSkills = [
    { name: "UI/UX Quality", icon: <SiSelenium />, desc: "Ensuring visual perfection across all modern browsers." },
    { name: "API Integrity", icon: <SiPostman />, desc: "Robust backend validation for seamless integration." },
    { name: "CI/CD Pipeline", icon: <SiGithub />, desc: "Automated workflows for rapid and reliable releases." },
    { name: "Project Management", icon: <SiJira />, desc: "Meticulous tracking and resolution of quality bugs." }
];

const Tools = () => {
    return (
        <section id="tools" className="py-24 md:py-20 bg-[var(--background)] overflow-hidden relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Progress Bars - Redesigned for Premium Look */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-fuchsia-600/10 border border-fuchsia-600/20 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-600 animate-pulse" />
                            <span className="text-fuchsia-600 font-black uppercase tracking-[0.2em] text-[9px]">Expertise Level</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-slate-900 dark:text-white leading-[1.1] mb-8">
                            My Quality <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500">
                                Engineering DNA
                            </span>
                        </h2>

                        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-lg leading-relaxed">
                            I specialize in creating robust testing frameworks that adapt to modern agile environments, ensuring your product is delivered with 100% confidence.
                        </p>

                        <div className="space-y-8">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="space-y-3 group"
                                >
                                    <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform duration-300">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">{skill.icon}</span>
                                            <span className="font-black text-slate-700 dark:text-white uppercase text-[10px] tracking-[0.1em]">{skill.name}</span>
                                        </div>
                                        <span className="font-black text-fuchsia-600 dark:text-fuchsia-400 text-xs tabular-nums">{skill.level}%</span>
                                    </div>
                                    <div className="h-2.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden p-[2px] border border-slate-200/50 dark:border-white/10">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.5, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                                            className="h-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.3)]"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Grid of Cards - Redesigned for Visual Impact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
                        {featureSkills.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-[40px] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
                                <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-8 lg:p-10 rounded-[40px] flex flex-col items-center text-center h-full transition-all duration-300 group-hover:border-transparent shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-violet-500/20">
                                    <div className="w-16 h-16 rounded-2xl bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center text-3xl text-violet-600 mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-fuchsia-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-fuchsia-600/30">
                                        {feature.icon}
                                    </div>
                                    <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">{feature.name}</h4>
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold leading-relaxed uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                                        {feature.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
