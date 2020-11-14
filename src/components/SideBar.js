import React from "react";
import "../css/sideBar.css";
import "jquery";

//TODO remove jquery from project
//TODO toogle button with collapse

const SideBar = (props) => {
  const {
    sources,
    onAddFavoriteNewspapers,
    onRemoveFavoriteNewspapers,
    onSelectNewspaper,
  } = props;
  const favoriteNewspapers = props.favoriteNewspapers;
  console.log(sources);

  const renderedNewsList = sources.map((source, index) => {
    return (
      <li key={index} className="nav item">
        <span onClick={() => onSelectNewspaper(source.id)} className="nav-link">
          {source.name}
        </span>
        <span
          onClick={() => onAddFavoriteNewspapers(source)}
          className="nav-link icon-link"
        >
          <i className="far fa-bookmark"></i>
        </span>
      </li>
    );
  });
  const renderFavoriteList = favoriteNewspapers.map((source, index) => {
    console.log("favorites", source);
    return (
      <li key={index} className="nav item">
        <span onClick={() => onSelectNewspaper(source.id)} className="nav-link">
          {source.name}
        </span>
        <span
          onClick={() => onRemoveFavoriteNewspapers(source)}
          className="nav-link icon-link"
        >
          <i className="fas fa-bookmark"></i>
        </span>
      </li>
    );
  });

  return (
    <div>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="sidebar-sticky pt-3">
          <h6 className="sidebar-heading justify-content-between align-items-center text-center text-muted">
            Favorites
          </h6>
          <ul className="nav flex-column">{renderFavoriteList}</ul>

          <h6 className="sidebar-heading justify-content-between align-items-center mt-3 text-center text-muted">
            Newspapers
          </h6>
          <ul className="nav flex-column">{renderedNewsList}</ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
