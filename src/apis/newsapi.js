import axios from "axios";

const url = "https://newsapi.org/v2";

export default axios.create({
  baseURL: url,
  params: {
    apiKey: process.env.REACT_APP_NEWS_API_KEY,
  },
});
