import {IconButton} from '@mui/material';
import {isEqual, lowerCase} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import style from './QuickButtonList.module.scss';
import {IconInbox, IconInboxSelected, IconTasks, IconTasksSelected} from '../../components/icons';
import {QuicksItem} from '../../constants/dataEnum';
import {onClickQuickItem} from '../../stores/businesses/quicksBusiness';

function QuickButton({id, icon, selected, hideLabel, index}) {
  const dispatch = useDispatch();

  const label = hideLabel ? null : <span className={style.label}>{id}</span>;

  const handleClick = () => {
    dispatch(onClickQuickItem(id));
  };

  return (
    <div
      id={`quick-button-${id}`}
      className={[style.quickButton, style[`index${index}`], selected ? style.selected : ''].join(' ')}
    >
      {label}
      <IconButton className={[style.button, style[lowerCase(id)]].join(' ')} title={id} onClick={handleClick}>
        {selected ? icon.selected : icon.default}
      </IconButton>
    </div>
  );
}

QuickButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  hideLabel: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

const quicksList = [
  {
    id: QuicksItem.INBOX,
    icon: {
      default: <IconInbox className={style.icon} />,
      selected: <IconInboxSelected className={style.icon} />,
    },
  },
  {
    id: QuicksItem.TASKS,
    icon: {
      default: <IconTasks className={style.icon} />,
      selected: <IconTasksSelected className={style.icon} />,
    },
  },
];

const getIndex = (openContent, idx, selectedIndex) => {
  let index = idx;
  if (openContent && selectedIndex < idx) index -= 1;
  return index;
};

const selector = (state) => ({
  open: state.quicksState.openButton,
  selectedQuick: state.quicksState.selectedQuick,
});

function QuickButtonList() {
  const {open, selectedQuick} = useSelector(selector, isEqual);
  const openContent = Boolean(selectedQuick);
  const selectedQuickIndex = quicksList.findIndex(({id}) => id === selectedQuick);

  return (
    <div id="quick-button-list" className={`${style.container} ${open ? style.show : style.hide}`}>
      {quicksList.map((quick, idx) => (
        <QuickButton
          key={quick.id}
          selected={selectedQuick === quick.id}
          hideLabel={openContent}
          index={getIndex(openContent, idx, selectedQuickIndex)}
          {...quick}
        />
      ))}
    </div>
  );
}

export default QuickButtonList;
