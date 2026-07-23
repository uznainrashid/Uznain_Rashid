'use client';
import { motion , Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiFolder, FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import { projectsData } from '../lib/data';

export default function Projects() {
  // Home page par sirf top 2 projects display karne ke liye
  const featuredProjects = projectsData.slice(0, 2);

  // Stagger wrapper settings for individual grids
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // Card slide-up reveal logic
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 }
    },
  };

  return (
    <section id="projects" className="scroll-mt-28 space-y-8 select-none">
      
      {/* Header Block with smooth side slide */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <FiFolder className="text-cyber-blue-600" />
          </motion.span>
          Featured Projects
        </h2>
        <Link 
          href="/projects" 
          className="text-sm font-semibold text-cyber-blue-600 dark:text-cyber-blue-400 inline-flex items-center gap-1 group/link transition-all"
        >
          View All{' '}
          <motion.span 
            className="inline-block" 
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FiArrowRight className="group-hover/link:text-cyber-blue-700 dark:group-hover/link:text-cyber-blue-300" />
          </motion.span>
        </Link>
      </motion.div>

      {/* Projects Parent Wrapper Grid (Only 2 Cards) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              borderColor: "rgba(37, 99, 235, 0.35)",
              boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.06)"
            }}
            className="group bg-slate-50 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border rounded-2xl overflow-hidden flex flex-col justify-between transition-colors shadow-sm duration-300"
          >
            <div>
              {/* Image Box with premium tilt/scale mask */}
              <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-900 border-b border-slate-200 dark:border-cyber-border overflow-hidden">
                <Image 
                  src={project.image_url} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
                {/* Overlay gradient mask on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content Box */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyber-blue-600 dark:group-hover:text-cyber-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-2 py-0.5 bg-white dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-[10px] font-semibold text-slate-500 dark:text-slate-400 rounded-md shadow-2xs group-hover:border-cyber-blue-600/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Links */}
            <div className="p-5 pt-0 flex items-center justify-between text-xs font-semibold">
              <motion.a 
                href={project.live_url} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 2 }}
                className="text-cyber-blue-600 dark:text-cyber-blue-400 inline-flex items-center gap-1 hover:text-cyber-blue-700 dark:hover:text-cyber-blue-300"
              >
                Live Demo <FiExternalLink className="text-xs" />
              </motion.a>
              
              <motion.a 
                href={project.github_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.2, rotate: 8 }}
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <FiGithub size={18} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
    </section>
  );
}