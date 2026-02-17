'use client';

import {
  FaPaintBrush,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaBrain,
  FaNodeJs,
  FaShieldAlt,
} from 'react-icons/fa';

export default function About() {
  const skills = [
    { name: 'Frontend Developer', icon: <FaCode size={24} /> },
    { name: 'UI/UX Design', icon: <FaPaintBrush size={24} /> },
    { name: 'HTML', icon: <FaHtml5 size={24} />, },
    { name: 'CSS', icon: <FaCss3Alt size={24} /> },
    { name: 'JavaScript', icon: <FaJs size={24} /> },
    { name: 'TypeScript', icon: <FaShieldAlt size={24} /> },
    { name: 'React', icon: <FaReact size={24} /> },
    { name: 'Next.js', icon: <FaNodeJs size={24} />},
    { name: 'Backend (Python)', icon: <FaPython size={24} /> },
    { name: 'Pursuing Agentic AI', icon: <FaBrain size={24} /> },
  ];

  return (
    <section
      id="about"
      className="relative py-16 px-6 bg-gray-900 bg-gradient-to-r from-gray-900 via-gray-900 to-orange-900/20 overflow-hidden fonts"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 relative z-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-left relative">
          {/* Glow behind heading */}
          <div className="absolute -top-4 -left-6 w-32 h-32 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>

          <h2 className="text-3xl font-bold mb-6 text-white relative z-10 head_fonts">About Me</h2>
          <p className="mb-6 text-white">
            I'm a UI/UX designer and frontend developer passionate about creating intuitive digital experiences. I focus on mastering the fundamentals of great design and development, blending beauty, functionality, and performance. I work with tools and technologies like Figma, and code with HTML, CSS, JavaScript, TypeScript, React, Next.js, and Python for backend. Currently, I am pursuing expertise in Magnetic AI.
          </p>
          
           <div className="absolute top-40 left-60 w-32 h-32 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>
            <div className="absolute top-110 left-2 w-32 h-32 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>
        </div>

        {/* Skills Section */}
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 font-bold">
          {skills.map((skill) => (
            <a
              key={skill.name}
             
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-800 p-6 rounded-lg w-full transform transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:text-white animate-fade-in"
            >
               <div className="absolute top-30 left-6 w-32 h-32 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>
              <span className="text-orange-400">{skill.icon}</span>
              <span>{skill.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Glowing Circle in bottom-right */}
      <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-orange-500 opacity-30 blur-2xl animate-pulse pointer-events-none z-0"></div>
    </section>
  );
}
