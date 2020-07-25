import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeCenterComponent from "../../components/Home/HomeCenter/HomeCenterComponent";
import HomeLeftComponent from "../../components/Home/HomeLeft/HomeLeftComponent";
import HomeRightComponent from "../../components/Home/HomeRight/HomeRightComponent";

import "./HomePage.scss";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {

  };

  render() {
    return (
      <div className="HomePage">
        <Container>
          <Row>
            <Col xs={{ order: 0, span: 12}} md={{ order: 0, span: 4}} lg={3} className="home-cols">
              <HomeLeftComponent />
            </Col>

            <Col xs={{ order: 2, span: 12}} md={{ order: 1, span: 8}} lg={6} className="home-cols">
              <HomeCenterComponent />
            </Col>

            <Col xs={{ order: 1, span: 12}} md={{ order: 2, span: 4}} lg={3} className="home-right home-cols">
              <HomeRightComponent />
            </Col>
          </Row>
          {/* <Row>
            Pagination
          </Row> */}
        </Container>
      </div>
    )
  }
};