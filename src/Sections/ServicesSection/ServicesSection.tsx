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
      description:
        "Bring your stories to life with AI-powered video magic. Create stunning visuals effortlessly—perfect for Sinhala content creators!",
      buttonText: "Contact us",
    },
    {
      image: "/marketing.svg",
      imageAlt: "Email marketing and",
      title: "brand promotion",
      description:
        "Boost your presence with AI-driven strategies. Let's amplify your Sinhala brand to new heights!",
      buttonText: "Book Service",
    },
    {
      image: "/livesvg.svg",
      imageAlt: "Live session",
      title: "live sessions",
      description:
        "Join interactive sessions to master AI tools. Connect, learn, and grow with our community!",
      buttonText: "Book Service",
    },
  ];

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col items-start gap-6 lg:gap-12 p-4 sm:p-6 lg:p-8 relative w-full rounded-2xl overflow-hidden xl:px-[20%]"
    >
      <h2 className="relative w-full font-headings-font-heading-xl font-bold text-white text-xl sm:text-2xl lg:text-[36px] text-center">
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 relative w-full">
        {services.map((service, index) => (
          <Card
            key={index}
            className="flex flex-col h-full bg-[#0E0E0E] rounded-lg border-none overflow-hidden hover:bg-[#1a1a1a] transition-colors"
          >
            <div className="flex items-center justify-center p-4 sm:p-6 min-h-[180px] sm:min-h-[200px] lg:min-h-[232px]">
              <img
                className="max-h-[150px] sm:max-h-[170px] lg:max-h-[200px] w-auto object-contain"
                alt={service.imageAlt}
                src={service.image}
              />
            </div>

            <CardContent className="flex flex-col justify-between flex-1 p-4 sm:p-6 gap-4">
              <div className="flex flex-col gap-3">
                <h3 className="font-headings-font-heading-sm font-semibold text-[#d6d6d6] text-base sm:text-lg lg:text-[20px] text-center">
                  {service.title}
                </h3>

                <p className="font-body-font-body-sm text-[#d6d6d6] text-sm text-center flex-1 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <Button className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-[#BBEB00] rounded-full text-black hover:bg-[#a5cf00] transition-colors mt-auto">
                <span className="font-body-font-body-sm text-sm whitespace-nowrap">
                  {service.buttonText}
                </span>
                <ArrowRight className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
};
