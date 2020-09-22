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
      <Navbar />
      <Route exact path="/">
        <Home handleSearchResults={handleSearchResults} />
      </Route>
      <Route exact path="/results">
        <Results handleSearchResults={handleSearchResults} searchData={searchData}/>
      </Route>
      <Route exact path="/company">
        <Company handleSearchResults={handleSearchResults}/>
      </Route>
    </Router>
  );
}

export default App;
