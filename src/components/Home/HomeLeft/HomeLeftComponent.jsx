import React from 'react';
import {top10tags, topPosts} from "../../../data/dummydata";

import "./HomeLeftComponent.scss";

const HomeLeftComponent = () => {
  return (
    <div className="HomeLeftComponent">
      <div className="homeleft-tags">
        <h5>인기 태그</h5>
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

      <div className="homeleft-top-posts">
        <h5>인기글</h5>
        {
          topPosts.map((post,index) => {
            return(
              <div key={index}>
                <p>{post.title}</p>
              </div>
            )
          })
        }


      </div>
    </div>
  )
}

export default HomeLeftComponent;
