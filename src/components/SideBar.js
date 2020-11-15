import React from "react";

const SideBar = (props) => {
  const {
    sources,
    onAddFavoriteNewspapers,
    onRemoveFavoriteNewspapers,
    onSelectNewspaper,
  } = props;
  const favoriteNewspapers = props.favoriteNewspapers;

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
      <nav className="col-md-3 col-lg-2 d-md-block sidebar collapse">
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
      </nav>
    </div>
  );
};

export default SideBar;
