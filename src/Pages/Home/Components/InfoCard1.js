// info card in the whatwedo container
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Infocard1 = (props) => {
  return (
    <div
      className="d-flex flex-column text-white gap-3 align-items-center align-items-md-end p-4"
      style={{ alignItems: props.align }}
    >
      <FontAwesomeIcon
        className="align"
        icon={faCloud}
        style={{ fontSize: "50px" }}
      />
      <h4>{props.head}</h4>
      <p className="align">{props.desc}</p>
    </div>
  );
};

export default Infocard1;
