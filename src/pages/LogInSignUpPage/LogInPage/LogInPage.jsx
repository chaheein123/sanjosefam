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
  const [logError, setLogError] = React.useState("");

  // React.useEffect(() => {
  //   setEmailError("");
  //   setPwError("");
  // }, [userEmail, userPw]);
  const handleEmailChange = event => {
    setUserEmail(event.target.value);
    setLogError("");
  };

  const handlePwChange = event => {
    setUserPw(event.target.value);
    setLogError("");
  };

  const handleSubmit = () => {
    // email validation
    if (!userEmail && !userPw) {
      return;
    } else if (!userEmail) {
      setLogError("아이디를 입력해 주세요.")
    } else if (!userPw) {
      setLogError("비밀번호를 입력해 주세요.")
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) || userPw.length < 8 || userPw.length > 32) {
      setLogError("아이디 또는 비밀번호가 잘못되었습니다.");
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
              onChange={handleEmailChange}
              onKeyDown={(event) => {
                handleSubmit(event);
              }}
            />
            
            <br />
            <Form.Control
              type="password"
              placeholder="비밀번호"
              size="lg"
              value={userPw}
              onChange={handlePwChange}
              onKeyDown={(event) => {
                handleSubmit(event);
              }}
            />

            <p className="form-sub">
              {logError}
            </p>

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

        <div className="login-bottom">
          <span className="login-bottom-register">회원가입</span> | <span className="login-bottom-rest">아이디 찾기</span> | <span className="login-bottom-rest">비밀번호 찾기</span>
        </div>

      </div>



    </div>
  );
};

export default LogInPage;