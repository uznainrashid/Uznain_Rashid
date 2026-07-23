'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 15 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none ${
        scrolled 
          ? 'bg-white/80 dark:bg-cyber-bg/80 backdrop-blur-md border-b border-slate-200 dark:border-cyber-border shadow-lg shadow-cyber-blue-600/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Interactive Shake */}
        <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-1 group">
          <motion.span 
            whileHover={{ scale: 1.1, rotate: -10 }}
            className="text-cyber-blue-600 font-extrabold text-2xl transition-transform"
          >
            &lt;
          </motion.span> 
          <span className="tracking-tight group-hover:text-cyber-blue-600  transition-colors duration-300">
            Uznain <span className="text-cyber-blue-600">Rashid</span>
          </span>
          <motion.span 
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="text-cyber-blue-600 font-extrabold text-2xl transition-transform"
          >
            /&gt;
          </motion.span>
        </Link>

        {/* Desktop Links & Toggles */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          <div className="flex items-center gap-1 relative py-2">
           {navLinks.map((link, idx) => (
  <Link 
    key={link.name} 
    href={link.href} 
    onMouseEnter={() => setHoveredIndex(idx)}
    onMouseLeave={() => setHoveredIndex(null)}
    className="relative px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 z-10"
  >
    <span className="relative z-20">{link.name}</span>
    
    {/* FIXED CONDITION: strict check lagayi hai taake empty state me box na dikhe */}
    {hoveredIndex !== null && hoveredIndex === idx && (
      <motion.span
        layoutId="navHoverPill"
        className="absolute inset-0 bg-slate-100 dark:bg-cyber-card rounded-lg z-0 border border-transparent dark:border-cyber-border/30"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
      />
    )}
  </Link>
))}
          </div>
          
          <div className="w-[1px] h-5 bg-slate-200 dark:bg-cyber-border mx-2" />

          {/* Theme Switcher Button */}
          <div className="hover:scale-105 transition-transform">
            <ThemeToggle />
          </div>

          {/* Magnetic Download CV Button */}
         {/* Magnetic Download CV Button */}
<motion.a 
  href="/uznain.pdf" // Public folder ka direct path
  download="uznain.pdf" // Yeh attribute click karne par automatically download trigger karega
  whileHover={{ scale: 1.05, y: -1 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg border border-cyber-blue-600 text-cyber-blue-600 hover:bg-cyber-blue-600 hover:text-white transition-all duration-300 shadow-sm shadow-cyber-blue-600/5 hover:shadow-cyber-blue-600/20"
>
  Download CV <FiDownload className="animate-bounce" style={{ animationDuration: '2.5s' }} />
</motion.a>
        </nav>

        {/* Mobile Buttons Layout */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-1" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Collapse Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 dark:bg-cyber-card/95 backdrop-blur-md border-b border-slate-200 dark:border-cyber-border"
          >
            <nav className="flex flex-col px-6 py-6 space-y-3">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="block py-1 text-slate-600 dark:text-slate-400 hover:text-cyber-blue-600 dark:hover:text-cyber-blue-400 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 border-t border-slate-200 dark:border-cyber-border"
              >
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 border border-cyber-blue-600 text-cyber-blue-600 rounded-lg w-full justify-center font-semibold hover:bg-cyber-blue-600 hover:text-white transition-all">
                  Download CV <FiDownload />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}