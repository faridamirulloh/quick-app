import PropTypes from 'prop-types';
import React from 'react';

import style from './ChatSeparator.module.scss';

function ChatSeparator({title = '', unread = false}) {
  return (
    <div className={[style.container, unread ? style.unread : ''].join(' ')}>
      <div className={style.line} />
      <span className={style.separatorTitle}>{unread ? 'New Message' : title}</span>
      <div className={style.line} />
    </div>
  );
}

ChatSeparator.propTypes = {
  title: PropTypes.string,
  unread: PropTypes.bool,
};

export default ChatSeparator;
