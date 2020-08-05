import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";

import "./LogInPage.scss";

const LogInPage = () => {

  const [userEmail, setUserEmail] = React.useState("");
  const [userPw, setUserPw] = React.useState("");

  // const handleEmailChange = event => {
  //   setUserEmail(event.target.value);
  //   console.log(userEmail);
  // };

  // React.useEffect(() => {

  // });

  return(
    <div className="LogInPage">
      <div className="LogInForm">
        <img src="images/logo/LoginLogo.png" height="110" alt="logo"/>
        <Form>
          <Form.Group>
            <br />
            <br />
            <Form.Control
              type="email"
              placeholder="이메일"
              size="lg"
              value={userEmail}
              onChange={(event)=> setUserEmail(event.target.value)}
            />
            <Form.Text className="text-muted form-sub">
              We'll never share your email with anyone else.
            </Form.Text>
            <br />
            <Form.Control
              type="password"
              placeholder="비밀번호"
              size="lg"
              value={userPw}
              onChange={(event)=> setUserPw(event.target.value)}
            />
            <Form.Text className="text-muted form-sub">
              We'll never share your email with anyone else.
            </Form.Text>
            <br />
            <Button
              variant="success"
              size="lg"
              block
              onClick={() => {console.log(userEmail, userPw)}}
            >
              로그인
            </Button>
          </Form.Group>
        </Form>

      </div>



    </div>
  );
};

export default LogInPage;