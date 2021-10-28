import React from "react";
import { Link } from "react-router-dom";

const Sidedrop = (props) => {
  const style1 = {
    top: "0px",
    right: "0px",
    height: "100vh",
    zIndex: "10",
    display: props.show ? "flex" : "none",
  };
  return (
    <div
      onClick={props.onClick}
      style={style1}
      className="sidenav position-absolute bg-primary align-items-flex-start justify-content-between py-4 flex-column"
    >
      <div className="w-100 d-flex flex-column gap-2">
        <h5 className="text-white w-100 d-flex justify-content-center">
          Business IV
        </h5>
        <ul className="nav flex-column">
          <li className="nav-item setborder w-100  p-1 active">
            <Link className="nav-link active text-white" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item setborder w-100  p-1">
            <Link className="nav-link text-white" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item setborder w-100   p-1">
            <Link className="nav-link text-white" to="/services">
              Services
            </Link>
          </li>
          <li className="nav-item setborder w-100  p-1">
            <Link className="nav-link text-white" to="/portfolio">
              PortFolio
            </Link>
          </li>
          <li className="nav-item setborder w-100  p-1">
            <Link className="nav-link text-white" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-white-50 p-2">
        © 2021 Business IV. Created for free using WordPress and colorlib
      </div>
    </div>
  );
};

export default Sidedrop;
