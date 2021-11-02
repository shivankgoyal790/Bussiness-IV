import React from "react";
import IndustryCard from "./IndustryCard";
import configdata from "../../../config.json";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    id: "1",
    para: configdata.Services.industry.card1.head,
    icon: faBuilding,
  },
  {
    id: "2",
    para: configdata.Services.industry.card2.head,
    icon: faBuilding,
  },
  {
    id: "3",
    para: configdata.Services.industry.card3.head,
    icon: faBuilding,
  },
  {
    id: "4",
    para: configdata.Services.industry.card4.head,
    icon: faBuilding,
  },
];

const IndustryCardList = () => {
  return (
    <div className="row container mx-auto mt-5 gap-5 gap-md-0">
      {items.map((curr) => {
        return (
          <div className="col-lg-3 col-md-4 col-11 mx-auto">
            <IndustryCard para={curr.para} key={curr.id} icon={curr.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default IndustryCardList;
