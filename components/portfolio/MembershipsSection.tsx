import React from 'react';
import { Users, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MembershipsSection({ memberships }) {
  const defaultMemberships = [
    { name: 'Professional Association One', link: '#' },
    { name: 'Industry Group Two', link: '#' },
  ];

  const items = memberships?.length ? memberships : defaultMemberships;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100"
    >
      <p className="text-sm text-slate-500 mb-4">A member of</p>
      <div className="space-y-3">
        {items.map((membership, index) => (
          <motion.a
            key={index}
            href={membership.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
          >
            <Users className="w-4 h-4 text-slate-400 group-hover:text-slate-500" />
            <span className="text-sm font-medium">{membership.name}</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}