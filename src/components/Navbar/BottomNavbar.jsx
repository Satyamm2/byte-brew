import React from "react";
import { FaBars } from "react-icons/fa";

const navItems = [
  "Sell",
  "Bestsellers",
  "Mobiles",
  "Today's Deals",
  "Customer Service",
  "New Releases",
  "Fashion",
  "Electronics",
  "Home & Kitchen",
  "Computers",
];

const BottomNavbar = () => (
  <div className="bg-white px-4 py-2 flex items-center space-x-6 text-sm text-black shadow-md">
    <div className="flex items-center space-x-1 cursor-pointer hover:underline">
      <FaBars />
      <span>All</span>
    </div>
    {navItems.map((item) => (
      <span key={item} className="cursor-pointer hover:underline">
        {item}
      </span>
    ))}
  </div>
);

export default BottomNavbar;
