import React from "react";
import { Card, CardContent } from "../../ui/card";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export const TestimonialsSection = ({ id }: { id?: string }): JSX.Element => {
  return (
    <section id={id} className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-[#bae800] sm:text-4xl lg:text-5xl">
              Hey 👋 I am <br className="block sm:hidden" />
              Chameesha Rashani
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-white md:mt-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <p className="mt-4 text-xl text-white md:mt-8 flex flex-wrap items-center gap-4">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                <span className="relative"> Have a question? </span>
              </span>
              <br className="block sm:hidden" />
              Ask me on:
              <a
                href="https://www.facebook.com/profile.php?id=61560966515578"
                title="Facebook"
                className="flex items-center gap-1 transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                target="_blank" rel="noopener noreferrer"
              >
                <FaFacebook className="w-5 h-5" /> Facebook
              </a>
              <a
                href="https://www.instagram.com/tip.voyage/?hl=en"
                title="Instagram"
                className="flex items-center gap-1 transition-all duration-200 text-pink-500 hover:text-pink-600 hover:underline"
                target="_blank" rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" /> Instagram
              </a>
              <a
                href="https://www.tiktok.com/@tipvoyage3?_t=ZS-8y1BvSkoRKp&_r=1"
                title="TikTok"
                className="flex items-center gap-1 transition-all duration-200 text-black hover:text-gray-700 hover:underline"
                target="_blank" rel="noopener noreferrer"
              >
                <FaTiktok className="w-5 h-5" /> TikTok
              </a>
            </p>
          </div>

          <div className="relative">
            <img
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            />

            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
