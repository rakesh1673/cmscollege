import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/Navbar/Navbar.css";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Academics from "./pages/Academics";
import Campuslife from "./pages/Campuslife";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={Aboutus} />
          <Route path="/academics" exact component={Academics} />
          <Route path="/campuslife" exact component={Campuslife} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
