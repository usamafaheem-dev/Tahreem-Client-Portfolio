"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaLocationDot,
  FaPaperPlane
} from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-20 bg-[var(--background)] overflow-hidden relative">
      {/* Ambient Animated Background Elements */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-violet-500/10 blur-[120px] rounded-full animate-blob hidden dark:block" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-500/10 blur-[120px] rounded-full animate-blob animation-delay-2000 hidden dark:block" />

      {/* Light Mode subtle accents */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-violet-100 rounded-full blur-3xl opacity-50 dark:hidden" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-fuchsia-100 rounded-full blur-3xl opacity-50 dark:hidden" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 border border-violet-200 dark:border-violet-500/20"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit text-slate-900 dark:text-white leading-[1.05] mb-6 tracking-tight">
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">extraordinary</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-full"
          >
            <div className="h-full bg-white/70 dark:bg-white/[0.03] backdrop-blur-2xl p-8 md:p-12 rounded-[40px] md:rounded-[50px] border border-slate-200/50 dark:border-white/10 shadow-xl shadow-slate-200/40 dark:shadow-none flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-black font-outfit text-slate-900 dark:text-white mb-8 md:mb-12 tracking-tight">Contact Information</h3>

                <div className="space-y-6 md:space-y-8">
                  {[
                    {
                      icon: <FaEnvelope />,
                      title: "Email",
                      val: "Tehreem@example.com",
                      gradient: "from-violet-500 to-indigo-500"
                    },
                    {
                      icon: <FaPhone />,
                      title: "Phone",
                      val: "+92 347 7734372",
                      gradient: "from-fuchsia-500 to-pink-500"
                    },
                    {
                      icon: <FaLocationDot />,
                      title: "Location",
                      val: "Punjab, Pakistan",
                      gradient: "from-blue-500 to-cyan-500"
                    }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center gap-5 md:gap-6 group"
                    >
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[24px] bg-gradient-to-br ${item.gradient} p-[1px] group-hover:scale-110 transition-transform duration-500`}>
                        <div className="w-full h-full rounded-[23px] bg-white dark:bg-slate-900 flex items-center justify-center text-xl md:text-2xl text-slate-900 dark:text-white group-hover:bg-transparent group-hover:text-white transition-all duration-500">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5 md:mb-1">{item.title}</p>
                        <p className="text-slate-900 dark:text-white font-bold text-sm md:text-base tracking-tight">{item.val}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-200/50 dark:border-white/[0.05]">
                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6 md:mb-8">Follow My Journey</p>
                <div className="flex gap-3 md:gap-4">
                  {[
                    { icon: <FaLinkedin />, color: "hover:bg-[#0077b5]", href: "#" },
                    { icon: <FaGithub />, color: "hover:bg-[#333]", href: "#" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl md:rounded-[20px] bg-slate-900 dark:bg-white/10 text-white flex items-center justify-center ${social.color} transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-slate-900/10`}
                    >
                      <span className="text-xl md:text-2xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-7 h-full"
          >
            <div className="h-full bg-white dark:bg-white/[0.03] backdrop-blur-2xl p-8 md:p-12 rounded-[40px] md:rounded-[50px] border border-slate-200/50 dark:border-white/10 shadow-xl shadow-slate-200/40 dark:shadow-none">
              <form className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="group">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2 mb-2 md:mb-3 block group-focus-within:text-violet-500 transition-colors">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-[24px] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:text-white transition-all font-semibold placeholder:text-slate-300 dark:placeholder:text-slate-700 text-sm md:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2 mb-2 md:mb-3 block group-focus-within:text-violet-500 transition-colors">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-[24px] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:text-white transition-all font-semibold placeholder:text-slate-300 dark:placeholder:text-slate-700 text-sm md:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2 mb-2 md:mb-3 block group-focus-within:text-violet-500 transition-colors">Your Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-6 md:px-8 py-4 md:py-5 rounded-[30px] md:rounded-[40px] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:text-white transition-all font-semibold placeholder:text-slate-300 dark:placeholder:text-slate-700 text-sm md:text-base resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 md:py-6 rounded-2xl md:rounded-[24px] bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-widest text-[10px] md:text-xs shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3 group transition-all"
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
