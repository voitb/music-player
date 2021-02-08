import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Player from "./Player/Player";
import Login from "./Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact component={Login} path="/" />
        <Route exact component={Player} path="/home" />
      </div>
    </Router>
  );
}

export default App;
