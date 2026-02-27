import React from "react";
import Welcome from "../assets/Welcome.png";
import { IoSearch } from "react-icons/io5";
import Popular from "../Components/Popular.jsx";
import Special from "../Components/Special.jsx";

const Landpage = () => {
  return (
    <>
      <div className="relative h-screen w-full ">
        <img
          src={Welcome}
          alt="Welcome"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000]/60" />

        {/* Content */}
        <div className="absolute inset-0 text-[#eee] flex flex-col justify-center z-10 px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              The Heart of Nigerian Home Cooking
            </h2>
            <p className="font-medium text-lg sm:text-xl md:text-2xl">
              Handcrafted with passion, delivered with care.
            </p>
            <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#FF7A18] text-white text-sm sm:text-base rounded hover:bg-[#e06e1f] transition-colors font-medium">
              Discover What's New
            </button>
          </div>
        </div>

        {/* Search Bar - Overlapping */}
        <div className="absolute -bottom-5 sm:-bottom-6 md:-bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] z-20 bg-white rounded-lg shadow-lg flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4">
          <IoSearch className="text-gray-400 text-lg sm:text-xl flex-shrink-0" />
          <input
            type="text"
            className="bg-transparent outline-none placeholder:text-gray-400 text-gray-900 text-sm sm:text-base w-full"
            placeholder="What are you craving for today..."
          />
        </div>
      </div>

      <Popular headingAlign="center" showDetails={false} />
      <Special />
    </>
  );
};

export default Landpage;
