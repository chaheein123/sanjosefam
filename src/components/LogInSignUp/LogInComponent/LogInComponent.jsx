import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import AuthAPI from "../../../services/Auth";

import "./LogInComponent.scss";

const LogInComponent = () => {

  const [userEmail, setUserEmail] = React.useState("");
  const [userPw, setUserPw] = React.useState("");
  const [logError, setLogError] = React.useState({
    userEmail: "",
    userPw: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userEmail && !userPw) return;
    if (AuthAPI.loginCheckSetError(setLogError, userEmail, userPw)) {
      
    }

    // if (!userEmail && !userPw) {
    //   return;
    // } else if (!userEmail) {
    //   setLogError("아이디를 입력해 주세요.")
    // } else if (!userPw) {
    //   setLogError("비밀번호를 입력해 주세요.")
    // } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) || userPw.length < 8 || userPw.length > 32) {
    //   setLogError("아이디 또는 비밀번호가 잘못되었습니다.");
    // };


  };


  return(
    <div className="LogInComponent">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="이메일"
            size="lg"
            onChange={(event) => {
              setLogError(prevState => {
                return({
                  ...prevState,
                  userEmail: ""
                })
              });
              setUserEmail(event.target.value);
            }}
          />

          <br />
          <Form.Control
            type="password"
            placeholder="비밀번호"
            size="lg"
            onChange={(event) => {
              setLogError(prevState => {
                return({
                  ...prevState,
                  userPw: ""
                })
              });
              setUserPw(event.target.value);
            }}
          />

          <p className="form-sub">
            {logError.userEmail}
          </p>
          <p className="form-sub">
            {logError.userPw}
          </p>

          <br />
          <Button
            variant="success"
            size="lg"
            block
            type="submit"
          >
            로그인
          </Button>
        </Form.Group>
      </Form>

      <div className="login-bottom">
        <span className="login-bottom-register">
          <Link to="/auth/signup">회원가입</Link>
        </span> | <span className="login-bottom-rest">아이디 찾기</span> | <span className="login-bottom-rest">비밀번호 찾기</span>
      </div>
    </div>
  );
};

export default LogInComponent;