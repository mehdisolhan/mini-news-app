import React from "react";
import * as moment from "moment";
import "../css/newsCard.css";
import emptyImage from "../images/no-image.svg";

//TODO dot line
const NewsCard = ({ news }) => {
  return (
    <article className="col-sm-4">
      <div className="card card-full hover-a mb-module">
        <div className="image-wrapper">
          <a href={news.url} rel="noreferrer" target="_blank">
            <img
              width="360"
              height="202"
              src={
                news.urlToImage != null &&
                news.urlToImage !== "null" &&
                news.urlToImage !== ""
                  ? news.urlToImage
                  : emptyImage
              }
              className="img-fluid lazy wp-post-image loaded"
              alt="alt"
              sizes="(max-width: 360px) 100vw, 360px"
            />
          </a>
          <div className="position-absolute m-2 b-0">
            <span className="p-1 badge badge-primary">{news.source.name}</span>
          </div>
        </div>
        <div className="card-body">
          <h3 className="card-title h2 h3-sm h4-md h3-lg">
            <span>{news.title}</span>
          </h3>
          <div className="card-text mb-2 text-muted small">
            <span className="font-weight-bold d-none d-sm-inline mr-1">
              <span>{news.author}</span>{" "}
            </span>
            <span className="news-date float-right">
              {moment(new Date(news.publishedAt)).format("DD/MM/YYYY")}
            </span>
          </div>
          <p className="card-text">{news.description}</p>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;