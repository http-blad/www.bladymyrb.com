import React from 'react';
import { Mic, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export default function SpeakingSection({ email, description }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100"
    >
      <h3 className="text-sm font-semibold text-slate-700 mb-2">Speaking</h3>
      <p className="text-slate-500 text-sm mb-4">
        {description || "Available for speaking at events about software development and emerging technologies."}
      </p>
      <Button
        variant="outline"
        size="sm"
        asChild
        className="rounded-lg"
      >
        <a href={`mailto:${email || 'hello@example.com'}`}>
          <Mail className="w-4 h-4 mr-2" />
          Get in touch
        </a>
      </Button>
    </motion.section>
  );
}