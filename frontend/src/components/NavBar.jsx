import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div
        className="flex flex-row justify-between border-b-2 border-solid border-black py-4 px-2 align-middle text-white"
        style={{ backgroundColor: "#ee7a1b" }}
      >
        <div>
          {/* <NavLink to="/">
            <span>Home</span>
          </NavLink> */}
        </div>
        <div className="text-4xl font-bold justify-center">CFL CLT Connect</div>
        <div className="flex flex-row justify-between align-middle pr-4 py-3 text-lg">
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
          <NavLink to="/data_table">
            <div className="mx-2">Grants</div>
          </NavLink>
          <NavLink to="/subscribe">
            <div>Subscribe</div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
