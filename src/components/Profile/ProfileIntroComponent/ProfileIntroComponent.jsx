import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "../../../utils/httpClient";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

import "./ProfileIntroComponent.scss";

class ProfileIntroComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      modalShow: false,
    }
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/users/getuserinfo/${this.props.routeUserName}`)
      .then(
        response => {
          console.log(response.data, "hahahaha");
          this.setState({userInfo: response.data})
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
                      this.state.userInfo ?
                        this.state.userInfo.userName :
                        null
                    }
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row className="profile-top-none">
                    <br />
                  </Row>
                  <div className="profile-info-section">
                    <div className="profile-info-section-left">
                      <h5 className="profile-info-header">
                        소개:
                      </h5>
                    </div>
                    <div className="profile-info-section-right">
                      <h5 className="profile-info-header">
                        {
                          this.state.userInfo ?
                            this.state.userInfo.userIntro :
                            null
                        }
                      <img src="/images/icons/pencil.png" height="23" className="pencil-icon" alt="Bay Area California Korean Community 한국동포 커뮤니티 웹사이트"/>
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
                        거주시:
                      </h5>
                    </div>
                    <div className="profile-info-section-right">
                      <h5>
                        San Francisco
                        <img src="/images/icons/pencil.png" height="23" className="pencil-icon" alt="Bay Area California Korean Community 한국동포 커뮤니티 웹사이트"/>
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
                        직업:
                      </h5>
                    </div>
                    <div className="profile-info-section-right">
                      <h5>
                        {
                          this.state.userInfo ?
                            this.state.userInfo.userJob :
                            null
                        }
                        <img src="/images/icons/pencil.png" height="23" className="pencil-icon" alt="Bay Area California Korean Community 한국동포 커뮤니티 웹사이트"/>
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
                          this.state.userInfo ?
                            this.state.userInfo.userRealName :
                            null
                        }
                        <img src="/images/icons/pencil.png" height="23" className="pencil-icon" alt="Bay Area California Korean Community 한국동포 커뮤니티 웹사이트"/>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Button variant="primary" onClick={() => this.setState({modalShow: true})}>
          Launch vertically centered modal
        </Button>

        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={() => this.setState({modalShow: false})}
        />
      </Row>
    )
  }
}

export default ProfileIntroComponent;

// modal
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}