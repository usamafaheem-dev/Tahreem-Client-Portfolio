"use client";

import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {

  return (
    <footer className="bg-[var(--background)] pt-12 md:pt-20 pb-12 overflow-hidden relative border-t border-slate-200/50 dark:border-white/[0.05]">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-violet-600/5 blur-[100px] rounded-full pointer-events-none hidden dark:block" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-fuchsia-600/5 blur-[100px] rounded-full pointer-events-none hidden dark:block" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20">
          {/* Brand & Mission */}
          <div className="text-center md:text-left max-w-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="text-2xl md:text-3xl font-black tracking-tighter font-outfit text-slate-900 dark:text-white flex items-center gap-1 justify-center md:justify-start">
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Tehreem</span>
                <span className="opacity-80">Arif</span>
              </span>
            </motion.div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
              Elevating software standards through meticulous testing and innovative automation solutions. Quality is not an act, it's a habit.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Connect Globally</p>
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedinIn />, href: "#", color: "hover:bg-[#0077b5]" },
                { icon: <FaGithub />, href: "#", color: "hover:bg-[#333]" },
                { icon: <FaEnvelope />, href: "mailto:Tehreem@example.com", color: "hover:bg-violet-600" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 ${social.color} hover:text-white transition-all shadow-sm hover:shadow-xl`}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.05] to-transparent my-12" />

        {/* Copyright & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Tehreem Arif. All Rights Reserved.</p>
            <p className="mt-1 opacity-60">Designed for Excellence & Precision.</p>
          </div>

          <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
            <a href="#" className="hover:text-violet-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/923477734372"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0.7)",
            "0 0 0 20px rgba(37, 211, 102, 0)",
            "0 0 0 0 rgba(37, 211, 102, 0)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          },
          default: { duration: 0.5 }
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20bd5a] transition-colors"
      >
        <FaWhatsapp className="text-3xl md:text-4xl" />
      </motion.a>
    </footer>
  );
}
