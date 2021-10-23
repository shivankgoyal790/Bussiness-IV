import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../../images/footer-bg.svg";
import Whatwedo from "./Components/Whatwedo";
import Description from "./Components/Description";
const Home = () => {
  return (
    <div className="w-100">
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
      <Whatwedo />
    </div>
  );
};

export default Home;
