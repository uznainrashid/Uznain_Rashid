'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence , Variants } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

// Dynamic Roles Array
const roles = [
  "Full Stack Developer & AI Integrator",
  "MERN Stack Specialist",
  "RAG & AI Agent Architect",
  "Next.js Systems Engineer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Dynamic roles cycler hook (2.5 seconds optimal speed)
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 select-none">
      
      {/* Left Details Block */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-6 text-center md:text-left"
      >
        {/* Dynamic Animated Pill Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyber-blue-500/10 text-cyber-blue-600 dark:text-cyber-blue-400 text-xs font-medium border border-blue-500/20 shadow-inner h-8 min-w-[280px] justify-center md:justify-start"
        >
          <span className="w-2 h-2 rounded-full bg-cyber-blue-500 animate-ping flex-shrink-0"></span>
          
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="truncate"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue-600 to-cyber-blue-400 drop-shadow-sm">Uznain Rashid</span> 
        </motion.h1>

        {/* Tagline Paragraph (SEO Optimized) */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-600 dark:text-slate-400 text-lg max-w-xl leading-relaxed"
        >
          I am a <strong className="font-semibold text-slate-800 dark:text-slate-200">Full-Stack Software Engineer</strong> specializing in building scalable web applications using the <span className="text-cyber-blue-500 font-medium">MERN stack</span> and <span className="text-cyber-blue-500 font-medium">Next.js</span>. With hands-on experience developing robust RESTful APIs and integrating <strong className="font-semibold text-slate-800 dark:text-slate-200">AI workflows</strong>—including RAG systems and LangChain—I engineer high-performance, intelligent digital products.
        </motion.p>

        {/* Buttons Group */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
        >
          <motion.a 
            href="/#projects" 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-blue-600 hover:bg-cyber-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-cyber-blue-600/20"
          >
            View Projects <motion.span className="inline-block" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 200 }}>→</motion.span>
          </motion.a>
          
          <motion.a 
            href="/#contact" 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg transition-colors hover:text-cyber-blue-600 dark:hover:text-cyber-blue-400"
          >
            Contact Me 
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center md:justify-start gap-4 pt-4 text-slate-500 dark:text-slate-400"
        >
          {[
            { icon: <FiGithub size={20} />, href: "https://github.com/uznainrashid" },
            { icon: <FiLinkedin size={20} />, href: "https://www.linkedin.com/in/uznain-rashid-806442321/" },
            { icon: <FiTwitter size={20} />, href: "https://twitter.com/uznainrashid" },
            { icon: <FiInstagram size={20} />, href: "https://instagram.com/uznain_1" },
            { icon: <FiMail size={20} />, href: "mailto:uznainrashid@gmail.com" },
          ].map((social, idx) => (
            <motion.a 
              key={idx} 
              href={social.href} 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5, boxShadow: "0px 10px 20px rgba(37, 99, 235, 0.15)" }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border hover:text-cyber-blue-600 dark:hover:text-cyber-blue-400 hover:border-cyber-blue-600/50 transition-colors shadow-sm"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Side Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className="relative flex justify-center items-center"
      >
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute w-72 h-72 bg-cyber-blue-600 rounded-full filter blur-3xl -z-10"
        ></motion.div>
        
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-[6px] border-white dark:border-cyber-card shadow-2xl shadow-slate-200 dark:shadow-cyber-blue-600/5 bg-slate-100 dark:bg-slate-900 group"
        >
          <Image
            src="/uznain-rashid.png"
            alt="Uznain Rashid"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </motion.div>

    </section>
  );
}