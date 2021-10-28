// info card in the whatwedo container
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Infocard2 = (props) => {
  return (
    <div className="d-flex flex-column text-white gap-3 align-items-center align-items-md-start p-4">
      <div>
        <FontAwesomeIcon icon={faCloud} style={{ fontSize: "50px" }} />
      </div>
      <h4>{props.head}</h4>
      <div>{props.desc}</div>
    </div>
  );
};

export default Infocard2;
