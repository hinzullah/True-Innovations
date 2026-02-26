import React, { useState } from "react";
import Chukskitchen from "../assets/Chuks Kitchen.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-3 sm:p-4 bg-[#eee] text-gray-900">
        {/* Logo */}
        <img
          src={Chukskitchen}
          alt="Chuks Kitchen"
          className="h-5 sm:h-6 w-auto"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-medium text-[#4f290e] flex-1 justify-evenly max-w-2xl mx-8 lg:mx-12">
          <li>
            <a href="/" className="hover:text-[#FF7A18] transition-colors">
              Home
            </a>
          </li>
          <li>
            <a
              href="/explore"
              className="hover:text-[#FF7A18] transition-colors"
            >
              Explore
            </a>
          </li>
          <li>
            <a
              href="/orders"
              className="hover:text-[#FF7A18] transition-colors"
            >
              My Order
            </a>
          </li>
          <li>
            <a
              href="/account"
              className="hover:text-[#FF7A18] transition-colors"
            >
              Account
            </a>
          </li>
        </ul>

        {/* Right Side - Cart & Login & Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          {/* Cart Icon */}
          <a
            href="#"
            className="relative hover:text-[#FF7A18] transition-colors"
          >
            <BsCart3 size={20} className="sm:w-[22px] sm:h-[22px]" />
            <span className="absolute -top-2 -right-2 bg-[#FF7A18] text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-medium">
              3
            </span>
          </a>

          {/* Login Button - Hidden on mobile */}
          <a
            href="/login"
            className="hidden md:block px-3 py-1.5 lg:px-4 lg:py-2 bg-[#FF7A18] text-white text-sm lg:text-base rounded hover:bg-[#e06e1f] transition-colors font-medium"
          >
            Login
          </a>

          {/* Hamburger Menu - Visible on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {isMenuOpen ? <IoClose size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#eee] border-t border-gray-300">
          <ul className="flex flex-col font-medium text-[#4f290e]">
            <li className="border-b border-gray-300">
              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-200 hover:text-[#FF7A18] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li className="border-b border-gray-300">
              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-200 hover:text-[#FF7A18] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </a>
            </li>
            <li className="border-b border-gray-300">
              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-200 hover:text-[#FF7A18] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                My Order
              </a>
            </li>
            <li className="border-b border-gray-300">
              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-200 hover:text-[#FF7A18] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Account
              </a>
            </li>
            <li className="px-4 py-3">
              <a
                href="/login"
                className="block text-center px-4 py-2 bg-[#FF7A18] text-white rounded hover:bg-[#e06e1f] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
