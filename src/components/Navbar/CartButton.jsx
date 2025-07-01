import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => (
  <div className="flex items-center cursor-pointer hover:underline">
    <FaShoppingCart className="text-xl" />
    <span className="ml-1 font-bold">Cart</span>
  </div>
);

export default CartButton;
