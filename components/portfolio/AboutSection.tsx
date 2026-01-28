import React from 'react';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection({ about, featuredImage }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
    >
      {/* About Card */}
      <div className="lg:col-span-2 bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-slate-400" />
          <h2 className="text-xl font-bold text-slate-900">About</h2>
        </div>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          {about?.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          )) || (
            <>
              <p>Add your bio here. Tell visitors who you are, what you do, and what makes you unique.</p>
              <p>Share your journey, your passions, and what drives you professionally.</p>
            </>
          )}
        </div>
      </div>

      {/* Featured Image/Badge */}
      {featuredImage && (
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="lg:col-span-1"
        >
          <a 
            href={featuredImage.link || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            {featuredImage.url ? (
              <img 
                src={featuredImage.url} 
                alt={featuredImage.alt || 'Featured'} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="p-8 text-center">
                <div className="text-white/80 text-sm mb-2">FEATURED</div>
                <div className="text-white text-2xl font-bold">{featuredImage.title || 'Achievement'}</div>
                <div className="text-white/60 text-sm mt-2">{featuredImage.subtitle || 'Description'}</div>
              </div>
            )}
          </a>
        </motion.div>
      )}
    </motion.section>
  );
}