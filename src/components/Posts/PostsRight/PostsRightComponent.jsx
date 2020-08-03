import React from 'react';
import Button from 'react-bootstrap/Button';

import "./PostsRightComponent.scss";

const PostsRightComponent = () => {
  return (
    <div className="PostsRightComponent">
      <Button
        variant="success"
        size="lg"
        block
        className="postsright-post-button"
      >
        글쓰기
      </Button>

      <Button
        variant="success"
        size="lg"
        className="postsright-post-button-modal"
      >
        글쓰기
      </Button>

    

      
    </div>
  )
}

export default PostsRightComponent;
