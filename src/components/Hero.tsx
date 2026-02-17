"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SiSelenium, SiCypress, SiPostman, SiAppium } from 'react-icons/si';
import { FaBug, FaLaptopCode, FaServer, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[var(--background)]">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute bottom-[0%] right-[-5%] w-[50%] h-[50%] bg-fuchsia-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-5 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-[10px] font-black uppercase tracking-widest border border-violet-200 dark:border-violet-500/20">
                  Available for Projects
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
                HELLO I'M <span className="text-2xl animate-bounce">👋</span>
              </h2>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-outfit font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
                TAHREEM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-400">ARIF</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-xl font-medium leading-relaxed">
                I feature making digital experiences that users love, enjoyably, and get the job done. Specialized in Manual & Automation SQA.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <a href="#contact" className="px-10 py-5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-violet-500/20 active:scale-95 flex items-center gap-3">
                  Read More <FaChevronRight size={10} />
                </a>

                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-violet-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    +2k
                  </div>
                </div>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Trusted by 2000+ Clients</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/5] flex items-center justify-center"
            >
              {/* Abstract Shape Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-[40% 60% 70% 30% / 40% 50% 60% 70%] animate-blob blur-2xl"></div>

              {/* Glass Card for Image */}
              <div className="relative w-full h-full rounded-[60px] overflow-hidden border border-white/20 shadow-2xl backdrop-blur-sm z-10 group">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop"
                  alt="Tahreem Arif"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-10 left-10 p-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 z-20 shadow-2xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">Experience</p>
                  <p className="text-3xl font-black text-white">01+ Year</p>
                </div>
              </div>

              {/* Decorative Outfits */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-violet-600/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-[20%] right-[-10%] z-0 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-violet-500/30 animate-spin-slow">
                  <path d="M60 0L64.8981 55.1019L120 60L64.8981 64.8981L60 120L55.1019 64.8981L0 60L55.1019 55.1019L60 0Z" fill="currentColor" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Brand/Expertise Row */}
        <div className="mt-32 pt-10 border-t border-slate-200 dark:border-white/5">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">Working with top-tier tools</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 dark:opacity-20 grayscale hover:grayscale-0 transition-all">
            <SiSelenium size={40} className="hover:text-emerald-500 transition-colors" />
            <SiCypress size={40} className="hover:text-teal-400 transition-colors" />
            <SiPostman size={40} className="hover:text-orange-500 transition-colors" />
            <SiAppium size={40} className="hover:text-blue-500 transition-colors" />
            <div className="text-2xl font-black tracking-tighter">JENKINS</div>
            <div className="text-2xl font-black tracking-tighter">GITLAB</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-px h-12 bg-gradient-to-b from-violet-600/0 via-violet-600 to-violet-600/0 animate-pulse"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;
