"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Aesthetic from "../../public/Aesthetic Clinic.avif";
import Dynamic_Blog from "../../public/Dynamic Blog.avif";
import E_Commerce from "../../public/E-Commerce Store.avif";
import Portfolio from "../../public/Tailwind Portfolio.avif";
import Resume_Generator from "../../public/Resume Generator.avif";
import Chatbot from "../../public/AI Chatbot App.webp";
import Datasweeper from "../../public/Datasweeper App.avif";
import Password_manager from "../../public/Password Manager.avif";
import Resume_Website from "../../public/Resume Website.avif";

const projects = [
  {
    title: "Aesthetic Clinic Platform",
    description: "QA tested for visual regressions and 150+ edge cases using automated Cypress suites.",
    image: Aesthetic,
    link: "https://aesthetic-clinic-website.vercel.app/",
    tags: ["Cypress", "Visual Testing", "React"]
  },
  {
    title: "Dynamic Content System",
    description: "Robust API validation and E2E testing for content synchronization and markdown rendering.",
    image: Dynamic_Blog,
    link: "https://dynamic-blog-milestone-03.vercel.app/",
    tags: ["Postman", "API", "Next.js"]
  },
  {
    title: "E-Commerce Robustness",
    description: "Ensuring 100% stable checkout flows and payment integration security through rigorous SQA.",
    image: E_Commerce,
    link: "https://hackathon-03-final.vercel.app/",
    tags: ["Selenium", "Stripe", "Smoke Testing"]
  },
  {
    title: "Data Sweeper Pro",
    description: "Validated data integrity algorithms and complex state management using manual protocols.",
    image: Datasweeper,
    link: "https://datasweeper-app-mindset-challege.streamlit.app/",
    tags: ["Manual", "Python", "Integrity"]
  }
];

export default function MyProjects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-emerald-500 font-black uppercase tracking-widest text-xs mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white leading-tight mb-4 uppercase tracking-tighter">
            Featured <span className="text-emerald-500">SQA Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex flex-col lg:flex-row gap-8 bg-slate-50 dark:bg-slate-800/30 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className="w-full lg:w-1/2 h-64 relative rounded-3xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white dark:bg-slate-700 text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase italic tracking-tight transition-colors group-hover:text-emerald-500">
                  {project.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                >
                  Explore Details <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
