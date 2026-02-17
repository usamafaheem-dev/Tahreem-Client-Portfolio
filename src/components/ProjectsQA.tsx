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
    const [activeFilter, setActiveFilter] = React.useState("All");
    const filters = ["All", "Manual", "Automation", "API", "Mobile"];

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.testing.some(t => t.includes(activeFilter)) || p.type.includes(activeFilter));

    return (
        <section id="projects" className="py-32 bg-[var(--background)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-outfit font-black text-slate-900 dark:text-white mb-6">
                        Review My <span className="text-violet-600">Latest</span> Projects
                    </h2>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap justify-center gap-4 mt-12 overflow-x-auto pb-4">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === filter
                                        ? "bg-violet-600 text-white shadow-xl shadow-violet-500/20"
                                        : "bg-white dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-white/5 hover:border-violet-500/50"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative bg-white dark:bg-white/5 rounded-[40px] border border-slate-100 dark:border-white/5 overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none"
                        >
                            {/* Project Image Placeholder */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 to-fuchsia-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                                    <a href={project.link} target="_blank" className="p-5 rounded-full bg-white text-violet-600 shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                                        <FaExternalLinkAlt size={24} />
                                    </a>
                                </div>
                                <img
                                    src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&u=${index}`}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                <div className="absolute top-6 left-6 z-20">
                                    <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-black uppercase tracking-widest text-white">
                                        {project.type}
                                    </span>
                                </div>
                            </div>

                            <div className="p-10">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-3xl font-black font-outfit text-slate-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-violet-600">
                                        {project.icon}
                                    </div>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool, i) => (
                                        <span key={i} className="px-4 py-1.5 rounded-full bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 dark:border-white/5">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsQA;
