import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineBell } from "react-icons/hi2";
const Navbar = () => {
  return (
    <div>
      <div className="w-full bg-black text-white p-2">
        <p className="text-center text-sm">
          Sign up and get 20% off for all newarrivals collections
        </p>
      </div>
      <nav className="p-5">
        <div className=" flex justify-between items-center border-2 border-black rounded-xl p-4">
          <h1>Dreamer</h1>
          <ul className="flex items-center space-x-5">
            <li>
              <a href="">Womens Wear</a>
            </li>
            <li>
              <a href="">Mens Ware </a>
            </li>
            <li>
              <a href="">Kids</a>
            </li>
            <li>
              <a href="">Sale</a>
            </li>
            <li>
              <a href="">Discover</a>
            </li>
          </ul>

          <div className="flex items-center space-x-2">
            <div></div>
            <IoMdHeartEmpty />
            <HiOutlineBell />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
