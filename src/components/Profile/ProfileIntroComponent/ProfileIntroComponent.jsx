import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "../../../utils/httpClient";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import "./ProfileIntroComponent.scss";

class ProfileIntroComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: null,
      modalShow: false,
    }
  };

  modalSave = () => {
    console.log("지코", "saved!!!!!!")

  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/users/getuserinfo/${this.props.routeUserName}`)
      .then(
        response => {
          console.log(response.data, "hahahaha");
          this.setState({userinfo: response.data})
        }
      )
      .catch(
        error => {
          console.log("error", error)
        }
      )
  };

  render() {
    return (
      <Row className="ProfileIntroComponent">
        <Col xs="12" md="3" lg="2" style={{textAlign: "center"}}>
          <img
            src={ this.state.userImg ? `${this.state.userImg}` : "/images/icons/default-avatar.png"}
            className="profile-img"
            alt="프로필 사진 Bay Area California Korean Community 한국동포 커뮤니티 웹사이트"
          />
        </Col>
        <Col xs="12" md="9" lg="10" className="profile-info-col">
          <Row>
            <Col sm="12" lg="6">
              <Row>
                <Col>
                  <h2 className="profile-info-header profile-info-username">
                    {
                      this.state.userinfo ?
                        this.state.userinfo.userName :
                        null
                    }
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row className="profile-top-none">
                    <br />
                    {
                      this.state.userinfo ?
                        null :
                        (
                          <div>
                            <br />
                            <br />
                          </div>
                        )
                    }
                  </Row>
                  <div className="profile-info-section">
                    <div className="profile-info-section-left">
                      <h5 className="profile-info-header">
                        자기소개:
                      </h5>
                    </div>
                    <div className="profile-info-section-right">
                      <h5 className="profile-info-header">
                        {
                          this.state.userinfo ?
                            this.state.userinfo.userIntro :
                            null
                        }
                      <img src="/images/icons/pencil.png" height="23" className="pencil-icon" alt="Bay Area California Korean Community 한국동포 커뮤니티 웹사이트" onClick={() => this.setState({modalShow: true})}/>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
              
              <Row>
                <Col>
                  <div className="profile-info-section">
                    <div className="profile-info-section-left">
                      <h5 className="profile-info-header">
                        거주시:
                      </h5>
                    </div>
                    <div className="profile-info-section-right">
                      <h5>
                        San Francisco
                        <img src="/images/icons/pencil.png" height="23" className="pencil-icon" alt="Bay Area California Korean Community 한국동포 커뮤니티 웹사이트" onClick={() => this.setState({modalShow: true})}/>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col sm="12" lg="6">
              <Row className="profile-top-none">
                <br />
                <br />
                <br />
              </Row>

              <Row className="profile-info-right-row">
                <Col>
                  <div className="profile-info-section">
                    <div className="profile-info-section-left">
                      <h5 className="profile-info-header">
                        직업:
                      </h5>
                    </div>
                    <div className="profile-info-section-right">
                      <h5>
                        {
                          this.state.userinfo ?
                            this.state.userinfo.userJob :
                            null
                        }
                        <img src="/images/icons/pencil.png" height="23" className="pencil-icon" alt="Bay Area California Korean Community 한국동포 커뮤니티 웹사이트" onClick={() => this.setState({modalShow: true})}/>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="profile-info-section">
                    <div className="profile-info-section-left">
                      <h5 className="profile-info-header">
                        이름:
                      </h5>
                    </div>
                    <div className="profile-info-section-right">
                      <h5>
                        {
                          this.state.userinfo ?
                            this.state.userinfo.userRealName :
                            null
                        }
                        <img src="/images/icons/pencil.png" height="23" className="pencil-icon" alt="Bay Area California Korean Community 한국동포 커뮤니티 웹사이트" onClick={() => this.setState({modalShow: true})}/>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={() => {
            this.setState({userinfo: this.state.userinfo});
            this.setState({modalShow: false});
          }}
          userinfo={this.state.userinfo}
          backdrop="static"
        />
      </Row>
    )
  }
}

export default ProfileIntroComponent;

// modal
function MyVerticallyCenteredModal(props) {
  let originalUserRealName = props.userinfo ? props.userinfo.userRealName : "";
  // let originalUserIntro = props.userinfo.userIntro;
  // const [userRealName, setUserRealName] = React.useState(props.userinfo.userRealName);
  // const [userIntro, setUserIntro] = React.useState(props.userinfo.userIntro);

  // const setOriginal = () => {
  //   setUserRealName(originalUserRealName);
  //   setUserIntro(originalUserIntro);
  // };

  React.useEffect(() => {
    console.log(props.userinfo, "prooooops")
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="profile-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          프로필 정보 업데이트
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{textAlign: "center"}}>
        <img
          src={ props.userinfo.userImg ? `${props.userinfo.userImg}` : "/images/icons/default-avatar.png"}
          className="profile-modal-img"
          alt="프로필 사진 Bay Area California Korean Community 한국동포 커뮤니티 웹사이트"
          width="135"
        />
        <br />
        <br />
        
        <Row>
          <Col xs="12" lg="6" className="modal-col">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>자기소개</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                aria-label="With textarea"
                value={userIntro ? userIntro : ""}
                onChange={(e) => setUserIntro(e.target.value)}
              />
            </InputGroup>
          </Col>

          <Col xs="12" lg="6" className="modal-col">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={userRealName ? userRealName : ""}
                onChange={(e) => setUserRealName(e.target.value)}
              />
            </InputGroup>
          </Col>

        </Row>
        <br />

      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setOriginal();
            props.onHide();
          }}
          size="lg">
          닫기
        </Button>
        <Button
          onClick={() => {
            props.onHide();

          }}
          variant="success"
          size="lg">
          저장
        </Button>
      </Modal.Footer>
    </Modal>
  );
}