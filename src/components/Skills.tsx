"use client";

import React, { useEffect, useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Engine as TspEngine } from "@tsparticles/engine";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

const skills = [
  {
    name: "HTML",
    value: 90,
    colorHex: ["#fb923c", "#ef4444"],
    icon: <FaHtml5 size={40} />,
  },
  {
    name: "CSS (Tailwind + CSS)",
    value: 80,
    colorHex: ["#60a5fa", "#7c3aed"],
    icon: <FaCss3Alt size={40} />,
  },
  {
    name: "JS + TS",
    value: 75,
    colorHex: ["#facc15", "#ca8a04"],
    icon: <FaJs size={40} />,
  },
  {
    name: "React.js",
    value: 70,
    colorHex: ["#22d3ee", "#2563eb"],
    icon: <FaReact size={40} />,
  },
  {
    name: "Next.js",
    value: 90,
    colorHex: ["#6b7280", "#ffffff"],
    icon: <SiNextdotjs size={40} />,
  },
  {
    name: "Node.js",
    value: 75,
    colorHex: ["#22c55e", "#84cc16"],
    icon: <FaNodeJs size={40} />,
  },
  {
    name: "Python",
    value: 80,
    colorHex: ["#fde68a", "#60a5fa"],
    icon: <FaPython size={40} />,
  },
  {
    name: "Pursing Agentic AI",
    value: 85,
    colorHex: ["#ec4899", "#a21caf"],
    icon: <BsStars size={40} />,
  },
];

export default function Skills() {

  const particlesInit = useCallback(async (engine: TspEngine) => {
    await loadFull(engine);
  }, []);


  useEffect(() => {
   
    import("@tsparticles/engine").then(({ tsParticles }) => {
      particlesInit(tsParticles as TspEngine);
    });
  }, [particlesInit]);

  return (
    <section className="relative bg-black py-20 px-6 sm:px-10 md:px-20 text-white overflow-hidden">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: { enable: true },
            },
            modes: {
              repulse: { distance: 100 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 150 },
            move: { enable: true, speed: 1 },
            number: { value: 80 },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <div className="text-center mb-12 ">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="head_fonts text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
        >
          My Skills
        </motion.h2>
        <p className="text-gray-400 mt-2">
          Technologies I’ve worked with – visualized with glowing progress circles.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center group cursor-pointer"
            data-tooltip-id={`tooltip-${index}`}
            data-tooltip-content={skill.name}
          >
            <div className="relative w-32 h-32 mb-4">
              <svg className="absolute w-full h-full" viewBox="0 0 128 128" fill="none">
                <circle
                  className="text-gray-700"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="64"
                  cy="64"
                />
                <motion.circle
                  className="text-white drop-shadow-xl"
                  strokeWidth="8"
                  stroke={`url(#gradient-${index})`}
                  fill="transparent"
                  r="50"
                  cx="64"
                  cy="64"
                  strokeDasharray="314"
                  strokeDashoffset={314 - (314 * skill.value) / 100}
                  strokeLinecap="round"
                  initial={{ strokeDashoffset: 314 }}
                  animate={{ strokeDashoffset: 314 - (314 * skill.value) / 100 }}
                  transition={{ duration: 1 }}
                />
                <defs>
                  <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={skill.colorHex[0]} />
                    <stop offset="100%" stopColor={skill.colorHex[1]} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-white drop-shadow-lg">
                {skill.icon}
              </div>
            </div>
            <h3 className="text-lg font-medium text-white mt-2 group-hover:text-pink-400 transition">
              {skill.name}
            </h3>
            <Tooltip id={`tooltip-${index}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}