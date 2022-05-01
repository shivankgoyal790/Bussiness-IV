import React from "react";
import WhatWeDo from "./Components/Whatwedo";
import Description from "./Components/Description";
import Team from "./Components/Team";
import ReachUs from "./Components/ReachUs";
import Mainnav from "../../Shared/Components/Mainnav";
import SvgPath from "./Components/SvgPath";
import WhoWeAre from "./Components/whoweare/WhoWeAre";
import Article from "./Components/articles/Article";
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
