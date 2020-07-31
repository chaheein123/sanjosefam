import React from 'react';

import "./HomeCenterPostComponent.scss";

const HomeCenterPostComponent = (props) => {
  
  const { id, createdBy, ownImg, title, createdAt, tags, content } = props;
  return (
    <div className="HomeCenterPostComponent">
      
      <div className="mainpost-title">
        <h5 className="mainpost-title-header">{title}</h5>
      </div>

      <div className="mainpost-profile">
        <img src={ownImg} alt={createdBy} width="34" height="34" style={{borderRadius: "4px"}}/>
        <div className="mainpost-profile-header">
          <p>fefefef</p>
          <p>{createdAt}</p>
        </div>
      </div>

      <div>
        {content}
      </div>





      
    </div>
  )
}

export default HomeCenterPostComponent;