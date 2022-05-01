import React from "react";
import Infocardcontainer from "./Infocardcontainer";
import SvgPath from "./SvgPath";
import ConfigData from "../../../config.json";

const WhatWeDo = () => {
  return (
    <>
      <div
        className="w-100 text-white d-flex flex-column justify-content-evenly align-items-center py-5 gap-5"
        style={{ backgroundColor: "rgb(0, 119, 255)" }}
      >
        <h1 className="display-5">{ConfigData.what_we_do.header}</h1>
        <div className="row w-100">
          <p
            className="text-center text-white col-md-8 col-12 m-auto"
            style={{ fontSize: "18px", fontWeight: "500" }}
          >
            {ConfigData.what_we_do.para}
          </p>
        </div>
        <Infocardcontainer />
        <button
          type="button"
          className="btn nav-item d-lg-inline d-none startbtn px-3 py-2 mt-5"
        >
          {ConfigData.what_we_do.button}
        </button>
      </div>
      <SvgPath />
    </>
  );
};

export default WhatWeDo;
