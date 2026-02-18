"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaMobileAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { usePortfolio } from '@/context/PortfolioContext';

const ProjectsQA = () => {
    const { data } = usePortfolio();
    const [activeFilter, setActiveFilter] = React.useState("All");
    const filters = ["All", "Web", "App"];

    const projects = data?.projects || [];

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => {
            if (activeFilter === "Web") return p.type === "Web Application";
            if (activeFilter === "App") return p.type === "Mobile Application";
            return true;
        });

    return (
        <section id="projects" className="py-24 md:py-20 bg-[var(--background)] relative overflow-hidden">
            {/* Dynamic Background Blobs for Depth */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-violet-600/5 blur-[150px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -40, 0],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-fuchsia-600/5 blur-[150px] rounded-full pointer-events-none"
            />
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col items-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/10 border border-violet-600/20 mb-6 font-black uppercase tracking-[0.2em] text-[9px] text-violet-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
                            Portfolio Showcase
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-slate-900 dark:text-white leading-[1.1] mb-8">
                            Review My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500">Latest Works</span>
                        </h2>
                    </motion.div>

                    {/* Filter Bar - Responsive & Premium */}
                    <div className="flex items-center p-1.5 bg-white/50 dark:bg-white/5 backdrop-blur-3xl rounded-2xl border border-slate-200/50 dark:border-white/10 shadow-sm overflow-x-auto max-w-full">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 md:px-8 py-2 md:py-2.5 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${activeFilter === filter
                                    ? "bg-white dark:bg-slate-800 text-violet-600 shadow-xl shadow-violet-500/10"
                                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id || project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group relative h-full"
                        >
                            <div className="h-full bg-white dark:bg-slate-800/80 backdrop-blur-2xl rounded-[40px] border border-slate-200 dark:border-white/20 overflow-hidden flex flex-col transition-all duration-700 hover:shadow-[0_30px_70px_-15px_rgba(147,51,234,0.3)] hover:border-violet-500/50 hover:-translate-y-3 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative group/card">
                                {/* Subtle Inner Glow for Dark Mode */}
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                {/* Image Area */}
                                <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-[32px] bg-slate-100 dark:bg-slate-700">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end p-8">
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:text-white transition-all shadow-2xl"
                                        >
                                            View Project <FaExternalLinkAlt size={12} />
                                        </motion.a>
                                    </div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <div className="px-4 py-2 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/20 text-[8px] font-black uppercase tracking-[0.2em] text-white shadow-xl">
                                            {project.type === "Web Application" ? "Web Native" : "App Interface"}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="px-8 pb-10 pt-4 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-black font-outfit text-slate-900 dark:text-white leading-tight mb-2 group-hover:text-violet-600 transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Live System</span>
                                            </div>
                                        </div>
                                        <div className="text-2xl text-violet-600/30 group-hover:text-violet-600 group-hover:rotate-12 transition-all duration-500">
                                            {project.type === "Mobile Application" ? <FaMobileAlt /> : <FaGlobe />}
                                        </div>
                                    </div>

                                    <p className="text-[12px] text-slate-500 dark:text-slate-400 font-medium line-clamp-2 mb-8 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tools.slice(0, 3).map((tool, i) => (
                                                <span key={i} className="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-white/5 text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-white/5 transition-all group-hover:bg-violet-600/10 group-hover:border-violet-600/30 group-hover:text-violet-600">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-slate-300 dark:text-slate-700 font-black uppercase tracking-[0.5em] text-lg mb-4">Empty Stack</div>
                        <p className="text-slate-400 dark:text-slate-500 font-medium">No projects matching this filter yet.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsQA;
