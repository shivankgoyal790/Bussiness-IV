import React from "react";
import image1 from "../../../images/images.jpg";
import configdata from "../../../config.json";
const Aboutcontainer = () => {
  return (
    <div className="container mt-5 mx-auto p-5">
      <h4
        className="text-lg-start text-center"
        style={{ color: "#a8a8a8", letterSpacing: "1px" }}
      >
        ABOUT US
      </h4>
      <hr className="mx-lg-0 mx-auto pt-1" style={{ width: "60px" }}></hr>
      <div className="row gap-3 ">
        <div
          className="col-12 col-lg-4 pe-lg-5 pe-0 text-lg-start text-center"
          style={{ fontSize: "17px" }}
        >
          {configdata.Aboutus.about.para}
        </div>
        <div className="col-12 col-lg-7">
          <img
            className="w-100 h-100"
            src={image1}
            alt="pic"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutcontainer;
