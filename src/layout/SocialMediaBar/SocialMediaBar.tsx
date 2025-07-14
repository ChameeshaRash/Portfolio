import React from "react";

const SOCIALS = [
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@tipvoyage3?_t=ZS-8y1BvSkoRKp&_r=1",
    icon: "/tiktok.svg",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61560966515578",
    icon: "/fb.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tip.voyage/?hl=en",
    icon: "/insta.svg",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@TipVoyage",
    icon: "/yt.svg",
  },
];

export const SocialMediaBar = (): JSX.Element => {
  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="z-30 fixed
        top-0 left-0 right-0 w-full flex flex-row justify-center items-center gap-3 px-4 py-2 bg-[#bae800] rounded-b-2xl shadow-lg
        sm:top-1/2 sm:right-4 sm:left-auto sm:w-auto sm:flex-col sm:items-center sm:gap-4 sm:px-3 sm:py-4 sm:rounded-2xl
        sm:transform sm:-translate-y-1/2
        sm:bottom-auto sm:translate-x-0
        "
    >
      {SOCIALS.map((social, index) => (
        <button
          key={index}
          onClick={() => handleSocialClick(social.url)}
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer rounded-lg hover:bg-black/10"
          aria-label={`Visit our ${social.name}`}
          title={social.name}
        >
          <img src={social.icon} alt={social.name} className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      ))}
    </div>
  );
};