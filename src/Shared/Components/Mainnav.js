// CONTAINS HEADER WITH NAVBAR AND LOGO
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidedrop from "../../Components/Sidebar/Sidebar";
import Backdrop from "../../Components/backdrop/Backdrop";
import Navlinks from "./Navlinks";

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
      className="d-flex align-items-sm-center p-3 justify-content-lg-around justify-content-evenly fixed-top"
      style={{ zIndex: "1" }}
    >
      <h5>BUSSINESS IV</h5>
      <Navlinks />
      <div
        className="navbar-toggler-icon d-md-none d-inline"
        onClick={Openhandler}
      >
        <FontAwesomeIcon className="rounded-circle" icon={faBars} />
      </div>
      {isopen && <Backdrop onClick={Closehandler} />}
      <Sidedrop show={isopen} onClick={Closehandler} />
    </div>
  );
};

export default Mainnav;
