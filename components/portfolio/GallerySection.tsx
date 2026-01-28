import React, { useState } from 'react';
import { Image, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GallerySection({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const defaultImages = [
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
  ];

  const items = images?.length ? images : defaultImages;

  return (
    <>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100"
      >
        <div className="flex items-center gap-2 mb-6">
          <Image className="w-5 h-5 text-slate-400" />
          <h2 className="text-xl font-bold text-slate-900">Gallery</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {items.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(typeof image === 'string' ? image : image.url)}
              className="aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={typeof image === 'string' ? image : image.url}
                alt={typeof image === 'string' ? `Gallery ${index + 1}` : image.alt || `Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}