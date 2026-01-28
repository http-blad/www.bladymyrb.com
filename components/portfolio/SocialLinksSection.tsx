import React from 'react';
import { Linkedin, Github, Instagram, Twitter, Globe, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  website: Globe,
};

export default function SocialLinksSection({ links }) {
  const defaultLinks = [
    { platform: 'linkedin', url: '#', label: 'LinkedIn' },
    { platform: 'github', url: '#', label: 'GitHub' },
    { platform: 'instagram', url: '#', label: 'Instagram' },
  ];

  const items = links?.length ? links : defaultLinks;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100"
    >
      <h3 className="text-sm font-semibold text-slate-700 mb-4">Social Links</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((link, index) => {
          const Icon = iconMap[link.platform.toLowerCase()] || Globe;
          return (
            <motion.a
              key={index}
              href={link.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:shadow-sm transition-all bg-white"
              title={link.label}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{link.label}</span>
            </motion.a>
          );
        })}
      </div>
    </motion.section>
  );
}