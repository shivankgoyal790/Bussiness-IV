// ALL LINKS TO PAGES IN NAVLINKS
import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navlinks.css";
import { Link } from "react-router-dom";
const Navlinks = () => {
  const [activenav, setactivenav] = useState({
    home: "active1",
    about: "",
    services: "",
    portfolio: "",
    contact: "",
  });
  const activenavhandler = useCallback((event) => {
    if (event.target.id === "contact") {
      setactivenav({
        home: " ",
        about: "",
        services: "",
        portfolio: "",
        contact: "active1",
      });
    }
    if (event.target.id === "portfolio") {
      setactivenav({
        home: " ",
        about: "",
        services: "",
        portfolio: "active1",
        contact: "",
      });
    }
    if (event.target.id === "services") {
      setactivenav({
        home: " ",
        about: "",
        services: "active1",
        portfolio: "",
        contact: "",
      });
    }
    if (event.target.id === "about") {
      setactivenav({
        home: " ",
        about: "active1",
        services: "",
        portfolio: "",
        contact: "",
      });
    }
  }, []);
  return (
    <nav className=" d-md-flex align-items-center gap-5 d-none justify-content-md-around">
      <li
        className={`nav-item d-inline mynavs ${activenav.home}`}
        id="home"
        onClick={activenavhandler}
      >
        <Link to="/" id="home">
          HOME
        </Link>
      </li>
      <li
        className={`nav-item d-inline mynavs ${activenav.about}`}
        id="about"
        onClick={activenavhandler}
      >
        ABOUT
      </li>
      <li
        className={`nav-item d-inline mynavs ${activenav.services}`}
        id="services"
        onClick={activenavhandler}
      >
        SERVICES
      </li>
      <li
        className={`nav-item d-inline mynavs ${activenav.portfolio}`}
        id="portfolio"
        onClick={activenavhandler}
      >
        <Link to="/portfolio" id="portfolio">
          PORTFOLIO
        </Link>
      </li>
      <li
        className={`nav-item d-inline mynavs ${activenav.contact}`}
        id="contact"
        value="contact"
        onClick={activenavhandler}
      >
        <Link to="/Contact" id="contact">
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
