import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

import Icon from '../../assets/icons/person-active.svg?react';

function IconPerson(props) {
  return <SvgIcon component={Icon} {...props} />;
}

export default IconPerson;
