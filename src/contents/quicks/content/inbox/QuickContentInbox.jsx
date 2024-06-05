import React, {useState} from 'react';

import InboxMessageContent from './InboxMessageContent';
import InboxMessagesList from './InboxMessagesList';
import {InboxViewMode} from '../../../../constants/dataEnum';

function QuickContentInbox() {
  const [viewMode, setViemMode] = useState(InboxViewMode.MESSAGES);
  const [openMessageId, setOpenMessageId] = useState();

  const handleOpenMessage = (id) => {
    setOpenMessageId(id);
    setViemMode(InboxViewMode.CHATS);
  };

  const handleClickBack = () => {
    setOpenMessageId();
    setViemMode(InboxViewMode.MESSAGES);
  };

  let content;

  switch (viewMode) {
    case InboxViewMode.MESSAGES:
      content = <InboxMessagesList openMessage={handleOpenMessage} />;
      break;
    case InboxViewMode.CHATS:
      content = <InboxMessageContent messageId={openMessageId} onClickBack={handleClickBack} />;
      break;

    default:
      break;
  }

  return content;
}

export default QuickContentInbox;
