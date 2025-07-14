import React from "react";

const collaborations = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    url: "https://www.microsoft.com/",
    name: "Microsoft",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
    url: "https://www.apple.com/",
    name: "Apple",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    url: "https://www.google.com/",
    name: "Google",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    url: "https://www.netflix.com/",
    name: "Netflix",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Twitter_Logo_2012.svg",
    url: "https://www.twitter.com/",
    name: "Twitter",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Facebook_logo_36x36.svg",
    url: "https://www.facebook.com/",
    name: "Facebook",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
    url: "https://www.instagram.com/",
    name: "Instagram",
  },
];

export const HeroSection = ({ id }: { id?: string }): JSX.Element => {
  return (
    <section id={id} className="flex flex-col items-center gap-8 lg:gap-[59px] w-full px-4 sm:px-6 lg:px-8 xl:px-[20%]">
      <h2 className="font-display-font-display-lg font-bold text-white text-2xl sm:text-3xl lg:text-[48px] text-center mb-6">
        Our Collaborations
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-6xl">
        {collaborations.map((collab, idx) => (
          <a
            key={idx}
            href={collab.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white rounded-lg shadow hover:scale-105 transition-transform flex items-center justify-center"
            title={collab.name}
          >
            <img
              src={collab.logo}
              alt={collab.name}
              className="max-h-16 w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
};