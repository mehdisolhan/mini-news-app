import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ news }) => {
  console.log("NEWS", news);
  const renderedNewsCards = news.map((news, index) => {
    return <NewsCard news={news} key={index} />;
  });
  return (
    <div>
      <div className="news-title">
        <h4>Breaking news</h4>
        <div className="dot-line"></div>
      </div>
      <div className="row">{renderedNewsCards}</div>
    </div>
  );
};

export default NewsList;
