import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/LandingPage/Landing";
import Home from "./components/Home/Home";
import HeroDetails from "./components/Heroes/HeroDetails";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Landing} exact />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/hero/:id" component={HeroDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
