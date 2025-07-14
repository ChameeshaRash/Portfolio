import React from "react";
import { Rss, Youtube } from "lucide-react";
import { Button } from "../../ui/button";

export const ProductsSection = ({ id }: { id?: string }): JSX.Element => {
  return (
    <section id={id} className="flex flex-col items-center gap-6 lg:gap-[51px] w-full px-4 sm:px-6 lg:px-8 xl:px-[20%]">
      <div className="flex flex-col items-center gap-6 lg:gap-10 w-full">
        <header className="flex flex-col items-center gap-4 lg:gap-6 w-full max-w-5xl">
          <h1 className="font-display-font-display-xxl font-bold text-center text-5xl sm:text-10xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            <span className="text-white">Your </span>
            <span className="text-[#bae800]">Sinhala</span>
            <span className="text-white"> Guide to the AI Revolution</span>
          </h1>

          <p className="font-body-font-body-lg text-[#d6d6d6] text-center text-sm sm:text-base lg:text-[18px] leading-relaxed max-w-2xl px-4">
            From smart shortcuts to game-changing apps, we decode the future of
            tech—served fresh in Sinhala.
            <br className="hidden sm:block" /> 
            💡 Empower your day. Work smarter, not harder.
          </p>
        </header>

        <div className="flex items-center justify-center w-full">
          <Button
            variant="outline"
            className="group flex items-center justify-center gap-3 lg:gap-4 rounded-full border border-solid border-[#ff5252] bg-transparent transition-colors duration-300 hover:bg-[#ff0000]/90 hover:border-[#ff0000]"
            style={{ padding: '16px 32px', height: 'auto', width: 'auto' }}
            onClick={() => window.open("https://www.youtube.com/@TipVoyage", "_blank", "noopener,noreferrer")}
          >
            <span className="font-body-font-body-lg text-[#d6d6d6] text-center text-sm sm:text-base lg:text-[18px] whitespace-nowrap">
              Subscribe Tip Voyage
            </span>
            <Youtube style={{ width: 'auto', height: 'auto' }} className="text-[#ff0000] group-hover:text-white transition-colors duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};