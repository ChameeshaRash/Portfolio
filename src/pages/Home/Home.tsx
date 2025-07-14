import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../layout/Header";
import { SocialMediaBar } from "../../layout/SocialMediaBar";
import { ServicesSection } from "../../Sections/ServicesSection";
import { TestimonialsSection as About } from "../../Sections/About";
import { HeroSection as CollaborationSection } from "../../Sections/collaborations/collaborations";
import { EventSection } from "../../Sections/EventSection/EventSection";
import { ProductsSection } from "../../Sections/ProductsSection/ProductsSection";
import { ProductsSection as HeroSection } from "../../Sections/herosection/Herosection";
import { SubscribeSection } from "../../Sections/SubscribeSection/SubscribeSection";
import { FooterSection } from "../../Sections/FooterSection/FooterSection";

export const Home = (): JSX.Element => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.search]);

  return (
    <div className="flex flex-col min-h-screen bg-[#0e0e0e] overflow-hidden relative">
      {/* Header */}
      <Header currentPage="home" />
      <div className="flex-1 flex flex-col items-center gap-8 sm:gap-12 lg:gap-[100px] pt-[100px] sm:pt-[120px] lg:pt-[236px] pb-0">
        {/* Background effects */}
        <div className="top-[200px] sm:top-[300px] lg:top-[512px] right-[20px] sm:right-[50px] lg:left-[1188px] opacity-70 absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-[#bae800] rounded-full blur-[100px] sm:blur-[150px] lg:blur-[250px]" />
        <div className="top-[80px] sm:top-[100px] lg:top-[170px] left-[-10px] sm:left-[-20px] lg:left-[-41px] opacity-[0.46] absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-[#bae800] rounded-full blur-[100px] sm:blur-[150px] lg:blur-[250px]" />

        {/* Hero Section */}
        <HeroSection id="home" />
        {/* Services Section */}
        <ServicesSection id="services" />
        {/* About Section */}
        <About id="about" />
        {/* Collaboration Section */}
        <CollaborationSection id="collaborations" />
        {/* Event Section */}
        {/* <EventSection id="event" /> */}
        {/* Products Section */}
        <ProductsSection id="products" />
        {/* Newsletter Section */}
        <SubscribeSection />
      </div>
      {/* Footer Section always at the bottom */}
      <FooterSection />
      {/* Social Media Bar */}
      <SocialMediaBar />
    </div>
  );
};