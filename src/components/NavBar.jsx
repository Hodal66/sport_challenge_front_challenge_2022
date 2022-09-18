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
          <Link className="logo_link">
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
            {/* <NavLink path="/" className={({ isActive }) => (isActive ? "active-nav" : "")}>
              <a href="#home">Home</a>
            </NavLink>
            <NavLink path="/">
              <a href="#about" className={({ isActive }) => (isActive ? "active-nav" : "")}>About</a>
            </NavLink>
            <NavLink path="/" className={({ isActive }) => (isActive ? "active-nav" : "")}>
              <a href="#home" >Gallery</a>
            </NavLink>
            <NavLink path="/" className={({ isActive }) => (isActive ? "active-nav" : "")}>
              <a href="#home">Plans</a>
            </NavLink>
            <NavLink path="/" className={({ isActive }) => (isActive ? "active-nav" : "")}>
              <a href="#home">Trainers</a>
            </NavLink>
            <NavLink path="/" >
              <a href="#home">Contacts</a>
            </NavLink> */}
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
