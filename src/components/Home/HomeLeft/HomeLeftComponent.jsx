import React from 'react';
import {top10tags} from "../../../data/dummydata";

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



      </div>
    </div>
  )
}

export default HomeLeftComponent;
