import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import "./SignUpComponent.scss";

const renderTooltip1 = (props) => (
  <Tooltip {...props}>
    3 ~ 14자 입력 가능합니다.
  </Tooltip>
);

const renderTooltip2 = (props) => (
  <Tooltip {...props}>
    저희는 유저의 이메일주소를 노출하지 않습니다.
  </Tooltip>
);

const renderTooltip3 = (props) => (
  <Tooltip {...props}>
    6 ~ 32자 입력 가능합니다.
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
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userNickname && !userEmail && !userPw && !userPw2) {
      return;
    }
    
    if (!userNickname) { 
      setLogError(prevState => {
        return({
          ...prevState,
          userNickname: "닉네임을 입력해 주세요."
        })
      });
    }
    if (!userEmail) {
      setLogError(prevState => {
        return({
          ...prevState,
          userEmail: "이메일을 입력해 주세요."
        })
      });
    }
    if (!userPw || !userPw2) {
      setLogError(prevState => {
        return({
          ...prevState,
          userPw: "비밀번호를 입력해 주세요."
        })
      });
    }

    // Password validation
    if (userPw !== userPw2) {
      setLogError(prevState => {
        return({
          ...prevState,
          userPw: "입력한 비밀번호가 매칭하지 않습니다. 다시 입력해 주세요."
        })
      });
    }

    else {
      if (userPw.length < 6 || userPw.length > 32) {
        setLogError(prevState => {
          return({
            ...prevState,
            userPw: "입력한 비밀번호가 6~32자 이어야 합니다."
          })
        });
      }
    }

    // Nickname validation
    if (userNickname.length < 3 || userNickname.length > 14) {
      setLogError(prevState => {
        return({
          ...prevState,
          userNickname: "입력한 닉네임이 3 ~ 14자 이어야 합니다."
        })
      });
    } else {
      let regex = /^[A-Za-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;
      if (!regex.test(userNickname)) {
        setLogError(prevState => {
          return({
            ...prevState,
            userNickname: "닉네임은 한영글자나 번호만 입력하실수 있습니다."
          })
        });
      }
    }
  };

  return (
    <div className="SignUpComponent">
      <Form className="signup-form" onSubmit={handleSubmit}>
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
                setLogError(prevState => {
                  return({
                    ...prevState,
                    userNickname: ""
                  })
                });
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
                setLogError(prevState => {
                  return({
                    ...prevState,
                    userEmail: ""
                  })
                });
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
                setLogError(prevState => {
                  return({
                    ...prevState,
                    userPw: ""
                  })
                });
                setUserPw(event.target.value);
              }}
            />
          </OverlayTrigger>

          <Form.Control
            type="password"
            placeholder="비밀번호 확인"
            size="lg"
            onChange={(event)=>{
              setLogError(prevState => {
                return({
                  ...prevState,
                  userPw: ""
                })
              });
              setUserPw2(event.target.value);
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
            type="submit"
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
