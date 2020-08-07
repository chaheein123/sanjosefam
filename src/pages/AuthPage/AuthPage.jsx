import React from 'react';
import LogInComponent from "../../components/LogInSignUp/LogInComponent/LogInComponent";
import SignUpComponent from "../../components/LogInSignUp/SignUpComponent/SignUpComponent";
import { Switch, Route } from "react-router-dom";

import "./AuthPage.scss";

const AuthPage = () => {
  

  return(
    <div className="AuthPage">
      <div className="auth-components">
        <img src="/images/logo/LoginLogo.png" height="110" alt="logo"/>
        <br />
        <br />
        <br />
        <Switch>
          <Route exact path="/auth/login" component={ LogInComponent } />
          <Route exact path="/auth/signup" component={ SignUpComponent } />
        </Switch>
      </div>
    </div>
  )
};

export default AuthPage;