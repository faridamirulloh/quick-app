import React from 'react';

import QuicksContent from './content/QuicksContent';
import QuickButton from './QuickButton';
import QuickButtonList from './QuickButtonList';
import style from './Quicks.module.scss';

function Quicks() {
  return (
    <div className={style.container}>
      <QuickButton />
      <QuickButtonList />
      <QuicksContent />
    </div>
  );
}

export default Quicks;
