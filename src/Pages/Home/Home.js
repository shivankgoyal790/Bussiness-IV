import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../../images/footer-bg.svg";
import WhatWeDo from "./components/WhatWeDo";
import Description from "./components/Description.js";
import Team from "./components/Team";
import ReachUs from "./components/ReachUs";
import Mainnav from "../../Shared/Components/Mainnav";
const Home = () => {
  return (
    <>
      <Mainnav />
      <div className="w-100 overflow-hidden">
        <Description />
        <div
          className="w-100"
          style={{
            backgroundImage: `url(${logo1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "220px",
          }}
        ></div>
        <WhatWeDo />
        <ReachUs />
        <Team />
        <div className="w-100 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{ transform: "rotate(180deg)" }}
          >
            <path
              fill="#0077ff"
              fill-opacity="1"
              d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,229.3C672,213,768,139,864,138.7C960,139,1056,213,1152,234.7C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Home;
