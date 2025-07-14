import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { motion } from 'framer-motion';

export const ServicesSection = ({ id }: { id?: string }): JSX.Element => {
  const services = [
    {
      image: "/videoplaylist.svg",
      imageAlt: "Video playlist",
      title: "AI video creation",
      subtitle: "Unleash Creativity",
      description:
        "Bring your stories to life with AI-powered video magic. Create stunning visuals effortlessly—perfect for Sinhala content creators!",
      buttonText: "Contact us",
      price: "From $49",
      badge: null,
    },
    {
      image: "/marketing.svg",
      imageAlt: "Email marketing and",
      title: "brand promotion",
      subtitle: "Grow Your Brand",
      description:
        "Boost your presence with AI-driven strategies. Let's amplify your Sinhala brand to new heights!",
      buttonText: "Book Service",
      price: "From $99",
      badge: "Most Popular",
    },
    {
      image: "/livesvg.svg",
      imageAlt: "Live session",
      title: "live sessions",
      subtitle: "Master AI Live",
      description:
        "Join interactive sessions to master AI tools. Connect, learn, and grow with our community!",
      buttonText: "Book Service",
      price: "From $29",
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
      <h2 className="relative w-full font-headings-font-heading-xl font-bold text-white text-xl sm:text-2xl lg:text-[36px] text-center">
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            className="relative group rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-[#181818] to-[#0E0E0E] border border-[#232323] hover:shadow-2xl hover:border-[#BBEB00] transition-all duration-300 cursor-pointer flex flex-col min-h-full h-full"
            style={{ minHeight: '100%' }}
          >
            {/* Badge */}
            {service.badge && (
              <span className="absolute top-4 left-4 z-10 bg-[#BBEB00] text-black text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                {service.badge}
              </span>
            )}
            {/* Image with gradient overlay */}
            <div className="relative w-full h-56 flex items-center justify-center">
              <img
                className="w-full h-full object-contain rounded-t-2xl"
                alt={service.imageAlt}
                src={service.image}
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            </div>
            <CardContent className="flex flex-col items-center gap-3 p-6 flex-1 w-full justify-between">
              <h3 className="font-headings-font-heading-sm font-bold text-white text-xl lg:text-2xl text-center mb-1">
                {service.title}
              </h3>
              <span className="text-[#BBEB00] text-sm font-semibold mb-1 tracking-wide uppercase">{service.subtitle}</span>
              <p className="text-[#d6d6d6] text-base text-center mb-2 min-h-[48px]">
                {service.description}
              </p>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#BBEB00] text-lg font-bold tracking-wide drop-shadow">{service.price}</span>
              </div>
              <Button
                className="mt-2 px-10 py-4 bg-[#BBEB00] text-black font-extrabold text-lg rounded-lg shadow-lg hover:bg-[#bae800] transition-colors animate-pulse group-hover:scale-105 group-hover:shadow-[#BBEB00]/40 inline-flex items-center gap-2"
              >
                <span className="font-body-font-body-sm text-sm whitespace-nowrap">
                  {service.buttonText}
                </span>
                <ArrowRight className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
              </Button>
            </CardContent>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
