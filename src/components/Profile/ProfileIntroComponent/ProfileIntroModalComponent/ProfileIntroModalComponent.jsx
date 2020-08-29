import React from 'react';
import { connect } from 'react-redux';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "../../../../utils/httpClient";
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import "./ProfileIntroModalComponent.scss";

const currentState = state => ({
  userInfo: state.userInfo
});

class ProfileIntroModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.insideModal = React.createRef();

    this.state = {
      userName: null,
      userIntro: null,
      userRealName: null,
      userImg: null,
    };
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    if (this.props.userInfo) {
      axios
        .get(`http://localhost:5000/users/getuserinfo/${this.props.userInfo.unique_name}`)
        .then(
          response => {
            this.setState({
              userName: response.data.userName,
              userIntro: response.data.userIntro,
              userRealName: response.data.userRealName,
              userImg: response.data.userImg,
            })
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.userInfo) {
      axios
        .get(`http://localhost:5000/users/getuserinfo/${nextProps.userInfo.unique_name}`)
        .then(
          response => {
            this.setState({
              userName: response.data.userName,
              userIntro: response.data.userIntro,
              userRealName: response.data.userRealName,
              userImg: response.data.userImg,
            })
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
  };

  handleClickOutside = e => {
    if (this.insideModal.current) {
      if (!this.insideModal.current.contains(e.target) && this.props.userInfo) {
        this.props.history.push(`/in/${this.props.userInfo.unique_name}`);
      }
    }
  };

  render() {
    return (
      <div className="ProfileIntroModalComponent">
        <div className="profileintro-main" ref={this.insideModal}>
          <Container className="profile-modal-container">
            <Row style={{textAlign: "left"}}>
              <Col>
                <h5>내정보 수정하기</h5>
                <div className="profile-modal-border"/>
              </Col>
            </Row>
            <Row style={{marginTop: "1.4rem"}}>
              <Col>
                <img src={this.state.userImg ? this.state.userImg : "/images/icons/default-avatar.png"} width="130" style={{borderRadius: "8px"}} alt="한국 동포 커뮤니티 Bay Area Korean Community Website"/>
                <h4 className="profile-modal-header">
                  {
                    this.state.userName ?
                      this.state.userName : null
                  }
                </h4>
              </Col>
            </Row>

            <Row>
              <Col className="profile-modal-col">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>자기소개</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl as="textarea" aria-label="With textarea" rows="1"/>
                </InputGroup>
              </Col>
            </Row>

            <Row>
              <Col xs="12" sm="6" className="profile-modal-col">
                <Form.Control as="select">
                  <option>Alameda</option>
                  <option>bbbbbbbb</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                  <option>Alameda</option>
                </Form.Control>
              </Col>
              <Col xs="12" sm="6" className="profile-modal-col">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>이름</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    // placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
            </Row>

            <Row style={{marginTop: "1.3rem"}}>
              <Col>
                <div className="profile-modal-border"/>
              </Col>
            </Row>

            <Row style={{textAlign: "right", marginTop: "1rem"}}>
              <Col>
              <Button variant="secondary" size="lg" style={{marginRight: "0.4rem"}}>닫기</Button>{' '}
              <Button variant="success" size="lg">저장</Button>{' '}

              </Col>
            </Row>
            


          </Container>



        </div>
      </div>
    )
  }
};

export default connect(currentState)(ProfileIntroModalComponent);
