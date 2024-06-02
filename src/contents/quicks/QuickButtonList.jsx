import {IconButton} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import {useSelector} from 'react-redux';

import style from './QuickButtonList.module.scss';
import {IconInbox, IconTasks} from '../../components/icons';
import {QuicksItem} from '../../constants/dataEnum';

function QuickButton({id, icon}) {
  return (
    <div id={`quick-button-${id}`} className={`${style.quickButton}`}>
      <span className={style.label}>{id}</span>
      <IconButton className={style.button} title={id}>
        {icon}
      </IconButton>
    </div>
  );
}

QuickButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.node.isRequired,
};

const quicksList = [
  {
    id: QuicksItem.TASKS,
    icon: <IconTasks className={style.icon} />,
  },
  {
    id: QuicksItem.INBOX,
    icon: <IconInbox className={style.icon} />,
  },
];

function QuickButtonList() {
  const open = useSelector((state) => state.quicksState.openButton);

  return (
    <div id="quick-button-list" className={`${style.container} ${open ? style.show : style.hide}`}>
      {quicksList.map((quick) => (
        <QuickButton key={quick.id} {...quick} />
      ))}
    </div>
  );
}

export default QuickButtonList;
