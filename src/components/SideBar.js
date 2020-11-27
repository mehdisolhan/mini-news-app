import React, { useState } from "react";
import Fade from "react-reveal/Fade";

const SideBar = (props) => {
  const {
    sources,
    onAddFavoriteNewspapers,
    onRemoveFavoriteNewspapers,
    onSelectNewspaper,
    selectedNewspaper,
  } = props;
  const favoriteNewspapers = props.favoriteNewspapers;

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNewspaper = (sourceId) => {
    onSelectNewspaper(sourceId);
  };

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const renderedNewsList = sources.map((source, index) => {
    return (
      <Fade key={index} collapse top>
        <li key={index} className="nav item">
          <span
            onClick={() => handleNewspaper(source.id)}
            style={{
              backgroundColor: selectedNewspaper === source.id ? "wheat" : " ",
            }}
            className="nav-link news-name"
          >
            {source.name}
          </span>
          <span
            onClick={() => onAddFavoriteNewspapers(source)}
            className="nav-link icon-link"
          >
            <i className="far fa-bookmark"></i>
          </span>
        </li>
      </Fade>
    );
  });

  const renderFavoriteList = favoriteNewspapers.map((source, index) => {
    return (
      <Fade key={index} bottom collapse>
        <li key={index} className="nav item">
          <span
            onClick={(e) => handleNewspaper(source.id)}
            style={{
              backgroundColor: selectedNewspaper === source.id ? "wheat" : " ",
            }}
            className="nav-link news-name"
          >
            {source.name}
          </span>
          <span
            onClick={() => onRemoveFavoriteNewspapers(source)}
            className="nav-link icon-link"
          >
            <i className="fas fa-bookmark"></i>
          </span>
        </li>
      </Fade>
    );
  });

  return (
    <div className="col-md-3 col-lg-2">
      <nav className="col-md-3 col-lg-2 sidebar navbar navbar-expand-lg navbar-inverse bg-inverse">
        <button
          className="navbar-toggler side-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsSide"
          aria-controls="navbarsSide"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span>
            <i className={isNavCollapsed ? "fas fa-bars" : "fas fa-times"}></i>
          </span>
          <span className="collapse-title">Sources</span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarsExample09"
        >
          <div className="sidebar-sticky pt-3 ">
            <h6 className="sidebar-heading justify-content-between align-items-center text-center text-muted">
              Favorites
            </h6>
            <ul className="nav flex-column">
              {favoriteNewspapers.length === 0 ? (
                <span className="text-center text-muted favorite-info">
                  There is no favorite newspaper
                </span>
              ) : (
                renderFavoriteList
              )}
            </ul>

            <h6 className="sidebar-heading justify-content-between align-items-center mt-3 text-center text-muted">
              Newspapers
            </h6>
            <ul className="nav flex-column">{renderedNewsList}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
