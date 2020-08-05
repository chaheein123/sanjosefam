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
  const [emailError, setEmailError] = React.useState("");
  const [pwError, setPwError] = React.useState("");

  React.useEffect(() => {
    setEmailError("");
  }, [userEmail]);

  const handleSubmit = () => {
    // email validation
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
      console.log("the user email is valid!!!!")
    } else {
      setEmailError("The email you entered is incorrect.")
    }
  };

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
              {emailError}
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
              onClick={handleSubmit}
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