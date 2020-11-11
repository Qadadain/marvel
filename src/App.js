import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Landing from "./components/LandingPage/Landing"
import Home from "./components/Home/Home"
import HeroDetails from "./components/Heroes/HeroDetails"
import Favorites from "./components/Favorites/Favorites"

import {
  ROUTE_FAVORITES,
  ROUTE_HERO_ID,
  ROUTE_HOME,
  ROUTE_LANDING,
} from "./constants"

import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Route path={ROUTE_LANDING} component={Landing} exact />
        <Switch>
          <Route path={ROUTE_HOME} component={Home} />
          <Route path={ROUTE_HERO_ID} component={HeroDetails} />
          <Route path={ROUTE_FAVORITES} component={Favorites} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
