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
    "userNickname" : "",
    "userEmail" : "",
    "userPw" : "",
    "userPw2" : "",
  });

  const handleSubmit = async() => {
    // if (!userNickname && !userEmail && !userPw && !userPw2) {
    //   return;
    // }
    if (!userNickname) { 
      await setLogError({"userNickname": "닉네임을 입력해 주세요"});
    }
    if (!userEmail) {
      await setLogError({"userEmail": "이메일을 입력해 주세요"})
    }
    if (!userPw || !userPw2) {
      await setLogError({"userPw": "비밀번호를 입력해 주세요"})
    }
    console.log(logError);

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
                // setLogError({userNickname: ""})
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
                // setLogError({userEmail: ""});
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
                // setLogError({userPw: ""});
              }}
            />
          </OverlayTrigger>

          <Form.Control
            type="password"
            placeholder="비밀번호 확인"
            size="lg"
            onChange={(event)=>{
              setUserPw2(event.target.value);
              // setLogError({userPw2: ""})
            }}
          />

          <p className="form-sub">
            {logError.userNickname}
          </p>
          <p className="form-sub">
            {logError.userEmail}
          </p>
          <p className="form-sub">
            {logError.userPw}
          </p>
          <p className="form-sub">
            {logError.userPw2}
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
