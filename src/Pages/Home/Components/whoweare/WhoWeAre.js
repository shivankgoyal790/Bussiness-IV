import React from "react";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfigData from "../../../../config.json";
const WhoWeAre = () => {
  return (
    <div className="d-flex flex-column gap-5 justify-content-center align-items-center pb-5 bg-whoweare">
      <h1 className="display-6" style={{ fontWeight: "700" }}>
        {ConfigData.Who_are_we.header}
      </h1>

      <div className="row w-100">
        <p
          className="text-center text-secondary col-md-8 col-12 m-auto"
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          {ConfigData.Who_are_we.para}
        </p>
      </div>

      <div
        className="row container text-white mt-4 gap-1"
        style={{ paddingBottom: "20px" }}
      >
        <div className="col-lg-5 col-md-11 col-12 px-4 py-5 d-flex flex-column gap-4 rounded justify-content-center mx-md-auto aboutcard1">
          <FontAwesomeIcon icon={faArrowsAlt} className="display-3" />
          <h5>{ConfigData.Who_are_we.about_card1.header}</h5>
          <p>{ConfigData.Who_are_we.about_card1.para}</p>
          <p>Read more &#8594;</p>
        </div>
        <div className="col-lg-3 col-md-5 col-12 bg-primary d-flex flex-column gap-4 py-5 px-4 rounded mx-sm-auto aboutcard2">
          <FontAwesomeIcon icon={faArrowsAlt} className="display-3" />
          <h5>{ConfigData.Who_are_we.about_card2.header}</h5>
          <p>{ConfigData.Who_are_we.about_card2.para}</p>
          <p>Read more &#8594;</p>
        </div>

        <div className="col-lg-3 col-md-5 col-12 d-flex flex-column gap-4 py-5 px-4 rounded mx-sm-auto aboutcard3">
          <FontAwesomeIcon icon={faArrowsAlt} className="display-3" />
          <h5>{ConfigData.Who_are_we.about_card3.header}</h5>
          <p>{ConfigData.Who_are_we.about_card3.para}</p>
          <p>Read more &#8594;</p>
        </div>
      </div>
      <button
        type="button"
        className="btn nav-item d-lg-inline d-none startbtn px-3 py-2 mt-4"
      >
        ABOUT US
      </button>
    </div>
  );
};

export default WhoWeAre;
