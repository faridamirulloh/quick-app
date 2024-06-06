import {IconButton, Menu, MenuItem} from '@mui/material';
import PropTypes from 'prop-types';
import React, {useState} from 'react';

import style from './InboxMessageContent.module.scss';
import {IconOption} from '../../../../components/icons';
import TextArea from '../../../../components/textArea/TextArea';
import {ChatSenderType} from '../../../../constants/dataEnum';

function ChatCard({chatId, name, message, time, color, backgroundColor, type, onDelete, onEditChat}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [edit, setEdit] = useState(false);

  const alignRight = type === ChatSenderType.SELF;

  const handleClickOption = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl();
  };

  const handleEdit = () => {
    handleClose();
    setTimeout(() => setEdit(true), 20);
  };

  const handleDelete = () => {
    handleClose();
    onDelete(chatId);
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
        {type === ChatSenderType.SELF ? (
          <>
            <MenuItem onClick={handleEdit} sx={{color: '#2F80ED', width: 126, borderBottom: '1px solid #BDBDBD'}}>
              Edit
            </MenuItem>
            <MenuItem onClick={handleDelete} sx={{color: '#EB5757', width: 126}}>
              Delete
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={null} sx={{color: '#2F80ED', width: 126, borderBottom: '1px solid #BDBDBD'}}>
              Share
            </MenuItem>
            <MenuItem onClick={null} sx={{color: '#2F80ED', width: 126}}>
              Reply
            </MenuItem>
          </>
        )}
      </Menu>
    </div>
  );

  const handleBlurEditChat = () => {
    setEdit(false);
  };

  const handleKeyDownEditMessage = (e) => {
    if (!e.shiftKey && e.key === 'Enter') {
      handleBlurEditChat();
      onEditChat({chatId, message: e.target.value});
    }
  };

  const messageContent = (
    <div className={style.messageContent} style={{backgroundColor}}>
      {edit ? (
        <TextArea
          autoFocus
          defaultValue={message}
          placeHolder="Edit message"
          style={{width: 518}}
          onKeyDown={handleKeyDownEditMessage}
          onBlur={handleBlurEditChat}
        />
      ) : (
        <>
          <span>{message}</span>
          <span className={style.time}>{time}</span>
        </>
      )}
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
  chatId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEditChat: PropTypes.func.isRequired,
};

export default ChatCard;
