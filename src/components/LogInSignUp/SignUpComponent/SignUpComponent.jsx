import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import "./SignUpComponent.scss";

const renderTooltip1 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    3글자 이상 입력 가능합니다.
  </Tooltip>
);

const renderTooltip2 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    저희는 유저들의 이메일을 보호할것을 약속합니다.
  </Tooltip>
);

const renderTooltip3 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    6 ~ 32자 이어야 합니다.
  </Tooltip>
);

const SignUpComponent = () => {

  const [userNickname, setUserNickname] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userPw, setUserPw] = React.useState("");
  const [userPw2, setUserPw2] = React.useState("");
  const [logError, setLogError] = React.useState({
    "nickname" : "a",
    "email" : "",
    "pw" : "",
    "pw2" : "c",
  });

  const handleSubmit = () => {
    if (!userNickname) {
      // setLogError([...logError, "닉네임이 필요합니다"])
    }






  };

  return (
    <div className="SignUpComponent">
      <Form className="signup-form">
        <Form.Group>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip1}
          >
            <Form.Control
              type="text"
              placeholder="닉네임"
              size="lg"
              className="signup-form-controls"
              onChange={(event)=>{
                setUserNickname(event.target.value);
              }}
            />
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip2}
          >
            <Form.Control
              type="email"
              placeholder="이메일"
              size="lg"
              className="signup-form-controls"
              onChange={(event)=>{
                setUserEmail(event.target.value);
              }}
            />
          </OverlayTrigger>
          
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip3}
          >
            <Form.Control
              type="password"
              placeholder="비밀번호"
              size="lg"
              className="signup-form-controls"
              onChange={(event)=>{
                setUserPw(event.target.value);
              }}
            />
          </OverlayTrigger>

          <Form.Control
            type="password"
            placeholder="비밀번호 확인"
            size="lg"
            onChange={(event)=>{
              setUserPw2(event.target.value);
            }}
          />

          <p className="form-sub">
            {logError.nickname}
          </p>
          <p className="form-sub">
            {logError.email}
          </p>
          <p className="form-sub">
            {logError.pw}
          </p>
          <p className="form-sub">
            {logError.pw2}
          </p>

          <Button
            variant="success"
            size="lg"
            block
            className="signup-button"
            onClick={handleSubmit}
          >
            가입하기
          </Button>
        </Form.Group>
      </Form>

      <div className="login-bottom">
        <span className="login-bottom-register">
          <Link to="/auth/login">로그인</Link>
        </span> | <span className="login-bottom-rest">아이디 찾기</span> | <span className="login-bottom-rest">비밀번호 찾기</span>
      </div>
    </div>
  );
};

export default SignUpComponent;
