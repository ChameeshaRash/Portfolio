import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../layout/Header";

// Use online images as placeholders
const images = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    driveUrl: 'https://drive.google.com/file/d/your-placeholder-id-1/view?usp=sharing',
    alt: 'AI Art 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    driveUrl: 'https://drive.google.com/file/d/your-placeholder-id-2/view?usp=sharing',
    alt: 'AI Art 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    driveUrl: 'https://drive.google.com/file/d/your-placeholder-id-3/view?usp=sharing',
    alt: 'AI Art 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    driveUrl: 'https://drive.google.com/file/d/your-placeholder-id-4/view?usp=sharing',
    alt: 'AI Art 4',
  },
  // Add more as needed
];

export default function AiGalleryPage() {
  const [selected, setSelected] = useState<typeof images[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#0e0e0e] pb-16">
      <Header currentPage="home" />
      <div className="pt-32 px-4 sm:px-6 lg:px-8 xl:px-[20%]">
        <h1 className="font-display-font-display-lg font-bold text-white text-3xl sm:text-4xl lg:text-[48px] text-center mb-10">
          AI Images & Videos
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src + i}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group bg-[#181818] transition-shadow shadow-lg hover:shadow-2xl aspect-[4/5]"
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative bg-[#181818] rounded-2xl shadow-xl p-4 max-w-[90vw] max-h-[90vh] flex flex-col items-center"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <img
                src={selected?.src}
                alt={selected?.alt}
                className="max-w-[80vw] max-h-[70vh] rounded-xl mb-4"
                draggable={false}
              />
              <button
                onClick={() => window.open(selected?.driveUrl, '_blank')}
                className="px-8 py-4 bg-[#BBEB00] text-black font-semibold rounded-lg hover:bg-[#bae800] transition-colors"
              >
                Download
              </button>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-2 text-white bg-black/40 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 