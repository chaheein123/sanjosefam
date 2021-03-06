import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import AuthAPI from "../../../services/Auth";
import toolTips from "../../../bscomponents/SignUpComponent/Tooltip";
import { userInfoAction } from "../../../appRedux/actions";
import { useDispatch } from "react-redux";

import "./SignUpComponent.scss";

const SignUpComponent = (props) => {
  const dispatch = useDispatch();
  const [renderTooltip1, renderTooltip2, renderTooltip3] = toolTips;
  const [userNickname, setUserNickname] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userPw, setUserPw] = React.useState("");
  const [userPw2, setUserPw2] = React.useState("");
  const [logError, setLogError] = React.useState({
    "userNickname" : "",
    "userEmail" : "",
    "userPw" : "",
  });

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (!userNickname && !userEmail && !userPw && !userPw2) return;
    if (await AuthAPI.checkAndSetErrors(setLogError, userNickname, userEmail, userPw, userPw2)){
      const response = await AuthAPI.register(userNickname, userEmail, userPw);
      if (response.data.success) {
        const user = AuthAPI.authenticateTokenRedux();
        dispatch(userInfoAction.login(user));
        props.history.push("/home");
      } else {
        setLogError(prevState => {
          return({
            ...prevState,
            userEmail: response.data.message,
          })
        });
      }





      // let user = AuthAPI.register(userNickname, userEmail, userPw);
      // if (user) {
      //   dispatch(userInfoAction.login(user));
      //   props.history.push("/home");
      // }
    };
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
