import React from 'react';
import {useSelector} from 'react-redux';

import style from './QuicksContent.module.scss';

function QuicksContent() {
  const selectedQuick = useSelector((state) => state.quicksState.selectedQuick);
  const open = Boolean(selectedQuick);

  return (
    <div className={`${style.container} ${open ? style.open : style.close}`}>
      <div />
    </div>
  );
}

export default QuicksContent;
