import React from "react";
import Auth from "../../services/Auth";

import "./HomePage.scss";
import { withCookies, Cookies } from 'react-cookie';

const cookies = new Cookies();

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    
    
  };

  componentWillMount() {
    Auth.authenticateToken("sdf");
    console.log(cookies.get("token"));
  };

  componentDidMount() {
    // console.log(this.state.token);
  };

  render() {
    return (
      <div className="HomePage">
        Home Page
      </div>
    )
  };
}