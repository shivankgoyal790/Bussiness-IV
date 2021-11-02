import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import configdata from "../../../config.json";
import ServiceCard from "./ServiceCard";

const Ourservices = [
  {
    id: "1",
    head: configdata.Services.services_container.card1.head,
    para: configdata.Services.services_container.card1.para,
    icon: faGlobe,
  },
  {
    id: "2",
    head: configdata.Services.services_container.card2.head,
    para: configdata.Services.services_container.card2.para,
    icon: faGlobe,
  },
  {
    id: "3",
    head: configdata.Services.services_container.card3.head,
    para: configdata.Services.services_container.card3.para,
    icon: faGlobe,
  },
  {
    id: "4",
    head: configdata.Services.services_container.card4.head,
    para: configdata.Services.services_container.card4.para,
    icon: faGlobe,
  },
  {
    id: "5",
    head: configdata.Services.services_container.card5.head,
    para: configdata.Services.services_container.card5.para,
    icon: faGlobe,
  },
  {
    id: "6",
    head: configdata.Services.services_container.card6.head,
    para: configdata.Services.services_container.card6.para,
    icon: faGlobe,
  },
];

const ServicesCardContainer = () => {
  return (
    <div className="row px-sm-4 px-0">
      {Ourservices.map((curr) => {
        return (
          <div className="col-lg-4 col-md-6 col-11 mx-md-0 mx-auto">
            <ServiceCard
              key={curr.id}
              head={curr.head}
              para={curr.para}
              icon={curr.icon}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ServicesCardContainer;
