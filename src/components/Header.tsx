"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaChevronRight } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 px-4 sm:px-0 ${isScrolled
      ? "top-2 sm:top-0"
      : "top-0"
      }`}>
      <div className={`container mx-auto transition-all duration-500 flex justify-between items-center px-6 sm:px-12 lg:px-20 ${isScrolled
        ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/20 dark:border-white/5 py-2.5 rounded-2xl sm:rounded-none shadow-lg shadow-violet-500/5"
        : "bg-transparent py-5"
        }`}>
        {/* Logo (Just Name) */}
        <Link href="#" className="group relative">
          <div className="flex items-center">
            <span className="text-lg sm:text-2xl font-black tracking-tighter font-outfit text-slate-900 dark:text-white flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Tehreem</span>
              <span className="opacity-80">Arif</span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-fuchsia-500 animate-pulse"></span>
            </span>
          </div>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:w-full transition-all duration-300"></div>
        </Link>

        {/* Desktop Menu - Centered */}
        <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-1 bg-white/10 dark:bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/20 dark:border-white/10 shadow-xl">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="relative px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-white transition-all group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/10 rounded-full transition-all duration-300 scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side: Theme Toggle + CTA */}
        <div className="flex items-center gap-6">
          {/* Premium Theme Toggle Switch */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex items-center w-14 h-7 sm:w-16 sm:h-8 rounded-full p-1 bg-slate-100 dark:bg-slate-800/50 border border-slate-300/50 dark:border-white/10 transition-colors duration-500 shadow-inner group overflow-hidden"
          >
            {/* Background Hint Icons */}
            <div className="absolute inset-x-2 flex justify-between items-center opacity-20 pointer-events-none">
              <SunIcon className="w-3 h-3 text-amber-500" />
              <MoonIcon className="w-3 h-3 text-violet-400" />
            </div>

            <motion.div
              animate={{
                x: theme === "dark" ? (typeof window !== 'undefined' && window.innerWidth < 640 ? 28 : 32) : 0,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`relative z-10 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-all duration-500 ${theme === "dark"
                ? "bg-violet-600 shadow-[0_0_15px_rgba(139,92,246,0.6)]"
                : "bg-white shadow-md"
                }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {theme === "dark" ? (
                    <MoonIcon className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <SunIcon className="w-3.5 h-3.5 text-amber-500" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </button>

          <a href="#contact" className="hidden sm:inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-violet-600/40 hover:-translate-y-0.5 active:scale-95 transition-all">
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10"
          >
            {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-0 left-0 w-full bg-white/95 dark:bg-[#020110]/98 backdrop-blur-3xl z-[60] overflow-hidden flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-slate-100 dark:border-white/5">
              <Link href="#" onClick={() => setMenuOpen(false)} className="flex items-center">
                <span className="text-lg font-black tracking-tighter text-slate-900 dark:text-white">
                  Tehreem<span className="opacity-50 font-medium">Arif</span>
                </span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-white transition-transform active:scale-90"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between py-2"
                >
                  <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform origin-left">
                    {link.name}
                  </span>
                  <div className="h-px flex-1 mx-4 bg-gradient-to-r from-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FaChevronRight className="h-4 w-4 text-fuchsia-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </motion.a>
              ))}
            </nav>

            {/* Bottom Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-8 pb-10 flex flex-col gap-4"
            >

              <a
                href="/TehreemQ.pdf"
                download
                className="w-full py-5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-center font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl transition-transform active:scale-[0.98]"
              >
                Download Master CV
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
