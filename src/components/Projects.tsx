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
    title: "Aesthetic Clinic Website",
    description: "A modern clinic website with animations, services, appointments, and a 3D hero section built with React and Next.js.",
    image: Aesthetic,
    link: "https://aesthetic-clinic-website.vercel.app/",
  },
  {
    title: "Dynamic Blog",
    description: "A blog platform using dynamic routing, Markdown support, and dark mode with Next.js.",
    image: Dynamic_Blog,
    link: "https://dynamic-blog-milestone-03.vercel.app/",
  },
  {
    title: "E-Commerce Store",
    description: "A fully functional e-commerce store with product pages, Stripe checkout, and CMS backend.",
    image: E_Commerce,
    link: "https://hackathon-03-final.vercel.app/",
  },
  {
    title: "Tailwind Portfolio",
    description: "A responsive portfolio using Tailwind CSS with dark mode and animation-rich UI.",
    image: Portfolio,
    link: "https://vercel.com/sadia-khans-projects/tailwind-portfolio-sadia_khan",
  },
  {
    title: "Resume Generator",
    description: "Create professional resumes dynamically using React forms, templates, and PDF export.",
    image: Resume_Generator,
    link: "https://milestone-03-kohl.vercel.app/",
  },
  {
    title: "AI Chatbot App",
    description: "A smart AI chatbot built with Streamlit and OpenAI API for natural language conversations.",
    image: Chatbot,
    link: "https://sadiarajpoot-chatbot-streamlit-frontend-b5mv7j.streamlit.app/",
  },
  {
    title: "Datasweeper App",
    description: "A data-cleaning tool for removing duplicates, nulls, and errors. Built with Python & Streamlit.",
    image: Datasweeper,
    link: "https://datasweeper-app-mindset-challege.streamlit.app/",
  },
  {
    title: "Password Manager",
    description: "Secure password storage app with passkey encryption, login validation, and session control.",
    image: Password_manager,
    link: "https://sadiarajpoot-password-manager-streamlit-app-lt9hix.streamlit.app/",
  },
  {
    title: "Resume Website",
    description: "An online resume site built with responsive UI, animations, and downloadable PDF support.",
    image: Resume_Website,
    link: "https://sadia-khan-resume-website234.vercel.app/",
  },
];

export default function MyProjects() {
  return (
    <section className="fonts relative py-16 px-6 sm:px-10 md:px-20 lg:px-32 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="head_fonts text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500"
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Explore a collection of my web and AI projects—crafted with modern tools, creativity, and attention to user experience.
        </motion.p>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group bg-white/5 hover:bg-white/10 backdrop-blur p-5 rounded-2xl shadow-xl border border-white/10 transition duration-300 hover:shadow-pink-500/30 flex flex-col gap-4 transform hover:-translate-y-2 relative"
          >
            <div className="w-full h-48 relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="text-xl font-semibold text-white group-hover:text-pink-400 transition">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm">{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block self-start px-4 py-2 rounded-lg border border-pink-500 text-pink-400 font-medium text-sm hover:bg-pink-500 hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-pink-500/40"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
