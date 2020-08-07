import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import "./SignUpComponent.scss";

const renderTooltip1 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    2글자 이상 입력 가능합니다.
  </Tooltip>
);

const renderTooltip2 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    입력하신 이메일 주소로 발송될 이메일 인증을 하셔야 회원가입이 완료됩니다. 저희는 유저들의 이메일을 보호할것을 약속합니다.
  </Tooltip>
);

const renderTooltip3 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    6 ~ 32자 이어야 합니다.
  </Tooltip>
);

const SignUpComponent = () => {

  return (
    <div className="SignUpComponent">
      {/* <h4 className="signup-heading">캘리포니아 Bay Area 커뮤니티
      </h4> */}
      {/* <p>
        카카오계정으로 Daum을 이용하세요
      </p> */}
      <Form className="signup-form">
        <Form.Group>
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip1}

          >
            <Form.Control
              type="text"
              placeholder="닉네임"
              size="lg"
              className="signup-form-controls"
            />
          </OverlayTrigger>

          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip2}
          >
            <Form.Control
              type="email"
              placeholder="이메일"
              size="lg"
              className="signup-form-controls"
            />
          </OverlayTrigger>
          
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip3}
          >
            <Form.Control
              type="password"
              placeholder="비밀번호"
              size="lg"
              className="signup-form-controls"
            />
          </OverlayTrigger>
          {/* <p className="form-sub">
            {logError}
          </p> */}

          <Form.Control
            type="password"
            placeholder="비밀번호 확인"
            size="lg"
            className="signup-form-controls"
          />

          {/* <p className="form-sub">
            {logError}
          </p> */}

          <Button
            variant="success"
            size="lg"
            block
            className="signup-button"
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
