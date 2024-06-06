import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

import Icon from '../../assets/icons/bookmarks.svg?react';

function IconBookmark(props) {
  return <SvgIcon component={Icon} {...props} />;
}

export default IconBookmark;
