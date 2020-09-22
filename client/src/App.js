import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import Company from "./pages/Company";
import Home from "./pages/Home";
import Results from "./pages/Results";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchData, setSearchData] = useState({});

  const handleSearchResults = (searchData, history) => {
    setSearchData(searchData);

    debugger;

    history.push("results");
  };

  return (
    <Router>
      <Route exact path="/">
        <Home handleSearchResults={handleSearchResults} />
      </Route>
      <Route exact path="/results">
        <Results searchData={searchData} />
      </Route>
      <Route exact path="/company/:ticker">
        <Company />
      </Route>
    </Router>
  );
}

export default App;
