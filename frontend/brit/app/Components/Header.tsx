"use client";

import React from "react";
import { Search, Heart, ShoppingCart, User, MapPin, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-3 px-4 md:px-10 flex items-center justify-between">
      {/* LEFT SECTION: LOGO + LOCATION */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black cursor-pointer">
          Bri<span className="text-[#035b77]">Text</span>
        </h1>

        {/* Location */}
        <div className="hidden sm:flex items-center gap-1 text-gray-600 text-sm cursor-pointer">
          <MapPin size={16} />
          <span>Nigeria</span>
        </div>
      </div>

      {/* CENTER SECTION: SEARCH + CATEGORY */}
      <div className="hidden md:flex items-center w-[45%] bg-gray-100 rounded-full overflow-hidden">
        {/* Category Dropdown */}
        <button className="flex items-center gap-1 px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 transition">
          All Categories
          <ChevronDown size={16} />
        </button>

        {/* Search Input */}
        <div className="flex items-center flex-1 bg-white rounded-r-full px-4 py-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for book"
            className="w-full bg-transparent focus:outline-none text-sm px-2"
          />
        </div>
      </div>

      {/* RIGHT SECTION: ICONS */}
      <div className="flex items-center gap-6 text-gray-700 text-sm">
        {/* Saved */}
        <button className="flex items-center gap-1 hover:text-[#035b77] transition">
          <Heart size={18} />
          <span className="hidden sm:inline">Saved</span>
        </button>

        {/* Cart */}
        <button className="relative flex items-center gap-1 hover:text-[#035b77] transition">
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">Cart</span>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-semibold rounded-full px-[5px] py-[1px] translate-x-2 -translate-y-2">
            1
          </span>
        </button>

        {/* Login */}
        <button className="flex items-center gap-1 hover:text-[#035b77] transition">
          <User size={18} />
          <span className="hidden sm:inline">Login</span>
        </button>
      </div>

      {/* MOBILE SEARCH (Below on smaller screens) */}
      <div className="absolute left-0 right-0 mt-16 md:hidden px-4">
        <div className="flex items-center bg-gray-100 rounded-full overflow-hidden px-4 py-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for book"
            className="w-full bg-transparent focus:outline-none text-sm px-2"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;