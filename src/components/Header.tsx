"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

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
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
      ? "bg-white/80 dark:bg-[#0a0118]/80 backdrop-blur-xl border-b border-white/10 py-3"
      : "bg-transparent py-5 px-6"
      }`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="#" className="group">
          <span className="text-2xl font-black tracking-tighter font-outfit text-slate-900 dark:text-white flex items-center gap-1">
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Tahreem</span>
            <span className="opacity-80">Arif</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
          </span>
        </Link>

        {/* Desktop Menu - Centered */}
        <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-8 bg-white/5 dark:bg-white/5 backdrop-blur-md px-8 py-2.5 rounded-full border border-white/10 shadow-lg">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side: Theme Toggle + CTA */}
        <div className="flex items-center gap-6">
          {/* Pill Theme Toggle */}
          <div className="hidden sm:flex items-center bg-slate-100 dark:bg-violet-900/20 p-1 rounded-full border border-slate-200 dark:border-violet-500/20">
            <button
              onClick={() => setTheme("dark")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${theme === "dark" ? "bg-violet-600 text-white shadow-lg" : "text-slate-500 dark:text-slate-400"
                }`}
            >
              <MoonIcon className="h-3 w-3" />
              Dark
            </button>
            <button
              onClick={() => setTheme("light")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${theme === "light" ? "bg-white text-slate-900 shadow-md" : "text-slate-500 dark:text-slate-400"
                }`}
            >
              <SunIcon className="h-3 w-3" />
              Light
            </button>
          </div>

          <a href="#contact" className="hidden sm:block px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-violet-500/10 active:scale-95">
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-slate-800 dark:text-white"
          >
            {menuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0a0118] border-t border-slate-100 dark:border-white/5 shadow-2xl py-10 px-8 flex flex-col gap-8 animate-in slide-in-from-top duration-300">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-black text-slate-800 dark:text-white hover:text-violet-500 transition-colors tracking-tighter"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-4 border-t border-slate-100 dark:border-white/5">
            <button
              onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); setMenuOpen(false); }}
              className="w-full py-4 rounded-2xl bg-slate-100 dark:bg-violet-900/20 text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs"
            >
              Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
            <a href="/TehreemQa.pdf" download className="w-full py-4 rounded-2xl bg-violet-600 text-white text-center font-black uppercase tracking-widest text-xs shadow-lg shadow-violet-500/20">
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
