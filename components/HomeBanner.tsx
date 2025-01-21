import React from "react";
import Title from "./Title";

const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Title className="text-3xl md:text-4xl uppercase font-bold text-center">
      Welcome to <span className="text-blue-800 hover:text-orange-600">Furniture.IO</span> Redefining Furniture Shopping
      </Title>
      <p className="text-sm text-center text-lightColor/80 font-medium max-w-[480px]">
      Stylish, high-quality furniture for every space. Explore our collection of sofas, tables, and more.
       Comfort, elegance, and unbeatable prices await!
      </p>
    </div>
  );
};

export default HomeBanner;
