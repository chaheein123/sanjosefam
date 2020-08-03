import React from 'react';
import Badge from 'react-bootstrap/Badge';
import {top10tags, topPosts} from "../../../data/dummydata";

import "./PostsLeftComponent.scss";

const PostsLeftComponent = () => {
  return (
    <div className="PostsLeftComponent">
      <div className="postsleft-tags">
        <h5>인기태그</h5>
        {
          top10tags.map((tag,index) => {
            return(
              <div key={index}>
                #{tag}
              </div>
            )
          })
        }
      </div>

      <div className="postsleft-top-posts">
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

export default PostsLeftComponent;
