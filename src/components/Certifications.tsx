"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCertificate } from 'react-icons/fa';

const certifications = [
    {
        title: "QA Fundamental",
        issuer: "Vertex Institute",
        year: "08/2024",
        link: "#"
    },
    {
        title: "Test Case Management with Testworthy",
        issuer: "Testworthy",
        year: "10/2024",
        link: "#"
    },
    {
        title: "Introduction to API Testing with Postman",
        issuer: "Postman Academy",
        year: "08/2025",
        link: "#"
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-32 bg-[var(--background)] overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <p className="text-violet-600 font-black uppercase tracking-widest text-[10px] mb-6">Achievements</p>
                    <h2 className="text-4xl md:text-6xl font-black font-outfit text-slate-900 dark:text-white leading-[1.1] mb-4">
                        Professional <span className="text-violet-600">Recognition</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-white/5 p-10 rounded-[50px] border border-slate-100 dark:border-white/5 hover:border-violet-500 transition-all group flex flex-col gap-8 relative overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none"
                        >
                            <div className="absolute -top-10 -right-10 p-10 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-125 transition-all duration-700">
                                <FaCertificate size={180} className="text-violet-600" />
                            </div>

                            <div className="w-16 h-16 rounded-3xl bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center text-violet-600 text-3xl shadow-xl shadow-violet-500/10 transition-all duration-500 group-hover:bg-violet-600 group-hover:text-white group-hover:scale-110">
                                <FaAward />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-black font-outfit text-slate-900 dark:text-white uppercase tracking-tight mb-4 group-hover:text-violet-600 transition-colors leading-tight">{cert.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-6 italic">{cert.issuer}</p>
                                <span className="inline-block px-6 py-2 bg-slate-50 dark:bg-white/10 text-slate-600 dark:text-slate-300 text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-sm">
                                    {cert.year}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
