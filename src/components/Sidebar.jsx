import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return

  return !isMenuOpen ? null : (
    <div className="w-56 shadow-lg h-full">
      <ul className="text-center mt-5">
        <li>
          <Link to={"/"} className="text-lg hover:font-semibold">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
