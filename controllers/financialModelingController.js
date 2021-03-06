const axios = require("axios");

const API_KEY = process.env.REACT_APP_API_KEY || "2a4568cb592dd5395bf91d7c44544431";
// Defining methods for the financialModelingController

module.exports = {
  //Grabs the companyProfile and incomeStatement info from the Financial Modeling API -> Returns an Object

  companyProfile: function(req, res) {
    const query = req.params.id;
    console.log(query);
    axios
      .get(`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${API_KEY}`)
      .then(companies =>
        companies.map((newCompany) => ({
          name: newCompany.data[0].companyName,
          symbol: newCompany.data[0].symbol,
          description: newCompany.data[0].description,
          industry: newCompany.data[0].industry,
          website: newCompany.data[0].website,
          sector: newCompany.data[0].sector,
          image: newCompany.data[0].image,
        }))
      )
      .then(company => 
        res.json(company)
      )
      .catch(err => res.status(422).json(err));
  },
  incomeStatement: function (req, res) {
    const query = req.params.id;
    axios.get(`https://financialmodelingprep.com/api/v3/income-statement-as-reported/${query}?period=quarter&apikey=${API_KEY}`)
      .then(company => { res.json(company); console.log(company); })
      .catch(err => res.status(422).json(err));
  }
};