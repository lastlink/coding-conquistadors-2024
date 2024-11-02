import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="flex flex-row justify-between border-b-2 border-solid border-black py-4 px-2 align-middle bg-cyan-300">
        <div>
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
        </div>
        <div className="text-4xl">CLT Info App</div>
        <div className="flex flex-row justify-between align-middle">
          <NavLink to="/data_table">
            <div className="mx-2">Grants</div>
          </NavLink>
          <NavLink to="/subscribe">
            <div>Contact Us</div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
