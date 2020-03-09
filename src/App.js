import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import PokeDetails from "./components/details/PokeDetails";
import GlobalStyles from "./styles/global";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/pokemon/:pokemonIndex"
                component={PokeDetails}
              />
            </Switch>
          </div>
        </div>
        <GlobalStyles />
      </Router>
    );
  }
}
