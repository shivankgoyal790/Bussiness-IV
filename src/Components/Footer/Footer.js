import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import SocialIcons from "./Socialicons.js";
const Footer = () => {
  return (
    <div className="w-100 mt-5">
      <div className="w-100 footerwaves"></div>
      <div className="w-100" style={{ backgroundColor: "rgb(0, 119, 255)" }}>
        <div className="row pt-5 pb-3 container mx-auto gap-sm-0 gap-4 text-white">
          <div
            className="col-lg-5  col-sm-6 col-12 flex-column d-flex gap-4 pt-0"
            style={{ marginTop: "-5px" }}
          >
            <h1 className="m-0">Business IV</h1>
            <div className="w-75">
              Follow our Latest achievements and information on social newtorks
            </div>
            <div className="d-flex gap-2">
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                icon={faFacebookSquare}
              />
              <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faTwitter} />
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                icon={faInstagram}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 col-12 d-flex flex-column gap-3 mt-sm-0 mt-5 footerlinks">
            <h5 className="m-0">All packages</h5>
            <span>Package-1</span>
            <span>Package-2</span>
            <span>Package-3</span>
            <span>Package-4</span>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 col-12 d-flex flex-column justify-content-md-start align-items-md-start justify-content-center mt-md-0 mt-5">
            <div className="d-flex flex-column gap-3 footerlinks">
              <h5 className="m-0">Quick Link</h5>
              <span>
                <Link className="text-white" to="/services">
                  Services
                </Link>
              </span>
              <span>
                <Link className="text-white" to="/portfolio">
                  Portfolio
                </Link>
              </span>
              <span>
                <Link className="text-white" to="/about">
                  About Us
                </Link>
              </span>
              <span>
                <Link className="text-white" to="/contact">
                  Contact Us
                </Link>
              </span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12 flex-column d-flex justify-content-md-start align-items-md-start mt-lg-0 mt-5 gap-1 footerlinks">
            <h5>+1 514 648 256</h5>
            <span>youremail@gmail.com</span>
            <span>123 East 26th Street, Fifth Floor,</span>
            <span>New York, NY 10011</span>
          </div>
          <hr className="mt-5 p-0"></hr>
          <div className="d-flex w-100 justify-content-evenly align-items-center text-white flex-md-row flex-column gap-md-0 gap-3">
            <div className="text-center">
              Copyright ©2021 All rights reserved | This template is made with
              by Colorlib
            </div>
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
