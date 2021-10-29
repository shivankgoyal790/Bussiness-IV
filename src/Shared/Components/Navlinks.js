// ALL LINKS TO PAGES IN NAVLINKS
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navlinks.css";
import { NavLink } from "react-router-dom";
const Navlinks = () => {
  return (
    <nav className="d-md-flex align-items-center gap-5 d-none justify-content-md-around">
      <li className={`nav-item d-inline mynavs `}>
        <NavLink to="/" exact activeClassName="active1">
          HOME
        </NavLink>
      </li>
      <li className={`nav-item d-inline mynavs `}>
        <NavLink to="/about" activeClassName="active1">
          ABOUT
        </NavLink>
      </li>
      <li className={`nav-item d-inline mynavs `} id="services">
        <NavLink to="/services" activeClassName="active1">
          SERVICES
        </NavLink>
      </li>
      <li className={`nav-item d-inline mynavs`} id="portfolio">
        <NavLink to="/portfolio" activeClassName="active1">
          PORTFOLIO
        </NavLink>
      </li>
      <li className={`nav-item d-inline mynavs `} id="contact">
        <NavLink to="/contact" activeClassName="active1">
          CONTACT
        </NavLink>
      </li>
      <button
        type="button"
        className="btn nav-item d-lg-inline d-none startbtn px-3 py-2"
      >
        START NOW!
      </button>
    </nav>
  );
};

export default Navlinks;
