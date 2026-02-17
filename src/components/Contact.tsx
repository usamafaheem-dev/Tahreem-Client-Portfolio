"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[var(--background)] overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-violet-600 font-black uppercase tracking-widest text-[10px] mb-6">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-black font-outfit text-slate-900 dark:text-white leading-[1.1] mb-4">
            Let's Start A <span className="text-violet-600">Project Together</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="bg-white dark:bg-white/5 p-12 rounded-[50px] border border-slate-100 dark:border-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none">
              <h3 className="text-3xl font-black font-outfit text-slate-900 dark:text-white mb-10 tracking-tighter uppercase">Contact Info</h3>

              <div className="space-y-10">
                {[
                  { icon: <FaEnvelope />, title: "Email Me", val: "Tehreem@example.com", color: "text-violet-600" },
                  { icon: <FaPhone />, title: "Call Me", val: "+92 300 1234567", color: "text-fuchsia-600" },
                  { icon: <FaMapMarkerAlt />, title: "Location", val: "Punjab, Pakistan", color: "text-indigo-600" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className={`w-16 h-16 rounded-3xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-2xl ${item.color} group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500 shadow-sm`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{item.title}</p>
                      <p className="text-slate-900 dark:text-white font-bold tracking-tight">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-slate-100 dark:border-white/5">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">Social Connect</p>
                <div className="flex gap-4">
                  {[<FaLinkedin key="linkedin" />, <FaGithub key="github" />].map((icon, i) => (
                    <a key={i} href="#" className="w-14 h-14 rounded-[20px] bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center hover:bg-violet-600 dark:hover:bg-violet-600 dark:hover:text-white transition-all hover:-translate-y-2 shadow-xl">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-white/5 p-12 rounded-[50px] border border-slate-100 dark:border-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 mb-3 block">Full Name</label>
                  <input type="text" className="w-full px-8 py-5 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 focus:outline-none focus:border-violet-500 dark:text-white transition-all font-medium" placeholder="John Doe" />
                </div>
                <div className="md:col-span-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 mb-3 block">Email Address</label>
                  <input type="email" className="w-full px-8 py-5 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 focus:outline-none focus:border-violet-500 dark:text-white transition-all font-medium" placeholder="john@example.com" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 mb-3 block">Message</label>
                  <textarea rows={6} className="w-full px-8 py-5 rounded-[40px] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 focus:outline-none focus:border-violet-500 dark:text-white transition-all font-medium" placeholder="How can I help you today?"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full py-6 rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-widest text-xs shadow-2xl shadow-violet-500/20 hover:scale-[1.02] active:scale-95 transition-all">
                    Send Message Now
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
