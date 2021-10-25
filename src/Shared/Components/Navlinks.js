// ALL LINKS TO PAGES IN NAVLINKS
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navlinks.css";
import { Link } from "react-router-dom";
const Navlinks = () => {
  return (
    <nav className=" d-md-flex align-items-center gap-5 d-none justify-content-md-around">
      <li className="nav-item d-inline active1 mynavs">
        <Link to="/">HOME</Link>
      </li>
      <li className="nav-item d-inline mynavs">ABOUT</li>
      <li className="nav-item d-inline mynavs">SERVICES</li>
      <li className="nav-item d-inline mynavs">BLOG</li>
      <li className="nav-item d-inline mynavs">
        <Link to="/Contact">CONTACT</Link>
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
