import {InputAdornment, TextField} from '@mui/material';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

import InboxMessageCard from './InboxMessageCard';
import style from './InboxMessagesList.module.scss';
import {IconSearchBlack} from '../../../../components/icons';
import LoadingContent from '../../../../components/loading/LoadingContent';
import {messagesList} from '../../../../constants/dummyData';

function InboxMessagesList({openMessage}) {
  const [searchByName, setSearchByName] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  const messagesFiltered = messagesList.filter(({title}) => title?.toLowerCase().includes(searchByName.toLowerCase()));

  return (
    <div id="inbox-messages-list" className={style.container}>
      <TextField
        id="inbox-messages-list-search"
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

      {isLoading ? (
        <LoadingContent text="Loading Chats ..." />
      ) : (
        <div className={style.messageList}>
          {messagesFiltered.map((message) => (
            <InboxMessageCard key={message.id} {...message} openMessage={() => openMessage(message.id)} />
          ))}
        </div>
      )}
    </div>
  );
}

InboxMessagesList.propTypes = {
  openMessage: PropTypes.func.isRequired,
};

export default InboxMessagesList;
