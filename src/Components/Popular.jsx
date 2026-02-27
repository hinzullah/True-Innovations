import React from "react";
import Delight from "../assets/delight.jpg";
import BBQ from "../assets/bbq.jpg";
import swallow from "../assets/swallow.jpg";
import Puff from "../assets/puff.png";

const Popular = ({ headingAlign = "center", showDetails = false }) => {
  const popularItems = [
    {
      id: 1,
      name: "Jollof Delights",
      image: Delight,
      details:
        "A delicious plate of Jollof rice served with grilled chicken and plantains.",
      price: 3500,
    },
    {
      id: 2,
      name: "Swallow and Soups",
      image: swallow,
      details:
        "A comforting bowl of swallow served with a variety of rich soups.",
      price: 3000,
    },
    {
      id: 3,
      name: "Grills and BBQs",
      image: BBQ,
      details: "Succulent grilled meats and BBQ dishes, bursting with flavor.",
      price: 4000,
    },
    {
      id: 4,
      name: "Sweet Treats",
      image: Puff,
      details: "Delectable pastries and desserts to satisfy your sweet tooth.",
      price: 2500,
    },
    {
      id: 5,
      name: "Jollof Delight",
      image: swallow,
      details:
        "A comforting bowl of swallow served with a variety of rich soups.",
      price: 3000,
    },
    {
      id: 6,
      name: "Grills and BBQs",
      image: BBQ,
      details: "Succulent grilled meats and BBQ dishes, bursting with flavor.",
      price: 4000,
    },
  ];

  const alignClass = headingAlign === "left" ? "items-start" : "items-center";
  const textalignClass = headingAlign === "left" ? "text-left" : "text-center";

  return (
    <div
      className={`flex flex-col ${alignClass} bg-gray-100 gap-8 py-16 px-4 sm:px-6 md:px-12 lg:px-24`}
    >
      <h2 className={`text-2xl md:text-3xl font-semibold ${textalignClass}`}>
        Popular Categories
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl">
        {popularItems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl items-center overflow-hidden cursor-pointer hover:scale-105 transition-all"
          >
            <img
              src={item.image}
              alt={item.name}
              className={`w-full ${showDetails ? "h-40 sm:h-48" : "h-32 sm:h-36"} object-cover`}
            />
            {showDetails ? (
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
            ) : (
              <p className="text-sm sm:text-base font-medium text-center py-4 px-2">
                {item.name}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popular;
