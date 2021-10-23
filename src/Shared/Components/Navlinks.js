// ALL LINKS TO PAGES IN NAVLINKS
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navlinks.css";
const Navlinks = () => {
  return (
    <nav className="collapse navbar-expand-sm d-md-flex align-items-center gap-5 d-none justify-content-md-around display-7">
      <li className="nav-item d-inline active1 mynavs">HOME</li>
      <li className="nav-item d-inline mynavs">ABOUT</li>
      <li className="nav-item d-inline mynavs">SERVICES</li>
      <li className="nav-item d-inline mynavs">BLOG</li>
      <li className="nav-item d-inline mynavs">CONTACT</li>
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
