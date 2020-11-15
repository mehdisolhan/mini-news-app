import React from "react";

const Badges = ({ onSelectTopic }) => {
  return (
    <div className="text-center">
      <span
        onClick={() => onSelectTopic("")}
        style={{ cursor: "pointer" }}
        className="badge badge-info m-2 topics"
      >
        <i className="fas fa-bolt"></i> Breaking News
      </span>
      <span
        onClick={() => onSelectTopic("entertainment")}
        style={{ cursor: "pointer" }}
        className="badge badge-info m-2 topics"
      >
        <i className="fas fa-video"></i> Entertainment
      </span>
      <span
        onClick={() => onSelectTopic("science")}
        style={{ cursor: "pointer" }}
        className="badge badge-info m-2 topics"
      >
        <i className="fas fa-flask"></i> Science
      </span>
      <span
        onClick={() => onSelectTopic("sports")}
        style={{ cursor: "pointer" }}
        className="badge badge-info m-2 topics"
      >
        <i className="fas fa-futbol"></i> Sports
      </span>
      <span
        onClick={() => onSelectTopic("technology")}
        style={{ cursor: "pointer" }}
        className="badge badge-info m-2 topics"
      >
        <i className="fas fa-laptop-code"></i> Technology
      </span>
      <span
        onClick={() => onSelectTopic("business")}
        style={{ cursor: "pointer" }}
        className="badge badge-info m-2 topics"
      >
        <i className="fas fa-business-time"></i> Business
      </span>
    </div>
  );
};

export default Badges;
