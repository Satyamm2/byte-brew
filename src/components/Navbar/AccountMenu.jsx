import React from "react";
import { Link } from "react-router-dom";

const AccountMenu = () => {
  return (
    <>
      <Link to="/log-user" className="cursor-pointer hover:underline">
        <div className="text-xs">Hello, sign in</div>
        <div className="font-bold">Account & Lists</div>
      </Link>
      <div className="cursor-pointer hover:underline">
        <div className="text-xs">Returns</div>
        <div className="font-bold">& Orders</div>
      </div>
    </>
  );
};

export default AccountMenu;
