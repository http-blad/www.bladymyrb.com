import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultTestimonials = [
    {
      quote: "An exceptional developer who always delivers quality work. Highly recommended for any software project.",
      author: "John Doe",
      role: "CTO at Tech Company"
    },
    {
      quote: "Working with them was a pleasure. Their attention to detail and problem-solving skills are outstanding.",
      author: "Jane Smith",
      role: "Senior Developer at Startup"
    },
    {
      quote: "A fast learner with great communication skills. They made our project a success.",
      author: "Mike Johnson",
      role: "Project Manager"
    },
  ];

  const items = testimonials?.length ? testimonials : defaultTestimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100"
    >
      <div className="flex items-center gap-2 mb-6">
        <Quote className="w-5 h-5 text-slate-400" />
        <h2 className="text-xl font-bold text-slate-900">Recommendations</h2>
      </div>

      <div className="relative min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <p className="text-slate-600 leading-relaxed italic">
              "{items[currentIndex].quote}"
            </p>
            <div>
              <p className="font-semibold text-slate-900">{items[currentIndex].author}</p>
              <p className="text-sm text-slate-500">{items[currentIndex].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        {items.length > 1 && (
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-slate-900' : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prev}
                className="h-8 w-8 rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={next}
                className="h-8 w-8 rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}