import React from "react";
import Delight from "../assets/delight.jpg";
import jollof from "../assets/image 9.jpg";
import swallow from "../assets/swallow1.jpg";
import tilapia from "../assets/Rectangle 13.jpg";
import plantain from "../assets/plantain.png";

const Special = () => {
  const SpecialItems = [
    {
      id: 1,
      name: "Spicy Tilapia Fish",
      detail:
        "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
      image: tilapia,
      price: 3500,
    },
    {
      id: 2,
      name: "Jollof Rice and Chicken",
      detail:
        "A flavorful dish of jollof rice served with tender chicken, a classic favorite.",
      image: Delight,
      price: 4000,
    },
    {
      id: 3,
      name: "Jollof Rice and fried Chicken",
      detail:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      image: Delight,
      price: 4000,
    },
    {
      id: 4,
      name: "Jollof Rice and smoked Chicken",
      detail:
        "Indulge in our flavorful Jollof rice, paired with tender smoked chicken for a delightful meal.",
      image: Delight,
      price: 2500,
    },
    {
      id: 5,
      name: "Jollof Rice and fried Chicken",
      detail:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      image: jollof,
      price: 4000,
    },
    {
      id: 6,
      name: "Egusi Soup and Pounded Yam",
      detail:
        "A rich and hearty soup made with ground melon seeds, served with pounded yam.",
      image: swallow,
      price: 4500,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center bg-gray-100 gap-8 py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Chef's Specials
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl">
          {SpecialItems.map((item) => (
            <li
              key={item.id}
              className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer hover:scale-105 transition-all overflow-hidden"
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
                  {item.detail}
                </p>

                {/* Price and Button */}
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm sm:text-lg text-[#FF7A18]">
                    ₦{item.price.toLocaleString()}
                  </p>
                  <button className="bg-[#FF7A18] text-white px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md hover:bg-[#e06e1f] transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative h-screen w-full ">
        <img
          src={plantain}
          alt="Welcome"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000]/60" />

        {/* Content */}
        <div className="absolute inset-0 text-[#eee] flex flex-col justify-center z-10 px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
              Introducing Our New Menu Additions!
            </h2>
            <p className="font-medium text-lg sm:text-xl md:text-xl">
              Explore exciting new dishes, crafted with the freshest ingredients
              and authentic Nigerian flavors. Limited time offer!
            </p>
            <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#FF7A18] text-white text-sm sm:text-base rounded hover:bg-[#e06e1f] transition-colors font-medium">
              Discover What's New
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Special;
