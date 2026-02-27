import React from "react";
import Chukskitchen from "../assets/Chuks Kitchen.png";
import banner from "../assets/Rectangle 1.png";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaTruckMoving } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full h-screen overflow-auto text-gray-900">
      <div className="flex flex-col md:grid md:grid-cols-2 h-full">
        {/* Image side */}
        <div className="hidden md:block relative h-full">
          <img
            src={banner}
            alt="Banner"
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Text side */}
        <div className="w-full h-full flex flex-col px-6 py-6 my-auto md:px-12 md:py-8">
          {/* Header */}
          <header className="flex flex-row justify-between items-center">
            <img
              src={Chukskitchen}
              alt="Chuks Kitchen"
              className="h-8 w-auto"
            />

            <a
              href="/login"
              className="text-[#1E88E5] px-3 py-1.5 border-2 border-[#1E88E5] rounded-md text-sm font-medium hover:bg-[#1E88E5]/10 transition-colors"
            >
              Sign In
            </a>
          </header>

          {/* main */}
          <main className="flex flex-col space-y-8 my-auto py-8">
            {/* hero text */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-center leading-snug">
                Your Authentic Taste of Nigeria
              </h1>
              <p className="text-center text-gray-500 leading-relaxed text-sm md:text-base">
                Experience homemade flavors delivered fresh to your desk or
                home. We bring the rich culinary heritage of Nigeria right to
                your doorstep.
              </p>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="flex items-center space-x-3">
                <span className="text-[#FF7A18] bg-[#FF7A18]/20 rounded-md p-2 shrink-0">
                  <TbToolsKitchen2 size={18} />
                </span>
                <p className="text-sm font-medium">Freshly Prepared</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#FF7A18] bg-[#FF7A18]/20 rounded-md p-2 shrink-0">
                  <TbToolsKitchen2 size={18} />
                </span>
                <p className="text-sm font-medium">Support Local Businesses</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#FF7A18] bg-[#FF7A18]/20 rounded-md p-2 shrink-0">
                  <FaTruckMoving size={18} />
                </span>
                <p className="text-sm font-medium">Fast Delivery</p>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col items-center space-y-3">
              <a
                href="#"
                className="text-white text-center w-full md:w-[90%] rounded-md bg-[#FF7A18] py-2.5 px-6 font-medium hover:bg-[#e56d10] transition-colors"
              >
                Start Your Order
              </a>

              <a
                href="#"
                className="text-[#FF7A18] text-center w-full md:w-[90%] border-2 border-[#FF7A18] rounded-md bg-transparent py-2.5 px-6 font-medium hover:bg-[#FF7A18]/10 transition-colors"
              >
                Learn More About Us
              </a>
            </div>
          </main>

          {/* FOOTER */}
          <footer>
            <ul className="text-xs text-gray-400 flex flex-wrap justify-center gap-x-4 gap-y-1">
              <li>&copy; 2024 Chuks Kitchen</li>
              <li>
                <a href="#" className="hover:text-gray-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
