import React from 'react';
import LogInComponent from "../../components/LogInSignUp/LogInComponent/LogInComponent";
import SignUpComponent from "../../components/LogInSignUp/SignUpComponent/SignUpComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./AuthPage.scss";

const AuthPage = () => {
  

  return(
    <div className="AuthPage">
      <Router>
        <Switch>
          <Route exact path="/auth/login" component={ LogInComponent } />
          <Route exact path="/auth/signup" component={ SignUpComponent } />

        </Switch>

      </Router>
      



    </div>
  )
};

export default AuthPage;