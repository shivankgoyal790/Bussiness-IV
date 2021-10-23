import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navlinks from "../../Shared/Components/Navlinks";

const Sidedrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        top: "0px",
        right: "0px",
        height: "100vh",
        width: "100vw",
        zIndex: "5",
        display: props.show ? "flex" : "none",
      }}
      className="w-50 position-absolute bg-primary align-items-flex-start justify-content-center"
    >
      <ul className="text-white">
        <li className="nav-item d-block">HOME</li>
        <li className="nav-item d-block">ABOUT</li>
        <li className="nav-item d-block">SERVICES</li>
        <li className="nav-item d-block">BLOG</li>
        <li className="nav-item d-block">CONTACT</li>
        <button
          type="button"
          className="btn btn-primary nav-item d-lg-inline d-none"
        ></button>
      </ul>
    </div>
  );
};

export default Sidedrop;
