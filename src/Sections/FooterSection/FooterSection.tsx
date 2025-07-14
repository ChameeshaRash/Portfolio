import React from "react";
import { Card, CardContent } from "../../ui/card";

export const FooterSection = (): JSX.Element => {
  const products = [
    {
      image: "/rectangle-1.png",
      title: "T-shirts",
    },
    {
      image: "/rectangle-1-1.png",
      title: "templates",
    },
    {
      image: "/rectangle-1-2.png",
      title: "E-Book",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-6 lg:gap-[59px] w-full px-4 sm:px-6 lg:px-8 xl:px-[20%]">
      <h2 className="font-display-font-display-lg font-bold text-white text-xl sm:text-2xl lg:text-[48px] text-center">
        Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full max-w-6xl">
        {products.map((product, index) => (
          <Card
            key={index}
            className="flex flex-col w-full max-w-[364px] mx-auto bg-[#161616] rounded-xl border-none overflow-hidden hover:bg-[#1a1a1a] transition-colors"
          >
            <CardContent className="flex flex-col items-start gap-4 p-4 sm:p-6">
              <img
                className="w-full h-[200px] sm:h-[250px] lg:h-[371px] object-cover rounded-lg"
                alt={product.title}
                src={product.image}
              />
              <h3 className="font-headings-font-heading-sm font-semibold text-white text-base sm:text-lg lg:text-[20px]">
                {product.title}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Real Footer Bar */}
      <div className="w-full bg-[#161616] mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[20%]">
          <div className="py-4 lg:py-6 font-body-font-body-md text-[#d6d6d6] text-sm lg:text-[16px] text-center">
            © 2025 Tip Voyage. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};