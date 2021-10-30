import React from "react";
import image1 from "../../../images/download.png";
import image2 from "../../../images/download (1).png";
import image3 from "../../../images/download (2).png";
import image4 from "../../../images/co.svg";
const Investors = () => {
  return (
    <div className="w-100 d-flex p-5 flex-column gap-5 align-items-center mt-5 bg-light">
      <h1>Our Investors</h1>
      <div className="row">
        <div className="col-md-8 col-12 d-flex flex-wrap align-items-center justify-content-center gap-4 mx-auto">
          <div
            className="p-5 bg-white shadow-lg"
            style={{ width: "300px", height: "190px" }}
          >
            <img
              className="w-100 h-100"
              src={image1}
              style={{ objectFit: "cover" }}
              alt="image1"
            ></img>
          </div>
          <div
            className=" p-5 bg-white shadow-lg"
            style={{ width: "300px", height: "190px" }}
          >
            <img
              className="w-100 h-100"
              src={image2}
              style={{ objectFit: "cover" }}
              alt="image2"
            ></img>
          </div>
          <div
            className=" p-5 bg-white shadow-lg"
            style={{ width: "300px", height: "190px" }}
          >
            <img
              className="w-100 h-100"
              src={image3}
              style={{ objectFit: "cover" }}
              alt="image3"
            ></img>
          </div>
          <div
            className=" p-5 bg-white shadow-lg"
            style={{ width: "300px", height: "190px" }}
          >
            <img
              className="w-100 h-100"
              src={image4}
              style={{ objectFit: "cover" }}
              alt="image4"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Investors;
