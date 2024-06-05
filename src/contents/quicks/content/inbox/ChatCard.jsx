import {IconButton, Menu, MenuItem} from '@mui/material';
import PropTypes from 'prop-types';
import React, {useState} from 'react';

import style from './InboxMessageContent.module.scss';
import {IconOption} from '../../../../components/icons';
import {ChatSenderType} from '../../../../constants/dataEnum';

function ChatCard({name, message, time, color, backgroundColor, type}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const alignRight = type === ChatSenderType.SELF;

  const handleClickOption = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl();
  };

  const option = (
    <div>
      <IconButton aria-label="back" size="small" onClick={handleClickOption}>
        <IconOption />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} sx={{color: '#2F80ED', width: 126, borderBottom: '1px solid #BDBDBD'}}>
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{color: '#EB5757', width: 126}}>
          Delete
        </MenuItem>
      </Menu>
    </div>
  );

  const messageContent = (
    <div className={style.messageContent} style={{backgroundColor}}>
      <span>{message}</span>
      <span className={style.time}>{time}</span>
    </div>
  );

  return (
    <div className={[style.chatCard, alignRight ? style.right : ''].join(' ')}>
      <span className={style.name} style={{color}}>
        {name}
      </span>
      <div className={style.messageContainer}>
        {alignRight ? (
          <>
            {option}
            {messageContent}
          </>
        ) : (
          <>
            {messageContent}
            {option}
          </>
        )}
      </div>
    </div>
  );
}

ChatCard.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ChatCard;
