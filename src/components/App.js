import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import newsapi from "../apis/newsapi";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import NewsList from "./NewsList";
import Loading from "./Loading";
import Badges from "./Badges";

class App extends React.Component {
  state = {
    news: [],
    newsSources: [],
    lang: "us",
    cat: "",
    favoriteNewspapers: [],
    selectedNewspaper: "",
    errMessage: "",
    loadingNews: true,
    loadingSources: true,
  };

  fetchTopNews = async (language, topic) => {
    try {
      const {
        data: { articles },
      } = await newsapi.get("/top-headlines", {
        params: {
          country: language,
          category: topic,
        },
      });

      this.setState({ news: articles, loadingNews: false });
    } catch (error) {
      this.setState({ errMessage: error.message, loadingNews: false });
      return error;
    }
  };

  fetchSources = async (language) => {
    try {
      const {
        data: { sources },
      } = await newsapi.get("/sources", {
        params: {
          country: language,
        },
      });
      const arrangeSource = sources.filter(
        (elem) =>
          !this.state.favoriteNewspapers.find(({ id }) => elem.id === id)
      );
      this.setState({ newsSources: arrangeSource, loadingSources: false });
    } catch (error) {
      this.setState({ errMessage: error.message, loadingSources: false });
      return error;
    }
  };

  componentDidMount() {
    const localStorageData = JSON.parse(localStorage.getItem("favorites"));
    if (localStorageData !== null) {
      this.setState({ favoriteNewspapers: localStorageData });
    }

    this.fetchTopNews(this.state.lang);
    this.fetchSources(this.state.lang);
  }
  componentDidUpdate() {
    localStorage.setItem(
      "favorites",
      JSON.stringify(this.state.favoriteNewspapers)
    );
  }

  onFormSubmit = async (term) => {
    console.log(term);
    this.setState({ loadingNews: true });
    try {
      const response = await newsapi.get("/everything", {
        params: {
          q: term,
        },
      });
      this.setState({ news: response.data.articles, loadingNews: false });
    } catch (error) {
      this.setState({ errMessage: error.message, loadingNews: false });
      return error;
    }
  };

  onSelectNewspaper = async (selectedSource) => {
    console.log("selected newspaper", selectedSource);
    this.setState({ loadingNews: true });
    try {
      const response = await newsapi.get("/top-headlines", {
        params: {
          sources: selectedSource,
        },
      });
      this.setState({
        news: response.data.articles,
        selectedNewspaper: selectedSource,
        loadingNews: false,
      });
      console.log("get data", response.data.articles);
    } catch (error) {
      this.setState({ errMessage: error.message, loadingNews: false });
      return error;
    }
  };

  onAddFavoriteNewspapers = (newspaper) => {
    console.log(newspaper);
    this.setState({
      favoriteNewspapers: [...this.state.favoriteNewspapers, newspaper],
      newsSources: this.state.newsSources.filter((item) => item !== newspaper),
    });
  };
  onRemoveFavoriteNewspapers = (newspaper) => {
    this.setState({
      favoriteNewspapers: this.state.favoriteNewspapers.filter(
        (item) => item !== newspaper
      ),
      newsSources: [...this.state.newsSources, newspaper],
    });
    console.log(
      "APP onRemoveFavoriteNewspapers",
      this.state.favoriteNewspapers
    );
  };
  onSelectTopic = (topic) => {
    console.log(topic);
    this.setState({ loadingNews: true });
    this.fetchTopNews(this.state.lang, topic);
  };

  renderSidebar() {
    if (this.state.loadingSources) {
      return (
        <div className="col-md-3 col-lg-2 align-middle h-100">
          <Loading />
        </div>
      );
    }
    if (this.state.newsSources.length > 0) {
      return (
        <SideBar
          sources={this.state.newsSources}
          onAddFavoriteNewspapers={this.onAddFavoriteNewspapers}
          onRemoveFavoriteNewspapers={this.onRemoveFavoriteNewspapers}
          favoriteNewspapers={this.state.favoriteNewspapers}
          onSelectNewspaper={this.onSelectNewspaper}
        />
      );
    }
    if (this.state.errMessage) {
      return <div>Error: {this.state.errMessage}</div>;
    }
  }

  renderNews() {
    if (this.state.loadingNews) {
      return <Loading />;
    }
    if (this.state.news.length > 0) {
      return <NewsList news={this.state.news} />;
    }
    if (this.state.news.length === 0) {
      return <div>There is no result...</div>;
    }
    if (this.state.errMessage) {
      return <div>Error: {this.state.errMessage}</div>;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <SearchBar onTermSubmit={this.onFormSubmit} />
        <div className="row">
          {this.renderSidebar()}

          <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="row">
              <div className="col-sm-12 px-md-2">
                <Badges onSelectTopic={this.onSelectTopic} />
              </div>
            </div>
            <div className="row">{this.renderNews()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
