import {IconButton} from '@mui/material';
import {isEqual} from 'lodash';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import style from './QuickButton.module.scss';
import IconLightning from '../../components/icons/Lightning';
import {onClickQuickButton, onClickQuickItem} from '../../stores/businesses/quicksBusiness';

const selector = (state) => Boolean(state.quicksState.selectedQuick);

function QuickButton() {
  const dispatch = useDispatch();
  const openContent = useSelector(selector, isEqual);

  const title = openContent ? 'Close Quicks' : 'Quicks';
  const icon = openContent ? null : <IconLightning className={style.icon} />;

  const handleClick = () => {
    if (openContent) dispatch(onClickQuickItem());
    else dispatch(onClickQuickButton());
  };

  return (
    <div className={[style.container, openContent ? style.shadow : ''].join(' ')}>
      <IconButton id="quick-button" title={title} onClick={handleClick}>
        {icon}
      </IconButton>
    </div>
  );
}

export default QuickButton;
