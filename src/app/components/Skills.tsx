'use client';
import { motion  , Variants } from 'framer-motion';
import { FiUser, FiCpu } from 'react-icons/fi';
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiTailwindcss,
  SiGithub,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiVercel,
  SiLangchain,
  SiPytorch,
  SiHuggingface
} from 'react-icons/si';
import { BiGitBranch } from 'react-icons/bi';
import { DiCss3Full } from 'react-icons/di';
import { TbCloudComputingFilled } from 'react-icons/tb';

export default function AboutSkills() {
  const tools = [
  // Core Web & Full-Stack
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <DiCss3Full className="text-blue-500" /> },
  { name: 'React', icon: <SiReact className="text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  
  // Backend & Databases
  { name: 'Node.js', icon: <SiNodedotjs className="text-emerald-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-slate-500 dark:text-slate-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
  
  // AI & Data Science
  { name: 'LangChain', icon: <SiLangchain className="text-emerald-600" /> },
  { name: 'Vector DBs (Chroma/Qdrant)', icon: <TbCloudComputingFilled className="text-indigo-500" /> },
  { name: 'PyTorch', icon: <SiPytorch className="text-orange-600" /> },
  { name: 'Hugging Face', icon: <SiHuggingface className="text-yellow-400" /> },
  
  // Tools & DevOps
  { name: 'Git', icon: <BiGitBranch className="text-orange-600" /> },
  { name: 'GitHub', icon: <SiGithub className="text-slate-800 dark:text-white" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
  { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> }
];

  // Grid container structure for staggered card appearance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Cards will appear one after another beautifully
      },
    },
  };

  // Single card entrance setting
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 }
    },
  };

  return (
    <div id="about" className="scroll-mt-28 grid grid-cols-1 md:grid-cols-5 gap-8 py-4 items-stretch select-none">
      
      {/* About Box - Smooth slide in from left side */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="md:col-span-2 bg-slate-50 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border rounded-2xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group"
      >
        {/* Decorative corner accent indicator */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-cyber-blue-600/5 dark:to-cyber-blue-600/10 rounded-bl-full transition-all duration-300 group-hover:scale-110" />

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <motion.span 
              whileHover={{ rotate: 360 }} 
              transition={{ duration: 0.5 }}
            >
              <FiUser className="text-cyber-blue-600" />
            </motion.span>
            About Me
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
  I am a <strong className="font-semibold text-slate-800 dark:text-slate-200">Computer Science graduate</strong> and <strong className="font-semibold text-slate-800 dark:text-slate-200">Full-Stack Developer</strong> specializing in the MERN stack, Next.js, and advanced AI integration. With hands-on experience engineering scalable web applications and building intelligent <span className="text-cyber-blue-500 font-medium">AI RAG pipelines</span>—utilizing LangChain and vector databases—I focus on solving complex engineering challenges to deliver high-performance, future-ready software solutions.
</p>
        </div>

        <motion.button 
          whileHover={{ scale: 1.03, x: 4 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 w-fit px-4 py-2 bg-transparent border border-slate-300 dark:border-slate-700 hover:border-cyber-blue-600 dark:hover:border-cyber-blue-500 text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-lg transition-colors flex items-center gap-1 group/btn"
        >
          More About Me 
          <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">&rarr;</span>
        </motion.button>
      </motion.div>

      {/* Skills Box - Controlled Grid reveal */}
      <motion.div 
        id="skills"
        className="scroll-mt-28 md:col-span-3 bg-slate-50 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border rounded-2xl p-6 space-y-5 shadow-sm"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      >
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FiCpu className="text-cyber-blue-600" /> Core Stack
        </h3>

        {/* Inner tools mapping wrapped with staggering master variants */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {tools.map((tool, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.06, 
                y: -4,
                borderColor: "rgba(37, 99, 235, 0.4)",
                boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.05)"
              }}
              className="flex flex-col items-center justify-center p-3 bg-white dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border rounded-xl text-center transition-colors cursor-pointer"
            >
              <motion.span 
                className="text-3xl mb-1.5 inline-block"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.3 }}
              >
                {tool.icon}
              </motion.span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-tight">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </div>
  );
}