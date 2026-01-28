import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CertificationsSection({ certifications, showViewAll = false }) {
  const defaultCerts = [
    { name: 'Certification One', issuer: 'Organization' },
    { name: 'Certification Two', issuer: 'Company' },
    { name: 'Certification Three', issuer: 'Platform' },
    { name: 'Certification Four', issuer: 'Institute' },
  ];

  const items = certifications?.length ? certifications : defaultCerts;

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
          <Award className="w-5 h-5 text-slate-400" />
          <h2 className="text-xl font-bold text-slate-900">Recent Certifications</h2>
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
        {items.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all bg-white"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 group-hover:text-slate-700 text-sm">{cert.name}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{cert.issuer}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}