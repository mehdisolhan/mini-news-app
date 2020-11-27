import React, { useState } from "react";
import "../css/searchBar.css";

const SearchBar = (props) => {
  const { onTermSubmit, onSelectTopic, title } = props;

  const [term, setTerm] = useState("");
  const [navBarCollapsed, setNavbarCollapsed] = useState(true);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (term !== "") {
      onTermSubmit(term);
    }
  };

  const handleNavCollapse = () => setNavbarCollapsed(!navBarCollapsed);

  const renderMenuItems = () => {
    return (
      <ul className="navbar-nav mr-auto justify-content-end">
        <li className="nav-item">
          <span
            onClick={() => onSelectTopic("business")}
            style={{
              color: title.includes("business") ? "#efb853" : " ",
            }}
            className="menu-item"
          >
            <i className="fas fa-business-time"></i> Business
          </span>
        </li>
        <li className="nav-item">
          <span
            onClick={() => onSelectTopic("entertainment")}
            style={{
              color: title.includes("entertainment") ? "#efb853" : " ",
            }}
            className="menu-item"
          >
            <i className="fas fa-video"></i> Entertainment
          </span>
        </li>
        <li className="nav-item">
          <span
            onClick={() => onSelectTopic("science")}
            style={{
              color: title.includes("science") ? "#efb853" : " ",
            }}
            className="menu-item"
          >
            <i className="fas fa-flask"></i> Science
          </span>
        </li>
        <li className="nav-item">
          <span
            onClick={() => onSelectTopic("technology")}
            style={{
              color: title.includes("technology") ? "#efb853" : " ",
            }}
            className="menu-item"
          >
            <i className="fas fa-laptop-code"></i> Technology
          </span>
        </li>
        <li className="nav-item">
          <span
            onClick={() => onSelectTopic("sports")}
            style={{
              color: title.includes("sports") ? "#efb853" : " ",
            }}
            className="menu-item"
          >
            <i className="fas fa-futbol"></i> Sports
          </span>
        </li>
      </ul>
    );
  };

  return (
    <div className="row justify-content-between">
      <nav className="navbar navbar-dark navbar-expand-lg search-bar fixed-top">
        <button
          className="navbar-toggler top-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsEx"
          aria-controls="navbarsEx"
          aria-expanded={!navBarCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span>
            <i className={navBarCollapsed ? "fas fa-bars" : "fas fa-times"}></i>
          </span>
        </button>
        <span
          onClick={() => onSelectTopic("breaking")}
          className="navbar-brand"
        >
          <i className="far fa-newspaper"></i> Mini News App
        </span>
        <div
          className={`${navBarCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarsEx"
        >
          {renderMenuItems()}
          <form onSubmit={onFormSubmit} className="form-inline">
            <input
              onChange={(e) => setTerm(e.target.value)}
              className="form-control mr-sm-2 ml-sm-2"
              placeholder="Search"
              type="text"
              id="searchInput"
            />
            <span
              onClick={onFormSubmit}
              className="menu-item-search m-2 float-right"
            >
              <i className="fas fa-search"></i>
            </span>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
