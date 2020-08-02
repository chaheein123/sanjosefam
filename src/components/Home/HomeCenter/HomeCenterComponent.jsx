import React from 'react';
import HomeCenterPostComponent from "./HomeCenterPostComponent/HomeCenterPostComponent";
// import axios from "../../../utils/httpClient";
import { posts } from "../../../data/dummydata";

import "./HomeCenterComponent.scss";

const HomeCenterComponent = () => {
  const thePosts = posts;

  return (
    <div className="HomeCenterComponent">
      {
        thePosts ? 
          thePosts.map(post => 
            <HomeCenterPostComponent
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

export default HomeCenterComponent;
