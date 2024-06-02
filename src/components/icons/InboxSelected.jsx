import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

import Icon from '../../assets/icons/question-answer-active.svg?react';

function IconInboxSelected(props) {
  return <SvgIcon component={Icon} {...props} />;
}

export default IconInboxSelected;
