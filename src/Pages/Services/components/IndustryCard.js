import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IndustryCard = () => {
  return (
    <div
      className="d-flex flex-column p-5 text-center justify-content-evenly gap-3 align-items-center shadow text-primary"
      style={{ backgroundColor: "a#f3f8ff" }}
    >
      <FontAwesomeIcon icon={faBuilding} style={{ fontSize: "45px" }} />
      <h4 style={{ color: "#003072" }}>Industries & Manufacturing</h4>
    </div>
  );
};

export default IndustryCard;
