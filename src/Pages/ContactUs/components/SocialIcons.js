import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className="d-flex gap-2 justify-content-evenly align-items-center">
      <div
        className="rounded-circle border d-flex justify-content-evenly align-items-center"
        style={{ width: "50px", height: "50px" }}
      >
        <FontAwesomeIcon icon={faFacebookSquare} />
      </div>
      <div
        className="rounded-circle border d-flex justify-content-evenly align-items-center"
        style={{ width: "50px", height: "50px" }}
      >
        <FontAwesomeIcon icon={faTwitterSquare} />
      </div>
      <div
        className="rounded-circle border d-flex justify-content-evenly align-items-center"
        style={{ width: "50px", height: "50px" }}
      >
        <FontAwesomeIcon icon={faYoutubeSquare} />
      </div>
    </div>
  );
};

export default SocialIcons;
