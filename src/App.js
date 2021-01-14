import React from "react";
import home from "./home";
import live from "./live";
import profile from "./profile";
import messages from "./messages";
import teams from "./teams";
import { Route, Link } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Route exact path="/" component={home} />
      <Route exact path="/live" component={live} />
      <Route exact path="/profile" component={profile} />
      <Route exact path="/messages" component={messages} />
      <Route exact path="/teams" component={teams} />
    </div>
  );
}

export default App;
