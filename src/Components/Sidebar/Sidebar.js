import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidedrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        top: "0px",
        right: "0px",
        height: "100vh",
        zIndex: "5",
        display: props.show ? "flex" : "none",
      }}
      className="sidenav position-absolute bg-primary align-items-flex-start justify-content-between py-4 flex-column"
    >
      <div className="w-100 d-flex flex-column gap-2">
        <h5 className="text-white w-100 d-flex justify-content-center">
          Business IV
        </h5>
        <ul className="nav flex-column">
          <li className="nav-item setborder w-100  p-1 active">
            <a className="nav-link active text-white" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item setborder w-100  p-1">
            <a className="nav-link text-white" href="home">
              About
            </a>
          </li>
          <li className="nav-item setborder w-100   p-1">
            <a className="nav-link text-white" href="home">
              Services
            </a>
          </li>
          <li className="nav-item setborder w-100  p-1">
            <a className="nav-link text-white" href="home">
              Blog
            </a>
          </li>
          <li className="nav-item setborder w-100  p-1">
            <a className="nav-link text-white" href="home">
              Contact
            </a>
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
