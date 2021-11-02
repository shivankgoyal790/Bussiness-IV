import React from "react";
import image1 from "../../../images/download.webp";
import image2 from "../../../images/download (1).webp";
import image3 from "../../../images/download (2).webp";
import image4 from "../../../images/download (3).webp";
const BrandsContainer = () => {
  return (
    <div className="container mt-5 overflow-hidden">
      <div
        draggable="true"
        className=" d-flex gap-5  mt-5 p-5 justify-content-between align-items-center overflow-hidden"
      >
        <div>
          <img src={image1} alt="brand" width="160px"></img>
        </div>
        <div>
          <img src={image2} alt="brand" width="160px"></img>
        </div>
        <div>
          <img src={image3} alt="brand" width="160px"></img>
        </div>
        <div>
          <img src={image4} alt="brand" width="160px"></img>
        </div>
        <div>
          <img src={image1} alt="brand" width="160px"></img>
        </div>
      </div>
    </div>
  );
};

export default BrandsContainer;
