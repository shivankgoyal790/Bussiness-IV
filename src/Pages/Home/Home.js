import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../../images/footer-bg.svg";
import WhatWeDo from "./components/WhatWeDo";
import Description from "./components/Description.js";
import Team from "./components/Team";
import ReachUs from "./components/ReachUs";
import Mainnav from "../../Shared/Components/Mainnav";
import SvgPath from "./components/SvgPath";
import WhoWeAre from "./components/whoweare/WhoWeAre";
import Article from "./components/articles/Article";
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
        <WhoWeAre />
        <ReachUs />
        <Team />
        <SvgPath />
        <Article />
      </div>
    </>
  );
};

export default Home;
