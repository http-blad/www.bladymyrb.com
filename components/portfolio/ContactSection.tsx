import React from 'react';
import { Mail, Calendar, MessageCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection({ contact }) {
  const defaultContact = {
    email: 'hello@example.com',
    calendlyLink: '#',
    communityLink: '#',
  };

  const info = contact || defaultContact;

  const contactItems = [
    { icon: Mail, label: 'Email', value: info.email, href: `mailto:${info.email}` },
    { icon: Calendar, label: "Let's Talk", value: 'Schedule a Call', href: info.calendlyLink },
    { icon: MessageCircle, label: 'Community', value: 'Join Discussion', href: info.communityLink },
  ].filter(item => item.href && item.href !== '#');

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target={item.href.startsWith('mailto') ? undefined : '_blank'}
            rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -2 }}
            className="group flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all bg-white"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors">
              <item.icon className="w-5 h-5 text-slate-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-500">{item.label}</p>
              <p className="text-sm font-medium text-slate-900 truncate">{item.value}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-slate-400 transition-colors flex-shrink-0" />
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}