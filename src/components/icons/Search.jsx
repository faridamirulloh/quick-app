import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

import SearchIcon from '../../assets/icons/search.svg?react';

function IconSearch(props) {
  return <SvgIcon component={SearchIcon} {...props} />;
}

export default IconSearch;
