import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ news }) => {
  const renderedNewsCards = news.map((news, index) => {
    return <NewsCard news={news} key={index} />;
  });

  return (
    <div>
      <div className="news-title">
        <h3 className="mt-4 mb-2 font-weight-normal">Breaking news</h3>
        <div className="dot-line"></div>
      </div>
      <div className="row">{renderedNewsCards}</div>
    </div>
  );
};

export default NewsList;
