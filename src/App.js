import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/Navbar/Navbar.css";
import AdmissionComp from "../src/components/admission/AdmissionComp"
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Academics from "./pages/Academics";
import Campuslife from "./pages/Campuslife";
import Examination from "./components/admission/Examination";
import Organization from "./components/admission/Organization";
import NavHeader from "./components/DrawerNavigation/Navheader";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        {/* <NavHeader/> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={Aboutus} />
          <Route path="/academics" exact component={Academics} />
          <Route path="/campuslife" exact component={Campuslife} />
          <Route path='/admissions' exact component={AdmissionComp}/>
          <Route path='/examinations' exact component={Examination}/>
          <Route path='/organisation' exact component={Organization}/>
        </Switch>
      </Router>
    </>
  );
};

export default App;
