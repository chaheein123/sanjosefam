import React from "react";

import "./HomePage.scss";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  // componentWillMount() {
    // Auth.authenticateToken(cookies.get("token"));
  // };

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