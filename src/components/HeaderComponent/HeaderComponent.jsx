import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./HeaderComponent.scss";
import { Link } from "react-router-dom";

export const HeaderComponent = (props) => {

  // React.useEffect(() => {
  //   console.log(props.history.location.pathname)
  // })

  return (
    <nav className="HeaderComponent">
      
      <Link className="Links" to="/">
        <img src="images/logo/honey_icon.png" className="honey-icon" alt="logo"/>
      </Link>
      
      <ul className="navbar-menu">
        <li className={props.history.location.pathname === "/" ? "navbar-underline" : null}>
          <Link className="Links" to="/">
            Home
          </Link>
        </li>
        {/* <li className={props.history.location.pathname === "/talk" ? "navbar-underline" : null}>
          <Link className="Links" to="/talk">
            Talk Lounge
          </Link>
        </li> */}
        <li className={props.history.location.pathname === "/jobs" ? "navbar-underline" : null}>
          <Link className="Links" to="/jobs">
            Jobs
          </Link>
        </li>
        <li className={props.history.location.pathname === "/housing" ? "navbar-underline" : null}>
          <Link className="Links" to="/housing">
            Housing
          </Link>
        </li>
      </ul>
    </nav>
  )
}