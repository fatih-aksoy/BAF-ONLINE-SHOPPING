import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[50px] text-white bg-gray-500 items-center px-5">
      <h3 className="font-bold italic">BAF ONLINE SHOPPING </h3>
      <div>
        <Link to="/" className="mr-2">
          {/* //! 1*/}
          Home
        </Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};

export default Navbar;

