import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BeyondCoding({ content }) {
  const defaultContent = {
    paragraph1: "When not writing code, I focus on learning about emerging technologies, minimalism, and startup culture.",
    paragraph2: "I share my knowledge through content creation and community building."
  };

  const { paragraph1, paragraph2 } = content || defaultContent;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100"
    >
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-slate-400" />
        <h2 className="text-xl font-bold text-slate-900">Beyond Coding</h2>
      </div>
      <div className="space-y-3 text-slate-600 leading-relaxed">
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
      </div>
    </motion.section>
  );
}