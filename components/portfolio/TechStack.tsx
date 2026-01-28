import React from 'react';
import { Layers, ExternalLink } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

export default function TechStack({ techStack, showViewAll = false }) {
  const defaultStack = {
    Frontend: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
    Backend: ['Node.js', 'Python', 'PHP', 'Laravel', 'PostgreSQL', 'MongoDB'],
    'DevOps & Cloud': ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
  };

  const stack = techStack || defaultStack;

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
          <Layers className="w-5 h-5 text-slate-400" />
          <h2 className="text-xl font-bold text-slate-900">Tech Stack</h2>
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

      <div className="space-y-5">
        {Object.entries(stack).map(([category, skills], catIndex) => (
          <div key={category}>
            <h3 className="text-sm font-semibold text-slate-700 mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: (catIndex * 0.1) + (index * 0.05) }}
                >
                  <Badge 
                    variant="secondary" 
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}