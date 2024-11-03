import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div
        className="flex flex-row justify-between border-b-2 border-solid border-black py-4 px-2 align-middle text-white"
        style={{ backgroundColor: "#ee7a1b" }}
      >
        {/* <div>
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
        </div> */}
        <div className="text-4xl font-bold justify-center pl-4">
          CFL CLT Connect
        </div>
        <div className="flex flex-row justify-between align-middle pr-2 py-3 text-lg mx-4">
          <NavLink to="/" className="mx-2">
            <div>Home</div>
          </NavLink>
          <NavLink to="/data_table" className="mx-2">
            <div>Grants</div>
          </NavLink>
          <NavLink to="/subscribe" className="mx-2">
            <div>Subscribe</div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
