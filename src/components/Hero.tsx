"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SiSelenium, SiCypress, SiPostman, SiAppium } from 'react-icons/si';
import { FaBug, FaLaptopCode, FaServer, FaChevronRight } from 'react-icons/fa';

import { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[var(--background)] cursor-default"
    >
      {/* Dynamic Cursor Light Effect */}
      <motion.div
        className="absolute pointer-events-none z-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px]"
        animate={{
          x: mousePos.x * 100,
          y: mousePos.y * 100,
          transition: { type: "spring", stiffness: 50, damping: 20 }
        }}
      />

      {/* Interactive Background Decor */}
      <motion.div
        style={{ x: mousePos.x * -50, y: mousePos.y * -50 }}
        className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[120px] animate-blob"
      />
      <motion.div
        style={{ x: mousePos.x * 50, y: mousePos.y * 50 }}
        className="absolute bottom-[0%] right-[-5%] w-[50%] h-[50%] bg-fuchsia-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-[10px] font-black uppercase tracking-[0.3em] border border-violet-200 dark:border-violet-500/20"
                >
                  Available for Projects
                </motion.span>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-4">
                HELLO I'M <motion.span animate={{ rotate: [0, 20, 0, 20, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-3xl">👋</motion.span>
              </h2>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-outfit font-black text-slate-900 dark:text-white mb-10 tracking-tighter leading-[0.85]">
                TAHREEM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-400">ARIF</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-xl font-medium leading-relaxed italic">
                I feature making digital experiences that users love, enjoyably, and get the job done. Specialized in Manual & Automation SQA.
              </p>

              <div className="flex flex-wrap gap-8 items-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs uppercase tracking-widest transition-all flex items-center gap-3 group"
                >
                  Let's Talk <FaChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5, zIndex: 50 }}
                        className="w-12 h-12 rounded-full border-4 border-white dark:border-[#0a0118] bg-slate-200 overflow-hidden shadow-xl"
                      >
                        <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-900 dark:text-white leading-none mb-1">2,000+</p>
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Happy Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image with Parallax */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ x: mousePos.x * 30, y: mousePos.y * 30 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square md:aspect-[5/6] max-w-[450px] mx-auto flex items-center justify-center p-4"
            >
              {/* Spinning Decorative Elements */}
              <div className="absolute inset-0 border-2 border-dashed border-violet-600/20 rounded-full animate-spin-slow"></div>

              {/* Abstract Shape Background */}
              <motion.div
                animate={{
                  borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 70%"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[10%] bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 blur-2xl z-0"
              />

              {/* Glass Card for Image Illustration */}
              <motion.div
                whileHover={{ y: -10 }}
                className="relative w-full h-[85%] rounded-[80px] overflow-hidden bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 border border-white/20 shadow-[-20px_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-sm z-10 group flex items-center justify-center p-12"
              >
                <img
                  src="/images/hero-sqa.png"
                  alt="Tahreem Arif"
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />

                {/* Floating Badge */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-12 right-10 p-6 rounded-[35px] bg-white/20 backdrop-blur-2xl border border-white/30 z-20 shadow-2xl"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-800 dark:text-white/70 mb-2">Exp.</p>
                  <p className="text-4xl font-black text-violet-600 dark:text-white font-outfit leading-none">01+</p>
                </motion.div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] -left-10 w-20 h-20 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-2xl flex items-center justify-center text-violet-600 text-3xl z-20"
              >
                <SiSelenium />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] -right-12 w-24 h-24 rounded-[40px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-2xl flex items-center justify-center text-fuchsia-600 text-4xl z-20"
              >
                <SiCypress />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Brand/Expertise Row */}
        <div className="mt-40 pt-16 border-t border-slate-200 dark:border-white/5">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-12">Working with top-tier tools</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 dark:opacity-20 grayscale hover:grayscale-0 transition-all">
            {[
              { icon: <SiSelenium size={45} />, name: "SELENIUM" },
              { icon: <SiCypress size={45} />, name: "CYPRESS" },
              { icon: <SiPostman size={45} />, name: "POSTMAN" },
              { icon: <SiAppium size={45} />, name: "APPIUM" },
              { name: "JENKINS" },
              { name: "GITLAB" }
            ].map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, opacity: 1, color: "var(--accent)" }}
                className="flex items-center gap-4 cursor-default transition-colors"
                style={{ "--accent": i % 2 === 0 ? "#8b5cf6" : "#d946ef" } as any}
              >
                {tool.icon}
                <span className="text-2xl font-black tracking-tighter">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-px h-16 bg-gradient-to-b from-violet-600/0 via-violet-600 to-violet-600/0"></div>
        <div className="w-2 h-2 rounded-full bg-violet-600 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
