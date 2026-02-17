"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    SiSelenium, SiCypress, SiAppium, SiJunit5,
    SiPostman, SiApachejmeter, SiJira, SiTrello, SiGithub,
    SiGitlab, SiJenkins, SiDocker, SiMysql, SiPython
} from 'react-icons/si';
import { FaJava, FaCogs } from 'react-icons/fa';

const tools = [
    { name: "Selenium", icon: <SiSelenium className="text-[#43B02A]" /> },
    { name: "Cypress", icon: <SiCypress className="text-[#17202C]" /> },
    { name: "Appium", icon: <SiAppium className="text-[#662D8C]" /> },
    { name: "JUnit", icon: <SiJunit5 className="text-[#25A162]" /> },
    { name: "TestNG", icon: <FaCogs className="text-[#FF7F00]" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: "JMeter", icon: <SiApachejmeter className="text-[#D22128]" /> },
    { name: "Jira", icon: <SiJira className="text-[#0052CC]" /> },
    { name: "Trello", icon: <SiTrello className="text-[#0079BF]" /> },
    { name: "GitHub", icon: <SiGithub className="text-[#181717]" /> },
    { name: "GitLab", icon: <SiGitlab className="text-[#FC6D26]" /> },
    { name: "Jenkins", icon: <SiJenkins className="text-[#D24939]" /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
];

const Tools = () => {
    return (
        <section id="tools" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Tech Stack</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Tools & Technologies</h2>
                    <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group"
                        >
                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                {tool.icon}
                            </div>
                            <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors">
                                {tool.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
