import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

import Icon from '../../assets/icons/question-answer.svg?react';

function IconInbox(props) {
  return <SvgIcon component={Icon} {...props} />;
}

export default IconInbox;
