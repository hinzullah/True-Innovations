import React from "react";
import amala from "../assets/image 1.jpg";
import semo from "../assets/image 2.jpg";

const Swallow = () => {
  const SwallowItems = [
    {
      id: 1,
      name: "Amala with Gbegiri & Ewedu",
      details:
        "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
      image: amala,
      price: 3500,
    },
    {
      id: 2,
      name: "Fufu & Okra Soup (Fish)",
      details: "Light Fufu served with fresh okra soup and tilapia fish.",
      image: semo,
      price: 2800,
    },
    {
      id: 3,
      name: "Fufu & Okra Soup (Fish)",
      details: "Light Fufu served with fresh okra soup and tilapia fish.",
      image: semo,
      price: 3500,
    },
  ];

  return (
    <div className="flex flex-col items-center bg-white gap-8 py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl md:text-2xl font-medium text-left">
          Swallow and Soup
        </h2>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl">
        {SwallowItems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl cursor-pointer hover:scale-105 transition-all overflow-hidden"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />

            {/* Content */}
            <div className="flex flex-col gap-3 p-4 sm:p-5">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {item.details}
              </p>

              {/* Price and Button */}
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm sm:text-lg font-medium text-[#FF7A18]">
                  ₦{item.price.toLocaleString()}
                </p>
                <button className="bg-[#FF7A18] text-white w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-sm sm:text-xl rounded-full hover:bg-[#e06e1f] transition-colors font-medium">
                  +
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Swallow;
