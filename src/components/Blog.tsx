"use client";

import React from 'react';
import { motion } from 'framer-motion';

const posts = [
    {
        title: "Blog About Personal Portfolio",
        date: "08 February 2025",
        author: "Tahreem Arif",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "How to Build a Design System",
        date: "12 February 2025",
        author: "Tahreem Arif",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "The Future of QA Automation",
        date: "15 February 2025",
        author: "Tahreem Arif",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-32 bg-[var(--background)] overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <p className="text-violet-600 font-black uppercase tracking-widest text-[10px] mb-6">Latest Articles</p>
                    <h2 className="text-4xl md:text-6xl font-black font-outfit text-slate-900 dark:text-white leading-[1.1] mb-4">
                        Quality <span className="text-violet-600">Insights</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-8 shadow-2xl shadow-slate-200/50 dark:shadow-none">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-6 left-6 px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900">
                                    {post.date}
                                </div>
                            </div>
                            <h3 className="text-2xl font-black font-outfit text-slate-900 dark:text-white mb-4 group-hover:text-violet-600 transition-colors">
                                {post.title}
                            </h3>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">By {post.author}</span>
                                <div className="h-px w-8 bg-slate-200 dark:bg-white/10"></div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-violet-600">Read More</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
