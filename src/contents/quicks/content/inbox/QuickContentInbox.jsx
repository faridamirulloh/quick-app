import React, {useState} from 'react';

import InboxMessageContent from './InboxMessageContent';
import InboxMessagesList from './InboxMessagesList';
import {InboxViewMode} from '../../../../constants/dataEnum';

function QuickContentInbox() {
  const [viewMode, setViemMode] = useState(InboxViewMode.MESSAGES_LIST);
  const [openMessageId, setOpenMessageId] = useState();

  const handleOpenMessage = (id) => {
    setOpenMessageId(id);
    setViemMode(InboxViewMode.MESSAGE_CONTENT);
  };

  const handleClickBack = () => {
    setOpenMessageId();
    setViemMode(InboxViewMode.MESSAGES_LIST);
  };

  let content;

  switch (viewMode) {
    case InboxViewMode.MESSAGES_LIST:
      content = <InboxMessagesList openMessage={handleOpenMessage} />;
      break;
    case InboxViewMode.MESSAGE_CONTENT:
      content = <InboxMessageContent messageId={openMessageId} onClickBack={handleClickBack} />;
      break;

    default:
      break;
  }

  return content;
}

export default QuickContentInbox;
