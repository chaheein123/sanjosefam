import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import AuthAPI from "../../../services/Auth";
import { userInfoAction } from "../../../appRedux/actions";
import { useDispatch } from "react-redux";

import "./LogInComponent.scss";

const LogInComponent = (props) => {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = React.useState("");
  const [userPw, setUserPw] = React.useState("");
  const [logError, setLogError] = React.useState({
    userEmail: "",
    userPw: "",
  });

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (!userEmail && !userPw) return;
    if (await AuthAPI.loginCheckSetError(setLogError, userEmail, userPw)) {
      const response = await AuthAPI.login(userEmail, userPw);
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
    }
    return;
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
                  userEmail: "",
                  userPw: ""
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
                  userEmail: "",
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