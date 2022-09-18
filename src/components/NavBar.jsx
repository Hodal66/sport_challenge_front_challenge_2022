import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import links from "../data";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../images/logo.jpg";
function NavBar() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <div>
      <nav className="">
        <div className="container nav_container">
          <Link className="logo_link" onClick={() => setIsNavShowing(false)}>
            <img src={Logo} alt="my logo" className="mylogo" />
          </Link>

          <ul className={`nav_links ${isNavShowing ? "show_nav" : "hide_nav"}`}>
            {links.map(({ path, name }, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? "active-nav" : "")}
                    onClick={() => setIsNavShowing((prev) => !prev)}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <button
            className="nav_toggle_btn"
            onClick={() => setIsNavShowing((prev) => !prev)}
          >
            {isNavShowing ? <MdOutlineClose /> : <FaBars />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
