import React, { useState, useEffect } from "react";
import { Link as LinkIcon, ArrowUpRight, Link2Off as LinkOff } from "lucide-react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Header } from "../../layout/Header";
import { SocialMediaBar } from "../../layout/SocialMediaBar";
import linksData from "../../data/links.json";

interface Link {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  icon: string;
}

export const LinkTree = (): JSX.Element => {
  const [links, setLinks] = useState<Link[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    setLinks(linksData.links);
  }, []);

  const categories = ["All", ...Array.from(new Set(links.map(link => link.category)))];
  
  const filteredLinks = selectedCategory === "All" 
    ? links 
    : links.filter(link => link.category === selectedCategory);

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] pt-[100px] sm:pt-[120px] pb-8">
      <Header currentPage="linktree" />
      
      {/* Background effects */}
      <div className="fixed top-[20%] right-[10%] opacity-70 w-24 h-24 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-[#bae800] rounded-full blur-[100px] sm:blur-[150px] lg:blur-[250px]" />
      <div className="fixed top-[60%] left-[5%] opacity-[0.46] w-24 h-24 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-[#bae800] rounded-full blur-[100px] sm:blur-[150px] lg:blur-[250px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[20%]">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#bae800] rounded-full mb-6">
            <LinkIcon className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
          </div>
          
          <h1 className="font-display-font-display-lg font-bold text-white text-2xl sm:text-3xl lg:text-[48px] mb-4">
            Link Tree
          </h1>
          
          <p className="font-body-font-body-lg text-[#d6d6d6] text-sm sm:text-base lg:text-[18px] leading-relaxed max-w-2xl mx-auto">
            Discover our curated collection of AI tools, resources, and guides
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-[#bae800] text-black hover:bg-[#a5cf00]"
                  : "bg-[#161616] text-white hover:bg-[#2a2a2a] border border-gray-600"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredLinks.map((link) => (
            <Card
              key={link.id}
              className="bg-[#161616] border-none hover:bg-[#1a1a1a] transition-colors cursor-pointer group"
              onClick={() => handleLinkClick(link.url)}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#bae800] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <LinkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-headings-font-heading-sm font-semibold text-white text-base sm:text-lg group-hover:text-[#bae800] transition-colors">
                        {link.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#bae800] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                    
                    <p className="font-body-font-body-sm text-[#d6d6d6] text-xs sm:text-sm mb-3 line-clamp-2">
                      {link.description}
                    </p>
                    
                    <span className="inline-block px-2 py-1 bg-[#bae800]/20 text-[#bae800] text-xs rounded-full">
                      {link.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredLinks.length === 0 && (
          <div className="text-center py-12">
            <LinkOff className="w-12 h-12 sm:w-16 sm:h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="font-headings-font-heading-sm font-semibold text-white text-lg sm:text-xl mb-2">
              No links found
            </h3>
            <p className="text-[#d6d6d6] text-sm sm:text-base">
              No links available for the selected category.
            </p>
          </div>
        )}
      </div>

      {/* Social Media Bar */}
      <SocialMediaBar />
    </div>
  );
};