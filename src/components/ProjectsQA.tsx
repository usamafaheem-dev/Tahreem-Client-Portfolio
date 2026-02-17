"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaMobileAlt, FaBug, FaTools, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: "Dr. Adler Bot",
        link: "https://dradlerbot.vertexaitec.com/",
        type: "Web Application",
        icon: <FaGlobe />,
        description: "AI-powered medical assistant bot designed to provide preliminary health advice.",
        testing: ["Functional Testing", "Chatbot Logic Validation", "UI Responsiveness", "API Integration Testing"],
        tools: ["Selenium", "Postman", "Jira"],
        bugs: "Identified critical conversation loop errors and response latency issues.",
        color: "blue"
    },
    {
        title: "LipLock",
        link: "https://liplock.vercel.app/",
        type: "Web Application",
        icon: <FaGlobe />,
        description: "E-commerce platform for fast-fashion cosmetics.",
        testing: ["E-commerce Flow Validation", "Payment Gateway Testing", "Cross-Browser Compatibility"],
        tools: ["Cypress", "Trello", "Chrome DevTools"],
        bugs: "Fixed cart abandonment triggers and mobile checkout overlapping issues.",
        color: "pink"
    },
    {
        title: "Redfin Omega",
        link: "https://redfin-omega.vercel.app/",
        type: "Web Application",
        icon: <FaGlobe />,
        description: "Real estate innovation platform for property tracking.",
        testing: ["Search Filter Logic", "User Authentication", "Data Consistency Checks"],
        tools: ["Manual Testing", "SQL", "Bugzilla"],
        bugs: "Resolved search indexing failures and login session timeouts.",
        color: "red"
    },
    {
        title: "Kyakh Web",
        link: "https://kyakh-web.vercel.app/",
        type: "Web Application",
        icon: <FaGlobe />,
        description: "Social networking platform for niche communities.",
        testing: ["Feed Algorithm Testing", "Real-time Notification Checks", "Profile Management"],
        tools: ["JMeter", "Selenium", "Slack"],
        bugs: "Reported high-severity socket connection drops during peak load.",
        color: "purple"
    },
    {
        title: "Cup",
        link: "#",
        type: "Mobile Application",
        icon: <FaMobileAlt />,
        description: "Lifestyle tracking app for daily hydration and health habits.",
        testing: ["Mobile Usability", "Battery Usage Testing", "Push Notifications"],
        tools: ["Appium", "Xcode", "Android Studio"],
        bugs: "Addressed background data sync failures on iOS 15+.",
        color: "orange"
    },
    {
        title: "Tiptok",
        link: "#",
        type: "Mobile Application",
        icon: <FaMobileAlt />,
        description: "Short-form video sharing platform with social features.",
        testing: ["Video Playback Performance", "Social Sharing Integration", "Gestures & Navigation"],
        tools: ["Appium", "Charles Proxy", "TestFlight"],
        bugs: "Optimized buffer rates and fixed orientation crash bugs.",
        color: "emerald"
    }
];

const ProjectsQA = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Tested Projects</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="text-slate-500 mt-4 max-w-xl mx-auto">
                        A showcase of applications where I ensured quality, performance, and reliability.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col h-full"
                        >
                            <div className={`h-2 w-full bg-${project.color}-500`}></div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600 text-xl">
                                        {project.icon}
                                    </div>
                                    <span className="text-xs font-semibold px-2 py-1 rounded bg-slate-200 text-slate-600">
                                        {project.type}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="mt-auto space-y-4">
                                    <div className="bg-white p-3 rounded-lg border border-slate-100">
                                        <h4 className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1">
                                            <FaBug className="text-red-400" /> Key Bug Found:
                                        </h4>
                                        <p className="text-xs text-slate-500 italic">"{project.bugs}"</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tools.map((tool, idx) => (
                                            <span key={idx} className="text-[10px] font-medium px-2 py-1 rounded-full bg-slate-200 text-slate-600">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                                >
                                    Visit Project <FaExternalLinkAlt className="text-xs" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsQA;
