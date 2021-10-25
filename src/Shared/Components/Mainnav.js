// CONTAINS HEADER WITH NAVBAR AND LOGO
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidedrop from "../../Components/Sidebar/Sidebar";
import Backdrop from "../../Components/backdrop/Backdrop";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";

const Mainnav = () => {
  const [isopen, setisopen] = useState(false);
  const Openhandler = () => {
    setisopen(true);
  };
  const Closehandler = () => {
    setisopen(false);
  };
  window.addEventListener("resize", Closehandler);
  return (
    <div
      className="d-flex bg-white align-items-sm-center p-3 justify-content-lg-around  fixed-top justify-content-between justify-content-sm-around"
      style={{ zIndex: "1" }}
    >
      <h5>
        <Link to="/">Business IV</Link>
      </h5>
      <Navlinks />
      <div
        className="navbar-toggler-icon d-md-none d-inline"
        onClick={Openhandler}
      >
        <div
          style={{ width: "40px", height: "40px" }}
          className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
        >
          <FontAwesomeIcon
            className="text-white"
            icon={faBars}
            style={{ fontSize: "24px" }}
          />
        </div>
      </div>
      {isopen && <Backdrop onClick={Closehandler} />}
      <Sidedrop show={isopen} onClick={Closehandler} />
    </div>
  );
};

export default Mainnav;
