import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip';

const renderTooltip1 = (props) => (
  <Tooltip {...props}>
    3 ~ 14자 입력 가능합니다.
  </Tooltip>
);

const renderTooltip2 = (props) => (
  <Tooltip {...props}>
    저희는 유저의 이메일주소를 노출하지 않습니다.
  </Tooltip>
);

const renderTooltip3 = (props) => (
  <Tooltip {...props}>
    6 ~ 32자 입력 가능합니다.
  </Tooltip>
);

let toolTips = [renderTooltip1, renderTooltip2, renderTooltip3];

export default toolTips;