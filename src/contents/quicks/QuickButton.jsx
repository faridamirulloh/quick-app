import {IconButton} from '@mui/material';
import React from 'react';
import {useDispatch} from 'react-redux';

import style from './QuickButton.module.scss';
import IconLightning from '../../components/icons/Lightning';
import {onClickQuickButton} from '../../stores/businesses/quicksBusiness';

function QuickButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(onClickQuickButton());
  };

  return (
    <div className={style.container}>
      <IconButton id="quick-button" title="Quicks" onClick={handleClick}>
        <IconLightning className={style.icon} />
      </IconButton>
    </div>
  );
}

export default QuickButton;
