import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Player from "./Player/Player";
import Home from "./Home/Home";
import Login from "./Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact component={Login} path="/music-player/" />
        <Route exact component={Home} path="/music-player/home" />
      </div>
    </Router>
  );
}

export default App;
