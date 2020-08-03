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
      
      <Link className="Links" to="/home"  style={{alignSelf: "center"}}>
        <img src="images/logo/main_logo.png" className="honey-icon" alt="logo"/>
      </Link>
      
      <ul className="navbar-menu">
        <Link className="Links navbar-menu-links" to="/home">
          <li className={props.history.location.pathname === "/home" ? "navbar-underline" : null}>
            홈
          </li>
        </Link>
        <Link className="Links navbar-menu-links" to="/posts">
          <li className={props.history.location.pathname === "/posts" ? "navbar-underline" : null}>
            게시판
          </li>
        </Link>
        {/* <Link className="Links navbar-menu-links"> */}
        <div className="navbar-menu-links">
          <li>
            로그인
          </li>
        </div>
        {/* </Link> */}



        <DropdownButton id="dropdown-basic-button" title="Menu" variant="secondary">
          <Link className="Links" to="/">
            <Dropdown.Item href="/">Home</Dropdown.Item>
          </Link>
          <Link className="Links" to="/posts">
            <Dropdown.Item href="/">게시물</Dropdown.Item>
          </Link>
          <Link className="Links" to="/housing">
            <Dropdown.Item href="/">Housing</Dropdown.Item>
          </Link>
        </DropdownButton>
      </ul>
    </nav>
  )
}