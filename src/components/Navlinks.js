import React from "react";
import { NavLink } from "react-router-dom";

function Navlinks() {
  return (
    <ul className="w-full h-full flex flex-col md:flex-row justify-center items-center">
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
  );
}

export default Navlinks;
