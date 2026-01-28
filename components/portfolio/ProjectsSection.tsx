import React from 'react';
import { FolderOpen, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectsSection({ projects, showViewAll = false }) {
  const defaultProjects = [
    { name: 'Project One', description: 'A brief description of project one', url: 'project-one.com' },
    { name: 'Project Two', description: 'A brief description of project two', url: 'project-two.com' },
    { name: 'Project Three', description: 'AI-powered application', url: 'project-three.com' },
    { name: 'Project Four', description: 'Mobile app solution', url: 'project-four.com' },
  ];

  const items = projects?.length ? projects : defaultProjects;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FolderOpen className="w-5 h-5 text-slate-400" />
          <h2 className="text-xl font-bold text-slate-900">Recent Projects</h2>
        </div>
        {showViewAll && (
          <a 
            href="#" 
            className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1 transition-colors"
          >
            View All <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((project, index) => (
          <motion.a
            key={index}
            href={project.link || `https://${project.url}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -2 }}
            className="group block p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all bg-white"
          >
            <h3 className="font-semibold text-slate-900 group-hover:text-slate-700">{project.name}</h3>
            <p className="text-sm text-slate-500 mt-1">{project.description}</p>
            <div className="flex items-center gap-1 mt-3 text-xs text-slate-400 font-mono">
              <span>{project.url}</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}