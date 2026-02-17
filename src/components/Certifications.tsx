"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCertificate } from 'react-icons/fa';

const certifications = [
    {
        title: "ISTQB Certified Tester",
        issuer: "ISTQB",
        year: "2023",
        link: "#"
    },
    {
        title: "Certified Selenium Professional",
        issuer: "Selenium",
        year: "2022",
        link: "#"
    },
    {
        title: "Agile Scrum Master",
        issuer: "Scrum Alliance",
        year: "2021",
        link: "#"
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Achievements</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-center gap-4"
                        >
                            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl flex-shrink-0">
                                <FaAward />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">{cert.title}</h3>
                                <p className="text-slate-500 text-sm">{cert.issuer}</p>
                                <span className="inline-block mt-2 px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded">
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
