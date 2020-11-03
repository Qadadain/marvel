import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/LandingPage/Landing";
import Home from "./components/Home/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Landing} exact />
        <Switch>
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
