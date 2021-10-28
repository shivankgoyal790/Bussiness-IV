import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{ height: "100vh", top: "0px", left: "0px" }}
      className="w-100 position-absolute bg-opacity-50 bg-black"
    ></div>
  );
};

export default Backdrop;
