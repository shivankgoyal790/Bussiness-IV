import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Infocardcontainer from "./InfoCardContainer";

const WhatWeDo = () => {
  return (
    <>
      <div
        className="w-100 text-white d-flex flex-column justify-content-evenly align-items-center py-5 gap-4"
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0077ff"
          fill-opacity="1"
          d="M0,288L40,256C80,224,160,160,240,149.3C320,139,400,181,480,202.7C560,224,640,224,720,213.3C800,203,880,181,960,144C1040,107,1120,53,1200,37.3C1280,21,1360,43,1400,53.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default WhatWeDo;
