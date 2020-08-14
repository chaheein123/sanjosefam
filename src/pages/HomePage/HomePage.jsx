import React from "react";
import axios from "../../utils/httpClient";

import "./HomePage.scss";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {

  };

  render() {
    return (
      <div className="HomePage">
        Home Page
        <button onClick={() => {
          axios
            .post(
              "http://localhost:5000/api/auth/login",
              {
              userEmail: "cha53355he656ein@hanmail.com",
              userPw: 123123123,
              },
              { withCredentials: true }
            )
            .then(response => {
              console.log(response);
            })
          
          }}>
          wwefwef
        </button>
      </div>
    )
  };
}