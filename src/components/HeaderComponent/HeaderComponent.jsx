import React from "react";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


import "./HeaderComponent.scss";


export const HeaderComponent = (props) => {

  // React.useEffect(() => {
  //   console.log(props.history.location.pathname)
  // })

  return (
    <nav className="HeaderComponent">
      
      <Link className="Links" to="/"  style={{alignSelf: "center"}}>
        <img src="images/logo/honey_icon.png" className="honey-icon" alt="logo"/>
      </Link>
      
      <ul className="navbar-menu">
        <Link className="Links navbar-menu-links" to="/">
          <li className={props.history.location.pathname === "/" ? "navbar-underline" : null}>
              Home
          </li>
        </Link>
        <Link className="Links navbar-menu-links" to="/jobs">
          <li className={props.history.location.pathname === "/jobs" ? "navbar-underline" : null}>
              Jobs
          </li>
        </Link>
        <Link className="Links navbar-menu-links" to="/housing">
          <li className={props.history.location.pathname === "/housing" ? "navbar-underline" : null}>
            Housing
          </li>
        </Link>



        <DropdownButton id="dropdown-basic-button" title="Menu" variant="secondary">
          <Link className="Links" to="/">
            <Dropdown.Item href="/">Home</Dropdown.Item>
          </Link>
          <Link className="Links" to="/jobs">
            <Dropdown.Item href="/">Jobs</Dropdown.Item>
          </Link>
          <Link className="Links" to="/housing">
            <Dropdown.Item href="/">Housing</Dropdown.Item>
          </Link>
        </DropdownButton>
      </ul>
    </nav>
  )
}