import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { HeaderComponent } from "../../components/HeaderComponent/HeaderComponent";
import HomePage from "../HomePage/HomePage.jsx";
import JobsPage from "../JobsPage/JobsPage";
import HousingPage from "../HousingPage/HousingPage";

import "./RootPage.scss";

export const RootPage = () => {
  return (
    <div className="RootPage">
      <Router>
        <Route path="/" component={ HeaderComponent } />
        <Switch>
          <Route exact path="/" component={ HomePage} />
          <Route path="/jobs" component={ JobsPage } />
          <Route path="/housing" component={ HousingPage } />
        </Switch>
      </Router>
    </div>
  )
};
