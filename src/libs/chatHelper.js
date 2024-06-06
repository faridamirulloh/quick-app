import {getDateLong, getHour} from './dateHelper';
import {ChatSenderType} from '../constants/dataEnum';
import {MyID} from '../constants/dummyData';

export const sendChatHelper = (chat, chats) => {
  const date = 'Today ' + getDateLong(new Date());
  const newChat = {
    id: MyID,
    color: '#9B51E0',
    chatId: Math.random(),
    backgroundColor: '#EEDCFF',
    chatType: ChatSenderType.SELF,
    message: chat,
    time: getHour(new Date()),
  };
  let added = false;

  const newChats = {...chats};
  newChats.chatsGroupByRead = [newChats.chatsGroupByRead[0]];

  newChats.chatsGroupByRead = newChats.chatsGroupByRead.map((readGroup) => {
    const newReadGroup = {...readGroup};
    newReadGroup.chatsGroupByDate = newReadGroup.chatsGroupByDate.map((dateGroup, dateIdx) => {
      const newDateGroup = {...dateGroup};

      if (dateIdx === newReadGroup.chatsGroupByDate.length - 1) {
        if (chats.chatsGroupByRead[1]) {
          newDateGroup.chats.push(chats.chatsGroupByRead[1].chatsGroupByDate[0].chats[0]);
        }

        if (date === dateGroup.date) {
          newDateGroup.chats.push(newChat);
          added = true;
        }
      }

      return newDateGroup;
    });

    if (!added) {
      const newGroupByDate = {date, chats: [newChat]};
      newReadGroup.chatsGroupByDate.push(newGroupByDate);
    }

    return newReadGroup;
  });

  newChats.unread = false;

  return newChats;
};

export const deleteChatDummyHelper = (_chatId, chats) => {
  const newChats = {...chats};
  newChats.chatsGroupByRead = newChats.chatsGroupByRead.map((readGroup) => {
    const newReadGroup = {...readGroup};
    newReadGroup.chatsGroupByDate = newReadGroup.chatsGroupByDate.map((dateGroup) => {
      const newDateGroup = {...dateGroup};

      newDateGroup.chats = newDateGroup.chats.filter(({chatId}) => chatId !== _chatId);

      return newDateGroup.chats.length > 0 ? newDateGroup : null;
    });

    newReadGroup.chatsGroupByDate = newReadGroup.chatsGroupByDate.filter((group) => Boolean(group));

    return newReadGroup.chatsGroupByDate.length > 0 ? newReadGroup : null;
  });

  newChats.chatsGroupByRead = newChats.chatsGroupByRead.filter((group) => Boolean(group));

  if (!newChats.chatsGroupByRead[1]) newChats.unread = false;

  return newChats;
};

export const editChatDummyHelper = (data, chats) => {
  const newChats = {...chats};
  newChats.chatsGroupByRead = newChats.chatsGroupByRead.map((readGroup) => {
    const newReadGroup = {...readGroup};
    newReadGroup.chatsGroupByDate = newReadGroup.chatsGroupByDate.map((dateGroup) => {
      const newDateGroup = {...dateGroup};

      newDateGroup.chats = newDateGroup.chats.map((chat) => {
        const newChat = {...chat};

        if (newChat.chatId === data.chatId) {
          newChat.message = data.message;
          newChat.time = getHour(new Date());
        }

        return newChat;
      });

      return newDateGroup;
    });

    return newReadGroup;
  });

  return newChats;
};
