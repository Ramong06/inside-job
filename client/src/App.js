import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Company from "./pages/Company";
import Home from "./pages/Home";
import Results from "./pages/Results";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    );
  }
}

export default App;
