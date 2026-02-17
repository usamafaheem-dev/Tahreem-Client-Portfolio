"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaUserCheck, FaLightbulb } from 'react-icons/fa';

const AboutQA = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-slate-600 text-lg leading-relaxed"
                    >
                        <p>
                            As a dedicated <span className="font-semibold text-blue-600">QA Engineer</span>,
                            I don't just find bugs; I ensure seamless user experiences. My approach to testing
                            is rooted in a deep understanding of the end-user's perspective, combined with technical precision.
                        </p>
                        <p>
                            I specialize in both <span className="font-semibold text-emerald-600">Manual</span> and <span className="font-semibold text-emerald-600">Automation Testing</span>,
                            ensuring that every product I touch meets the highest standards of quality, performance, and reliability.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                                <FaSearch className="text-blue-500 mt-1 text-xl flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-800">Detail Oriented</h4>
                                    <p className="text-sm text-slate-500">Leaving no stone unturned in finding edge cases.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                                <FaUserCheck className="text-emerald-500 mt-1 text-xl flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-800">User Advocacy</h4>
                                    <p className="text-sm text-slate-500">Championing the user's need for a smooth experience.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image/Graphic Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-xl">
                            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <FaLightbulb className="text-yellow-500" />
                                My Testing Philosophy
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-600">
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    Quality is not an act, it is a habit.
                                </li>
                                <li className="flex items-center gap-3 text-slate-600">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    Early testing saves time and cost.
                                </li>
                                <li className="flex items-center gap-3 text-slate-600">
                                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                    Automation handles the repetitive; verify the creative manually.
                                </li>
                                <li className="flex items-center gap-3 text-slate-600">
                                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                    Clear bug reports are a developer's best friend.
                                </li>
                            </ul>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-blue-100 rounded-full -z-10 blur-xl"></div>
                        <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 bg-emerald-100 rounded-full -z-10 blur-xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutQA;
