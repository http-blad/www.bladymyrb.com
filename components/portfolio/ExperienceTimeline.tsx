import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperienceTimeline({ experiences }) {
  const defaultExperiences = [
    { title: 'Senior Developer', company: 'Tech Company', year: '2024', type: 'work' },
    { title: 'Full-Stack Developer', company: 'Startup Inc', year: '2022', type: 'work' },
    { title: 'Junior Developer', company: 'Agency Co', year: '2020', type: 'work' },
    { title: 'BS Computer Science', company: 'University', year: '2019', type: 'education' },
    { title: 'Hello World! 👋', company: 'First line of code', year: '2015', type: 'milestone' },
  ];

  const items = experiences?.length ? experiences : defaultExperiences;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100"
    >
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="w-5 h-5 text-slate-400" />
        <h2 className="text-xl font-bold text-slate-900">Experience</h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-200" />

        <div className="space-y-6">
          {items.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative flex gap-4"
            >
              {/* Timeline dot */}
              <div className={`relative z-10 w-4 h-4 rounded-full mt-1 flex-shrink-0 ${
                index === 0 
                  ? 'bg-slate-900' 
                  : exp.type === 'education' 
                    ? 'bg-slate-400' 
                    : exp.type === 'milestone'
                      ? 'bg-amber-400'
                      : 'bg-slate-300'
              }`} />

              {/* Content */}
              <div className="flex-1 pb-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="font-semibold text-slate-900">{exp.title}</h3>
                    <p className="text-sm text-slate-500">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-400 font-medium">{exp.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}