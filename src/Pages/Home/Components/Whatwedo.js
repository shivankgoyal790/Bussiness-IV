import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Infocardcontainer from "./InfoCardContainer";
import SvgPath from "./SvgPath";

const WhatWeDo = () => {
  return (
    <>
      <div
        className="w-100 text-white d-flex flex-column justify-content-evenly align-items-center py-5 gap-5"
        style={{ backgroundColor: "rgb(0, 119, 255)" }}
      >
        <h1 className="display-5">What can we do for you</h1>
        <div className="row w-100">
          <p
            className="text-center text-white col-md-8 col-12 m-auto"
            style={{ fontSize: "18px", fontWeight: "500" }}
          >
            Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In
            his nemore temporibus consequuntur, vim ad prima vivendum
            consetetur. Viderer feugiat at pro, mea aperiam
          </p>
        </div>
        <Infocardcontainer />
        <button
          type="button"
          className="btn nav-item d-lg-inline d-none startbtn px-3 py-2 mt-5"
        >
          OUR SERVICES
        </button>
      </div>
      <SvgPath />
    </>
  );
};

export default WhatWeDo;
