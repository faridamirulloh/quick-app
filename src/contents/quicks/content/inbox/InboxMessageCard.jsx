import PropTypes from 'prop-types';
import React from 'react';

import style from './InboxMessageCard.module.scss';
import {IconPerson, IconPersonShadow} from '../../../../components/icons';
import {MessageType} from '../../../../constants/dataEnum';
import {getDateHour} from '../../../../libs/dateHelper';

const groupIcon = (
  <>
    <div className={[style.icon, style.groupIconShadow].join(' ')}>
      <IconPersonShadow fontSize="small" />
    </div>
    <div className={[style.icon, style.groupIcon].join(' ')}>
      <IconPerson fontSize="small" />
    </div>
  </>
);

const supportIcon = (initial) => <div className={[style.icon, style.supportIcon].join(' ')}>{initial}</div>;

function InboxMessageCard({type, title, date, lastMessage = null, unread, openMessage}) {
  let icon;

  switch (type) {
    case MessageType.GROUP:
      icon = groupIcon;
      break;
    case MessageType.DIRECT:
    case MessageType.SUPPORT:
      icon = supportIcon(title.charAt(0));
      break;

    default:
      break;
  }

  const handleClick = () => {
    openMessage();
  };

  return (
    <div className={style.container} role="button" onClick={handleClick} onKeyUp={null} tabIndex={-1}>
      <div className={style.iconContainer}>{icon}</div>
      <div className={style.detail}>
        <div className={style.titleContainer}>
          <span className={style.title}>{title}</span>
          {date ? <span className={style.date}>{getDateHour(date)}</span> : null}
        </div>
        {lastMessage ? (
          <>
            {lastMessage.name ? <div className={style.name}>{lastMessage.name} :</div> : null}
            {lastMessage.firstLine ? <div className={style.firstLine}>{lastMessage.firstLine}</div> : null}
          </>
        ) : null}
      </div>
      {unread ? <div className={style.unread} /> : null}
    </div>
  );
}

InboxMessageCard.propTypes = {
  type: PropTypes.oneOf(Object.values(MessageType)).isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  unread: PropTypes.bool.isRequired,
  lastMessage: PropTypes.object,
  openMessage: PropTypes.func.isRequired,
};

export default InboxMessageCard;
