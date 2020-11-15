import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.term !== "") {
      this.props.onTermSubmit(this.state.term);
    }
  };

  render() {
    return (
      <div className="row">
        <nav className="navbar navbar-dark search-bar fixed-top">
          <span className="navbar-brand">
            <i className="far fa-newspaper"></i> Mini News App
          </span>
          <form onSubmit={this.onFormSubmit} className="form-inline">
            <label htmlFor="searchInput" style={{ color: "white" }}>
              Search for spesicif news
            </label>
            <input
              onChange={(e) => this.setState({ term: e.target.value })}
              className="form-control mr-sm-2 ml-sm-2"
              type="text"
              id="searchInput"
            />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default SearchBar;
