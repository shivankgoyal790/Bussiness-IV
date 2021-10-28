import React from "react";
import logo from "../../../../images/colibri.jpg";
const ArticleCard = (props) => {
  return (
    <div className="card cardclass">
      <img className="card-img-top" src={logo} alt="Card" />
      <div className="card-body">
        <h3>Lorem ipsum</h3>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse […]
        </p>
        <p style={{ textAlign: "right" }}>Read more &#8594;</p>
      </div>
    </div>
  );
};

export default ArticleCard;
