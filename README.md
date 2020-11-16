# Mini News App

This project enables the listing of news brought from api. Information such as the picture, title, description, time and author of the news is presented to the user. When the user clicks on the news, it is directed to the website that is the main source of the news. In addition, there are various news sources and only the news of that sources is also shown. The user can favorite the news source if he / she wants and even if he closes the browser, those sources will continue to be stored. The user can search with the keywords they want and reach the results. There are also various topics on the page, and by clicking on those topics, they can reach the relevant news in a short way.

### Build Dependencies

- React: 17.0.1
- React-DOM: 17.0.1
- Bootstrap: 4.5.3
- axios: 0.21.0
- moment: 2.29.1
- Font Awesome: 5.10.0

### Supported Browsers

- Newest Chrome/Chromium (86.0.4240.193 or higher)
- Newest Opera (72.0.3815.320 or higher)
- Newest Firefox (82.0.3 or higher)
- Newest Microsoft Edge (44.18362.449.0 or higher)

### API Service

NewsAPI

For documentation and api key, the following website was used;
https://newsapi.org/docs/get-started

### Limitations

With free developer account, NewsAPI can only bring 20 news at a time. Therefore, there was no need for pagination. At the same time, there was no need to filter sources, as it brought about 50-60 in news sources.

## Code Review

The project was created with the following npm command

```
create-react-app mini-news-app
```

I created the structure with one main component and six different components. My main component is **App.js**.

### App.js

This component is the main component of the application. Created states are;

```javascript
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
```

When starting the application, news and news sources were brought from the API with `componentDidMount`, which is a react lifecycle method. It was synchronized to the states named News and newsSources. Favorite newspapers in Local Storage are also controlled here, as they have to be done before rendering.

```javascript
const localStorageData = JSON.parse(localStorage.getItem("favorites"));
if (localStorageData !== null) {
  this.setState({ favoriteNewspapers: localStorageData });
}
```

Fetching operations from the API were done with `fetchSources` and `fetchTopNews` that are async await functions. Setting favorite newspapers to local storage is done with `componentDidUpdate`.

The functions `onAddFavoriteNewspapers` and `onRemoveFavoriteNewspapers` were used to add to and remove from favorites. The states kept with these functions have been updated.

Rendering was done using `renderSideBar` and `renderNews` functions in the render method. The reason for this is that various control processes must be performed on both components. For example, checks were made, such as whether the data came or were there any errors. In the process of receiving the data, the Loading component was also called here.

#### newsapi.js

Axios, an npm package, was used for fetching operations. Axios is promise based HTTP client for node.js. Here, a general structure including API KEY and URL was created and this structure was used for the rest of the project.

```javascript
import axios from "axios";

const url = "http://newsapi.org/v2";
const KEY = "***";

export default axios.create({
  baseURL: url,
  params: {
    apiKey: KEY,
  },
});
```

**_Due to the nature of NewsAPI, all fetching operations could not be done with `fetchTopNews` and `fetchSources` functions. That's why the `onFormSubmit` and `onSelectNewspaper` functions are also used to bring the data async._**

### SideBar.js

It is the component used for the structure that is fixed to the left of the screen and shows the news sources. The sent props were used inside by opening them with destructing.

```javascript
const {
  sources,
  onAddFavoriteNewspapers,
  onRemoveFavoriteNewspapers,
  onSelectNewspaper,
} = props;
```

Adding to and removing favorites process is sent to the component named App.js with the child-to-parent communication, which newspaper was selected and which one was deleted.

### NewsList.js

This component is a general component in which news cards are kept. It was sent to the component as an array prop containing all news named all news from App.js. With this prop, mapping operation, a general news list was created by calling all cards one by one from the component named NewsCard.

```javascript
const renderedNewsCards = news.map((news, index) => {
  return <NewsCard news={news} key={index} />;
});
```

### NewsCard.js

It was created for a single card component. Since all news from NewsList.js is sent one by one, i placed the items sent in this component in appropriate places

##### moment

Moment is a javaScript date library for parsing, validating, manipulating, and formatting dates.

It is used to edit fetched data.

```javascript
{
  moment(new Date(news.publishedAt)).format("DD/MM/YYYY");
}
```

### Badge.js

With this component, I created the topics at the top. When I call this component with App.js, I send a function named `onSelectTopic` as prop. Thus, a fetching process takes place in App.js according to the topic clicked here. According to the clicked topic, news about that topic comes from the API and NewsList component is rendered.

### Loading.js

This component was created to show the user something has been loaded during fetching operations. A component for UI purposes. Bootstrap's spinner class is used to show the load bar.

### SearchBar.js

It was created to place a fixed navbar at the top of the page. When called from the main component, the async function named onFormSubmit is given as prop. Thus, a search can be made according to the entered word. It was created as a class component not to create an uncontrolled structure in SearchBar. There is a state named "term" in it. With the `onChange` event, each character entered is matched to this state and then to the value of the input object. Thus, a controlled structure was created.
