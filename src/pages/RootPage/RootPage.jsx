import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import { HeaderComponent } from "../../components/HeaderComponent/HeaderComponent";
import PostsPage from "../PostsPage/PostsPage";
import HomePage from "../HomePage/HomePage";

import "./RootPage.scss";

export const RootPage = () => {
  return (
    <div className="RootPage">
      <Router>
        <Route path="/" component={ HeaderComponent } />
        <Switch>
          <Route exact path="/home" component={ HomePage } />
          <Route path="/posts" component={ PostsPage } />
          {/* <Route path="/housing" component={ HousingPage } /> */}
        </Switch>
      </Router>
    </div>
  )
};
