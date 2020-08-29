import React from 'react';
import { connect } from 'react-redux';
import axios from "../../../../utils/httpClient";

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
      userJob: null,
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
              userJob: response.data.userJob,
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
              userJob: response.data.userJob,
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
          <div className="profile-modal-img-wrapper">
            {this.state.userName} wef
          </div>

          <div className="">

          </div>


        </div>
      </div>
    )
  }
};

export default connect(currentState)(ProfileIntroModalComponent);
