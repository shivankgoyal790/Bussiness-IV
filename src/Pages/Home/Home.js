import React from "react";
import WhatWeDo from "./components/Whatwedo";
import Description from "./components/Description";
import Team from "./components/Team";
import ReachUs from "./components/ReachUs";
import Mainnav from "../../shared/components/Mainnav";
import SvgPath from "./components/SvgPath";
import WhoWeAre from "./components/whoweare/WhoWeAre";
import Article from "./components/articles/Article";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Mainnav />
      <div className="w-100 overflow-hidden">
        <Description />
        <div className="w-100 colorwaves"></div>
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
