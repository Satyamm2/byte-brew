import React, { useEffect, useState } from "react";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

const Navbar = () => {
  const [showBottom, setShowBottom] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowBottom(false);
    } else {
      setShowBottom(true);
    }

    setLastScrollY(currentScrollY);
  };

  return (
    <div className="relative z-50">
      <div className="fixed top-0 left-0 w-full z-50">
        <TopNavbar />
        <div
          className={`transition-all duration-100 ease-in-out ${
            showBottom
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }`}
        >
          <BottomNavbar />
        </div>
      </div>

      <div className="pt-[100px]"></div>
    </div>
  );
};

export default Navbar;
