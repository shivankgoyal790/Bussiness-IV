import React from "react";
import image1 from "../../../images/ian-dooley-DJ7bWa-Gwks-unsplash.jpg";
import image2 from "../../../images/mikey-harris-kw0z6RyvC0s-unsplash.jpg";
import image3 from "../../../images/istockphoto-1277348882-170667a.jpg";
import { Carousel } from "react-bootstrap";
const Slider = () => {
  return (
    <Carousel
      interval={4000}
      className="container text-center bg-white col-lg-9 col-12"
    >
      <Carousel.Item style={{ height: "620px" }}>
        <img src={image1} alt="img1" className="w-100" />
      </Carousel.Item>
      <Carousel.Item style={{ height: "620px" }}>
        <img src={image2} alt="img1" className="w-100" />
      </Carousel.Item>
      <Carousel.Item style={{ height: "620px" }}>
        <img src={image3} alt="img1" className="w-100" />
      </Carousel.Item>
    </Carousel>
  );
};
export default Slider;
