import axios from "axios";

const KEY = "AIzaSyCMm0WsTM4NmUpq5AQdTCA9NXw-b7ZOC9E";

const youtubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

const youtube = {
  getSearch: term => {
    youtubeApi.get("/search", {
      params: {
        q: term
      }
    });
  }
};

export default youtube;
