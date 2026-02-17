"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaBug, FaSearch, FaClipboardCheck, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-slate-50 flex items-center justify-center overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-blue-100 text-blue-600 text-xs font-bold mb-6 tracking-widest uppercase shadow-sm">
            SQA Engineer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Tehreem
            <span className="text-blue-600">.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ensuring Digital Perfection through <br className="hidden md:block" />
            <span className="text-emerald-500 font-semibold relative inline-block">
              Meticulous Testing
              <span className="absolute bottom-1 left-0 w-full h-2 bg-emerald-100/50 -z-10 skew-x-12"></span>
            </span>
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about delivering bug-free, user-centric seamless experiences.
            Specializing in Manual & Automation testing for Web and Mobile applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto">
              View Tested Projects
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full bg-white text-slate-700 font-medium border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm hover:shadow-md w-full sm:w-auto">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Badges (Hidden on mobile) */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] hidden lg:flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 max-w-xs"
      >
        <div className="bg-red-100 p-3 rounded-xl text-red-500 text-xl">
          <FaBug />
        </div>
        <div className="text-left">
          <p className="text-xs text-slate-400 font-semibold uppercase">Focus</p>
          <p className="text-sm font-bold text-slate-700">Zero Bug Tolerance</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-[10%] hidden lg:flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 max-w-xs"
      >
        <div className="bg-emerald-100 p-3 rounded-xl text-emerald-500 text-xl">
          <FaClipboardCheck />
        </div>
        <div className="text-left">
          <p className="text-xs text-slate-400 font-semibold uppercase">Target</p>
          <p className="text-sm font-bold text-slate-700">100% Quality Assurance</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
