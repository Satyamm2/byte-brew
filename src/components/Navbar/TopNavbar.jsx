import React from "react";
import LocationInfo from "./LocationInfo";
import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";
import CartButton from "./CartButton";
import { BRAND_NAME } from "../../constant";

const TopNavbar = () => (
  <div className="flex items-center px-4 py-2 bg-white text-black shadow-md space-x-4 text-sm font-medium">
    <div className="text-xl font-bold text-white">
      <span className="text-red-500">{BRAND_NAME}</span>
    </div>
    <LocationInfo />
    <SearchBar />
    {/* <div className="flex items-center space-x-1">
      <img src="https://flagcdn.com/in.svg" alt="IN" className="w-5 h-4" />
      <span>EN</span>
    </div> */}
    <AccountMenu />
    <CartButton />
  </div>
);

export default TopNavbar;
