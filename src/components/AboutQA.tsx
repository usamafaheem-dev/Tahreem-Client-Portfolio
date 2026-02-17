"use client";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AboutQA = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-24 md:py-20 bg-[var(--background)] overflow-hidden relative"
        >
            {/* Ambient Background Elements */}
            <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Background Decorative Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none overflow-hidden select-none opacity-[0.03] dark:opacity-[0.05]">
                <h2 className="text-[20vw] font-black leading-none uppercase tracking-tighter">
                    Quality
                </h2>
            </div>

            <div className="container mx-auto relative z-10 px-6 sm:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                    {/* Left Column: Image Area */}
                    <div className="relative group">
                        <motion.div
                            style={{ y: y1 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative z-20 flex items-center justify-center p-8 md:p-12"
                        >
                            {/* Animated Glowing Orbit */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[310px] h-[310px] md:w-[410px] md:h-[410px] rounded-full border-2 border-dashed border-violet-600/30 opacity-50"
                            />

                            {/* Main Animated Circular Box */}
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        "0 0 40px rgba(139,92,246,0.2)",
                                        "0 0 80px rgba(139,92,246,0.4)",
                                        "0 0 40px rgba(139,92,246,0.2)"
                                    ]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute w-[290px] h-[290px] md:w-[390px] md:h-[390px] rounded-full bg-white dark:bg-white/5 border border-white/20 backdrop-blur-3xl z-0"
                            />

                            <div className="relative aspect-square w-[240px] md:w-[380px] flex items-center justify-center z-10 p-4">
                                <img
                                    src="/sqa_engineer_option_1_1771337305527-removebg-preview.png"
                                    alt="Tehreem - SQA Engineer"
                                    className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Floating Decorative Elements */}
                            <motion.div
                                style={{ y: y2, rotate: rotate }}
                                className="absolute top-10 -left-6 md:-left-6 w-14 h-14 md:w-24 md:h-24 bg-white dark:bg-slate-900 border-2 border-fuchsia-500/50 rounded-2xl z-30 flex items-center justify-center shadow-[0_10px_25px_rgba(217,70,239,0.2)]"
                            >
                                <div className="text-center px-1">
                                    <span className="block text-base md:text-xl font-black text-fuchsia-600">99%</span>
                                    <span className="text-[5px] md:text-[7px] font-bold uppercase tracking-[0.2em] text-fuchsia-700 dark:text-fuchsia-400">Accuracy</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-2 md:-bottom-2 left-1/2 -translate-x-1/2 p-2 md:p-4 rounded-[16px] md:rounded-[20px] bg-white dark:bg-slate-900 shadow-[0_15px_35px_rgba(217,70,239,0.25)] border-2 border-fuchsia-500/50 z-30 min-w-[120px] md:min-w-[150px] text-center"
                            >
                                <div className="flex items-center justify-center gap-2 md:gap-2.5">
                                    <div className="relative">
                                        <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-fuchsia-600 flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/40">
                                            <span className="text-xs md:text-base font-black font-outfit">01+</span>
                                        </div>
                                        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full animate-pulse" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[7px] md:text-[10px] font-black text-slate-900 dark:text-white uppercase leading-none">Years Of</p>
                                        <p className="text-[6px] md:text-[8px] font-bold text-fuchsia-600 tracking-widest uppercase mt-0.5">Experience</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Background Shapes */}
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-fuchsia-600/10 rounded-full blur-3xl z-10 animate-pulse" />
                    </div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-4 md:space-y-8"
                    >
                        <div className="space-y-3 md:space-y-4">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-violet-600/10 border border-violet-600/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-ping" />
                                <span className="text-violet-600 font-black uppercase tracking-[0.2em] text-[9px]">Who I Am</span>
                            </div>

                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black font-outfit text-slate-900 dark:text-white leading-[1.2] tracking-tight text-balance">
                                Ensuring <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Digital Perfection</span> <br />
                                Through Rigorous Testing.
                            </h2>

                            <p className="text-xs md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-xl">
                                As a dedicated SQA Engineer, I bridge the gap between complex development and seamless user experience. My mission is to deliver bulletproof software solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                { title: "Test Automation", desc: "Selenium, Cypress, Playwright" },
                                { title: "API Testing", desc: "Postman, RestAssured" },
                                { title: "Performance", desc: "JMeter, k6" },
                                { title: "Cloud Testing", desc: "AWS, Docker, Jenkins" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -3 }}
                                    className="p-3 md:p-3.5 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-violet-600/30 transition-all group"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-7 h-7 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors flex-shrink-0">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-[9px] md:text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-0">
                                                {item.title}
                                            </h4>
                                            <p className="text-[8px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutQA;

