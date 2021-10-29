import React from "react";
import Mainnav from "../../Shared/Components/Mainnav";
import Carousel from "./components/Carousel";
import Projectinfo from "./components/Projectinfo";
import ProjectSummary from "./components/ProjectSummary";
const Details = () => {
  return (
    <div>
      <Mainnav />
      <Carousel />
      <div className="row container mx-auto">
        <div className="col-lg-8 col-12">
          <ProjectSummary />
        </div>
        <div className="col-lg-4 col-12">
          <Projectinfo />
        </div>
      </div>
    </div>
  );
};

export default Details;
