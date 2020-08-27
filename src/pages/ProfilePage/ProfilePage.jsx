import React from 'react';
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { useDispatch } from "react-redux";
import ProfileIntroComponent from "../../components/Profile/ProfileIntroComponent/ProfileIntroComponent";

import "./ProfilePage.scss";

const ProfilePage = (props) => {
  // const dispatch = useDispatch();
  const routeUserName= props.match.params.userName;
  
  React.useEffect(() => {
    
  });

  return (
    <div className="ProfilePage">
      <Container>
        <ProfileIntroComponent routeUserName={routeUserName}/>
        {/* <Row>
        </Row> */}
      </Container>
    </div>
  );



};

export default ProfilePage;
