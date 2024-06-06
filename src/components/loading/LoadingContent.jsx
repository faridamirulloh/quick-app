import {CircularProgress} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import style from './LoadingContent.module.scss';

function LoadingContent({text = ''}) {
  return (
    <div className={style.container}>
      <CircularProgress size={45} style={{color: '#C4C4C4'}} />
      <span>{text}</span>
    </div>
  );
}

LoadingContent.propTypes = {
  text: PropTypes.string,
};

export default LoadingContent;
