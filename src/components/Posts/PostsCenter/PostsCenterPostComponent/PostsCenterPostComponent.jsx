import React from 'react';

import "./PostsCenterPostComponent.scss";

const PostsCenterPostComponent = (props) => {
  
  const { id, createdBy, ownImg, title, createdAt, tags, content } = props;
  return (
    <div className="PostsCenterPostComponent">
      
      <div className="mainpost-title">
        <h5 className="mainpost-title-header">{title}</h5>
      </div>

      <div className="mainpost-profile">
        <img src={ownImg} alt={createdBy} width="34" height="34" style={{borderRadius: "4px"}}/>
        <div className="mainpost-profile-header">
          <p className="mainpost-profile-name mainpost-profile-header-p">fefefef</p>
          <p className="mainpost-profile-date mainpost-profile-header-p">{createdAt}</p>
        </div>
      </div>

      <div className="mainpost-content">
        {content}
      </div>





      
    </div>
  )
}

export default PostsCenterPostComponent;