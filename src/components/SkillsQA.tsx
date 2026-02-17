"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaTools, FaBug, FaServer } from 'react-icons/fa';

const skills = [
    {
        category: "Manual Testing",
        icon: <FaBug />,
        items: ["Functional Testing", "UI/UX Testing", "Regression Testing", "Smoke/Sanity Testing", "Cross-Browser Testing"],
        color: "text-red-500",
        bg: "bg-red-50",
        border: "border-red-100"
    },
    {
        category: "Automation Testing",
        icon: <FaLaptopCode />,
        items: ["Selenium WebDriver", "Cypress", "Appium (Mobile)", "TestNG", "JUnit"],
        color: "text-blue-500",
        bg: "bg-blue-50",
        border: "border-blue-100"
    },
    {
        category: "API Testing",
        icon: <FaServer />,
        items: ["Postman", "Rest Assured", "Swagger", "JSON Validation"],
        color: "text-purple-500",
        bg: "bg-purple-50",
        border: "border-purple-100"
    },
    {
        category: "Tools & Management",
        icon: <FaTools />,
        items: ["Jira", "Trello", "Git/GitHub", "TestRail", "Agile/Scrum"],
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        border: "border-emerald-100"
    }
];

const SkillsQA = () => {
    return (
        <section id="skills" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Expertise</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-2xl bg-white shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all border ${skill.border}`}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 ${skill.bg} ${skill.color}`}>
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">{skill.category}</h3>
                            <ul className="space-y-2">
                                {skill.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-slate-600 text-sm">
                                        <span className={`w-1.5 h-1.5 rounded-full ${skill.color.replace('text-', 'bg-')}`}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsQA;
