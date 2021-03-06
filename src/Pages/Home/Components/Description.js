// the first component when site opens provides descripton
import React from "react";
import configData from "../../../config.json";
const Description = () => {
  return (
    <div className="w-100 container-fluid container-1 mt-5 d-flex align-items-center justify-content-around description-container">
      <div className="ms-md-5 d-flex flex-column gap-3 main-head align-items-center align-items-md-start ">
        <h1 className="display-3 desc-head text-md-start text-center">
          {configData.Description.header}
        </h1>
        <p className="desc-para text-md-start text-center">
          {configData.Description.para}
        </p>
        <div className="d-flex gap-4 flex-sm-row flex-column">
          <button
            type="button"
            className="btn btn-primary nav-item d-lg-inline px-4 py-2"
          >
            {configData.Description.button1}
          </button>
          <button
            type="button"
            className="btn nav-item d-lg-inline px-4 py-2 startbtn"
          >
            {configData.Description.button2}
          </button>
        </div>
      </div>
      <div className="w-25 empty"></div>
    </div>
  );
};

export default Description;
