import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import "./SignUpComponent.scss";

const SignUpComponent = () => {

  return (
    <div className="SignUpComponent">
      <h4 className="signup-heading">캘리포니아 Bay Area 커뮤니티
      </h4>
      {/* <p>
        카카오계정으로 Daum을 이용하세요
      </p> */}
      <Form className="signup-form">
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="이메일"
            size="lg"
          />
          
          <br />
          <Form.Control
            type="password"
            placeholder="비밀번호"
            size="lg"
          />

          {/* <p className="form-sub">
            {logError}
          </p> */}

          <br />
          <Button
            variant="success"
            size="lg"
            block
            // onClick={handleSubmit}
          >
            가입하기
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignUpComponent;
