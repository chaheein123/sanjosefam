import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { topPosts } from "../../../data/dummydata";

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

      <div className="postsright-top-posts">
        <h5>인기글</h5>
        {
          topPosts.map((post,index) => {
            return(
              <div key={index} className="postsleft-posts">
                <Badge
                variant="success"
                className="postsleft-badges"
                >
                  {index+1}
                </Badge>{' '}
                {post.title}
              </div>
            )
          })
        }


      </div>

    

      
    </div>
  )
}

export default PostsRightComponent;
