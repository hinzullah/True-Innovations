import React from "react";
import Chukskitchen from "../assets/Chuks Kitchen.png";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#4f290e]/90 text-white px-6 md:px-12 py-10">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
        {/* BRAND */}
        <div className="flex flex-col w-36 gap-3">
          <img src={Chukskitchen} alt="Chuks Kitchen" className="h-6 w-auto" />
          <p className="text-sm text-[#eee] leading-relaxed">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-white">Quick Links</p>
          <ul className="flex flex-col gap-2 text-sm text-[#e1c0a9]">
            <li>
              <a href="#" className="hover:text-[#FF7A18] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7A18] transition-colors">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7A18] transition-colors">
                My Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7A18] transition-colors">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7A18] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-[#eee]">Contact Us</p>
          <div className="flex flex-col gap-2 text-sm text-[#e1c0a9]">
            <p>Email: info@chukskitchen.com</p>
            <p>Phone: +1 (234) 567-8901</p>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="flex flex-col gap-3">
          <ul className="flex flex-col gap-2 text-sm text-[#e1c0a9]">
            <li>
              <a href="#" className="hover:text-[#FF7A18] transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7A18] transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7A18] transition-colors">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="flex justify-between">
        <p className="text-xs text-[#e1c0a9] pt-6">
          &copy; 2024 Chuks Kitchen. All rights reserved.
        </p>
        <a
          href="#top"
          className="text-[#1877F2] justify-center rounded-4xl p-3 bg-[#1877F2] hover:bg-[#165eab]"
        >
          <FaArrowUp className="text-[#eee] text-sm" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
