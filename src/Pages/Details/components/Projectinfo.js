import React from "react";
import SocialIcons from "../../../Components/Footer/Socialicons";
import {
  faBuilding,
  faCalendarAlt,
  faFolder,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBookmark,
  faGlobe,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projectinfo = () => {
  return (
    <div className="d-flex flex-column py-5 gap-2">
      <div>
        <button type="button" className="btn btn-secondary rounded-1 mb-4">
          <FontAwesomeIcon icon={faShare} />
          SHARE
        </button>
      </div>
      <div className="d-flex gap-3 align-items-start">
        <FontAwesomeIcon icon={faBuilding} className="mt-2" />
        <div>
          <div>Client</div>
          <div>Company Name</div>
        </div>
      </div>
      <hr></hr>
      <div className="d-flex  gap-3">
        <FontAwesomeIcon icon={faBookmark} className="mt-2" />
        <div>
          <div>Service</div>
          <div>Packaging Design</div>
        </div>
      </div>
      <hr></hr>
      <div className="d-flex  gap-3 align-items-start">
        <FontAwesomeIcon icon={faCalendarAlt} className="mt-2" />
        <div>
          <div>Date</div>
          <div>04/08/2021</div>
        </div>
      </div>
      <hr></hr>
      <div className="d-flex  gap-3">
        <FontAwesomeIcon icon={faGlobe} className="mt-2" />
        <div>
          <div>Website</div>
          <div>www.website.com</div>
        </div>
      </div>
      <hr></hr>
      <div className="d-flex  gap-3">
        <FontAwesomeIcon icon={faFolder} className="mt-2" />
        <div>
          <div>Categories</div>
          <div>Graphic Design</div>
        </div>
      </div>
      <hr></hr>
      <div className="w-75">
        <SocialIcons color="black" bgcolor="lightgray" />
      </div>
    </div>
  );
};

export default Projectinfo;
