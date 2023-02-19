import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-16 flex md:justify-between items-center fixed inset-0 bg-[#ff0055] shadow-md px-4 z-10">
      <button className="flex md:hidden w-12 h-12 bg-transparent flex-col justify-around mr-8 cursor-pointer">
        <span className="block w-12 h-1 bg-white"></span>
        <span className="block w-12 h-1 bg-white"></span>
        <span className="block w-12 h-1 bg-white"></span>
      </button>
      <h1 className="text-white">
        <Link className="text-white" to={"/"}>
          YourPlaces
        </Link>
      </h1>
      <nav>
        <ul className="w-full h-full flex flex-col md:flex-row justify-center item-center">
          <li className="m-4 md:mx-2 md:my-0">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navLinks active" : "navLinks"
              }
              to={"/"}
            >
              ALL USERS
            </NavLink>
          </li>
          <li className="m-4 md:mx-2 md:my-0">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navLinks active" : "navLinks"
              }
              to={"/u1/places"}
            >
              MY PLACES
            </NavLink>
          </li>
          <li className="m-4 md:mx-2 md:my-0">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navLinks active" : "navLinks"
              }
              to={"/places/new"}
            >
              ADD PLACE
            </NavLink>
          </li>
          <li className="m-4 md:mx-2 md:my-0">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navLinks active" : "navLinks"
              }
              to={"/auth"}
            >
              AUTHENTICATE
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
