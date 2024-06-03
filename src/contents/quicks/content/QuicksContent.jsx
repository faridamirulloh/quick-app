import React from 'react';
import {useSelector} from 'react-redux';

import QuickContentInbox from './inbox/QuickContentInbox';
import style from './QuicksContent.module.scss';
import {QuicksItem} from '../../../constants/dataEnum';

function QuicksContent() {
  const selectedQuick = useSelector((state) => state.quicksState.selectedQuick);
  const open = Boolean(selectedQuick);

  let content;

  switch (selectedQuick) {
    case QuicksItem.INBOX:
      content = <QuickContentInbox />;
      break;

    default:
      break;
  }

  return <div className={`${style.container} ${open ? style.open : style.close}`}>{content}</div>;
}

export default QuicksContent;
