import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../../../images/waves-1-1.png";
import logo1 from "../../../../images/cropped-waves-1-1.png";
import logo2 from "../../../../images/section-bg-2-1.jpg";
const WhoWeAre = () => {
  return (
    <div
      className="d-flex flex-column gap-5 justify-content-center align-items-center pb-5"
      style={{
        backgroundImage: `url(${logo2})`,
        backgroundPosition: "82% -110%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="display-6" style={{ fontWeight: "700" }}>
        Who we are
      </h1>

      <div className="row w-100">
        <p
          className="text-center text-secondary col-md-8 col-12 m-auto"
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his
          nemore temporibus consequuntur, vim ad prima vivendum consetetur.
          Viderer feugiat at pro, mea aperiam
        </p>
      </div>

      <div
        className="row container text-white px-5 mt-4 gap-md-4 gap-lg-0 gap-5"
        style={{ paddingBottom: "20px" }}
      >
        <div
          className="col-lg-5 col-md-12 px-4 py-5 d-flex flex-column gap-4 rounded justify-content-center mx-md-auto"
          style={{
            backgroundColor: "rgb(36, 46, 66)",
            backgroundImage: `url(${logo})`,
            backgroundSize: "cover",
          }}
        >
          <FontAwesomeIcon icon={faArrowsAlt} className="display-3" />
          <h5>High Quality rendering</h5>
          <p>
            Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In
            his nemore temporibus consequuntur, vim ad prima vivendum
            consetetur. Viderer feugiat at pro, mea aperiam
          </p>
          <p>Read more &#8594;</p>
        </div>
        <div
          className="col-lg-1 d-none d-lg-inline"
          style={{ width: "1%" }}
        ></div>
        <div
          className="col-lg-3 col-md-5 col-12 bg-primary d-flex flex-column gap-4 py-5 px-4 rounded mx-sm-auto"
          style={{
            backgroundImage: `url(${logo1})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <FontAwesomeIcon icon={faArrowsAlt} className="display-3" />
          <h5>Quisque suscipit finibus risus, ut felis vestibulum in</h5>
          <p>
            Vim ad prima vivendum consetetur. Viderer feugiat at pro, mea
            aperiam temporibus consequuntur vim ad prima
          </p>
          <p>Read more &#8594;</p>
        </div>
        <div
          className="col-lg-1 d-none d-md-inline"
          style={{ width: "1%" }}
        ></div>
        <div
          className="col-lg-3 col-md-5 col-12 d-flex flex-column gap-4 py-5 px-4 rounded mx-sm-auto"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            backgroundColor: "rgb(254, 114, 53)",
          }}
        >
          <FontAwesomeIcon icon={faArrowsAlt} className="display-3" />
          <h5>Quisque suscipit finibus risus, ut felis vestibulum in</h5>
          <p>
            Vim ad prima vivendum consetetur. Viderer feugiat at pro, mea
            aperiam temporibus consequuntur vim ad prima
          </p>
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
