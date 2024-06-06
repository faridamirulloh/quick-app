import {Button, CircularProgress, IconButton, TextField} from '@mui/material';
import {isEmpty} from 'lodash';
import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

import ChatCard from './ChatCard';
import ChatSeparator from './ChatSeparator';
import style from './InboxMessageContent.module.scss';
import {IconArrowDown, IconArrowLeft, IconClose} from '../../../../components/icons';
import LoadingContent from '../../../../components/loading/LoadingContent';
import {MessageType} from '../../../../constants/dataEnum';
import {MyID} from '../../../../constants/dummyData';
import {deleteChatDummyHelper, editChatDummyHelper, sendChatHelper} from '../../../../libs/chatHelper';
import {deleteChat, getMessageContent, sendChat, editChat} from '../../../../stores/businesses/messagesBusiness';
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
  const [isLoading, setLoading] = useState(true);
  const [chatsState, setChats] = useState([]);
  const [showNewMessageButton, setShowNewMessageButton] = useState(false);
  const contentRef = useRef();
  const newMessageRef = useRef();

  useEffect(() => {
    const loadMessages = async () => {
      const chats = await getMessageContent(messageId);
      setChats(chats);
      setLoading(false);
    };

    loadMessages();

    return () => clearInterval(scrollAnimation);
  }, [messageId]);

  useEffect(() => {
    if (!isLoading) scrollToBottom();
  }, [isLoading]);

  let banner;
  if (chatsState.type === MessageType.SUPPORT && chatsState.waitingToConnect) {
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

  const handleClickBack = () => {
    onClickBack();
  };

  const handleClickClose = () => {
    dispatch(onClickQuickButton(true));
  };

  const handleScroll = () => {
    const {offsetHeight, scrollTop, scrollHeight} = contentRef.current;
    const isScrolledBottom = scrollHeight <= Math.ceil(offsetHeight + scrollTop) + scrollStep;
    const isNemMessageExist = chatsState.unread;

    setShowNewMessageButton(!isScrolledBottom && isNemMessageExist);
  };

  const handleClickSend = async () => {
    if (!isEmpty(newMessageRef.current.target.value)) {
      sendChat({messageId, id: MyID, message: newMessageRef.current.target.value});
      const newChats = sendChatHelper(newMessageRef.current.target.value, chatsState);
      setChats(newChats);
      newMessageRef.current.target.value = '';
      scrollToBottom();
    }
  };

  const handleDeleteChat = (chatId) => {
    deleteChat(chatId);
    const newChats = deleteChatDummyHelper(chatId, chatsState);
    setChats(newChats);
  };

  const handleEditChat = (data) => {
    editChat(data);
    const newChats = editChatDummyHelper(data, chatsState);
    setChats(newChats);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.left}>
          <IconButton aria-label="back" size="small" onClick={handleClickBack}>
            <IconArrowLeft />
          </IconButton>
          <div className={style.headerTitle}>
            <span className={style.title} title={chatsState.title}>
              {chatsState.title}
            </span>
            {chatsState.type === MessageType.GROUP ? (
              <span className={style.subTitle}>{chatsState.participants} participants</span>
            ) : null}
          </div>
        </div>
        <IconButton aria-label="close" size="small" onClick={handleClickClose}>
          <IconClose sx={{fontSize: 16}} />
        </IconButton>
      </div>
      <div ref={contentRef} onScroll={handleScroll} className={style.content}>
        {isLoading ? (
          <LoadingContent text="Loading Chats ..." />
        ) : (
          <>
            {chatsState.chatsGroupByRead.map((readGroup) => (
              <>
                {!readGroup.read ? <ChatSeparator key={'unread'} unread /> : null}
                {readGroup.chatsGroupByDate.map((dateGroup) => (
                  <>
                    {dateGroup.date ? <ChatSeparator key={dateGroup.date} title={dateGroup.date} /> : null}
                    {dateGroup.chats.map((chat) => (
                      <ChatCard
                        key={chat.chatId}
                        name={chat.id}
                        type={chat.chatType}
                        onDelete={handleDeleteChat}
                        onEditChat={handleEditChat}
                        {...chat}
                      />
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
          </>
        )}
      </div>

      {banner}
      <div className={style.inputChat}>
        <TextField
          ref={newMessageRef}
          placeholder="Type a new message"
          size="small"
          fullWidth
          onBlur={(e) => {
            newMessageRef.current = e;
          }}
        />
        <Button variant="contained" size="large" onClick={handleClickSend}>
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
