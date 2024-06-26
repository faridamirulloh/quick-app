import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

import Icon from '../../assets/icons/search.svg?react';

function IconSearch(props) {
  return <SvgIcon component={Icon} {...props} />;
}

export default IconSearch;
