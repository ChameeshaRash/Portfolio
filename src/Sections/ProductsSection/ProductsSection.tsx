import React from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { motion } from 'framer-motion';

export const ProductsSection = ({ id }: { id?: string }): JSX.Element => {
  const products = [
    {
      title: "Tshirt",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
      link: "https://example.com/tshirt",
      description: "Premium cotton, AI-inspired design. Limited stock!",
      price: "$29",
      badge: "Best Seller",
    },
    {
      title: "Template",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      link: "https://example.com/template",
      description: "Boost your workflow with our pro template.",
      price: "$12",
      badge: null,
    },
    {
      title: "Ebook",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      link: "https://example.com/ebook",
      description: "Unlock secrets to success with this exclusive guide.",
      price: "$9",
      badge: null,
    },
  ];

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col items-center gap-8 w-full px-4 sm:px-6 lg:px-8 xl:px-[20%]"
    >
      <h2 className="font-display-font-display-lg font-bold text-white text-2xl sm:text-3xl lg:text-[48px] text-center mb-6">
        Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {products.map((product, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            className="relative group rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-[#181818] to-[#0E0E0E] border border-[#232323] hover:shadow-2xl hover:border-[#BBEB00] transition-all duration-300 cursor-pointer"
          >
            {/* Badge */}
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 bg-[#BBEB00] text-black text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                {product.badge}
              </span>
            )}
            {/* Image with gradient overlay */}
            <div className="relative w-full h-56 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-t-2xl"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            </div>
            <CardContent className="flex flex-col items-center gap-3 p-6">
              <h3 className="font-headings-font-heading-sm font-bold text-white text-xl lg:text-2xl text-center mb-1">
                {product.title}
              </h3>
              <p className="text-[#d6d6d6] text-base text-center mb-2 min-h-[48px]">
                {product.description}
              </p>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#BBEB00] text-lg font-bold tracking-wide drop-shadow">{product.price}</span>
              </div>
              <Button
                asChild
                className="mt-2 px-10 py-4 bg-[#BBEB00] text-black font-extrabold text-lg rounded-lg shadow-lg hover:bg-[#bae800] transition-colors animate-pulse group-hover:scale-105 group-hover:shadow-[#BBEB00]/40"
              >
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                  Grab It
                </a>
              </Button>
            </CardContent>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
