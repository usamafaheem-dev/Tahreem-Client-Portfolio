"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden">
      {/* Premium CTA Section */}
      <div className="container mx-auto py-32 border-t border-slate-100 dark:border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black font-outfit tracking-tighter leading-[0.9] mb-8">
              Let's make <br /> something <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">amazing.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-[0.3em] text-[10px]">
              Start by <a href="#contact" className="text-violet-600 underline decoration-2 underline-offset-8 hover:text-fuchsia-500 transition-colors">saying hi</a>
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-8 text-center md:text-right">
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xs uppercase text-[10px] tracking-[0.25em] leading-[2]">
              Open for new opportunities and high-impact QA collaborations worldwide.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-white/5 py-16 border-t border-slate-100 dark:border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="mb-6">
                <span className="text-3xl font-black tracking-tighter font-outfit text-slate-900 dark:text-white flex items-center gap-1 justify-center md:justify-start">
                  <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Tehreem</span>
                  <span className="opacity-80">Arif</span>
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium tracking-tight">Ensuring software excellence, one test case at a time.</p>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedin size={20} />, hover: "hover:bg-violet-600" },
                { icon: <FaGithub size={20} />, hover: "hover:bg-slate-900" },
                { icon: <FaEnvelope size={20} />, hover: "hover:bg-fuchsia-500" }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-14 h-14 rounded-[20px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 ${social.hover} hover:text-white transition-all shadow-sm hover:shadow-xl hover:-translate-y-1`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 dark:border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            <p>&copy; {new Date().getFullYear()} Tehreem Arif. Quality First.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-violet-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
