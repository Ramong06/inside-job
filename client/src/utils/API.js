import axios from "axios";

const FinanceAPIKey = "2a4568cb592dd5395bf91d7c44544431";
const NewsAPIKey = "d81ac61ae04549568cc53bd35de7e642";

const tickerSearch = function (query) {
    return axios.get(
        `https://financialmodelingprep.com/api/v3/search?query=${query}&apikey=${FinanceAPIKey}`
    );
};

const companyProfile = function (query) {
    return axios.get(
        `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${FinanceAPIKey}`
    );
}

const incomeStatement = function (ticker) {
    return axios.get(
        `https://financialmodelingprep.com/api/v3/income-statement-as-reported/${ticker}?period=quarter&apikey=${FinanceAPIKey}`
    );
}


const companyHeadlines = function (query) {
    return axios.get(
        `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${NewsAPIKey}&totalResults=3`
    );
};

export default { tickerSearch, companyProfile, incomeStatement, companyHeadlines };
