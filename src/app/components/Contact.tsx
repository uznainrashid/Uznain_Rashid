'use client';

import { useState, useEffect } from 'react';
import { motion , Variants } from 'framer-motion';
import { FiSend, FiMapPin, FiMessageSquare, FiClock, FiLoader } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (json.success) {
        toast.success('Message sent! Check your Gmail inbox.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(json.error || 'Something went wrong');
      }
    } catch (err) {
      toast.error('Network error. Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  // Smooth scroll handler jab kisi external page se `/#contact` par landing ho
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#contact') {
      const element = document.getElementById('contact');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  // Stagger entry configuration for elements
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants  = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  return (
    <section id="contact" className="min-h-[80vh] flex items-center justify-center py-12 select-none scroll-mt-20">
      {/* Toast Notifications */}
      <Toaster position="top-right" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center relative">
        
        {/* Dedicated Page Background Blur Neon Glow */}
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-cyber-blue-600/10 dark:bg-cyber-blue-600/10 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-cyber-blue-600/5 dark:bg-cyber-blue-600/5 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>

        {/* LEFT SIDE: Heading, Tagline & Info Tiles */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:col-span-2 space-y-6 text-center md:text-left w-full"
        >
          {/* Animated Active Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue-500/10 text-cyber-blue-600 dark:text-cyber-blue-400 text-xs font-medium border border-blue-500/20 shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-blue-500 animate-pulse"></span>
            Let's Collaborate
          </motion.div>

          {/* Big Hero-style Page Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue-600 to-cyber-blue-400 drop-shadow-sm">Touch</span> 🚀
          </motion.h1>

          {/* Sub-text description */}
          <motion.p 
            variants={itemVariants}
            className="text-slate-600 dark:text-slate-400 text-base leading-relaxed"
          >
            Have an exciting project in mind, looking for a full-stack developer, or just want to say hi? Drop a message, and I'll get back to you as soon as possible.
          </motion.p>

          {/* Quick Connect Row Cards Matrix */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            
            {/* Email Box */}
            <a 
              href="mailto:uznainrashid@gmail.com"
              className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border rounded-xl shadow-xs hover:border-cyber-blue-600/40 transition-all group"
            >
              <div className="p-2.5 bg-white dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border rounded-lg text-cyber-blue-600">
                <FiMessageSquare size={18} />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email Me</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyber-blue-600 dark:group-hover:text-cyber-blue-400 transition-colors">uznainrashid@gmail.com</p>
              </div>
            </a>

            {/* Location Box */}
            <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border rounded-xl shadow-xs transition-all">
              <div className="p-2.5 bg-white dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border rounded-lg text-cyber-blue-600">
                <FiMapPin size={18} />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Location</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Kasur, Punjab, Pakistan</p>
              </div>
            </div>

            {/* Extra Card: Availability Status */}
            <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border rounded-xl shadow-xs transition-all">
              <div className="p-2.5 bg-white dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border rounded-lg text-cyber-blue-600">
                <FiClock size={18} />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Availability</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Open for Freelance & Remote Roles</p>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: Interactive Form Container Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.2, delay: 0.1 }}
          className="md:col-span-3 w-full bg-slate-50 dark:bg-cyber-card border-[6px] border-white dark:border-cyber-card shadow-2xl shadow-slate-200 dark:shadow-cyber-blue-600/5 rounded-2xl p-6 relative group"
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">Your Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name" 
                  className="w-full bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyber-blue-600 focus:ring-1 focus:ring-cyber-blue-600/20 transition-all" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">Your Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email" 
                  className="w-full bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyber-blue-600 focus:ring-1 focus:ring-cyber-blue-600/20 transition-all" 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Your Subject & Project Idea" 
                className="w-full bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyber-blue-600 focus:ring-1 focus:ring-cyber-blue-600/20 transition-all" 
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">Your Message *</label>
              <textarea 
                rows={5} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Describe your idea in detail..." 
                className="w-full bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyber-blue-600 focus:ring-1 focus:ring-cyber-blue-600/20 transition-all resize-none"
              ></textarea>
            </div>

            {/* Premium Button with Loading state */}
            <motion.button 
              type="submit" 
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.01 }}
              whileTap={{ scale: loading ? 1 : 0.99 }}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-cyber-blue-600 hover:bg-cyber-blue-700 disabled:opacity-70 text-white font-semibold text-sm rounded-lg transition-colors shadow-lg shadow-cyber-blue-600/10 group cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <FiLoader className="animate-spin text-lg" /> Sending...
                </>
              ) : (
                <>
                  Send Message 
                  <FiSend className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}