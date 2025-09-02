import React from "react";
import { MENU_ICONS, USER_ICONS, YOUTUBE_LOGO } from "../utils/contants";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg items-center p-5">
      {/* Logo Sections  */}
      <div className="flex col-span-1 gap-5">
        <img
          className="w-10 cursor-pointer"
          src={MENU_ICONS}
          alt="Menu Icon"
          onClick={() => toggleMenuHandler()}
        />
        <img
          className="h-10 cursor-pointer"
          src={YOUTUBE_LOGO}
          alt="Youtube logo"
        />
      </div>
      {/* Searchbar Section  */}
      <div className="flex items-center justify-center col-span-10 pr-35">
        <input
          className="border w-1/2 p-2 px-3 rounded-l-full cursor-pointer"
          type="text"
          placeholder="Search"
        />
        <button className="p-3 px-5 border hover:bg-gray-100 transition-all duration-300 ease-in-ou  rounded-r-full cursor-pointer">
          <FaSearch />
        </button>
      </div>
      {/* User Section  */}
      <div className="flex items-center col-span-1">
        <img
          className="w-10 cursor-pointer"
          src={USER_ICONS}
          alt="user icons"
        />
      </div>
    </div>
  );
};

export default Header;
