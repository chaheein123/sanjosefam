import React from 'react';
import {top10tags} from "../../../data/dummydata";

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
    </div>
  )
}

export default PostsLeftComponent;
