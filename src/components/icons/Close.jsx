import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

import Icon from '../../assets/icons/close.svg?react';

function IconClose(props) {
  return <SvgIcon component={Icon} {...props} />;
}

export default IconClose;
