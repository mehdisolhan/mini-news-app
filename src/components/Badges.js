import React from "react";

const Badges = ({ onSelectTopic }) => {
  return (
    <div>
      <span
        onClick={() => onSelectTopic("")}
        style={{ cursor: "pointer" }}
        className="badge badge-info m-2 topics"
      >
        Breaking News
      </span>
      <span
        onClick={() => onSelectTopic("entertainment")}
        style={{ cursor: "pointer" }}
        className="badge badge-info m-2 topics"
      >
        Entertainment
      </span>
      <span
        onClick={() => onSelectTopic("science")}
        style={{ cursor: "pointer" }}
        className="badge badge-info m-2 topics"
      >
        Science
      </span>
      <span
        onClick={() => onSelectTopic("sports")}
        style={{ cursor: "pointer" }}
        className="badge badge-info m-2 topics"
      >
        Sports
      </span>
      <span
        onClick={() => onSelectTopic("technology")}
        style={{ cursor: "pointer" }}
        className="badge badge-info m-2 topics"
      >
        Technology
      </span>
      <span
        onClick={() => onSelectTopic("business")}
        style={{ cursor: "pointer" }}
        className="badge badge-info m-2 topics"
      >
        Business
      </span>
    </div>
  );
};

export default Badges;
