import React from 'react';
import PostsCenterPostComponent from "./PostsCenterPostComponent/PostsCenterPostComponent";
// import axios from "../../../utils/httpClient";
import { posts } from "../../../data/dummydata";

import "./PostsCenterComponent.scss";

const PostsCenterComponent = () => {
  const thePosts = posts;

  return (
    <div className="PostsCenterComponent">
      {
        thePosts ? 
          thePosts.map(post => 
            <PostsCenterPostComponent
              key={post.id}
              {...post}
            />
          )
          :
          null
      }
    </div>
  )
}

export default PostsCenterComponent;
