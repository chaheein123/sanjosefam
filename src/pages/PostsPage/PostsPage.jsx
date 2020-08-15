import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostsCenterComponent from "../../components/Posts/PostsCenter/PostsCenterComponent";
import PostsLeftComponent from "../../components/Posts/PostsLeft/PostsLeftComponent";
import PostsRightComponent from "../../components/Posts/PostsRight/PostsRightComponent";
// import PostsCenterTopComponent from "../../components/Posts/PostsCenter/PostsCenterTopComponent/PostsCenterTopComponent";

import "./PostsPage.scss";

export default class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    
  };

  render() {
    return (
      <div className="PostsPage">
        <Container>
          <Row>
            <Col xs={{ order: 1, span: 12}} md={{ order: 0, span: 4}} lg={2} className="posts-cols posts-left">
              <PostsLeftComponent />
            </Col>

            <Col xs={{ order: 0, span: 12}} md={{ order: 1, span: 8}} lg={7} className="posts-cols">
              <PostsCenterComponent />
            </Col>

            <Col xs={{ order: 2, span: 12}} md={{ order: 2, span: 4}} lg={3} className="posts-right posts-cols">
              <PostsRightComponent />
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