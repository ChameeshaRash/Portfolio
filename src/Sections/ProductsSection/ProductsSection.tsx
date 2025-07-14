import React from "react";
import { Card, CardContent } from "../../ui/card";

export const ProductsSection = ({ id }: { id?: string }): JSX.Element => {
  const products = [
    { title: "T-shirts", subtitle: "T-shirts" },
    { title: "templates", subtitle: "templates" },
    { title: "E-Book", subtitle: "E-Book" },
  ];

  return (
    <section id={id} className="flex flex-col items-center gap-8 w-full px-4 sm:px-6 lg:px-8 xl:px-[20%]">
      <h2 className="font-display-font-display-lg font-bold text-white text-2xl sm:text-3xl lg:text-[48px] text-center mb-6">
        Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {products.map((product, index) => (
          <Card key={index} className="flex flex-col items-center bg-[#161616] rounded-xl border-none overflow-hidden hover:bg-[#1a1a1a] transition-colors">
            <CardContent className="flex flex-col items-center gap-2 p-6">
              <h3 className="font-headings-font-heading-sm font-semibold text-white text-lg lg:text-xl">
                {product.title}
              </h3>
              <span className="font-body-font-body-md text-[#d6d6d6] text-base lg:text-lg">
                {product.subtitle}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
