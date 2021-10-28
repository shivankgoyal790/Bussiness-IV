//REDIRECT TO CONATCT PAGE COMPONENT
import React from "react";
import configData from "../../../config.json";
const ReachUs = () => {
  return (
    <div className="container-fluid d-flex flex-column align-items-center gap-2 p-5 text-white reachus-bg">
      <h1 className="display-5 mt-5 text-center" style={{ fontWeight: 700 }}>
        {configData.Reach_us.header}
      </h1>
      <div className="row w-100">
        <p
          className="text-center text-white col-md-8 col-12 m-auto mt-4"
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          {configData.Reach_us.para}
        </p>
      </div>
      <button
        type="button"
        className="btn nav-item d-lg-inline d-none startbtn px-3 py-2 mt-4"
      >
        {configData.Reach_us.button}
      </button>
    </div>
  );
};

export default ReachUs;
