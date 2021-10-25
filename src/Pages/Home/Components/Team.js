import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo3 from "../../../images/world-map.png";
const Team = () => {
  return (
    <div
      className="w-100 text-white d-flex flex-column align-items-center gap-3 pt-5 pb-6"
      style={{
        backgroundColor: "rgb(0, 119, 255)",
        backgroundImage: `url(${logo3})`,
        backgroundBlendMode: "blend",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <h1 className="display-3 mt-5 desc-para text-white">
        Our work in numbers
      </h1>
      <p className="w-75 text-center mt-3 desc-para text-white py-4">
        Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his
        nemore temporibus consequuntur, vim ad prima vivendum consetetur.
      </p>
      <div className="w-100 d-flex flex-column flex-md-row justify-content-evenly align-items-center mt-5">
        <div className="d-flex flex-column gap-3 justify-content-between align-items-center">
          <h1 className="display-2 bold">100+</h1>
          <p>Successful projects</p>
        </div>
        <div className="d-flex flex-column gap-3 justify-content-between align-items-center">
          <h1 className="display-2 bold">55</h1>
          <p>Business Centers</p>
        </div>
        <div className="d-flex flex-column gap-3 justify-content-between align-items-center">
          <h1 className="display-2 bold">60+</h1>
          <p>Team members</p>
        </div>
        <div className="d-flex flex-column gap-3 justify-content-between align-items-center">
          <h1 className="display-2 bold">20+</h1>
          <p>Supported Countries</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
