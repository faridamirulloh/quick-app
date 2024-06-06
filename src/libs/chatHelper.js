import {getHour} from './dateHelper';

export const deleteChatHelper = (_chatId, chats) => {
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

  return newChats;
};

export const editChatHelper = (data, chats) => {
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

    newReadGroup.chatsGroupByDate = newReadGroup.chatsGroupByDate.filter((group) => Boolean(group));

    return newReadGroup;
  });

  newChats.chatsGroupByRead = newChats.chatsGroupByRead.filter((group) => Boolean(group));

  return newChats;
};
