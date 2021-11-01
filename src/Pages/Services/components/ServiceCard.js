import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="bg-white overflow-hidden shadow-lg py-3 px-5 w-100 mt-5 d-flex align-items-center gap-3">
      <div style={{ marginLeft: "-60px" }}>
        <FontAwesomeIcon
          icon={faGlobe}
          className="text-primary"
          style={{ fontSize: "50px" }}
        />
      </div>
      <div className="text-start">
        <h6>Lorem Ipsum</h6>
        <p className="mt-1 mb-0">
          Voluptatum deleniti atque corrupti quos dolores et quas molestias
          excepturi sint occaecati cupiditate non provident
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
