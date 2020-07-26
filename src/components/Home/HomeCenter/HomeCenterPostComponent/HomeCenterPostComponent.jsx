import React from 'react';

import "./HomeCenterPostComponent.scss";

const HomeCenterPostComponent = (props) => {
  
  const { id, createdBy, ownImg, title, createdAt, tags, content } = props;
  return (
    <div className="HomeCenterPostComponent">
      Post Component


      {/* {id}
      {createdBy}
      {ownImg} */}

      
    </div>
  )
}

export default HomeCenterPostComponent;