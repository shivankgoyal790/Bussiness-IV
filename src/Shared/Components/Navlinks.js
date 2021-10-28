// ALL LINKS TO PAGES IN NAVLINKS
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navlinks.css";
import { Link } from "react-router-dom";
const Navlinks = () => {
  const [activeabout, setactiveabout] = useState("");
  const [activehome, setactivehome] = useState("active1");
  const [activeservices, setactiveservices] = useState("");
  const [activeportfolio, setactiveportfolio] = useState("");
  const [activecontact, setactivecontact] = useState("");
  const activenavhandler1 = () => {
    setactivehome("active1");
    setactiveportfolio("");
    setactivecontact("");
    setactiveabout("");
    setactiveservices("");
  };
  const activenavhandler2 = (event) => {
    event.preventDefault();
    setactivehome("");
    setactiveportfolio("");
    setactivecontact("");
    setactiveabout("active1");
    setactiveservices("");
  };
  const activenavhandler3 = () => {
    setactivehome("");
    setactiveportfolio("");
    setactivecontact("");
    setactiveabout("");
    setactiveservices("active1");
  };
  const activenavhandler4 = () => {
    setactivehome("");
    setactiveportfolio("active1");
    setactivecontact("");
    setactiveabout("");
    setactiveservices("");
  };
  const activenavhandler5 = (event) => {
    event.preventDefault();
    setactivehome("");
    event.preventDefault();
    setactiveportfolio("");
    event.preventDefault();
    setactivecontact("active1");
    setactiveabout("");
    setactiveservices("");
  };

  return (
    <nav className="d-md-flex align-items-center gap-5 d-none justify-content-md-around">
      <li
        className={`nav-item d-inline mynavs ${activehome}`}
        id="home"
        onClick={activenavhandler1}
      >
        <Link to="/" id="home">
          HOME
        </Link>
      </li>
      <li
        className={`nav-item d-inline mynavs ${activeabout}`}
        onClick={activenavhandler2}
      >
        <Link to="/" id="about">
          ABOUT
        </Link>
      </li>
      <li
        className={`nav-item d-inline mynavs ${activeservices}`}
        id="services"
        onClick={activenavhandler3}
      >
        <Link to="/" id="services">
          SERVICES
        </Link>
      </li>
      <li
        className={`nav-item d-inline mynavs ${activeportfolio}`}
        id="portfolio"
        onClick={activenavhandler4}
      >
        <Link to="/portfolio" id="portfolio">
          PORTFOLIO
        </Link>
      </li>
      <li
        className={`nav-item d-inline mynavs ${activecontact}`}
        id="contact"
        onClick={activenavhandler5}
      >
        <Link to="/contact" id="contact">
          CONTACT
        </Link>
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
