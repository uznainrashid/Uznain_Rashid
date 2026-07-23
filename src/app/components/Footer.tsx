'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  const [year, setYear] = useState<number | string>('---');

  // Next.js hydration error safe dynamic date rendering
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-bg transition-colors duration-300 select-none">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Logo */}
        <Link href="/" className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1 group">
          <motion.span 
            whileHover={{ scale: 1.1, x: -2 }}
            className="text-cyber-blue-600 font-extrabold text-xl transition-transform"
          >
            &lt;
          </motion.span>
          <span className="tracking-tight group-hover:text-cyber-blue-600 dark:group-hover:text-cyber-blue-400 transition-colors duration-300">
            Uznain<span className="text-cyber-blue-600">Rashid</span>
          </span>
          <motion.span 
            whileHover={{ scale: 1.1, x: 2 }}
            className="text-cyber-blue-600 font-extrabold text-xl transition-transform"
          >
            /&gt;
          </motion.span>
        </Link>

        {/* Center: Copyright Statement */}
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center order-3 md:order-2">
          &copy; {year} <span className="font-semibold text-slate-700 dark:text-slate-300">Uznain Rashid</span>. All rights reserved.
        </p>

        {/* Right Side: Quick Social Handles & Scroll Anchor Trigger */}
        <div className="flex items-center gap-4 order-2 md:order-3">
          {/* Quick Mini Social Grid */}
          <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 border-r border-slate-200 dark:border-cyber-border pr-4">
            {[
              { icon: <FiGithub size={15} />, href: "https://github.com/uznainrashid" },
              { icon: <FiLinkedin size={15} />, href: "#" },
              { icon: <FiTwitter size={15} />, href: "#" },
              { icon: <FiInstagram size={15} />, href: "#" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="p-1.5 hover:text-cyber-blue-600 dark:hover:text-cyber-blue-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Scroll To Top Button with Elastic Magnetic Vibe */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-xl bg-slate-50 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-600 dark:text-slate-400 hover:text-cyber-blue-600 dark:hover:text-cyber-blue-400 hover:border-cyber-blue-600/20 dark:hover:border-cyber-blue-600/20 transition-colors shadow-2xs group"
            title="Scroll to Top"
          >
            <FiArrowUp size={16} className="group-hover:animate-pulse" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}