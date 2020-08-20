import React from "react";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { userInfoAction } from "../../appRedux/actions";
import { useSelector, useDispatch } from "react-redux";

import "./HeaderComponent.scss";

export const HeaderComponent = (props) => {

  let userInfo = useSelector(state => state.userInfo);
  const currentRoute = props.history.location.pathname;

  React.useEffect(() => {
    console.log(userInfo, "header!!!!");
    if (currentRoute === "/") {
      console.log(props);
      props.history.push("/home");
    }
  }, [userInfo, currentRoute])

  return (
    <nav className="HeaderComponent">      
      <Link className="Links" to="/home"  style={{alignSelf: "center"}}>
        <img src="/images/logo/main_logo.png" className="honey-icon" alt="logo"/>
      </Link>
      
      <ul className="navbar-menu">
        <Link className="Links navbar-menu-links" to="/home">
          <li className={props.history.location.pathname === "/home" ? "navbar-underline navbar-menu-links-list" : "navbar-menu-links-list"}>
            홈
          </li>
        </Link>
        <Link className="Links navbar-menu-links" to="/posts">
          <li className={props.history.location.pathname === "/posts" ? "navbar-underline navbar-menu-links-list" : "navbar-menu-links-list"}>
            게시판
          </li>
        </Link>

        {
          userInfo ?
            <div className="navbar-menu-links nav-avatar-wrapper">
              <li className="navbar-avatar-li">
                <img src="images/icons/default-avatar.png" height="28" className="nav-avatar"/>
                <img src="images/icons/avatar-arrow.png" height="11" className="nav-arrow"/>
              </li>
            </div>
            :
            <Link className="Links navbar-menu-links" to="/auth/login">
              <li className={props.history.location.pathname.includes("/auth") ? "navbar-underline" : null}>
                로그인
              </li>
            </Link>
        }
      </ul>
    </nav>
  )
}