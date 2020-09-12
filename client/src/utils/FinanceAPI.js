import axios from "axios";

const APIKey = "2a4568cb592dd5395bf91d7c44544431";

const companyProfile = function (query) {
    return axios.get(
        `https://financialmodelingprep.com/api/v3/search?query=${query}&apikey=${APIKey}`
    );
};

const incomeStatement = function (ticker) {
    return axios.get(
        `https://financialmodelingprep.com/api/v3/income-statement-as-reported/${ticker}?period=quarter&apikey=${APIKey}`
    );
}

export default { companyProfile, incomeStatement };
