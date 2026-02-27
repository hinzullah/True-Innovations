import React from "react";
import delight from "../assets/delight.jpg";
import jollof from "../assets/image 3.jpg";

const Jollof = ({ headingAlign = "center" }) => {
  const JollofItems = [
    {
      id: 1,
      name: "Jollof Rice and Smoked Fish",
      details: "Flavorful jollof rice served with perfectly smoked fish.",
      image: delight,
      price: 3500,
    },
    {
      id: 2,
      name: "Party Jollof (Veg)",
      details: "Vegetarian party jollof, full of rich flavors.",
      image: jollof,
      price: 2800,
    },
    {
      id: 3,
      name: "Party Jollof (Veg)",
      details: "Vegetarian party jollof, full of rich flavors.",
      image: delight,
      price: 3500,
    },
  ];

  const alignClass = headingAlign === "left" ? "items-start" : "items-center";
  const textalignClass = headingAlign === "left" ? "text-left" : "text-center";

  return (
    <div
      className={`flex flex-col ${alignClass} bg-white gap-8 py-16 px-4 sm:px-6 md:px-12 lg:px-24`}
    >
      <div className="w-full max-w-7xl">
        <h2 className={`text-2xl md:text-2xl font-medium ${textalignClass}`}>
          Jollof and Entries
        </h2>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl">
        {JollofItems.map((item) => (
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

export default Jollof;
