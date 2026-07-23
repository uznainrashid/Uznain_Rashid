'use client';
import { motion , Variants } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import { experienceData } from '../lib/data';

export default function Experience() {
  // Master wrapper settings for structural delay orchestration
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Har experience block cascade flow me load hoga
      },
    },
  };

  // Card slide & fade logic from timeline vector
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 }
    },
  };

  return (
    <section id="experience" className="scroll-mt-28 max-w-3xl space-y-8 select-none">
      
      {/* Title block layout with subtle side animation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <FiBriefcase className="text-cyber-blue-600" />
          </motion.span>
          Journey & Experience
        </h2>
      </motion.div>

      {/* Main Timeline Grid Track */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="border-l-2 border-slate-200 dark:border-cyber-border ml-3 space-y-10 relative"
      >
        {experienceData.map((exp) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className="relative pl-8 group cursor-default"
          >
            {/* Outer Ring Dynamic Pulse Ring Effect on Card Hover */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-cyber-bg border-2 border-slate-300 dark:border-cyber-border group-hover:border-cyber-blue-600 dark:group-hover:border-cyber-blue-500 transition-all duration-300 z-10">
              <div className="w-full h-full rounded-full bg-transparent group-hover:bg-cyber-blue-600 scale-0 group-hover:scale-100 transition-transform duration-300 flex items-center justify-center">
                {/* Core inner dot element */}
                <div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Glowing ripple background indicator for active timelines */}
            <div className="absolute -left-[17px] top-[1.5px] w-8 h-8 rounded-full bg-cyber-blue-600/0 group-hover:bg-cyber-blue-600/10 dark:group-hover:bg-cyber-blue-500/10 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xs -z-0" />
            
            {/* Content Container Frame with smooth hover shift */}
            <motion.div 
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyber-blue-600 dark:group-hover:text-cyber-blue-400 transition-colors duration-300">
                  {exp.role}
                </h3>
                
                {/* Date Badge framework */}
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border px-2.5 py-1 rounded-md w-fit group-hover:border-cyber-blue-600/20 dark:group-hover:border-cyber-blue-600/20 transition-colors">
                  {exp.date}
                </span>
              </div>
              
              <h4 className="text-sm text-cyber-blue-600 dark:text-cyber-blue-400 font-semibold tracking-wide">
                {exp.company}
              </h4>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed max-w-2xl">
                {exp.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      
    </section>
  );
}