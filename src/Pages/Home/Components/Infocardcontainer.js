// infotmation proved under what we do container

import React from "react";
import Infocard1 from "./InfoCard1";
import Infocard2 from "./Infocard2";
import logo from "../../../images/images_features12-a_0-1544804161468.jpg";
const Infocardcontainer = () => {
  return (
    <div className="row w-100 mt-5">
      <div className="col-lg-10 col-12 mx-auto">
        <div className="row">
          <div className="col-md-4 col-12">
            <Infocard1
              head="Digital Computing"
              desc="Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore."
            />
            <Infocard1
              head="Cloud Computing"
              desc="Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore."
            />
            <Infocard1
              head="AI Frameworks"
              desc="Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore."
            />
          </div>
          <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
            <img className="img-fluid m-auto w-100" src={logo} alt="logo" />
          </div>
          <div className="col-md-4 col-12">
            <Infocard2
              head="My Heading is awesome"
              desc="Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore."
            />
            <Infocard2
              head="My Heading is awesome"
              desc="Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore."
            />
            <Infocard2
              head="My Heading is awesome"
              desc="Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infocardcontainer;
