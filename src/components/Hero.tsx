"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { SiSelenium, SiCypress, SiPostman, SiAppium, SiJavascript, SiPython } from 'react-icons/si';
import { FaChevronRight, FaRocket, FaShield, FaMicroscope, FaGithub, FaBug } from 'react-icons/fa6';
import InteractiveParticles from './InteractiveParticles';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // High-Precision Mouse Tracking for 3D depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 22 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Dynamic Text Rotator for the Fancy Label
  const qaWords = ["Quality Sentinel", "Bug Hunter", "Test Architect", "Automation Pro", "Code Guardian"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % qaWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect state
  const sentences = [
    "QA Specialist",
    "Automation Expert",
    "Bug Hunter",
    "Test Architect",
    "Code Guardian"
  ];
  const [displayText, setDisplayText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const currentSentence = sentences[sentenceIndex];
      if (!isDeleting) {
        setDisplayText(currentSentence.substring(0, displayText.length + 1));
        if (displayText === currentSentence) {
          setIsDeleting(true);
          setTypingSpeed(2000); // Pause at end
        } else {
          setTypingSpeed(100);
        }
      } else {
        setDisplayText(currentSentence.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, sentenceIndex, typingSpeed]);

  // Parallax Transitions
  const rotateX = useTransform(dy, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(dx, [-0.5, 0.5], [-15, 15]);

  // Interactive Background Transforms
  const lightX = useTransform(dx, [-0.5, 0.5], ["-20%", "20%"]);
  const lightY = useTransform(dy, [-0.5, 0.5], ["-20%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-white dark:bg-[#020110] transition-colors duration-1000"
    >
      {/* 1. ATMOSPHERIC BACKGROUND (Dynamic Follower) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grid Layer */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.15]"
          style={{ backgroundImage: 'linear-gradient(#8b5cf6 0.5px, transparent 0.5px), linear-gradient(90deg, #8b5cf6 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }}
        />

        {/* Static Ambient Glows */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-violet-600/10 blur-[120px] rounded-full hidden dark:block" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-fuchsia-600/10 blur-[120px] rounded-full hidden dark:block" />

        {/* Cursor Spotlight Follower */}
        <motion.div
          style={{ x: lightX, y: lightY }}
          className="absolute inset-[-50%] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25)_0%,transparent_50%)] z-0"
        />

        {/* Dynamic Interactive Particles (Antigravity Effect) */}
        <InteractiveParticles />
      </div>

      <div className="container mx-auto relative z-10 px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* 2. LEFT SIDE: THE BRANDING (ELEGANT WOW VERSION) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 xl:col-span-7 order-2 lg:order-1 relative text-center lg:text-left"
          >
            {/* Decorative Tech Indices */}
            <div className="absolute -left-12 top-0 h-full w-px bg-gradient-to-b from-transparent via-violet-500/20 to-transparent hidden xl:block" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-violet-600/5 dark:bg-white/5 border border-violet-500/10 mb-8 backdrop-blur-sm self-center lg:self-start"
            >
              <span className="flex h-2 w-2 rounded-full bg-violet-600 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-violet-700 dark:text-violet-300">
                <span className="hidden sm:inline">SQA SPECIALIST // AUTOMATION</span>
                <span className="sm:hidden">SQA SPECIALIST</span>
              </span>
            </motion.div>

            <div className="relative group mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black font-outfit tracking-tighter leading-[1.1]">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block text-slate-900 dark:text-white"
                >
                  Tehreem
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-400"
                >
                  Arif<span className="text-violet-600">.</span>
                </motion.span>
              </h1>

            </div>

            {/* Refined Typewriter Section */}
            <div className="relative mt-8 group cursor-default flex flex-col items-center lg:items-start">
              <div className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-violet-600/[0.03] to-transparent rounded-3xl border-l-2 border-violet-500/20 hidden lg:block" />

              <div className="relative flex flex-col gap-3 items-center lg:items-start">
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-600/60 dark:text-violet-400/60 text-center lg:text-left">
                    Quality Assurance Expert
                  </span>
                </div>

                <p className="text-lg sm:text-xl md:text-2xl font-outfit font-medium tracking-tight h-10 flex items-center justify-center lg:justify-start">
                  <span className="text-slate-800 dark:text-slate-200 opacity-80">
                    I am a <span className="font-bold text-violet-600 dark:text-violet-400">{displayText}</span>
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-[2px] h-6 bg-violet-600 ml-2 shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                  />
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center lg:justify-start mt-12 pb-12 lg:pb-0">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 px-8 sm:px-10 py-4 rounded-xl bg-violet-600 dark:bg-violet-500 text-white font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.2em] shadow-[0_10px_30px_-10px_rgba(139,92,246,0.5)] hover:shadow-[0_15px_35px_-10px_rgba(139,92,246,0.6)] transition-all flex items-center gap-3"
              >
                Start Collaboration <FaChevronRight size={10} />
              </motion.a>

              <motion.a
                href="/TehreemQ.pdf"
                target="_blank"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 px-10 py-4 rounded-xl border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all"
              >
                Download CV
              </motion.a>

              <div className="flex gap-10 border-l border-slate-200 dark:border-white/10 pl-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900 dark:text-white leading-none">05+</span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Frameworks</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900 dark:text-white leading-none">100%</span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Coverage</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. RIGHT SIDE: THE "CYBER-POD" (Fixed & Centered) */}
          <div className="lg:col-span-6 xl:col-span-5 order-1 lg:order-2 flex items-center justify-center p-4">

            {/* Interactive 3D Pod Container */}
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative w-full max-w-[480px] aspect-square flex items-center justify-center transform-gpu"
            >




              {/* Layer 3: The Cyber-Pod Frame (Sleek Glass Podium) */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-20 w-[85%] h-[85%] overflow-visible flex items-center justify-center p-4"
              >


                {/* The Robotic Masterpiece */}
                <motion.div
                  animate={{ y: [0, -25, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-30 w-full h-auto flex items-center justify-center -mt-6"
                >
                  <img
                    src="/robotic_qa_assistant_3d_1771351642753-removebg-preview.png"
                    alt="QA AI Assistant"
                    className="w-[105%] h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>

                {/* High-Tech Fancy Label */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 w-full text-center z-40 px-4"
                >
                  <div className="relative inline-block px-6 sm:px-10 py-2 sm:py-2.5 min-w-[200px] sm:min-w-[280px]">
                    <div className="absolute inset-0 bg-white/10 dark:bg-slate-900/60 backdrop-blur-3xl rounded-full border border-violet-500/20 dark:border-white/10 shadow-2xl" />

                    <div className="relative h-5 sm:h-6 flex items-center justify-center overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={wordIndex}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "circOut" }}
                          className="absolute text-[10px] sm:text-xs md:text-sm font-black font-outfit tracking-[0.2em] sm:tracking-[0.4em] uppercase bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-400 bg-clip-text text-transparent filter drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] whitespace-nowrap"
                        >
                          {qaWords[wordIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </div>

                    <motion.div
                      animate={{ scaleX: [0, 1, 0], opacity: [0, 0.4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"
                    />
                  </div>
                </motion.div>



                {/* Floating HUD Indicator */}
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-10 right-10 flex flex-col items-end gap-1 opacity-60"
                >
                  <FaMicroscope className="text-violet-500" />
                  <span className="text-[6px] font-black uppercase tracking-[0.2em]">Deep Scan</span>
                </motion.div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-15%] sm:inset-[-5%] pointer-events-none z-50 scale-75 sm:scale-100"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 p-2 sm:p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-fuchsia-500/20 shadow-[0_0_60px_rgba(192,38,211,0.6)] text-violet-600 -rotate-12 transition-transform hover:scale-110">
                  <SiSelenium size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-2 sm:p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-fuchsia-500/20 shadow-[0_0_60px_rgba(192,38,211,0.6)] text-emerald-500 rotate-12 transition-transform hover:scale-110">
                  <SiCypress size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 p-2 sm:p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-fuchsia-500/20 shadow-[0_0_60px_rgba(192,38,211,0.6)] text-orange-500 rotate-45 transition-transform hover:scale-110">
                  <SiPostman size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 p-2 sm:p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-fuchsia-500/20 shadow-[0_0_60px_rgba(192,38,211,0.6)] text-rose-500 -rotate-45 transition-transform hover:scale-110">
                  <SiAppium size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <div className="absolute top-[15%] left-[15%] p-2 sm:p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-fuchsia-500/20 shadow-[0_0_60px_rgba(192,38,211,0.6)] text-blue-500 rotate-12 transition-transform hover:scale-110">
                  <SiJavascript size={16} className="sm:w-[20px] sm:h-[20px]" />
                </div>
                <div className="absolute bottom-[15%] right-[15%] p-2 sm:p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-fuchsia-500/20 shadow-[0_0_60px_rgba(192,38,211,0.6)] text-yellow-500 -rotate-12 transition-transform hover:scale-110">
                  <SiPython size={16} className="sm:w-[20px] sm:h-[20px]" />
                </div>
                <div className="absolute top-[15%] right-[15%] p-2 sm:p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-fuchsia-500/20 shadow-[0_0_60px_rgba(192,38,211,0.6)] text-slate-700 dark:text-white rotate-45 transition-transform hover:scale-110">
                  <FaGithub size={16} className="sm:w-[20px] sm:h-[20px]" />
                </div>
                <div className="absolute bottom-[15%] left-[15%] p-2 sm:p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-fuchsia-500/20 shadow-[0_0_60px_rgba(192,38,211,0.6)] text-red-500 -rotate-45 transition-transform hover:scale-110">
                  <FaBug size={16} className="sm:w-[20px] sm:h-[20px]" />
                </div>
              </motion.div>

              {/* Decorative Spinning Rings around Pod */}
              <div className="absolute inset-[-10%] z-10 pointer-events-none opacity-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-violet-500/30 rounded-full border-dashed"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[15%] border border-violet-500/10 rounded-full"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Cyber-Line Decor */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-20">
        <span className="text-[7px] font-black uppercase tracking-[1.2em] text-slate-400">Core Engine V.2</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-violet-600 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
