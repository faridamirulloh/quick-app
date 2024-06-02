import React from 'react';
import {useSelector} from 'react-redux';

// import QuicksContent from './content/QuicksContent';
import QuickButton from './QuickButton';
import QuickButtonList from './QuickButtonList';
import style from './Quicks.module.scss';

function Quicks() {
  // eslint-disable-next-line no-unused-vars
  const openButton = useSelector((state) => state.quicksState.openButton);

  return (
    <div className={style.container}>
      <QuickButton />
      <QuickButtonList />
      {/* <QuicksContent /> */}
    </div>
  );
}

export default Quicks;
