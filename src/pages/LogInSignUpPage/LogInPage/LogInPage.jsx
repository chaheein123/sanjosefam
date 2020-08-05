import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";

import "./LogInPage.scss";

const LogInPage = () => {


  return(
    <div className="LogInPage">
      <div className="login-left">
        <img src="images/logo/LoginLogo.png" className="login-logo" alt="logo"/>
      </div>

      <div className="login-right">
        <h3>Welcome back</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="success" type="Log In" className="login-button" block>
            Submit
          </Button>
        </Form>
        <div>

          {/* <Link>회원가입</Link>
          <Link>아이디/비밀번호 찾기</Link> */}
        </div>
      </div>
    </div>
  );
};

export default LogInPage;