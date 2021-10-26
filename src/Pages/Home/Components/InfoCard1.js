// info card in the whatwedo container
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Infocard1 = (props) => {
  return (
    <div
      className="d-flex flex-column text-white gap-3 align-items-center align-items-md-end p-4"
      style={{ alignItems: props.align }}
    >
      <FontAwesomeIcon
        icon={faCloud}
        style={{ fontSize: "50px", textAlign: props.alignpara }}
      />
      <h4>{props.head}</h4>
      <p className="align">
        Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his
        nemore.
      </p>
    </div>
  );
};

export default Infocard1;
