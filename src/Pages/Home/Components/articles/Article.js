import React from "react";
import ArticleCard from "./ArticleCard";

const Article = () => {
  return (
    <div className="d-flex flex-column gap-5 justify-content-center align-items-center py-5">
      <h1 className="display-6" style={{ fontWeight: "700" }}>
        Latest Articles
      </h1>

      <div className="row w-100">
        <p
          className="text-center text-secondary col-md-8 col-12 m-auto"
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his
          nemore temporibus consequuntur, vim ad prima vivendum consetetur.
          Viderer feugiat at pro, mea aperiam
        </p>
      </div>
      <div className="w-100 d-flex flex-md-row flex-column justify-content-center align-items-center gap-5 flex-md-wrap">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <button
        type="button"
        className="btn nav-item d-lg-inline d-none startbtn px-3 py-2 mt-4"
      >
        VIEW MORE
      </button>
    </div>
  );
};

export default Article;
