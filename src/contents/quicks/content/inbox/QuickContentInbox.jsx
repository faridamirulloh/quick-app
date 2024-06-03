import {InputAdornment, TextField} from '@mui/material';
import React, {useState} from 'react';

import InboxMessageCard from './InboxMessageCard';
import style from './QuickContentInbox.module.scss';
import {IconSearchBlack} from '../../../../components/icons';
import {MessageType} from '../../../../constants/dataEnum';

const messagesList = [
  {
    id: 1,
    title: '109220-Naturalization',
    date: new Date(2021, 1, 1, 19, 10, 25),
    type: MessageType.GROUP,
    lastMessage: {
      name: 'Cameron Phillips',
      firstLine: 'Please check this out!',
    },
    unread: true,
  },
  {
    id: 2,
    title: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
    date: new Date(2022, 2, 6, 10, 45, 25),
    type: MessageType.GROUP,
    lastMessage: {
      name: 'Ellen',
      firstLine: 'Hey, please read.',
    },
    unread: false,
  },
  {
    id: 3,
    title: '8405-Diana SALAZAR MUNGUIA',
    date: new Date(2021, 1, 6, 12, 19, 0),
    type: MessageType.GROUP,
    lastMessage: {
      name: 'Cameron Phillips',
      firstLine: `I understand your initial concerns, and that's very valid, Elizabeth. But you can rest assured that we have thoroughly addressed these issues and implemented solutions to ensure everything runs smoothly.`,
    },
    unread: false,
  },
  {
    id: 4,
    title: 'FastVisa Support',
    date: new Date(2021, 1, 6, 12, 19, 0),
    type: MessageType.SUPPORT,
    lastMessage: {
      name: '',
      firstLine: 'Hey there! Welcome to your inbox.',
    },
    unread: false,
  },
];

function QuickContentInbox() {
  const [searchByName, setSearchByName] = useState('');

  const messagesFiltered = messagesList.filter(({title}) => title?.toLowerCase().includes(searchByName.toLowerCase()));

  return (
    <div id="quick-content-inbox" className={style.container}>
      <TextField
        id="quick-content-inbox-search"
        placeholder="Search"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconSearchBlack fontSize="small" />
            </InputAdornment>
          ),
        }}
        onChange={({target}) => setSearchByName(target.value)}
      />

      <div className={style.messageList}>
        {messagesFiltered.map((message) => (
          <InboxMessageCard key={message.id} {...message} />
        ))}
      </div>
    </div>
  );
}

export default QuickContentInbox;
