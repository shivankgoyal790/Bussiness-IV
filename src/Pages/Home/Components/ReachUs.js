//REDIRECT TO CONATCT PAGE COMPONENT
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo2 from "../../../images/geometric-3037169.jpg";

const ReachUs = () => {
  return (
    <div
      className="container-fluid d-flex flex-column align-items-center gap-2 p-5 text-white"
      style={{
        backgroundImage: `url(${logo2})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "rgba(254, 114, 53 , 0.5)",
        backgroundBlendMode: "multiply",
      }}
    >
      <h1 className="display-5 mt-5 text-center" style={{ fontWeight: 700 }}>
        We would love to hear from you
      </h1>
      <div className="row w-100">
        <p
          className="text-center text-white col-md-8 col-12 m-auto mt-4"
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his
          nemore temporibus consequuntur, vim ad prima vivendum consetetur.
          Viderer feugiat at pro, mea aperiam
        </p>
      </div>
      <button
        type="button"
        className="btn nav-item d-lg-inline d-none startbtn px-3 py-2 mt-4"
      >
        GET IN TOUCH
      </button>
    </div>
  );
};

export default ReachUs;
