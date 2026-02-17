"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Journey</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Experience & Education</h2>
                    <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Experience Item */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-0"
                    >
                        <div className="md:w-1/2 md:ml-auto md:pl-12 relative">
                            {/* Timeline Line */}
                            <div className="absolute left-[-8px] md:left-[-9px] top-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md z-10"></div>
                            <div className="absolute left-0 md:left-[-1px] top-6 h-full w-0.5 bg-slate-200 md:hidden"></div>

                            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow relative">
                                <span className="absolute top-6 right-6 text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">2023 - Present</span>
                                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                    <FaBriefcase className="text-blue-500" /> SQA Engineer
                                </h3>
                                <p className="text-slate-600 font-medium mb-2">Tech Solutions Inc. (Placeholder)</p>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Leading the QA team in manual and automation testing. Implemented CI/CD pipelines with Jenkins and reduced bug leakage by 40% through rigorous regression suites.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Item (Left Aligned on Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-0"
                    >
                        <div className="md:w-1/2 md:mr-auto md:pr-12 md:text-right relative">
                            {/* Timeline Line */}
                            <div className="absolute left-[-8px] md:right-[-9px] md:left-auto top-2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-md z-10"></div>

                            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow relative">
                                <span className="absolute top-6 right-6 md:left-6 md:right-auto text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">2019 - 2023</span>
                                <h3 className="text-xl font-bold text-slate-800 flex items-center md:flex-row-reverse gap-2 md:justify-start">
                                    <FaGraduationCap className="text-emerald-500" /> BS Computer Science
                                </h3>
                                <p className="text-slate-600 font-medium mb-2">University of Technology (Placeholder)</p>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Specialized in Software Engineering and Quality Assurance. Capstone project focused on Automated Testing Frameworks.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Central Line for Desktop */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-200 hidden md:block transform -translate-x-1/2 z-0"></div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
