"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutQA = () => {
    return (
        <section id="about" className="py-32 bg-[var(--background)] overflow-hidden relative">
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column: Image with Experience Badge */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                opacity: { duration: 0.8 },
                                x: { duration: 0.8 },
                                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                            }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/5] max-w-[400px] mx-auto rounded-[60px] overflow-hidden border border-slate-100 dark:border-white/5 shadow-2xl group"
                        >
                            <div className="w-full h-full bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 flex items-center justify-center p-16">
                                <img
                                    src="/images/about-sqa.png"
                                    alt="About Tehreem"
                                    className="w-full h-full object-contain filter drop-shadow-xl"
                                />
                            </div>

                            {/* Large Experience Badge */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-8 right-8 p-8 rounded-[35px] bg-violet-600 text-white shadow-2xl z-20"
                            >
                                <p className="text-5xl font-black font-outfit mb-1">01+</p>
                                <p className="text-[9px] font-black uppercase tracking-widest text-white/80 leading-none">Years Of<br />Experience</p>
                            </motion.div>

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
                                &quot;Crafting Enjoyable <br />
                                <span className="text-violet-600">Digital Solutions</span> <br />
                                From Business Ideas.&quot;
                            </h2>
                            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                I specialize in Manual &amp; Automation Quality Assurance, ensuring that your digital products are not only bug-free but also provide a seamless and enjoyable user experience.
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
