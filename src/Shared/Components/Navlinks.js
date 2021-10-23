// ALL LINKS TO PAGES IN NAVLINKS
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Navlinks = () =>{
    return(
        <nav className="collapse navbar-expand-sm d-md-flex align-items-center gap-5 d-none justify-content-md-around display-7">
        <li className="nav-item d-inline">HOME</li>
        <li className="nav-item d-inline">ABOUT</li>
        <li className="nav-item d-inline">SERVICES</li>
        <li className="nav-item d-inline">BLOG</li>
        <li className="nav-item d-inline">CONTACT</li>
        <button
          type="button"
          className="btn btn-primary nav-item d-lg-inline d-none"
        >
          START NOW!
        </button>
      </nav>
    )
}

export default Navlinks