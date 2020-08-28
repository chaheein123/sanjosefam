import React from 'react';
import { connect } from 'react-redux';

import "./ProfileIntroModalComponent.scss";

const currentState = state => ({
  userInfo: state.userInfo
});

class ProfileIntroModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.insideModal = React.createRef();

    this.state = {

    };
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  };

  handleClickOutside = e => {
    if (this.insideModal.current) {
      if (!this.insideModal.current.contains(e.target) && this.props.userInfo) {
        this.props.history.push(`/in/${this.props.userInfo.unique_name}`)
      }
    }
  };

  render() {
    return (
      <div className="ProfileIntroModalComponent">
        <div className="profileintro-main" ref={this.insideModal}>
          <p>profile intro main</p>
          <p>profile intro main</p>
          
        </div>

      </div>
    )
  }
};

export default connect(currentState)(ProfileIntroModalComponent);
