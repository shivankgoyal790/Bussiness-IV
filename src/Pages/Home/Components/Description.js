// the first component when site opens provides descripton
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../images/hero-bg-1.jpg";

const Description = () => {
  return (
    <div
      className="w-100 container-fluid container-1 mt-5 d-flex align-items-center justify-content-around"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="ms-md-5 d-flex flex-column gap-3 main-head align-items-center align-items-md-start ">
        <h1 className="display-3 desc-head text-md-start text-center">
          Expert: a man who makes three correct guesses consecutively.
        </h1>
        <p className="desc-para text-md-start text-center">
          Sed convallis dapibus massa, ut auctor ipsum scelerisque vitae
          fermentum ut metus sed, aliquet tincidunt eros, euismod lacinia
          mauris, eu eleifend nisl hendrerit eget
        </p>
        <div className="d-flex gap-4 flex-sm-row flex-column">
          <button
            type="button"
            className="btn btn-primary nav-item d-lg-inline px-4 py-2"
          >
            GET STARTED!
          </button>
          <button
            type="button"
            className="btn nav-item d-lg-inline px-4 py-2 startbtn"
          >
            DISCOVER MORE
          </button>
        </div>
      </div>
      <div className="w-25 empty"></div>
    </div>
  );
};

export default Description;
