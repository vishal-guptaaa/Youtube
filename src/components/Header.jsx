import React, { useEffect, useState } from "react";
import {
  MENU_ICONS,
  USER_ICONS,
  YOUTUBE_LOGO,
  YOUTUBE_SUGGESTIONS_API,
} from "../utils/contants";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSugestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg  p-5 m-2 ">
      {/* Logo Sections  */}
      <div className="flex items-center col-span-1 gap-5 ">
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
      <div className=" flex-col col-span-10 pl-35 bg">
        <div className="flex items-center">
          <input
            className="outline w-1/2 p-2 px-3 rounded-l-full cursor-pointer"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="p-3 px-5 border hover:bg-gray-100 transition-all duration-300 ease-in-ou  rounded-r-full cursor-pointer">
            <FaSearch />
          </button>
        </div>

        {/* Search Suggestions  */}
        {showSugestions && (
          <div className="bg-white w-[30rem] ml-3 mt-1 rounded-lg fixed">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="px-4 py-1 hover:bg-gray-200 flex items-center gap-2"
                >
                  <span className="text-xs">
                    <FaSearch />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
