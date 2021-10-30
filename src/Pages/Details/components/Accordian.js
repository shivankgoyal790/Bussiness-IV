import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Accordian = (props) => {
  const [active, setactive] = useState(false);
  const togglehandler = () => {
    if (active === false) setactive(true);
    else setactive(false);
  };
  return (
    <div className="w-100">
      <div
        className={`p-3 d-flex justify-content-between align-items-center ${
          active ? "text-white" : " "
        }`}
        style={{
          backgroundColor: active ? "rgb(0,119,255)" : "#f4f4f4",
          cursor: "pointer",
        }}
        onClick={togglehandler}
      >
        <div>{props.heading}</div>
        <div>
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ display: active ? "none" : "block" }}
          />
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ display: active ? "block" : "none" }}
          />
        </div>
      </div>
      <div
        className="bg-white shadow-lg py-5 px-3"
        style={{ display: active ? "block" : "none" }}
      >
        {props.text}
      </div>
    </div>
  );
};

export default Accordian;
