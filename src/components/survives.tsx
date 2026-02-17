"use client"
import { motion } from "framer-motion";

export default function ServicesSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
    <section className="fonts py-16 bg-gradient-to-b from-gray-100 to-white">
      {/* What I Can Do For You */}
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="  text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800"
        >
          What <span className="head_fonts text-pink-500">I</span>  Can Do <span className="head_fonts text-pink-500">For You</span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Service Cards */}
          <motion.div
            variants={cardVariants}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">🖥️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">UI/UX Design</h3>
            <p className="text-gray-600 mb-4">
              Designing intuitive and user-friendly interfaces that deliver great user experiences.
            </p>
            <a href="#" className="text-purple-500 hover:underline font-bold">
              Learn More →
            </a>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-pink-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Website Design</h3>
            <p className="text-gray-600 mb-4">
              Crafting modern, responsive websites approaching needs and goals.
            </p>
            <a href="#" className="text-pink-500 hover:underline font-bold">
              Learn More →
            </a>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">📐</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Design Systems</h3>
            <p className="text-gray-600 mb-4">
              Building scalable design systems and documentation to keep your brand consistent.
            </p>
            <a href="#" className="text-purple-500 hover:underline font-bold">
              Learn More →
            </a>
          </motion.div>
        </motion.div>

    
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="font-bold bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition-all duration-300"
          >
            View All Services
          </a>
        </motion.div>

   
      </div>
    </section>
  );
}