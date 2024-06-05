import {Button, CircularProgress, IconButton, TextField} from '@mui/material';
import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

import ChatCard from './ChatCard';
import ChatSeparator from './ChatSeparator';
import style from './InboxMessageContent.module.scss';
import {IconArrowDown, IconArrowLeft, IconClose} from '../../../../components/icons';
import {MessageType} from '../../../../constants/dataEnum';
import {messageContent} from '../../../../constants/dummyData';
import {onClickQuickButton} from '../../../../stores/businesses/quicksBusiness';

const bannerSupportWaitToConnect = (
  <div className={style.banner}>
    <CircularProgress size={24} />
    <span className={style.bannerText}>{`Please wait while we connect you with one of our team ...`}</span>
  </div>
);

let scrollAnimation;
const scrollStep = 22;

function InboxMessageContent({messageId, onClickBack}) {
  const dispatch = useDispatch();
  const [showNewMessageButton, setShowNewMessageButton] = useState(false);
  const contentRef = useRef();

  const message = messageContent.find(({messageId: id}) => id === messageId);

  let banner;
  if (message.type === MessageType.SUPPORT && message.waitingToConnect) {
    banner = bannerSupportWaitToConnect;
  }

  const scrollToBottom = () => {
    // set maximum scrolling animation duration
    setTimeout(() => {
      if (scrollAnimation) contentRef.current.scrollTo(0, contentRef.current.scrollHeight);
    }, 1000);

    // set scrolling animation
    scrollAnimation = setInterval(() => {
      const {offsetHeight, scrollTop, scrollHeight} = contentRef.current;
      const isScrolledBottom = scrollHeight <= Math.ceil(offsetHeight + scrollTop) + scrollStep;

      if (isScrolledBottom) {
        clearInterval(scrollAnimation);
        scrollAnimation = null;
        setShowNewMessageButton(false);
      } else contentRef.current.scrollTo(0, scrollTop + scrollStep);
    }, 2);
  };

  useEffect(() => {
    scrollToBottom();
    return () => clearInterval(scrollAnimation);
  }, []);

  const handleClickBack = () => {
    onClickBack();
  };

  const handleClickClose = () => {
    dispatch(onClickQuickButton(true));
  };

  const handleScroll = () => {
    const {offsetHeight, scrollTop, scrollHeight} = contentRef.current;
    const isScrolledBottom = scrollHeight <= Math.ceil(offsetHeight + scrollTop) + scrollStep;
    const isNemMessageExist = message.unread;

    setShowNewMessageButton(!isScrolledBottom && isNemMessageExist);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.left}>
          <IconButton aria-label="back" size="small" onClick={handleClickBack}>
            <IconArrowLeft />
          </IconButton>
          <div className={style.headerTitle}>
            <span className={style.title} title={message.title}>
              {message.title}
            </span>
            {message.type === MessageType.GROUP ? (
              <span className={style.subTitle}>{message.participants} participants</span>
            ) : null}
          </div>
        </div>
        <IconButton aria-label="close" size="small" onClick={handleClickClose}>
          <IconClose sx={{fontSize: 16}} />
        </IconButton>
      </div>
      <div ref={contentRef} onScroll={handleScroll} className={style.content}>
        {message.chatsGroupByRead.map((readGroup) => (
          <>
            {!readGroup.read ? <ChatSeparator unread /> : null}
            {readGroup.chatsGroupByDate.map((dateGroup) => (
              <>
                {dateGroup.date ? <ChatSeparator title={dateGroup.date} /> : null}
                {dateGroup.chats.map((chat, idx) => (
                  <ChatCard key={idx} name={chat.id} type={chat.chatType} {...chat} />
                ))}
              </>
            ))}
          </>
        ))}
        {showNewMessageButton ? (
          <Button className={style.newMessageButton} variant="contained" onClick={scrollToBottom}>
            New Message
            <IconArrowDown />
          </Button>
        ) : null}
      </div>

      {banner}
      <div className={style.inputChat}>
        <TextField placeholder="Type a new message" size="small" fullWidth />
        <Button variant="contained" size="large">
          Send
        </Button>
      </div>
    </div>
  );
}

InboxMessageContent.propTypes = {
  messageId: PropTypes.number.isRequired,
  onClickBack: PropTypes.func.isRequired,
};

export default InboxMessageContent;
