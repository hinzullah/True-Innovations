import React from "react";
import Delight from "../assets/delight.jpg";
import BBQ from "../assets/bbq.jpg";
import swallow from "../assets/swallow.jpg";
import Puff from "../assets/puff.png";

const Popular = () => {
  const popularItems = [
    {
      id: 1,
      name: "Jollof Delights",
      image: Delight,
    },
    {
      id: 2,
      name: "Swallow and Soups",
      image: swallow,
    },
    {
      id: 3,
      name: "Grills and BBQs",
      image: BBQ,
    },
    {
      id: 4,
      name: "Sweet Treats",
      image: Puff,
    },
    {
      id: 5,
      name: "Jollof Delight",
      image: swallow,
    },
    {
      id: 6,
      name: "Grills and BBQs",
      image: BBQ,
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 gap-8 py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <h2 className="text-2xl md:text-3xl font-semibold text-left">
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
              className="w-full h-40 sm:h-48 object-cover"
            />
            <p className="text-sm sm:text-base font-medium text-center py-4 px-2">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popular;
