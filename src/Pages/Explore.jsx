import React from "react";
import explore from "../assets/explorehero.png";
import Popular from "../Components/Popular";
import Jollof from "../Components/Jollof";
import Swallow from "../Components/Swallow";

const Explore = () => {
  return (
    <div>
      <div className="relative h-[75vh] w-full ">
        <img
          src={explore}
          alt="Welcome"
          className="absolute inset-0 w-full h-[75vh] object-cover"
        />
        <div className="absolute inset-0 h-[75vh] bg-[#000]/60" />

        {/* Content */}
        <div className="absolute inset-0 text-[#eee] flex flex-col justify-center z-10 px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-1.5xl sm:text-2xl md:text-xl lg:text-1.5xl font-medium leading-relaxed">
              Chuks Kitchen
            </h2>
            <p className="font-medium text-md sm:text-lg md:text-sm">
              Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-4">
          Menu Categories
        </h3>
        <ul className="flex flex-col gap-2">
          <li className="text-sm sm:text-base border-l-4 border-[#FF7A18] bg-[#FF7A18]/10 pl-4 py-2 hover:bg-[#FF7A18]/20 transition-colors cursor-pointer">
            Popular
          </li>
          <li className="text-sm sm:text-base border-l-4 border-transparent pl-4 py-2 hover:bg-gray-100 hover:border-[#FF7A18] transition-colors cursor-pointer">
            Jollof Rice and Entries
          </li>
          <li className="text-sm sm:text-base border-l-4 border-transparent pl-4 py-2 hover:bg-gray-100 hover:border-[#FF7A18] transition-colors cursor-pointer">
            Swallows and Soups
          </li>
          <li className="text-sm sm:text-base border-l-4 border-transparent pl-4 py-2 hover:bg-gray-100 hover:border-[#FF7A18] transition-colors cursor-pointer">
            Grilled and Sides
          </li>
          <li className="text-sm sm:text-base border-l-4 border-transparent pl-4 py-2 hover:bg-gray-100 hover:border-[#FF7A18] transition-colors cursor-pointer">
            Beverages
          </li>
          <li className="text-sm sm:text-base border-l-4 border-transparent pl-4 py-2 hover:bg-gray-100 hover:border-[#FF7A18] transition-colors cursor-pointer">
            Desserts
          </li>
        </ul>
      </div>
      <Popular />
      <Jollof />
      <Swallow />
    </div>
  );
};

export default Explore;
