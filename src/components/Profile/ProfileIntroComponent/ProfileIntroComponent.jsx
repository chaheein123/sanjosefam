import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "../../../utils/httpClient";

import "./ProfileIntroComponent.scss";

class ProfileIntroComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null
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
            alt="프로필 사진"
          />
        </Col>
        <Col xs="12" md="9" lg="10" className="profile-info-col">

          {/* <h2 className="profile-info-header">
            {
              this.state.userInfo ?
                this.state.userInfo.userName :
                null
            }
          </h2> */}
          <div className="profile-info-flex-wrapper">
            <div className="profile-info-flex">
              <h2 className="profile-info-header profile-info-username">Chulgu</h2>
              <h5 className="profile-info-header">내소개:</h5>
              <h5 className="profile-info-header">거주도시: </h5>
            </div>
          </div>

          <div className="profile-info-flex-wrapper">
            <div className="profile-info-flex">
              <h5 className="profile-info-header">직업: </h5>
              <h5 className="profile-info-header">이름: </h5>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}




// = (props) => {

//   const [userInfo, setUserInfo] = React.useState(null);

//   React.useEffect(() => {
//     axios
//       .get(`http://localhost:5000/users/getuserinfo/${props.routeUserName}`)
//       .then(
//         response => {
//           // console.log("RESponSe", response.data);
//           console.log({...response.data})
//           // setUserInfo({...response.data});
//         }
//       )
//       .catch(
//         error => {
//           console.log("error", error)
//         }
//       )

//   }, [userInfo]);


//   return (
//     <Row className="ProfileIntroComponent">
//       <Col xs="12" md="3" lg="2" style={{textAlign: "center"}}>
//         <img
//           src="/images/icons/default-avatar.png"
//           className="profile-img"
//           alt="프로필 사진"
//         />
//       </Col>
//       <Col xs="12" md="9" lg="10" className="profile-info-col">
//         <h2 className="profile-info-header">
//           {
//             userInfo ?
//               userInfo.userName :
//               null
//           }
//         </h2>
//       </Col>
//     </Row>
//   )
// };

export default ProfileIntroComponent;

