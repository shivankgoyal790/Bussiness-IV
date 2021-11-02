import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FeedbackCard = (props) => {
  return (
    <div className="d-flex flex-column gap-3 bg-white px-4 py-5">
      <div className="d-flex gap-3 align-items-center">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <h6>{props.head}</h6>
      <p> {props.para}</p>
      <p>User name</p>
    </div>
  );
};

export default FeedbackCard;
