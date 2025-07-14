import React, { useEffect, useRef, useState } from "react";
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
import { GallerySection } from "../../Sections/GallerySection";

export const Home = (): JSX.Element => {
  const location = useLocation();

  // Single blob state
  const [blobPos, setBlobPos] = useState({ x: 0, y: 0 });
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let width = 192, height = 192;
      if (blobRef.current) {
        const rect = blobRef.current.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
      }
      setBlobPos({ x: e.clientX - width / 2, y: e.clientY - height / 2 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const blobStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 50,
    pointerEvents: 'none',
    width: '12rem', // w-48
    height: '12rem', // h-48
    background: '#BBEB00',
    borderRadius: '9999px',
    filter: 'blur(100px)',
    opacity: 0.2,
    transform: `translate3d(${blobPos.x}px, ${blobPos.y}px, 0)`,
    transition: 'transform 0.08s linear',
  };

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
      {/* Single, visible, cursor-following blob */}
      <div ref={blobRef} style={blobStyle} />
      {/* Header */}
      <Header currentPage="home" />
      <div className="flex-1 flex flex-col items-center gap-8 sm:gap-12 lg:gap-[100px] pt-[100px] sm:pt-[120px] lg:pt-[236px] pb-0">
        {/* Hero Section */}
        <HeroSection id="home" />
        <ServicesSection id="services" />
        <About id="about" />
        <CollaborationSection id="collaborations" />
        <GallerySection id="gallery" />
        <ProductsSection id="products" />
        <SubscribeSection />
      </div>
      <FooterSection />
      {/* Social Media Bar */}
      <SocialMediaBar />
    </div>
  );
};

export default Home;