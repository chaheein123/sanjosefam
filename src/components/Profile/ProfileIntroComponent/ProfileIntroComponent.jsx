import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "../../../utils/httpClient";
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import ProfileIntroModalComponent from "./ProfileIntroModalComponent/ProfileIntroModalComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./ProfileIntroComponent.scss";

class ProfileIntroComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: null,
      modalShow: false,
    }
  };

  profileEdit = () => {
    // console.log("profile edit");
    // this.setState({modalShow: true});
    // console.log(this.props, "prorrororops")

  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/users/getuserinfo/${this.props.routeUserName}`)
      .then(
        response => {
          // console.log(response.data, "hahahaha");
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
                            <span>
                              {this.state.userinfo.userIntro}
                              <Link className="Links" to={`/in/${this.state.userinfo.userName}/profileedit`}>
                                <img src="/images/icons/pencil.png" height="23" className="pencil-icon" alt="Bay Area California Korean Community 한국동포 커뮤니티 웹사이트" onClick={this.profileEdit}/>
                              </Link>
                            </span>
                            :
                            null
                        }
                      
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
                        {
                          this.state.userinfo ?
                          <Link className="Links" to={`/in/${this.state.userinfo.userName}/profileedit`}>
                            <img src="/images/icons/pencil.png" height="23" className="pencil-icon" alt="Bay Area California Korean Community 한국동포 커뮤니티 웹사이트" onClick={this.profileEdit}/>
                          </Link> : 
                          null
                        }
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
                        <img src="/images/icons/pencil.png" height="23" className="pencil-icon" alt="Bay Area California Korean Community 한국동포 커뮤니티 웹사이트" onClick={this.profileEdit}/>
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
                        <img src="/images/icons/pencil.png" height="23" className="pencil-icon" alt="Bay Area California Korean Community 한국동포 커뮤니티 웹사이트" onClick={this.profileEdit}/>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        {/* <ProfileIntroModalComponent /> */}
        <Route exact path="/in/:username/profileedit" component={ ProfileIntroModalComponent }/>
      </Row>
    )
  }
}

export default ProfileIntroComponent;