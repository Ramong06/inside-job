import axios from "axios";

const APIKey = "d81ac61ae04549568cc53bd35de7e642";
const companyHeadlines = function (query) {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${APIKey}&totalResults=3`
  );
};

export default companyHeadlines;
