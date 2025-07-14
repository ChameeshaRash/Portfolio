import React from "react";

export const FooterSection = (): JSX.Element => {

  return (
    <footer className="bg-[#0e0e0e] text-[#d6d6d6] pt-10 pb-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <img src="/bmc-logo.png" alt="TIP Voyage Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-white tracking-tight">TIP Voyage</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-base font-medium">
          <a href="/" className="hover:text-[#BBEB00] transition-colors">Home</a>
          <a href="/?scrollTo=services" className="hover:text-[#BBEB00] transition-colors">Services</a>
          <a href="/?scrollTo=collaborations" className="hover:text-[#BBEB00] transition-colors">Collabs</a>
          <a href="/linktree" className="hover:text-[#BBEB00] transition-colors">Ai Links</a>
          <a href="/?scrollTo=products" className="hover:text-[#BBEB00] transition-colors">Products</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-3 mt-6 md:mt-0">
          <a href="https://youtube.com/@tipvoyage" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-[#0e0e0e] rounded-full p-2 shadow hover:bg-[#BBEB00] transition-colors group">
            <img src="/yt.svg" alt="YouTube" className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://tiktok.com/@tipvoyage" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="bg-[#0e0e0e] rounded-full p-2 shadow hover:bg-[#BBEB00] transition-colors group">
            <img src="/tiktok.svg" alt="TikTok" className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://facebook.com/tipvoyage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-[#0e0e0e] rounded-full p-2 shadow hover:bg-[#BBEB00] transition-colors group">
            <img src="/fb.svg" alt="Facebook" className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://instagram.com/tipvoyage" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-[#0e0e0e] rounded-full p-2 shadow hover:bg-[#BBEB00] transition-colors group">
            <img src="/insta.svg" alt="Instagram" className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://x.com/tipvoyage" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-[#0e0e0e] rounded-full p-2 shadow hover:bg-[#BBEB00] transition-colors group">
            <img src="/livesvg.svg" alt="Twitter" className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#161616] my-8" />

      {/* Copyright */}
      <p className="text-center text-xs text-[#888] tracking-wide">
        © {new Date().getFullYear()}, All Rights Reserved by TIP Voyage
      </p>
    </footer>
  );
};