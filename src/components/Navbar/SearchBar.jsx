import React from "react";
import { FaSearch } from "react-icons/fa";

const options = ["Fashion", "Kids", "Men"];

const SearchBar = () => (
  <div className="flex flex-grow items-center mx-4">
    <select className="h-10 bg-gray-100 text-black text-xs px-2 rounded-l cursor-pointer">
      <option>All</option>
    </select>
    <input
      type="text"
      placeholder="Search.."
      className="flex-grow h-10 bg-white border border-gray-300 px-4 outline-none text-black"
    />
    <button className="bg-gray-100 h-10 px-4 rounded-r">
      <FaSearch className="text-black" />
    </button>
  </div>
);

export default SearchBar;
