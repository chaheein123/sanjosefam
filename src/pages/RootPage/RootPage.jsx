import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HeaderComponent } from "../../components/HeaderComponent/HeaderComponent";
import PostsPage from "../PostsPage/PostsPage";
import HomePage from "../HomePage/HomePage";
import AuthPage from "../AuthPage/AuthPage";
import AuthApi from "../../services/Auth";
import ProfilePage from "../ProfilePage/ProfilePage";
import { userInfoAction } from "../../appRedux/actions";
import { useDispatch } from "react-redux";

import "./RootPage.scss";

export const RootPage = () => {
  const dispatch = useDispatch();
  let user;

  React.useEffect(() => {
     // eslint-disable-next-line
    user = AuthApi.authenticateTokenRedux();
    if (user) {
      dispatch(userInfoAction.login(user));
    };
  }, [user]);

  return (
    <Router>
      <div className="RootPage">
        <Route path="/" component={ HeaderComponent } />
        <Switch>
          <Route exact path="/home" component={ HomePage } />
          <Route path="/posts" component={ PostsPage } />
          <Route path="/auth" component={ AuthPage } />
          <Route path="/in/:userName" component= { ProfilePage } />
        </Switch>
      </div>
    </Router>
  )
};
