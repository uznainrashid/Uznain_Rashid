// src/app/projects/page.tsx
import { projectsData } from "../lib/data";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function AllProjectsPage() {
  // Sirf pehle 3 projects display karne ke liye
  const displayedProjects = projectsData

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Projects</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base">
            A comprehensive gallery of full-stack systems, dynamic web applications, and AI integrations I've developed.
          </p>
        </div>

        {/* PERFECTLY ALIGNED 3-COLUMN GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 w-full"
            >
              <div>
                {/* Project Image Preview (Consistent Aspect Ratio) */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={project.image_url || "/project-placeholder.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <span className="text-xs text-blue-500 font-semibold uppercase tracking-wider">{project.date}</span>
                  <h2 className="text-xl font-bold mt-1 text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors line-clamp-1">
                    {project.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Dynamic Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tech.map((techItem, index) => (
                      <span 
                        key={index} 
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="p-6 pt-5 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 mt-4">
                {project.github_url && project.github_url !== "#" ? (
                  <a 
                    href={project.github_url}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                  >
                    <FaGithub className="text-lg" /> Code
                  </a>
                ) : <div />}

                {project.live_url && project.live_url !== "#" && (
                  <a 
                    href={project.live_url}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition ml-auto"
                  >
                    Live Demo <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}