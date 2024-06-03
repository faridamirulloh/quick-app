import {IconButton} from '@mui/material';
import {isEqual} from 'lodash';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import style from './QuickButton.module.scss';
import IconLightning from '../../components/icons/Lightning';
import {onClickQuickButton} from '../../stores/businesses/quicksBusiness';

const selector = (state) => Boolean(state.quicksState.selectedQuick);

function QuickButton() {
  const dispatch = useDispatch();
  const openContent = useSelector(selector, isEqual);

  const title = openContent ? 'Close Quicks' : 'Quicks';

  const handleClick = () => {
    dispatch(onClickQuickButton(openContent));
  };

  return (
    <div className={[style.container, openContent ? style.shadow : ''].join(' ')}>
      <IconButton id="quick-button" title={title} onClick={handleClick}>
        <IconLightning className={style.icon} />
      </IconButton>
    </div>
  );
}

export default QuickButton;
