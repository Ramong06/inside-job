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
import About from "./pages/About";
import logo from "./logo.svg";
import "./App.css";
import StarRating from "./components/StarRating";
import Navbar from "./components/Navbar";

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
        <Results
          handleSearchResults={handleSearchResults}
          searchData={searchData}
        />
      </Route>
      <Route exact path="/company/:ticker">
        <Company handleSearchResults={handleSearchResults} />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="/star">
        <StarRating />
      </Route>
    </Router>
  );
}

export default App;
